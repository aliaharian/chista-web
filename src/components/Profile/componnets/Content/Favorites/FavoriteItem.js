import React, { Fragment } from "react";
import { Grid, Avatar, Typography } from "@material-ui/core";
import useStyles from "./Styles";
// import Link from "next/link";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { transform, numberFormat } from "../../../../../utilities";
import VideocamOutlinedIcon from "@material-ui/icons/VideocamOutlined";
import clsx from "clsx";
import Link from "../../../../Link/Link";
import pinIcon from "../../../../../assets/images/pin-icon.svg";
import ProfileAvatar from "../../../../ProfileAvatar/ProfileAvatar";

const FavoriteItem = ({ details, display }) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6} lg={4} className={classes.favoriteItemParent}>
      <Link
        href="/adviser/[id]"
        as={"/adviser/" + details.id}
        className={classes.favoriteItem}
      >
        <Fragment>
          {/* <div className={classes.favoriteItem}> */}
          <Grid xs={3} className={classes.favoriteAvatarWrapper} style={{marginLeft:16}}>
            {/*<div className={classes.favoriteAvatarBorder}>*/}
              {/*<Avatar*/}
              {/*  src={transform.getImage(details.imageProfile)}*/}
              {/*  className={classes.favoriteAvatar}*/}
              {/*/>*/}
              <ProfileAvatar user={details} variant="circle" avatar={classes.avatar}
                             status={classes.status + " " + transform.parseStatus(details.state, classes)}
                             avatarContainer={classes.avatarContainer}/>
              {/* <div
                className={clsx(
                  classes.status,
                  display === "mobile" && classes.statusMobile,
                  details.state === 211
                    ? classes.statusActive
                    : details.state === 213
                    ? classes.statusBusy
                    : ""
                )}
              >
                {display === "desktop" && (
                  <VideocamOutlinedIcon
                    style={{ fontSize: 17 }}
                    className={classes.statusIcon}
                  />
                )}
              </div> */}
            {/*</div>*/}
          </Grid>
          <Grid xs={9}>
            <div
              className={clsx(
                classes.favoritesItemName,
                display === "mobile" && classes.favoritesItemNameMobile
              )}
            >
              <p>{details.fullName}</p>
              <div
                className={clsx(
                  classes.star,
                  display === "mobile" && classes.starMobile
                )}
              >
                <span className={classes.favoritesScore}>
                  {numberFormat.toPersianDigits(details.score)}
                </span>
                <StarRoundedIcon className={classes.favoritesStar} />
              </div>
            </div>
            <Typography noWrap={false} className={classes.subtitle}>
              {details.intro}
            </Typography>
            <p className={classes.favoritesLocationWrapper}>
              {display === "desktop" ? (
                // <Fragment>
                //   <span className={classes.favoritesLocation}>
                //     <img src={pinIcon} alt="" className={classes.itemLoc} />
                //   </span>
                //   <span className={classes.itemLocText}>
                //     {details.cityName}
                //   </span>
                // </Fragment>
                  <></>
              ) : (
                // <p className={classes.priceWrapper}>
                //   <VideocamOutlinedIcon
                //     style={{ fontSize: 30 }}
                //     className={classes.statusIconMobile}
                //     // style={{ color: "white" }}
                //   />
                //   <span> هر دقیقه </span>
                //   <span className={classes.price}>
                //     {numberFormat.toPersianSeprateTomanCommas(details.price)}
                //   </span>
                //   <span className={classes.price}>تومان</span>
                // </p>
                ""
              )}
            </p>
          </Grid>
          {/* </div> */}
        </Fragment>
      </Link>
    </Grid>
  );
};

export default FavoriteItem;
