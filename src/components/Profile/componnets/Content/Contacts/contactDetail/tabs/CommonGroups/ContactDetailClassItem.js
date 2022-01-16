import React, { useState } from 'react'
import { Grid, Menu, MenuItem, Typography, withStyles, Divider, TableCell } from '@material-ui/core'
// import useStyles from "../style";
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
import classes from '../ContactDetailTabs.module.scss';
function ContactDetailClassItem({ data, spacing, responsive }) {
    // const classes = useStyles()
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
        Dispatch(joinToClass(data.chatGroupId, data.myChatUserId, 'chatGroupId', '_blank'))
    };


    return (

        <Grid item style={spacing ? { padding: `0 ${spacing}px ${responsive ? 26 : 24}px ${spacing}px` } : {}} className={classes.contactDetailClassItemWrapper}>

            <div>
                <NextLink href={`/profile/dashboard/myClass/${data.id}`}>
                    <div className={classes.contactDetailClassItemCardBody}>
                        <div className={classes.contactDetailGroupInfoContainer}>
                            <div className={classes.contactDetailGroupAvatarContainer}>
                                <Link href={`/profile/dashboard/myClass/${data.id}`}>
                                    <ProfileAvatar
                                        user={data}
                                        variant="circle"
                                        avatar={clsx(classes.contactDetailClassAvatar, data.photo && classes.borderNone)}
                                        avatarContainer={classes.contactDetailClassAvatarBorder}
                                        content={<BlackBoard />}
                                        // classTile
                                    />
                                </Link>
                                <div className={classes.contactDetailGroupName}>
                                    <Typography style={{ marginBottom: 5 }} noWrap>{data.title}</Typography>
                                    <Typography noWrap>{ostad?.fullName}</Typography>
                                </div>
                            </div>
                            <div className={classes.contactDetailGroupActions}>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className={classes.contactDetailGroupMembers}>
                            <div className={classes.contactDetailMemberCnt}>
                                {numberFormat.toPersianDigits(data.memberCount)} نفر عضو
                            </div>
                            <div className={classes.contactDetailActionClass}>
                                {
                                    data.active ?
                                        <button className={classes.contactDetailLoginClass} onClick={handleLoginClass}>
                                            <LoginIcon
                                                className={classes.chatIcon}
                                                viewBox="0 0 20 30"
                                            />
                                            <span> ورود </span>
                                        </button>
                                        :
                                        <p>کلاس غیر فعال</p>
                                }
                            </div>
                        </div>
                    </div>
                </NextLink>
                
            </div>
        </Grid>

    )
}

export default ContactDetailClassItem