import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  LinearProgress,
  createMuiTheme,
  Snackbar,
} from "@material-ui/core";
import classNames from "classnames";
import listEmptyImg from "../../../../../../assets/images/comments-list-empty.png";
import Icon from "../../../../../Icon/Icon";
import penIcon from "../../../../../../assets/images/write-comment-icon.png";
import rateIcon from "../../../../../../assets/images/Favorite.svg";
import FavoriteBlackIcon from '../../../../../../assets/images/FavoriteBlack.svg';
import { numberFormat, transform } from "../../../../../../utilities";
import AdviserCommentItem from "./componnets/AdviserCommentItem/AdviserCommentItem";
import WriteCommentDialog from "./componnets/WriteCommentDialog/WriteCommentDialog";
import {
  getList as getCommentsList,
  clearComments,
  likeDislike,
} from "../../../../../../../redux/comments";
import { connect } from "react-redux";
import { enqueueSnackbar } from "../../../../../../../redux/user";
import { useDispatch } from "react-redux";

const theme = createMuiTheme({ direction: "ltr" });
const BorderLinearProgress = withStyles({
  root: {
    height: 5,
    borderRadius: 7,
    backgroundColor: "rgba(189, 200, 214, 0.3)",
    [theme.breakpoints.down("sm")]: {
      height: 4,
    },
  },
  bar: {
    borderRadius: 7,
    backgroundColor: "#484e5c",
  },
})(LinearProgress);

function AdviserComments(props) {
  const classes = useStyles();
  const [snackPack, setSnackPack] = useState([]);
  const [messageInfo, setMessageInfo] = useState(undefined);
  const [open, setOpen] = useState(false);
  const [openWriteDialog, setOpenWriteDialog] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.list && props.list.length === 0) {
      props.getCommentsList(props.adviser.id, undefined, true);
    }

    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleCloseMessage = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  function WriteDialogToggle() {
    if (props.adviser.called) {
      setOpenWriteDialog(!openWriteDialog);
    } else {
      dispatch(
        dispatch(
          enqueueSnackbar({
            message:
              "کاربر گرامی شما تا به حال با این استاد صحبت نکرده اید و قادر به ثبت دیدگاه نیستید.",
          })
        )
      );
      return;
    }
  }
  function _renderWriteCommentDialog() {
    return (
      <WriteCommentDialog
        open={openWriteDialog}
        handleClose={WriteDialogToggle}
      />
    );
  }

  if (props.list && !props.list.length > 0) {
    return (
      <>
        {_renderWriteCommentDialog()}

        <div
          className={classNames(classes.titleRoot, {
            [classes.boxTitleRoot]: props.showWriteComment,
          })}
        >
          <div className={classes.titleWrapper}>
            <Typography component="h2" className={classes.commentsTitle}>
              دیدگاه ها
            </Typography>
          </div>
        </div>
        <div className={classes.root}>
          <img src={listEmptyImg} alt="چیستا" className={classes.emptyImg} />
          <Typography className={classes.emptyListText}>
            برای این استاد دیدگاهی ثبت نشده ، اگر از خدمات ایشان استفاده کردید
          </Typography>
          <Typography className={classes.emptyListText}>
            اولین نفری باشید که دیدگاه خود را ثبت میکنید{" "}
          </Typography>
          <Button
            variant="outlined"
            className={classes.writeCommentButton}
            style={{ marginTop: "20px" }}
            startIcon={
              <Icon src={penIcon} style={{ width: "26px", height: "26px" }} />
            }
            onClick={() => {
              if (props.isLogin) {
                WriteDialogToggle();
              } else {
                props.openInitiable();
              }
            }}
          >
            ثبت دیدگاه
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      {_renderWriteCommentDialog()}

      <div className={classes.root}>
        {props.showTitle && <div className={classes.commentTitleWrapper}>
          <Typography className={classes.commentTitle}>
            <img src={FavoriteBlackIcon} alt="" className={classes.info} />
                   دیدگاه ها

                   <div className={classes.commentTitleIcon}>
                    <Button
                      variant="outlined"
                      className={classes.writeCommentButton}
                      startIcon={
                        <Icon src={penIcon} style={{ width: "26px", height: "26px" }} />
                      }
                      onClick={() => {
                        if (props.isLogin) {
                          WriteDialogToggle();
                        } else {
                          props.openInitiable();
                        }
                      }}
                    >
                      ثبت دیدگاه
                </Button>
            </div>
          </Typography>
        </div>}
        {props.showScoreBord && props.adviser && (
          <Grid container xs={12} className={classes.fullRateWrapper}>
            <Grid container xs={12} md={6}>
              <div className={classes.rateTextWrapper}>
                <Typography className={classes.rateText}>
                  <Icon
                    src={rateIcon}
                    style={{ width: "42px", height: "42px" }}
                  />
                  {numberFormat.toPersianDigits(props.adviser.score)}
                </Typography>

                <Typography
                  className={classes.rateCountText}
                >{`( از ${numberFormat.toPersianDigits(
                  props.adviser.rateCnt
                )} نفر )`}</Typography>
              </div>

              <Grid
                item
                md={7}
                sm={4}
                xs={6}
                className={classes.scoreBoardWrapper}
              >
                <div className={classes.scoreBoardItem}>
                  {" "}
                  <span className={classes.scoreBoardItemNumber}>
                    {numberFormat.toPersianDigits(1)}
                  </span>
                  <BorderLinearProgress
                    className={classes.processBar}
                    variant="determinate"
                    color="secondary"
                    value={props.adviser.star1}
                  />
                </div>
                <div className={classes.scoreBoardItem}>
                  {" "}
                  <span className={classes.scoreBoardItemNumber}>
                    {numberFormat.toPersianDigits(2)}
                  </span>
                  <BorderLinearProgress
                    className={classes.processBar}
                    variant="determinate"
                    color="secondary"
                    value={props.adviser.star2}
                  />
                </div>

                <div className={classes.scoreBoardItem}>
                  {" "}
                  <span className={classes.scoreBoardItemNumber}>
                    {numberFormat.toPersianDigits(3)}
                  </span>
                  <BorderLinearProgress
                    className={classes.processBar}
                    variant="determinate"
                    color="secondary"
                    value={props.adviser.star3}
                  />
                </div>

                <div className={classes.scoreBoardItem}>
                  {" "}
                  <span className={classes.scoreBoardItemNumber}>
                    {numberFormat.toPersianDigits(4)}
                  </span>
                  <BorderLinearProgress
                    className={classes.processBar}
                    variant="determinate"
                    color="secondary"
                    value={props.adviser.star4}
                  />
                </div>

                <div className={classes.scoreBoardItem}>
                  {" "}
                  <span className={classes.scoreBoardItemNumber}>
                    {numberFormat.toPersianDigits(5)}
                  </span>
                  <BorderLinearProgress
                    className={classes.processBar}
                    variant="determinate"
                    color="secondary"
                    value={props.adviser.star5}
                  />
                </div>
              </Grid>
            </Grid>
            <Grid container xs={12} md={6}>
              <Grid xs={12} className={classes.countsWrapper}>
                <div className={classes.countItem}>
                  <div className={classes.countItemTop}>
                    <Typography className={classes.countItemText}>
                      {numberFormat.toPersianDigits(props.adviser.contactCnt)}{" "}
                      نفر
                    </Typography>
                  </div>
                  <div className={classes.countItemBottom}>
                    <Typography className={classes.countItemSubText}>
                      مخاطبین
                    </Typography>
                  </div>
                </div>
                <div className={classes.countItem}>
                  <div className={classes.countItemTop}>
                    <Typography className={classes.countItemText}>
                      {numberFormat.toPersianDigits(transform.secondsToH(props.adviser.activityTime))}{" "}
                    </Typography>
                  </div>
                  <div className={classes.countItemBottom}>
                    <Typography className={classes.countItemSubText}>
                      فعالیت
                    </Typography>
                  </div>
                </div>
                {props.showWriteComment && (
                  <Button
                    variant="outlined"
                    className={classes.writeCommentButton}
                    startIcon={
                      <Icon
                        src={penIcon}
                        style={{ width: "26px", height: "26px" }}
                      />
                    }
                    onClick={() => {
                      if (props.isLogin) {
                        WriteDialogToggle();
                      } else {
                        props.openInitiable();
                      }
                    }}
                  >
                    ثبت دیدگاه
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
        <Grid containner className={classes.commentsRoot}>
          {props.list &&
            props.list.length > 0 &&
            props.list.map(
              (item, i) =>
                (!props.maxList || props.maxList > i) && item.comment && (
                  <AdviserCommentItem
                    item={item}
                    isLogin={props.isLogin}
                    showLike={props.showLike}
                    showDate={props.showDate}
                    openInitiable={props.openInitiable}
                    likeDislike={props.likeDislike}
                  />
                )
            )}
        </Grid>
        <div
          className={classNames(classes.titleRoot, {
            [classes.boxTitleRoot]: props.showWriteComment,
          })}
        >
          {props.maxList && (
            <Grid className={classes.writeCommentWrapper}>
              <Button
                variant="outlined"
                className={classes.moreCommentButton}
                onClick={props.moreComment}
              >
                نمایش همه دیدگاه ها
              </Button>
            </Grid>
          )}
        </div>
      </div>

      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleCloseMessage}
        onExited={handleExited}
        message={messageInfo ? messageInfo.message : undefined}
      />
    </>
  );
}

AdviserComments.propTypes = {};

const mapStateToProps = (state) => ({
  load: state.comments.load,
  list: state.comments.list,
  adviser: state.advisers.adviser,
});

export default connect(mapStateToProps, {
  getCommentsList,
  clearComments,
  likeDislike,
})(AdviserComments);
