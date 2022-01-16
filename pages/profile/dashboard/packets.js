import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../redux/store";
import Packet from "../../../src/components/Profile/componnets/Content/Packets/Packets";
import { getActivityPup, getPid, getPup } from "../../../redux/packets";
import axios from 'axios'

const PacketsPage = ({ page, isMobile }) => {

    return (
        <ProfileLayout page={'packets'} isMobile={isMobile} title="بسته ها">
            <Packet />
        </ProfileLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res }) => {

        const { user } = store.getState();
        if (!user.user?.username) {
            res.setHeader("location", "/");
            res.statusCode = 302;
            res.end();
            return;
        }

        const arrayPath = req.url.split("/");
        const page = arrayPath[arrayPath.length - 1].replace(".json", "");

        const responese = await fetch(
            `${process.env.REACT_APP_BASE_URL}/pup/all`,
            {
                withCredentials: true,
                headers: { cookie: req.headers.cookie },
            }
        );
        const data = await responese.json();

        store.dispatch(getPup(true, data));

        const response3 = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityPacketUserPrices/page`, {
            pageSize: 1000,
        }, {
            headers: {
                Cookie: req.headers.cookie,
            },
        });

        store.dispatch(getActivityPup(true, response3.data.content));

        const response2 = await fetch(
            `${process.env.REACT_APP_BASE_URL}/pid/all`,
            {
                withCredentials: true,
                headers: { cookie: req.headers.cookie },
            }
        );
        const data2 = await response2.json();

        store.dispatch(getPid(true, data2));

        return {
            props: {
                page,
            },
        };
    }
);

export default PacketsPage;
