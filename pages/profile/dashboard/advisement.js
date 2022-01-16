import React from "react";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import { getAdvisementList } from "../../../redux/adviserDashboard/Actions";
import { wrapper } from "../../../redux/store";
import { useSelector } from "react-redux";
import AdvisementDesktop from "../../../src/components/Profile/componnets/Content/Advisement/AdvisementDesktop";
import AdvisementMobile from "../../../src/components/Profile/componnets/Content/Advisement/AdvisementMobile";

const Advisement = ({ page, isMobile }) => {
  const advisement = useSelector((state) => state.adviserDashboard.advisement);

  return (
    <ProfileLayout page={page} isMobile={isMobile} title="تماس ها">
      {isMobile ? (
        <AdvisementMobile advisement={advisement} />
      ) : (
        <AdvisementDesktop advisement={advisement} />
      )}
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

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/advisement/search?max=15`, {
      withCredentials: true,
      headers: { cookie: req.headers.cookie },
    });
    const data = await response.json();

    store.dispatch(getAdvisementList(true, data));

    const arrayPath = req.url.split("/");
    const page = arrayPath[arrayPath.length - 1].replace(".json", "");

    return {
      props: {
        page,
      }, // will be passed to the page component as props
    };
  }
);

export default Advisement;
