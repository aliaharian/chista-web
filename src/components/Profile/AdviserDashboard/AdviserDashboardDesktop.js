import React from "react";
import SideBarDesktop from "../componnets/SideBar/SideBarDesktop";
import Style from '../../../assets/stylesheet/profile/dashboard.module.scss';
import LayoutWithSidebar from "../../Kit/Layouts/LayoutWithSidebar";

const AdviserDashboardDesktop = ({ children, activeMenu, title,user,userDetail }) => {
  return (
    <>
      <LayoutWithSidebar
        className={Style.dashboardContainer}
      >
        <SideBarDesktop activeMenu={activeMenu} title={title}user={user} userDetail={userDetail}/>
        <div className={Style.dashboardChildrenContainer}>
          {children}
        </div>
      </LayoutWithSidebar>
    </>
  );
};

export default AdviserDashboardDesktop;
