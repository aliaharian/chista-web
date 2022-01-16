import React, { useState, Fragment } from "react";
import useStyles from "./Styles";
import filterIcon from "../../../../../assets/images/filter.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch } from "react-redux";
import SkeletonLoading from "../../../../Advisers/componnets/SkeletonLoading/SkeletonLoading";
import noData from "../../../../../assets/images/no_result_search.svg";
import CommentItem from "./CommentItem";
import CommentFilterModal from "./CommentFilterModal";
import { getCommentsList } from "../../../../../../redux/adviserDashboard";
import MyClassHeader from "../MyClass/MyClassHeader";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import Link from "next/link";

const Comments = ({ comments }) => {
  const Dispatch = useDispatch();
  const classes = useStyles();
  const [showModal, setShowModal] = useState();

  const [filterValues, setFilterValue] = useState({
    fromTime: "",
    toTime: "",
    fromRate: "",
    toRate: "",
    replied: "",
  });

  const showFilterModal = (status) => {
    setShowModal(status);
  };

  const handelCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.commentsWrapper}>
      {comments.result ? (
        <Fragment>

          <div>
           <Link href={`/profile/dashboard`}>
            <div className={classes.breadCrumb}>
              <ArrowForwardRoundedIcon />
              <p>دیدگاه های من</p>
            </div>
           </Link>
          </div>
          {/*<div className={classes.filterWrapper}>*/}
          {/*  <button*/}
          {/*    className={classes.filterBtn}*/}
          {/*    onClick={() => showFilterModal(true)}*/}
          {/*  >*/}
          {/*    <img src={filterIcon} alt="" />*/}
          {/*    محدودسازی*/}
          {/*  </button>*/}
          {/*</div>*/}

          <InfiniteScroll
            dataLength={comments.result?.length}
            next={() =>
              Dispatch(
                getCommentsList(
                  false,
                  comments.filter
                    ? { ...comments.filterQuery, offset: +1 }
                    : { max: 15, offset: comments.offset + 1 }
                )
              )
            }
            hasMore={(comments?.offset + 1) * comments?.max < comments?.total}
            loader={<p style={{ textAlign: "center" }}>در حال بارگزاری...</p>}
          >
            {comments.result.length > 0 ? (
              comments.result.map((comment) => (
                <CommentItem comment={comment} key={comment.id} />
              ))
            ) : (
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: "100px 0",
                }}
              >
                <img src={noData} alt="no data" />
                <p style={{ fontSize:13 }}>هیچ دیدگاهی  یافت نشد.</p>
              </div>
            )}
          </InfiniteScroll>
        </Fragment>
      ) : (
        <SkeletonLoading />
      )}
      {showModal && (
        <CommentFilterModal
          handelFilterValue={(values) => setFilterValue(values)}
          closeModal={handelCloseModal}
          filterValues={filterValues}
        />
      )}
    </div>
  );
};

export default Comments;
