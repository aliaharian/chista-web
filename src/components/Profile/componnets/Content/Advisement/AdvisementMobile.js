import React, { useState, useEffect, Fragment } from "react";
import useStyles from "./Styles";
import CallMadeIcon from "@material-ui/icons/CallMade";
import { numberFormat } from "../../../../../utilities";
import filterIcon from "../../../../../assets/images/filter-blue.svg";
import AdvisementMobileItem from "./AdvisementMobileItem";
import { getAdvisementList } from "../../../../../../redux/adviserDashboard/Actions";
import InfiniteScroll from "react-infinite-scroll-component";
import CallReceivedIcon from "@material-ui/icons/CallReceived";
import { useDispatch } from "react-redux";
import noData from "../../../../../assets/images/noData.svg";
import AdvisementFilterModalMobile from "./AdvisementFilterModalMobile/AdvisementFilterModalMobile";

const AdvisementMobile = ({ advisement }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();

  const [showFilterModal, setShowFilterModal] = useState(false);

  const [filterValues, setFilterValue] = useState({
    fromTo: "all",
    success: "all",
    fromTime: "",
    toTime: "",
  });

  const handelFilterModal = (status) => {
    setShowFilterModal(status);
  };

  return (
    <div style={{ padding: "0 20px" }}>
      {advisement.result ? (
        <Fragment>
          <div className={classes.totalStatusWrapper}>
            <div className={classes.totalStatusItem}>
              <div>
                <div className={classes.status} style={{ color: "#1641ff" }}>
                  <CallReceivedIcon className={classes.statusIcon} />
                </div>
              </div>
              <div className={classes.totalStatustext}>
                <p>تماس ورودی</p>
                <p>
                  <span className={classes.totalStatusNmuber}>
                    {advisement.info &&
                      numberFormat.toPersianDigits(advisement.info.incomingDur)}
                  </span>
                  <span>دقیقه</span>
                </p>
              </div>
            </div>
            <div className={classes.totalStatusItem}>
              <div className={classes.status} style={{ color: "#1641ff" }}>
                <CallMadeIcon className={classes.statusIcon} />
              </div>
              <div className={classes.totalStatustext}>
                <p>تماس خروجی</p>
                <p>
                  <span className={classes.totalStatusNmuber}>
                    {advisement.info &&
                      numberFormat.toPersianDigits(advisement.info.outgoingDur)}
                  </span>
                  <span>دقیقه</span>
                </p>
              </div>
            </div>
          </div>
          <div className={classes.filterWrapperMobile}>
            <p>لیست تماس ها</p>
            <button
              className={classes.filterBtnMobile}
              onClick={() => handelFilterModal(true)}
            >
              <img src={filterIcon} alt="" />
              محدودسازی
            </button>
          </div>
          <div
            id="advisements"
            // style={{ height, overflow: "auto" }}
          >
            <InfiniteScroll
              dataLength={advisement.result.length}
              next={() =>
                Dispatch(
                  getAdvisementList(
                    false,
                    advisement.filter
                      ? { ...advisement.filterQuery, offset: +1 }
                      : { max: 15, offset: advisement.offset + 1 }
                  )
                )
              }
              hasMore={
                (advisement?.offset + 1) * advisement?.max < advisement?.total
              }
              loader={<p style={{ textAlign: "center" }}>در حال بارگزاری...</p>}
              // scrollableTarget="advisements"
            >
              {advisement.result.length > 0 ? (
                advisement.result.map((row) => (
                  <AdvisementMobileItem row={row} key={row.id} />
                ))
              ) : (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: 30,
                  }}
                >
                  <img src={noData} alt="no data" />
                  <p style={{ fontSize: 20 }}>هیچ موردی یافت نشد!</p>
                </div>
              )}
            </InfiniteScroll>
          </div>
        </Fragment>
      ) : (
        <div style={{ width: "100%", textAlign: "center", marginTop: 30 }}>
          <img src={noData} alt="no data" />
          <p style={{ fontSize: 20 }}>هیچ موردی یافت نشد!</p>
        </div>
      )}

      {showFilterModal && (
        <AdvisementFilterModalMobile
          filterValues={filterValues}
          handelSetFilterValue={(filterValue) => setFilterValue(filterValue)}
          handelFilterModal={handelFilterModal}
        />
      )}
    </div>
  );
};

export default AdvisementMobile;
