import React from "react";
import ProfileLayout from "../../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../../redux/store";
import UserDetails from "../../../../../src/components/Profile/componnets/Content/Contacts/contactDetail";
import { getContactDetail } from "../../../../../redux/contacts";

const UserPage = ({ page, isMobile, id, userInfo }) => {
    return (
        <ProfileLayout page={page} isMobile={isMobile} title="جزئیات کاربر">
            <UserDetails
                contact={true}
                id={id}
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
        let data
        if (params.id && params.id !== 'null') {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_URL}/contact/view?chatUserId=${params.id}`, {
                    credentials: "include",
                    headers: { cookie: req.headers.cookie },
                });

                data = await response.json();

                if (!data.chatUserId) {
                    res.setHeader("location", "/404");
                    res.statusCode = 302;
                    res.end();
                    return;
                }
                store.dispatch(getContactDetail(data));
            } catch (e) {
            }
        }

        return {
            props: {
                page: "contactDetail",
                id: params.id,
                userInfo: data
            }, // will be passed to the page component as props
        };
    }
);

export default UserPage;