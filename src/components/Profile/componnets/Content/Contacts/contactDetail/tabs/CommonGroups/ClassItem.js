import React, { useState } from 'react'
import { Grid, Menu, MenuItem, Typography, withStyles, Divider, TableCell } from '@material-ui/core'
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Link from "../../../../../../../Link/Link";
import Tab from "@material-ui/core/Tab";
import { numberFormat } from "../../../../../../../../utilities";
import BlackBoard from "../../../../../../../../assets/images/profile/BlackboardSidebar";
import LoginIcon from "../../../../../../../../assets/images/loginClass";
import { useDispatch, useSelector } from "react-redux";
import { componentsUpdateField, joinToClass } from "../../../../../../../../../redux/groups";
import StyledMenu from "../../../../../../../menu/StyledMenu";
import NextLink from "next/link";
import clsx from "clsx";
import EndClassModal from './EndClassModal/EndClassModal';
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/myClasses.module.scss';
function ClassItem({ data, spacing, responsive }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [ostad, setOstad] = useState(null);
    const Dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    React.useEffect(() => {
        if (!ostad) {
            data.membersInfo.map((member) => {
                if (member.roleType === process.env.REACT_APP_OSTAD_ROLE_TYPE) {
                    setOstad(member)
                }
            })
        }
    }, [ostad])

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLoginClass = () => {
        Dispatch(joinToClass(data.chatGroupId, 'chatGroupId', '_blank'))
    };


    return (
        <div className={classes.classItemCardContainer}>
            <div>
                <NextLink href={`/profile/dashboard/myClass/${data.id}`}>
                    <div className={classes.classProfileInfoContainer}>
                        <div>
                            <Link href={`/profile/dashboard/myClass/${data.id}`}>
                                <ProfileAvatar
                                    user={data}
                                    variant="circle"
                                    avatar={clsx(classes.classAvatar, data.photo && classes.borderNone)}
                                    avatarContainer={classes.classAvatarBorder}
                                    content={<BlackBoard />}
                                    classTile={false}
                                />
                            </Link>
                            <div className={classes.classNamesContainer}>
                                <Typography style={{ marginBottom: 5, maxWidth: '150px' }} noWrap>{data.title}</Typography>
                                <Typography style={{ maxWidth: '150px' }} noWrap>{ostad?.fullName}</Typography>
                            </div>
                        </div>
                    </div>
                </NextLink>
                <div className={classes.classMembersContainer}>
                    <div className={classes.classMembersDetails}>
                        {numberFormat.toPersianDigits(data.memberCount)} نفر عضو
                    </div>
                    <div className={classes.classSituationBtn}>
                        <Link href={`/profile/dashboard/myClass/${data.id}`}>جزئیات</Link>
                        {/* {
                                data.active ? */}
                        <button disabled={!data.active} className={clsx(!data.active && classes.loginClassDisabled, classes.loginClass)} onClick={handleLoginClass}>
                            <LoginIcon
                                className={classes.chatIcon}
                                viewBox="0 0 20 30"
                            />
                            <span> ورود </span>
                        </button>
                        {/* :
                                <p>کلاس غیر فعال</p>
                            } */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ClassItem