import React from "react";
import { useSelector } from "react-redux";
import ProfileLayout from "../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../redux/store";
import { getClassesList } from "../../../../redux/adviserDashboard";
import MyClass from "../../../../src/components/Profile/componnets/Content/MyClass/MyClass";

const MyClassPage = ({ page, isMobile, checkOwner }) => {
    const myClass = useSelector((state) => state.adviserDashboard.myClass);
    return (
        <ProfileLayout page={page} isMobile={isMobile} title="کلاس های من">
            <MyClass myClass={myClass} checkOwner={checkOwner} />
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

        const data = await fetch(`${process.env.REACT_APP_BASE_URL}/group/search?max=12`, {
            withCredentials: true,
            headers: { cookie: req.headers.cookie },
        });

        let classes = await data.json();
        classes.empty = classes.result.length === 0

        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/group/checkOwner`, {
            method: "POST",
            withCredentials: true,
            headers: { cookie: req.headers.cookie },
        });
        const checkOwner = await response.json();

        store.dispatch(getClassesList(true, classes));

        const arrayPath = req.url.split("/");
        const page = arrayPath[arrayPath.length - 1].replace(".json", "");

        return {
            props: {
                page,
                checkOwner,
            }, // will be passed to the page component as props
        };
    }
);

export default MyClassPage;