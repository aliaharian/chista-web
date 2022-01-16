import React from "react";
import ProfileLayout from "../../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../../redux/store";
import InsertClass from "../../../../../src/components/Profile/componnets/Content/MyClass/InsertClass";

const MyClassPage = ({ page, isMobile }) => {
  return (
    <ProfileLayout page={page} isMobile={isMobile} title="ایجاد کلاس">
      <InsertClass />
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

    return {
      props: {
        page: "myClass",
      }, // will be passed to the page component as props
    };
  }
);

export default MyClassPage;
