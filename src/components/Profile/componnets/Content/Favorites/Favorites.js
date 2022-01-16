import React, { useEffect, useState } from "react";
import { getFavoriteList } from "../../../../../../redux/adviserDashboard";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./Styles";
import { Grid, Paper, Avatar } from "@material-ui/core";
import noData from "../../../../../assets/images/no_result_search.svg";
import clsx from "clsx";
import InfiniteScroll from "react-infinite-scroll-component";
import FavoriteItem from "./FavoriteItem";
import SkeletonLoading from "../../../../Advisers/componnets/SkeletonLoading/SkeletonLoading";

const Favorite = ({ display }) => {
  const classes = useStyles();
  const Dispatch = useDispatch();

  const favoritesList = useSelector(
    (state) => state.adviserDashboard.favorites
  );

  // const favoritesList = {
  //   result: [],
  // };

  useEffect(() => {
    !favoritesList && Dispatch(getFavoriteList(15, 0));
  }, [favoritesList]);

  return (
    <div className={classes.favoritesWrapper}>
      {favoritesList ? (
        <InfiniteScroll
          dataLength={favoritesList.result.length}
          next={() => Dispatch(getFavoriteList(15, favoritesList.offset + 1))}
          hasMore={
            (favoritesList?.offset + 1) * favoritesList?.max <
            favoritesList?.total
          }
          loader={<p style={{ textAlign: "center" }}>در حال بارگزاری...</p>}
        >
          <Grid container spacing={3}>
            {favoritesList.result.length > 0 ? (
              favoritesList.result.map((item) => (
                <FavoriteItem details={item} key={item.id} display={display} />
              ))
            ) : (
              <div style={{ width: "100%", textAlign: "center",marginTop:145 }}>
                <img src={noData} alt="no data" />
                <p style={{ fontSize: 16 , fontFamily:'chistaYekanR' , color:'#0c0b31' }}>هیچ موردی یافت نشد!</p>
              </div>
            )}
            {/*{favoritesList?.result.length === 1 ||*/}
            {/*favoritesList?.result.length === 2*/}
            {/*  ? new Array(favoritesList.result.length === 1 ? 8 : 7)*/}
            {/*      .fill(1)*/}
            {/*      .map((item) => (*/}
            {/*        <Grid item xs={12} sm={6} md={4}>*/}
            {/*          <div*/}
            {/*            className={clsx(*/}
            {/*              classes.favoriteItem,*/}
            {/*              classes.favoriteItemPlaceHolder*/}
            {/*            )}*/}
            {/*          ></div>*/}
            {/*        </Grid>*/}
            {/*      ))*/}
            {/*  : ""}*/}
          </Grid>
        </InfiniteScroll>
      ) : (
        <SkeletonLoading />
      )}
    </div>
  );
};

export default Favorite;
