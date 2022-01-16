import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import Favorite from "../../../src/components/Profile/componnets/Content/Favorites/Favorites";
import { wrapper } from "../../../redux/store";

export default function Dashboard({ page, isMobile }) {
  return (
    <ProfileLayout page={page} isMobile={isMobile} title="علاقه مندی ها">
      {isMobile ? (
        <Favorite display="mobile" />
      ) : (
        <Favorite display="desktop" />
      )}
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
