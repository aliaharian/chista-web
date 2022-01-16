import React, {useState} from "react";
import Layout from "../Layout/Layout";
import Style from '../../assets/stylesheet/profile/dashboard.module.scss';
import AdviserDashboardDesktop from "./AdviserDashboard/AdviserDashboardDesktop";
import AdviserDashboardMobile from "./AdviserDashboard/AdviserDashboardMobile";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useSelector } from "react-redux";

const ProfileLayout = ({ children, page, title }) => {
  const [activeMenu, setActiveMenu] = useState(page || null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));
  const user = useSelector((state) => state.user.user);
  const userDetail = useSelector((state) => state.user.userDetail);

  return (
    <Layout>
      <div className={Style.ProfileLayoutContainer}>
        {isMobile ? (
          <AdviserDashboardMobile user={user} userDetail={userDetail} title={title} activeMenu={activeMenu}>
            {children}
          </AdviserDashboardMobile>
        ) : (
          <AdviserDashboardDesktop user={user} userDetail={userDetail} title={title} activeMenu={activeMenu}>
            {children}
          </AdviserDashboardDesktop>
        )}
      </div>
    </Layout>
  );
};

export default ProfileLayout;
