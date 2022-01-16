import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../redux/store";
import Contacts from "../../../src/components/Profile/componnets/Content/Contacts/Contacts";

export default function Dashboard({ page, isMobile }) {
  return (
    <ProfileLayout page={page} isMobile={isMobile} title="مخاطبین">
        <Contacts />
    </ProfileLayout>
  );
}

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
