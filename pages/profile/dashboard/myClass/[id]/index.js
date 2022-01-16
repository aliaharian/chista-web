import React from "react";
import { useSelector } from "react-redux";
import ProfileLayout from "../../../../../src/components/Profile/ProfileLayout";
import { wrapper } from "../../../../../redux/store";
import ClassDetails from "../../../../../src/components/Profile/componnets/Content/MyClass/ClassDetails";
import { loadClassDetails } from "../../../../../redux/adviserDashboard";

const MyClassPage = ({ page, isMobile }) => {
  const data = useSelector((state) => state.adviserDashboard.classDetails);
  return (
    <ProfileLayout page={page} isMobile={isMobile} title="جزئیات کلاس">
      <ClassDetails data={data} />
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

    if (params.id && params.id !=='null') {
        try{
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/group/view?id=${params.id}`, {
                withCredentials: true,
                headers: { cookie: req.headers.cookie },
            });

            const data = await response.json();

            store.dispatch(loadClassDetails(data));

        }catch (e) {
        }
    }

    return {
      props: {
        page: "myClass",
      }, // will be passed to the page component as props
    };
  }
);

export default MyClassPage;
