import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../redux/store";
import RegisterToAdviser from "../../../src/components/Profile/componnets/Content/RegisterToAdviser/RegisterToAdviser";

const RegisterPage = ({ page, isMobile }) => {
  return (
    <ProfileLayout page={page} isMobile={isMobile} title="ثبت نام استاد">
      <RegisterToAdviser />
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

    return {
      props: {
        page,
      }, // will be passed to the page component as props
    };
  }
);

export default RegisterPage;
