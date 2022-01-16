import React from "react";
import ProfileLayout from "../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../redux/store";
import axios from 'axios'
import { getActivityAnswersByExaminee, getActivityDetails, getActivityExaminees } from "../../../../redux/activity";
import ActivityDetail from "../../../../src/components/Profile/componnets/Content/UserActivities/ActivityDetail/ActivityDetail";

const UserActivityDetail = ({ id, activity, examinee, descriptives, activityAnswers, startTime }) => {
    return (
        <ProfileLayout page={'userActivity'} title={``}>
            <ActivityDetail
                id={id}
                activityProp={activity}
                examineeProp={examinee}
                descriptives={descriptives}
                activityAnswersProp={activityAnswers}
                startTimeProp={startTime}
            />
        </ProfileLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, query }) => {
        const { user } = store.getState();
        if (!user.user?.username) {
            res.setHeader("location", "/?doLogin=true&referrer=/profile/dashboard/activity/"+query.id);
            res.statusCode = 302;
            res.end();
            return;
        }

        let now = new Date() * 1000 / 1000

        try {
            const activity = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activities/byPermission/${query.id}?userPhone=${user.user?.username}`, {
                headers: {
                    Cookie: req.headers.cookie,
                },
            });
          

            if (activity.data.callerRole !== 'EXAMINEE') {
                if (activity.data.callerRole) {
                    res.setHeader("location", "/profile/dashboard/ostad/activity/" + query.id);
                    res.statusCode = 302;
                    res.end();
                    return;
                } else {
                    res.setHeader("location", "/403");
                    res.statusCode = 302;
                    res.end();
                    return;
                }
            }

            if (activity.data.startTime > now) {
                res.setHeader("location", "/403");
                res.statusCode = 302;
                res.end();
                return;
            }
            
            const activityQuestions = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activityQuestions/withAnswerInfo/${query.id}`, {
                headers: {
                    Cookie: req.headers.cookie,
                },

            });

            store.dispatch(getActivityDetails(true, activity.data.id, { ...activity.data, questions: activityQuestions.data }));

            const examinees = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/page`, {
                "filter": "activityId=" + query.id,
                "pageSize": 10000
            }, {
                headers: {
                    Cookie: req.headers.cookie,
                },
            });
            store.dispatch(getActivityExaminees(true, activity.data.id, examinees.data.content));
            let examinee = {}
            if (!examinees.data.content.find(x => x.memberInfo.phone == user.user.username)) {
                res.setHeader("location", "/");
                res.statusCode = 302;
                res.end();
                return;
            } else {
                examinee = (activity.data.startTime <= now && activity.data.endTime >= now && activity.data.active && !activity.data.draft) ? await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/start/${examinees.data.content.find(x => x.memberInfo.phone == user.user.username).id}`, {
                }, {
                    headers: {
                        Cookie: req.headers.cookie,
                    },
                }) : {};
            }


            const activityAnswers = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityAnswers/findAllByExaminee`, {
                "b": { "examineeId": examinees.data.content.find(x => x.memberInfo.phone == user.user.username).id }
            }, {
                headers: {
                    Cookie: req.headers.cookie,
                },
            })
            store.dispatch(getActivityAnswersByExaminee(true, examinees.data.content.find(x => x.memberInfo.phone == user.user.username).id, activityAnswers.data));

            const descriptives = activity.data.descriptiveId ? await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/descriptives/${activity.data.descriptiveId}`, {
                headers: {
                    Cookie: req.headers.cookie,
                },
            }) : []

            return {
                props: {
                    activity: { ...activity.data, questions: activityQuestions.data },
                    id: query.id,
                    examinee: (activity.data.startTime <= now && activity.data.endTime >= now && activity.data.active && !activity.data.draft) ? examinee.data : examinees.data.content.find(x => x.memberInfo.phone == user.user.username),
                    startTime: (activity.data.startTime <= now && activity.data.endTime >= now && activity.data.active && !activity.data.draft) ? examinee.data.startTime : null,
                    descriptives: activity.data.descriptiveId ? descriptives.data.parts : descriptives,
                    activityAnswers: activityAnswers.data,
                }, // will be passed to the page component as props

            };
        }
        catch (e) {
            res.setHeader("location", "/403");
            res.statusCode = 302;
            res.end();
            return;
        }

    }
);

export default UserActivityDetail;
