import React, { useEffect, useRef, useState } from 'react';
import useStyles from './styles';
import { Typography, Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { isAuth, userLogout } from "../../../../../redux/auth";
import { Avatar, Input } from "@material-ui/core";
import { numberFormat, transform } from "../../../../utilities";
import ProfileUploadIcon from '../../../../assets/images/profile-upload-icon-bordered.png'
import menuUserIcon from '../../../../assets/images/menu-user-icon.png'
import menuUserIconSvg from '../../../../assets/images/menu-user-icon-svg.svg'
import coinsIcon from '../../../../assets/images/coins-icon.png'
import starIcon from '../../../../assets/images/profile-star-icon.png'
import { Field } from "redux-form";
import ProfileAvatar from "../../../ProfileAvatar/ProfileAvatar";
import Link from "../../../Link/Link";
function SideBar(props) {
    const classes = useStyles();

    const selectFile = useRef();
    const [profileImg, setProfileImg] = useState(null);

    function parseStatus(status) {
        switch (status) {
            case true:
                return classes.statusOnline
            case process.env.REACT_APP_STATUS_OFFLINE:
                return classes.statusOffline
            case false:
                return classes.statusBusy
        }
    }
    function handleSelectAvatar(event) {
        console.log("Uploading");

        var reader = new FileReader();
        var file = event.target.files[0];

        reader.onload = function (upload) {
            setProfileImg(upload.target.result);
        };
        reader.readAsDataURL(file);
    }
    return (
        <div className={classes.root}>
            <div className={classes.avatarContainer}>
                <Avatar className={classes.avatar} src={transform.getImage(props.user && props.user.imageProfile)} >
                    {props.user && transform.getLetters(props.user.fullName).trim()}
                </Avatar>
                <span className={classes.status + " " + parseStatus(props.user && props.user.active)}></span>
                <div className={classes.avatarUploadContainer}><img src={ProfileUploadIcon} alt="" onClick={() => { selectFile.current.click() }} /></div>
                <input name="file" type="file" style={{ display: 'none' }} ref={selectFile} onChange={handleSelectAvatar} />
            </div>
            <div className={classes.avatarTitleContainer}>

                <Typography className={classes.avatarTitle}>{props.user && props.user.fullName}</Typography>
                <Typography className={classes.avatarMobile}>{props.user && numberFormat.toPersianDigits(props.user.username)}</Typography>

            </div>

            <div className={classes.sidebarMenuContainer}>
                <ul className={classes.sidebarMenu}>
                    {props.user && props.user.registeredAccount &&
                        <>
                            <li className={classes.sidebarMenuItem + ' ' + classes.sidebarMenuItemActive}>
                                <img src={menuUserIconSvg} className={classes.sidebarMenuItemIcon} />

                                <Typography className={classes.sidebarMenuItemText}>
                                    پروفایل استاد
                   </Typography>
                            </li>

                            {/* <li className={classes.sidebarMenuItem}>
                                <img src={coinsIcon} className={classes.sidebarMenuItemIcon} />

                                <Typography className={classes.sidebarMenuItemText}>
                                    درآمد ها
                   </Typography>
                            </li> */}
                            <li className={classes.sidebarMenuItem}>
                                <img src={starIcon} className={classes.sidebarMenuItemIcon} />

                                <Typography className={classes.sidebarMenuItemText}>
                                    امتیاز
                   </Typography>
                            </li></>}
                    <Divider />

                    <li className={classes.sidebarMenuItem + ' ' + classes.sidebarMenuItemActive}>
                        <img src={menuUserIconSvg} className={classes.sidebarMenuItemIcon} />

                        <Typography className={classes.sidebarMenuItemText}>
                            پروفایل
                   </Typography>
                    </li>

                    <li className={classes.sidebarMenuItem}>
                        <img src={starIcon} className={classes.sidebarMenuItemIcon} />

                        <Typography className={classes.sidebarMenuItemText}>
                            تماس ها
                   </Typography>
                    </li>

                    <li className={classes.sidebarMenuItem}>
                        <img src={starIcon} className={classes.sidebarMenuItemIcon} />

                        <Typography className={classes.sidebarMenuItemText}>
                            اعتبارات
                   </Typography>
                    </li>
                    <li className={classes.sidebarMenuItem}>
                        <img src={starIcon} className={classes.sidebarMenuItemIcon} />

                        <Typography className={classes.sidebarMenuItemText}>
                            علاقه مندی ها
                   </Typography>
                    </li>
                    <li className={classes.sidebarMenuItem}>
                        <img src={starIcon} className={classes.sidebarMenuItemIcon} />

                        <Typography className={classes.sidebarMenuItemText}>
                            دیدگاه ها
                   </Typography>
                    </li>
                    <li className={classes.sidebarMenuItem}>
                        <img src={starIcon} className={classes.sidebarMenuItemIcon} />

                        <Typography className={classes.sidebarMenuItemText}>
                            تنظیمات
                   </Typography>
                    </li>
                    {
                        props.user && props.user.roleTypeId === 2891 && <li className={classes.sidebarMenuItem}>

                            <img src={menuUserIconSvg} className={classes.sidebarMenuItemIcon} />
                            <Link href="/profile/adviser/register">
                                <Typography className={classes.sidebarMenuItemText}>
                                    ثبت نام به عنوان استاد
                           </Typography>
                            </Link>
                        </li>
                    }


                </ul>
            </div>
        </div>
    );
}

SideBar.propTypes = {

};
const mapStateToProps = (state) => ({
    user: state.user.user,
    authLoad: state.auth.load,
    userLoad: state.user.load
});

export default connect(mapStateToProps, { userLogout })(SideBar);