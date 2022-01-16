import React from "react";
import ProfileLayout from "../../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../../redux/store";
import axios from 'axios'
import ActivityDetail from "../../../../../src/components/Profile/componnets/Content/Activities/ActivityDetail/ActivityDetail";
import { getActivityDetails, getActivityExaminees } from "../../../../../redux/activity";

const OstadActivityDetail = ({ id, activity, classUsers, examinees, descriptives, allDescriptives }) => {
    return (
        <ProfileLayout page={'ostadActivity'} title={``}>
            <ActivityDetail
                id={id}
                activityProp={activity}
                examineesProp={examinees}
                classUsers={classUsers}
                descriptives={descriptives}
                allDescriptives={allDescriptives}
            />
        </ProfileLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, query }) => {
        const { user } = store.getState();
        if (!user.user?.username) {
            res.setHeader("location", "/");
            res.statusCode = 302;
            res.end();
            return;
        }
        if (!user?.userDetail?.teacher && !user?.userDetail?.groupOwner) {
            res.setHeader("location", "/");
            res.statusCode = 302;
            res.end();
            return;
        }

        try {
            if (query.id != 'null') {
               
                const activity = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activities/byPermission/${query.id}?userPhone=${user.user?.username}`, {
                    headers: {
                        Cookie: req.headers.cookie,
                    },
                });

                if (activity.data.callerRole === 'EXAMINEE') {
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

                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/member/search?groupId=${activity.data.classInfo.id}`, {
                    withCredentials: true,
                    headers: {
                        Cookie: req.headers.cookie,
                    },
                });
                const classUsers = await response.json();

                const allDescriptives = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/descriptives/page`, {
                    "pageSize": 10000
                }, {
                    headers: {
                        Cookie: req.headers.cookie,
                    },
                })

                const descriptives = activity.data.descriptiveId ? await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/descriptives/${activity.data.descriptiveId}`, {
                    headers: {
                        Cookie: req.headers.cookie,
                    },
                }) : []

                return {
                    props: {
                        activity: { ...activity.data, questions: activityQuestions.data },
                        id: query.id,
                        classUsers: classUsers,
                        examinees: examinees.data.content,
                        descriptives: activity.data.descriptiveId ? descriptives.data.parts : descriptives,
                        allDescriptives: allDescriptives.data.content
                    }, // will be passed to the page component as props
                };
            }
        } catch (e) {
            res.setHeader("location", "/403");
            res.statusCode = 302;
            res.end();
            return;
        }
    }
);

export default OstadActivityDetail;