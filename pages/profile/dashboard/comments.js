import React from "react";
import { wrapper } from "../../../redux/store";
import ProfileLayout from "../../../src/components/Profile/ProfileLayout";
import Comments from "../../../src/components/Profile/componnets/Content/Comments/Comments";
import { getCommentsList } from "../../../redux/adviserDashboard";
import { useSelector } from "react-redux";

const CommentsPage = ({ page, isMobile }) => {
  const comments = useSelector((state) => state.adviserDashboard.comments);

  return (
    <ProfileLayout page={page} isMobile={isMobile} title="نظرات">
      <Comments comments={comments} />
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
    const respones = await fetch(
      `${process.env.REACT_APP_BASE_URL}/comment/search?max=10&username=${user.user.username}`,
      {
        withCredentials: true,
        headers: { cookie: req.headers.cookie },
      }
    );
    const data = await respones.json();

    store.dispatch(getCommentsList(true, data));

    const arrayPath = req.url.split("/");
    const page = arrayPath[arrayPath.length - 1].replace(".json", "");

    return {
      props: {
        page,
      }, // will be passed to the page component as props
    };
  }
);

export default CommentsPage;