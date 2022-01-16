import React from "react";
import ProfileLayout from "../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../redux/store";
import { LOAD_ADVISER_SUCCESS } from "../../redux/user";
import UserDashboard from "../../src/components/Profile/componnets/Dashboard/Dashboard";
import axios from 'axios'

export default function Dashboard({activityStat}) {
  return (
    <ProfileLayout page={'dashboard'}>
      <UserDashboard activityStat={activityStat}/>
    </ProfileLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, res }) => {
    const { user } = store.getState();
    if (user.user === null || !user.user.username) {
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

    const activityStat = await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activities/profile`, {
      headers: {
        Cookie: req.headers.cookie,
      },
    })

    return {
      props: {
        activityStat: activityStat.data
      }, // will be passed to the page component as props

    };
  }
);
