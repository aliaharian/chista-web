import React, {useState, Fragment} from "react";
import useStyles from "./Styles";
import filterIcon from "../../../../../assets/images/filter.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import {useDispatch, useSelector} from "react-redux";
import SkeletonLoading from "../../../../Advisers/componnets/SkeletonLoading/SkeletonLoading";
import noData from "../../../../../assets/images/noData.svg";
import OpinionItem from "./OpinionItem";
// import CommentFilterModal from "./CommentFilterModal";
import {getOpinionsList} from "../../../../../../redux/adviserDashboard";
import OpinionsFilterModal from "./OpinionsFilterModal";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import {numberFormat, dateTime, transform} from "../../../../../utilities";
import {Rating} from '@material-ui/lab';
import Link from "next/link";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

const Opinions = ({opinions}) => {
    const Dispatch = useDispatch();
    const adviser = useSelector((state) => state.user.adviser);
    console.log('opin' , opinions)
    const classes = useStyles();
    const [showModal, setShowModal] = useState();

    const [filterValues, setFilterValue] = useState({
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

    // const activityTime = (time) => {
    //   const { day, month, year, hour, minute } = dateTime.dateTimeCustom(time);
    //   let activityTime;
    //   if (numberFormat.toEnglishDigits(hour) > 0) {
    //     if (numberFormat.toEnglishDigits(minute) >= 30) {
    //       return (
    //         <span>
    //           {numberFormat.toPersianDigits(
    //             parseInt(numberFormat.toEnglishDigits(hour)) + 1
    //           )}{" "}
    //           ساعت
    //         </span>
    //       );
    //     } else return <span>{hour} ساعت</span>;
    //   } else {
    //     return <span>{minute} دقیقه</span>;
    //   }
    // };


    return (
        <div className={classes.commentsWrapper}>
            {opinions.result ? (
                <Fragment>

                    <div className={classes.breadCrumbRes}>
                        <Link href={`/profile/dashboard`}>
                            <div className={classes.breadCrumb}>
                                <ArrowForwardRoundedIcon/>
                                <p>امتیاز های من</p>
                            </div>
                        </Link>
                    </div>

                    <div className={classes.rateResWrapperContainer}>
                        <div className={classes.rateResWrapper}>
                            <div className={classes.rateWrapper}>
                                <div className={classes.rateRes}>
                                    <span>{numberFormat.toPersianDigits(adviser.score)}</span>
                                    <Rating
                                        icon={<StarRoundedIcon
                                        style={{
                                            color: "#FFD803",
                                            fontSize: 15,
                                        }}
                                        emptyIcon={
                                            <StarRoundedIcon
                                                style={{
                                                    color: "#aab8c1",
                                                    fontSize: 20,
                                                }}
                                            />
                                        }
                                    />}
                                            value={adviser.score}
                                            max={5}
                                    />

                                </div>
                                <p
                                    style={{
                                        marginRight: 5,
                                    }}
                                >
                                    (از {numberFormat.toPersianDigits(adviser.rateCnt)} رای)
                                </p>
                            </div>

                            <div className={classes.scoresWrapperRes}>
                                <div>
                                    <span>۵</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate5Cnt / adviser.score) * 100}
                                        max={100}
                                    />
                                    {/*<span>{`( ${numberFormat.toPersianDigits(*/}
                                    {/*    adviser.rate5Cnt*/}
                                    {/*)} رای )`}</span>*/}
                                </div>
                                <div>
                                    <span>۴</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate4Cnt / adviser.score) * 100}
                                        max={100}
                                    />
                                    {/*<span>{`( ${numberFormat.toPersianDigits(*/}
                                    {/*    adviser.rate4Cnt*/}
                                    {/*)} رای )`}</span>*/}
                                </div>
                                <div>
                                    <span>۳</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate3Cnt / adviser.score) * 100}
                                        max={100}
                                    />
                                    {/*<span>{`( ${numberFormat.toPersianDigits(*/}
                                    {/*    adviser.rate3Cnt*/}
                                    {/*)} رای )`}</span>*/}
                                </div>
                                <div>
                                    <span>۲</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate2Cnt / adviser.score) * 100}
                                        max={100}
                                   />
                                    {/*<span>{`( ${numberFormat.toPersianDigits(*/}
                                    {/*    adviser.rate2Cnt*/}
                                    {/*)} رای )`}</span>*/}
                                </div>
                                <div>
                                    <span>۱</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate1Cnt / adviser.score) * 100}
                                        max={100}
                                    />
                                    {/*<span>{`( ${numberFormat.toPersianDigits(*/}
                                    {/*    adviser.rate1Cnt*/}
                                    {/*)} رای )`}</span>*/}
                                </div>
                            </div>
                        </div>
                        <div className={classes.hiddenMd}>
                            <div>
                                <p>{numberFormat.toPersianDigits(adviser.contactCnt)} نفر</p>
                                <p>مخاطب</p>
                            </div>
                            <div>
                                <p>{numberFormat.toPersianDigits(transform.secondsToH(adviser.activityTime))}</p>
                                {/* <p>{activityTime(adviser.activityTime)}</p> */}
                                <p>فعالیت</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.filterWrapper}>
                        <div className={classes.rateScore}>
                            <div className={classes.rateWrapper}>
                                <div className={classes.rate}>
                                    <span>{numberFormat.toPersianDigits(adviser.score)}</span>
                                    <Rating
                                        value={adviser.score}
                                        max={5}
                                        readOnly
                                        style={{flexDirection: 'row-reverse' , marginTop:0}}
                                        icon={<StarRoundedIcon
                                            style={{
                                                color: "#FFD803",
                                                fontSize: 20,
                                            }}
                                        />}
                                        emptyIcon={
                                            <StarRoundedIcon
                                                style={{
                                                    color: "#aab8c1",
                                                    fontSize: 20,
                                                }}
                                            />
                                        }

                                    />

                                </div>
                                <p
                                    style={{
                                        marginRight: 5,
                                        marginTop: 4
                                    }}
                                >
                                    (از {numberFormat.toPersianDigits(adviser.rateCnt)} رای)
                                </p>
                            </div>
                            <div className={classes.scoresWrapper}>
                                <div>
                                    <span>۵</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate5Cnt / adviser.score) * 100}
                                        max={100}
                                    ></progress>
                                    <span>{`( ${numberFormat.toPersianDigits(
                                        adviser.rate5Cnt
                                    )} رای )`}</span>
                                </div>
                                <div>
                                    <span>۴</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate4Cnt / adviser.score) * 100}
                                        max={100}
                                    >
                                        {" "}
                                    </progress>
                                    <span>{`( ${numberFormat.toPersianDigits(
                                        adviser.rate4Cnt
                                    )} رای )`}</span>
                                </div>
                                <div>
                                    <span>۳</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate3Cnt / adviser.score) * 100}
                                        max={100}
                                    >
                                        {" "}
                                    </progress>
                                    <span>{`( ${numberFormat.toPersianDigits(
                                        adviser.rate3Cnt
                                    )} رای )`}</span>
                                </div>
                                <div>
                                    <span>۲</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate2Cnt / adviser.score) * 100}
                                        max={100}
                                    >
                                        {" "}
                                    </progress>
                                    <span>{`( ${numberFormat.toPersianDigits(
                                        adviser.rate2Cnt
                                    )} رای )`}</span>
                                </div>
                                <div>
                                    <span>۱</span>
                                    <progress
                                        id="file"
                                        value={(adviser.rate1Cnt / adviser.score) * 100}
                                        max={100}
                                    ></progress>
                                    <span>{`( ${numberFormat.toPersianDigits(
                                        adviser.rate1Cnt
                                    )} رای )`}</span>
                                </div>
                            </div>
                        </div>

                        <div className={classes.countWrapper}>
                            <div>
                                <div>
                                    <p>{numberFormat.toPersianDigits(adviser.contactCnt)} نفر</p>
                                    <p>مخاطب</p>
                                </div>
                                <div>
                                    <p>
                                        {numberFormat.toPersianDigits(
                                            transform.secondsToH(adviser.activityTime)
                                        )}
                                    </p>
                                    <p>فعالیت</p>
                                </div>
                            </div>
                            {/*<button*/}
                            {/*    className={classes.filterBtn}*/}
                            {/*    onClick={() => showFilterModal(true)}*/}
                            {/*>*/}
                            {/*    <img src={filterIcon} alt=""/>*/}
                            {/*    محدودسازی*/}
                            {/*</button>*/}
                        </div>
                    </div>

                    <InfiniteScroll
                        dataLength={opinions.result?.length}
                        next={() =>
                            Dispatch(
                                getOpinionsList(
                                    false,
                                    opinions.filter
                                        ? {...opinions.filterQuery, offset: +1}
                                        : {max: 15, offset: opinions.offset + 1}
                                )
                            )
                        }
                        hasMore={(opinions?.offset + 1) * opinions?.max < opinions?.total}
                        loader={<p style={{textAlign: "center"}}>در حال بارگزاری...</p>}
                    >
                        {opinions.result.length > 0 ? (
                            opinions.result.map(
                                (opinion, index) =>
                                    opinion.comment && (
                                        <OpinionItem opinion={opinion} index={index}/>
                                    )
                            )
                        ) : (
                            <div
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    margin: "100px 0",
                                }}
                            >
                                <img src={noData} alt="no data"/>
                                <p style={{fontSize: 20}}>هیچ موردی یافت نشد!</p>
                            </div>
                        )}
                    </InfiniteScroll>
                </Fragment>
            ) : (
                <SkeletonLoading/>
            )}
            {showModal && (
                <OpinionsFilterModal
                    filterValues={filterValues}
                    handelFilterValue={(value) => setFilterValue(value)}
                    closeModal={handelCloseModal}
                    advisorId={adviser.id}
                />
            )}
        </div>
    );
};

export default Opinions;
