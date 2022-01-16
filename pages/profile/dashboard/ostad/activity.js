import React from "react";
import ProfileLayout from "../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../redux/store";
import { getOstadActivityList } from "../../../../redux/activity";
import axios from 'axios'
import Activities from "../../../../src/components/Profile/componnets/Content/Activities/Activities";

const OstadActivities = ({ isMobile, activities }) => {
    return (
        <ProfileLayout page={'ostadActivity'} isMobile={isMobile} title="فعالیت های من">
            <Activities activitiesProp={activities} />
        </ProfileLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res }) => {
        const { user, contacts } = store.getState();
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

        const data = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activities/ctActivities?userPhone=${user.user?.username}`, {
            b: {
                userPhone: user.user?.username
            },
            pageSize: 10
        }, {
            headers: {
                Cookie: req.headers.cookie,
            },
        });

        store.dispatch(getOstadActivityList(true, user.user?.username, data.data));

        const arrayPath = req.url.split("/");
        const page = arrayPath[arrayPath.length - 1].replace(".json", "");

        return {
            props: {
                page,
                activities: data.data
            }, // will be passed to the page component as props
        };
    }
);

export default OstadActivities;
