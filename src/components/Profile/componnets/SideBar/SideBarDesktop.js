import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Divider, Grid } from "@material-ui/core";
import Link from "../../../Link/Link";
import { UserIcon } from "./SideBarIcons";
import clsx from "clsx";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useRouter } from "next/router";

// import gridSidebar from '../../../../assets/images/profile/gridSidebar.svg'
import GridSidebar from "../../../../assets/images/profile/GridSidebar";
import ProfileSidebar from "../../../../assets/images/profile/ProfileSidebar";
import PacketSidebar from "../../../../assets/images/profile/PacketSidebar";
import BlackboardSidebar from "../../../../assets/images/profile/BlackboardSidebar";
import WalletSidebar from "../../../../assets/images/profile/WalletSidebar";
import BookmarkSidebar from "../../../../assets/images/profile/BookmarkSidebar";
import CommentSidebar from "../../../../assets/images/profile/CommentSidebar";
import OstadSidebar from "../../../../assets/images/teacherRegister/teacherRegisterIconDashboard.svg";
import StarSidebar from "../../../../assets/images/profile/StarSidebar";
import { withSnackbar } from 'notistack';
import ContactSidebar from "../../../../assets/images/profile/ContactSidebar";
import { infoSnackbar } from "../../../../../redux/user";
import CheckList from "../../../../assets/images/CheckList";
import Style from '../../../../assets/stylesheet/profile/sidebarMenu.module.scss';
import TeacherRegister from "../TeacherRegister/TeacherRegister";

const SideBar = ({ activeMenu, title, enqueueSnackbar, user , userDetail }) => {
    console.log('activeMenu',activeMenu)
    const router = useRouter();
    const pathArray = router.pathname.split("/");
    const [teacherRegisterDialog, setTeacherRegisterDialog] = useState(false)
    // const user = useSelector((state) => state.user.user);
    // const [sidebarTop, setSidebarTop] = React.useState(120)
    // const [prevScrollpos, setPrevScrollpos] = React.useState(120)
    // console.log('userDetail', userDetail)
    // const handleScroll = () => {
        // let height = window.
    //     let currentScrollPos = window.pageYOffset;
    //     if (prevScrollpos > currentScrollPos) {
    //         setSidebarTop(120)
    //     } else {
    //         setSidebarTop(40)

    //     }
    //     setPrevScrollpos(currentScrollPos);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // });


    const Dispatch = useDispatch();
    const handleComingSoon = () => {
        Dispatch(infoSnackbar(0))
    }

    return (
        <div className={Style.profileSidebarMenuContainer}>
            <TeacherRegister
            open={teacherRegisterDialog}
            handleClose={() => setTeacherRegisterDialog(false)}/>
            {pathArray[pathArray.length - 1] != "dashboard" && (
                <div className={Style.breadcrumbMobile}>
                    <Link
                        href="/profile/adviser/dashboard"
                        className={Style.breadcrumbCaretMobile}
                    >
                        <ArrowForwardIosIcon className={Style.breadcrumbCaret} />
                    </Link>

                    <p className={Style.breadcrumbTitleMobile}>{title}</p>
                </div>
            )}
            <ul
            className={clsx(
                Style.sideBarDesktopContainer,
                Style.sidebarMenuUl
            )}
            >
                <Link
                    href="/profile/dashboard"
                    className={Style.sidebarMenuItemLink}
                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === null || activeMenu === 'dashboard' && Style.sidebarMenuItemActive
                        )}
                    >
                        <GridSidebar className={Style.sidebarMenuItemIcon} />
                        <Typography className={Style.sidebarMenuItemText}>
                            داشبورد
                        </Typography>
                    </li>
                </Link>

                {userDetail?.roleTypeId === 2861 && (

                    <Link
                        href="/profile/adviser/dashboard"
                        className={Style.sidebarMenuItemLink}
                        style={{ textDecoration: "none" }}
                    >
                        <li
                            className={clsx(
                                Style.sidebarMenuItem,
                                activeMenu === 'profile' && Style.sidebarMenuItemActive
                            )}
                        >
                            <ProfileSidebar className={Style.sidebarMenuItemIcon} />
                            <Typography className={Style.sidebarMenuItemText}>
                                پروفایل
                            </Typography>
                        </li>
                    </Link>)}

                <Link
                    href="/profile/dashboard/packets"
                    className={Style.sidebarMenuItemLink}
                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === 'packets' && Style.sidebarMenuItemActive
                        )}
                    >
                        <PacketSidebar className={Style.sidebarMenuItemIcon} />
                        <Typography className={Style.sidebarMenuItemText}>
                            بسته ها
                        </Typography>
                    </li>
                </Link>

                {/* {userDetail?.roleTypeId === 2861 && (
                    <Link
                        href="/profile/dashboard/opinions"
                        className={Style.sidebarMenuItemLink}
                    >
                        <li
                            className={clsx(
                                Style.sidebarMenuItem,
                                activeMenu === "opinions" &&
                                Style.sidebarMenuItemActive
                            )}
                        >
                            <StarSidebar
                                className={Style.sidebarMenuItemIcon}
                            />
                            <Typography className={Style.sidebarMenuItemText}>
                                امتیاز های من
                            </Typography>
                        </li>
                    </Link>
                )} */}

                <Link
                    href="/profile/dashboard/myClass"
                    className={Style.sidebarMenuItemLink}
                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === "myClass" && Style.sidebarMenuItemActive
                        )}
                    >
                        <BlackboardSidebar className={Style.sidebarMenuItemIcon} />
                        <Typography className={Style.sidebarMenuItemText}>
                            کلاس های من
                        </Typography>
                    </li>
                </Link>

                <Link
                    href="/profile/dashboard/contacts"
                    className={Style.sidebarMenuItemLink}
                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === "contactDetail" && Style.sidebarMenuItemActive,
                            activeMenu === "contacts" && Style.sidebarMenuItemActive,
                        )}
                    >
                        <ContactSidebar className={Style.sidebarMenuItemIcon} />
                        <Typography className={Style.sidebarMenuItemText}>
                            مخاطبین
                        </Typography>
                    </li>
                </Link>

                <Link
                    href="/profile/dashboard/activity"
                    className={Style.sidebarMenuItemLink}
                >
                            <li
                                className={clsx(
                                    Style.sidebarMenuItem,
                                    activeMenu === "userActivity" && Style.sidebarMenuItemActive
                                )}
                            >
                                <CheckList
                                    className={Style.sidebarMenuItemIcon}
                                />
                                <Typography className={Style.sidebarMenuItemText}>
                                    فعالیت های من
                        </Typography>
                            </li>
                        </Link>

                {/* <Link
                    href="#"
                    className={Style.sidebarMenuItemLink}
                    onClick={() => handleComingSoon()}

                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === "credit" && Style.sidebarMenuItemActive
                        )}
                    >
                        <WalletSidebar
                            className={Style.sidebarMenuItemIcon}
                        />
                        <Typography className={Style.sidebarMenuItemText}>
                            اعتبار
                        </Typography>
                    </li>
                </Link> */}


                {/* <Link
                    href="/profile/dashboard/favorite"
                    className={Style.sidebarMenuItemLink}
                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === "favorite" && Style.sidebarMenuItemActive
                        )}
                    >
                        <BookmarkSidebar
                            className={Style.sidebarMenuItemIcon}
                        />
                        <Typography className={Style.sidebarMenuItemText}>
                            نشان شده ها
                        </Typography>
                    </li>
                </Link> */}
                {/* <Link
                    href="/profile/dashboard/comments"
                    className={Style.sidebarMenuItemLink}
                >
                    <li
                        className={clsx(
                            Style.sidebarMenuItem,
                            activeMenu === "comments" && Style.sidebarMenuItemActive
                        )}
                    >
                        <CommentSidebar
                            className={Style.sidebarMenuItemIcon}
                        />
                        <Typography className={Style.sidebarMenuItemText}>
                            دیدگاه های من
                        </Typography>
                    </li>
                </Link> */}
                 {
                    
                    <>
                        <div className={Style.sidebarDivider}>
                            <Typography>ویژه اساتید</Typography>

                        </div>
                        {userDetail?.roleTypeId !== 2861 && (
                            <div
                            style={{cursor: 'pointer'}}
                            className={Style.sidebarMenuItemLink}
                            >
                                <li
                                    onClick={() => setTeacherRegisterDialog(!teacherRegisterDialog)}
                                    className={clsx(
                                        Style.sidebarMenuItem,
                                        activeMenu === "register" && Style.sidebarMenuItemActive
                                    )}
                                >
                                    <img
                                        src={OstadSidebar}
                                        className={Style.sidebarMenuItemIcon}
                                        alt={'icon'}
                                    />
                                    <Typography className={Style.sidebarMenuItemText}>
                                        ثبت نام به عنوان استاد
                                    </Typography>
                                </li>
                            </div>

                        )}
                        

                        {(userDetail && (userDetail?.teacher || userDetail?.groupOwner)) &&
                            <Link
                                href="/profile/dashboard/ostad/activity"
                                className={Style.sidebarMenuItemLink}
                            >
                                <li
                                    className={clsx(
                                        Style.sidebarMenuItem,
                                        Style.sidebarMenuMoreItems,
                                        activeMenu === "ostadActivity" && Style.sidebarMenuItemActive
                                    )}
                                >
                                    <CheckList
                                        className={Style.sidebarMenuItemIcon}
                                    />
                                    <Typography className={Style.sidebarMenuItemText}>
                                        فعالیت ها
                            </Typography>
                                </li>
                            </Link> 
                        }
                    </>
                }

            </ul>
        </div>
    );
};

SideBar.propTypes = {};
export default withSnackbar((SideBar));

