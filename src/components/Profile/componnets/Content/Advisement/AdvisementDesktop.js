import React, { useState, Fragment } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";
import useStyles from "./Styles";
import AdvisementTableCell from "./AdvisementTableCell";
import filterIcon from "../../../../../assets/images/filter.svg";
import { useDispatch } from "react-redux";
import { getAdvisementList } from "../../../../../../redux/adviserDashboard/Actions";
import AdvisementFilterModalDesktop from "./AdvisementFilterModalDesktop/AdvisementFilterModalDesktop";
import noData from "../../../../../assets/images/noData.svg";

const AdvisementDesktop = ({ advisement }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();

  const [showModal, setShowModal] = useState();

  const showFilterModal = (status) => {
    setShowModal(status);
  };

  const [filterValues, setFilterValue] = useState({
    fromTo: "all",
    success: "all",
    fromTime: "",
    toTime: "",
  });

  return (
    <div className={classes.favoritesWrapper}>
      {advisement.result ? (
        <Fragment>
          <div className={classes.filterWrapper}>
            <button
              className={classes.filterBtn}
              onClick={() => showFilterModal(true)}
            >
              <img src={filterIcon} alt="" />
              محدودسازی
            </button>
          </div>

          <InfiniteScroll
            dataLength={advisement.result?.length}
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
          >
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                  <TableRow>
                    <TableCell>شرح</TableCell>
                    <TableCell align="center">تاریخ و ساعت</TableCell>
                    <TableCell align="center">مدت تماس</TableCell>
                    <TableCell align="center">وضعیت</TableCell>
                    {/* <TableCell align="center"></TableCell> */}
                  </TableRow>
                </TableHead>
                {advisement.result.length > 0 ? (
                  <TableBody>
                    {advisement.result.map((row) => (
                      <AdvisementTableCell row={row} key={row.id} />
                    ))}
                  </TableBody>
                ) : (
                  <TableRow>
                    <TableCell
                      colspan="5"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: 30,
                      }}
                    >
                      <img src={noData} alt="no data" />
                      <p style={{ fontSize: 20 }}>هیچ موردی یافت نشد!</p>
                    </TableCell>
                  </TableRow>
                )}
              </Table>
            </TableContainer>
          </InfiniteScroll>
        </Fragment>
      ) : (
        <div style={{ width: "100%", textAlign: "center", marginTop: 30 }}>
          <img src={noData} alt="no data" />
          <p style={{ fontSize: 20 }}>هیچ موردی یافت نشد!</p>
        </div>
      )}
      {showModal && (
        <AdvisementFilterModalDesktop
          filterValues={filterValues}
          handelSetFilterValue={(filterValue) => setFilterValue(filterValue)}
          closeModal={showFilterModal}
        />
      )}
    </div>
  );
};

export default AdvisementDesktop;
