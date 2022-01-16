import React from "react";
import ProfileLayout from "../../../../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../../../../redux/store";
import UserDetails from "../../../../../../../src/components/Profile/componnets/Content/Contacts/contactDetail";
import { getContactDetail } from "../../../../../../../redux/contacts";

const ClassUserPage = ({ page, isMobile, id, groupId, userInfo , classData }) => {
    return (
        <ProfileLayout page={page} isMobile={isMobile} title="جزئیات کاربر">
            <UserDetails
                data={classData}
                contact={false}
                id={id}
                groupId={groupId}
                userInfoProp={userInfo}
            />
        </ProfileLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, query, params }) => {
        const { user } = store.getState();
        if (!user.user?.username) {
            res.setHeader("location", "/");
            res.statusCode = 302;
            res.end();
            return;
        }
        let userInfo;
        let classData;
        if (params.id && params.id !== 'null') {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/member/view?id=${params.userId}&groupId=${params.id}`, {
                    withCredentials: true,
                    headers: { cookie: req.headers.cookie },
                });
                const data = await response.json();

                userInfo = data;
                store.dispatch(getContactDetail(data));


                const classResponse = await fetch(`${process.env.REACT_APP_BASE_URL}/group/view?id=${params.id}`, {
                    withCredentials: true,
                    headers: { cookie: req.headers.cookie },
                });

                classData = await classResponse.json();


            } catch (e) {
            }
        }

        return {
            props: {
                page: "myClass",
                id: params.userId,
                groupId: params.id,
                userInfo: userInfo,
                classData:classData
            }, // will be passed to the page component as props
        };
    }
);

export default ClassUserPage;
