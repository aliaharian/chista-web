import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";
import blackBoard from "../../../../../assets/images/Blackboard-white.svg";
import {Menu, MenuItem, Typography, withStyles} from "@material-ui/core";
import {dateTime, numberFormat} from "../../../../../utilities";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React, {useState} from "react";
import useStyles from "./Styles";
import {useRouter} from "next/router";

function MyClassMobileItem ({item}){
    const classes = useStyles();

    const router=useRouter();
    const [anchorEl, setAnchorEl] = useState(null);



    const StyledMenu = withStyles((theme) => ({
        paper: {
            overflow: 'visible',
            transform: "translateY(12px)!important",
            border: 'none',
            width:'140px',
            borderRadius:'8px!important',
            boxShadow: '0 3px 10px 0 rgba(0, 5, 52, 0.11)',
            padding:'0 4px',
            '&>ul':{
                '&>li':{
                    minHeight:35,
                    backgroundColor: '#fff !important'
                }
            },
            '&:after': {
                boxShadow: '0 9px 0px 0px white, 0 -9px 0px 0px white, 12px 0 15px -4px #0c0b3126, -12px 0 15px -4px #0c0b3126',
                right: 15,
                top: -7,
                content: '""',
                display: 'block',
                position: 'absolute',
                transform: 'rotateZ(45deg)',
                width: 15,
                height: 15,
                backgroundColor: '#fff',
                zIndex:90
            }
        },
    }))(Menu);

    const dateTimeRow = (item) => {
        const { day, month, year, time } = dateTime.dateTimeCustom(
            item.createdTime
        );
        return (
            <div className={classes.dateTime}>
                <span>{day}</span>
                <span>{month}</span> <span>{year}</span> - <span>{time}</span>
            </div>
        );
    };
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };



    return(
        <div className={classes.myClassMobileWrapper}>
            <div className={classes.myClassAvatarWrapper}>
                <ProfileAvatar
                    user={item}
                    variant="circle"
                    avatar={classes.classAvatar}
                    avatarContainer={classes.classAvatarBorder}
                    content={<img src={blackBoard} />}
                />
                <div className={classes.myClassNameWrapper}>
                    <Typography noWrap>{item.title}</Typography>
                    <p>{numberFormat.toPersianDigits(item.memberCount)} نفر</p>
                </div>
            </div>
            <div className={classes.myClassActionWrapper}>
                <div>
                    {dateTimeRow(item)}
                    <p>{item.myRoleStr || `-`}</p>
                </div>
                <MoreVertIcon
                    aria-controls="more"
                    aria-haspopup="true"
                    onClick={handleClick}
                    className={classes.editBtnRes}
                />
                <StyledMenu
                    id="more"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    style={{
                        marginTop: 40,
                    }}
                >
                    <MenuItem
                        onClick={()=>{
                            // console.log('it', item)
                            router.push(`/profile/dashboard/myClass/${item.id}`)
                        }}
                    >
                        جزئیات

                    </MenuItem>
                    {/* <MenuItem
              //  onClick={handelEditBtn}
              >
                آرشیو کردن
              </MenuItem> */}
                    {item.active && item.myRole === process.env.REACT_APP_CREATOR_ROLE_TYPE && (
                        <MenuItem
                            //  onClick={handelEditBtn}
                        >
                            غیرفعال کردن
                        </MenuItem>
                    )}
                </StyledMenu>
            </div>
        </div>

    )
}

export default MyClassMobileItem