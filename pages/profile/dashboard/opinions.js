import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../redux/store";
import { getOpinionsList } from "../../../redux/adviserDashboard";
import { useSelector } from "react-redux";
import Opinions from "../../../src/components/Profile/componnets/Content/Opinions/Opinions";
import { LOAD_ADVISER_SUCCESS } from "../../../redux/user";

const OpinionsPage = ({ page, isMobile }) => {
  const opinions = useSelector((state) => state.adviserDashboard.opinions);

  return (
    <ProfileLayout page={page} isMobile={isMobile} title="دیدگاه ها">
      <Opinions opinions={opinions} />
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

    const resAdviser = await fetch(`${process.env.REACT_APP_BASE_URL}/advisor/profile`, {
      withCredentials: true,
      headers: { cookie: req.headers.cookie },
    });
    const dataAdviser = await resAdviser.json();
    store.dispatch({
      type: LOAD_ADVISER_SUCCESS,
      payload: { adviser: dataAdviser },
    });

    const respones = await fetch(
      `${process.env.REACT_APP_BASE_URL}/comment/search?max=10&advisorId=${dataAdviser.id}`,
      {
        withCredentials: true,
        headers: { cookie: req.headers.cookie },
      }
    );
    const data = await respones.json();
    store.dispatch(getOpinionsList(true, data));

    const arrayPath = req.url.split("/");
    const page = arrayPath[arrayPath.length - 1].replace(".json", "");

    return {
      props: {
        page,
      }, // will be passed to the page component as props
    };
  }
);

export default OpinionsPage;
