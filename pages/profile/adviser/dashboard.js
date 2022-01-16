import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import BaseInfo from "../../../src/components/Profile/componnets/BaseInfo/BaseInfo";
import { wrapper } from "../../../redux/store";
import { LOAD_ADVISER_SUCCESS } from "../../../redux/user";

export default function Dashboard() {
  return (
    <ProfileLayout page={'profile'}>
      <BaseInfo />

    </ProfileLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res }) => {
    const { user } = store.getState();
    if (!user.user.username) {
      res.setHeader("location", "/");
      res.statusCode = 302;
      res.end();
      return;
    }
    if (user.user.roleTypeId === 2861 && user.user.inCartable === false) {
      const resprofile = await fetch(`${process.env.REACT_APP_BASE_URL}/advisor/profile`, {
        withCredentials: true,
        headers: { cookie: req.headers.cookie },
      });
      const dataprofile = await resprofile.json();
      store.dispatch({
        type: LOAD_ADVISER_SUCCESS,
        payload: { adviser: dataprofile },
      });
    }
  }
);
