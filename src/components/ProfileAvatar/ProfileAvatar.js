import React, { memo } from "react";
import { Avatar } from "@material-ui/core";
import classNames from "classnames";
import { transform } from "../../utilities";
import statusIcon from "../../assets/images/Video-white.svg";
import useStyles from "./styles";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function ProfileAvatar({
    user,
    avatarContainer,
    variant,
    avatar,
    content,
    arrowDown,
    showAdviser,
    style,
    tileColorProp,
    classTile,
    darkMode,
    onClick = () => {
    }
}) {
    const classes = useStyles();
    const tileColor = tileColorProp || classTile ? `class_tile_color` : transform.AvatarColorByName(user.fullName ||
        showAdviser && user.advisorFullName ||
        user.userFullName ||
        user.title ||
        user.text ||
        user.firstName ||
        user.phone ||
        user.number ||
        user.username)

    // transform.tileColor(
    //     user?.id || Math.floor(Math.random() * 1000)
    // );

    return (
        <>
            {user ? (
                <div className={avatarContainer || classes.avatarContainer} style={style || {}} onClick={onClick}>
                    <Avatar
                        style={{ fontSize: 13, fontFamily: 'chistaYekanM' }}
                        variant={variant || "rounded"}
                        className={classNames(
                            {
                                [tileColor]: !user.imageProfile
                            },
                            avatar || classes.avatar
                        )}
                        src={(user.nudeImage && user.nudeImage !== null) ?
                            user.nudeImage
                            : `${transform.getImage(
                                user.imageProfile ||
                                user.profile ||
                                showAdviser && user.advisorImageProfile ||
                                user.userImageProfile ||
                                user.photo ||
                                user.image ||
                                user?.peer?.meta?.photo
                            )}?size=100%x100%`}
                    >
                        {content
                            ? content
                            : transform
                                .getLetters(
                                    user.fullName ||
                                    showAdviser && user.advisorFullName ||
                                    user.userFullName ||
                                    user.title ||
                                    user.text ||
                                    user.firstName ||
                                    user.phone ||
                                    user.number ||
                                    user.username
                                )
                                .trim()}
                    </Avatar>
                    {/* <span className={props.status||classes.status + " " + transform.parseStatus(props.user.state, classes)}>
                    <img src={statusIcon} style={{ height: '12px', width: '12px' }} />
                </span> */}
                    {arrowDown && (
                        <div className={classes.profileArrowDown}>
                            <ArrowDropDownIcon style={darkMode?{color:'#fff'}:{}}/>
                        </div>
                    )}
                </div>
            ) : (
                <div
                    className={classNames(
                        {
                            [tileColor]: true,
                        },
                        avatar || classes.avatar
                    )}
                />
            )}
        </>
    );
}

ProfileAvatar.propTypes = {};

export default memo(ProfileAvatar);
