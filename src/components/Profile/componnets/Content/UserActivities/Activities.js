import { Grid, TableCell, TableRow, useMediaQuery, useTheme } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce/lib";
import { activeActivity, getActivityDescriptives, getUserActivityList } from "../../../../../../redux/activity";
import ClassItemSkeleton from "../MyClass/ClassItemSkeleton";
import ActivitiesHeader from "./ActivitiesHeader";
import ActivityItem from "./ActivityItem";
// import useStyles from './Styles'
import noData from "../../../../../assets/images/noDataFaaliat.svg";
import clsx from "clsx";
import { useRouter } from "next/router";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import classes from '../../../../../../src/assets/stylesheet/profile/activities/activities.module.scss';
import { convertNumberToLetter } from "../../../../../utilities/convertToArabicNum";
import ChistaButton from "../../../../Kit/Buttons/ChistaButton";
import addIcon from '../../../../../assets/images/white_add.webp'

function Activities({ activitiesProp }) {
    const [addListShadow, setAddListShadow] = useState('none');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [activityFilter, setActivityFilter] = useState(`all`)
    const [activityDone, setActivityDone] = useState('all');
    const [pageNumber, setPageNumber] = useState(0)
    const [activityFilterObj, setActivityFilterObj] = useState({})
    const [hasActivity, setHasActivity] = useState(false)
    // const classes = useStyles()
    const user = useSelector((state) => state.user.user);
    const Dispatch = useDispatch()
    const router = useRouter();
    const userDetail = useSelector((state) => state.user.userDetail);

    const [userActivities, setUserActivities] = useState(activitiesProp)
    const activeActivityResponse = useSelector((state) => state.activity.activeActivityResponse);
    const activitiesState = useSelector((state) => state.activity.userActivities);
    const activityDescriptives = useSelector((state) => state.activity.activityDescriptives);
    const [openInsertActivity, setOpenInsertActivity] = useState(false)
    console.log('activitiesProp', activitiesProp)
    const [debouncedFunction] = useDebouncedCallback((e) => {
        setPageNumber(0)
        Dispatch(
            getUserActivityList(
                false,
                user.username,
                { pageSize: 10, pageNumber: 0 },
                e,
                true
            )
        )
    }, 500);
    useEffect(() => {
        if (userActivities?.totalElements !== 0) {
            setHasActivity(true)
        }
    }, [])


    useEffect(() => {
        if (activitiesState) {
            console.log('updated')
            setUserActivities(activitiesState)
        }
    }, [activitiesState])

    useEffect(() => {
        !activityDescriptives &&
            Dispatch(
                getActivityDescriptives()
            )
    }, [activityDescriptives])


    useEffect(() => {
        if (activeActivityResponse) {
            Dispatch(
                getUserActivityList(
                    false,
                    user.username,
                    { pageSize: 10, pageNumber: pageNumber },
                    activityFilterObj
                )
            )
        }
    }, [activeActivityResponse])

    const handleActive = (id) => {
        Dispatch(activeActivity(id, true))
    }
    console.log(!activityFilterObj.q)
    return (
        <>


            <div className={classes.activityWrapper}>
                <Fragment>
                    {
                        (userActivities?.totalElements !== 0 || Object.keys(activityFilterObj).length !== 0) &&
                        <ActivitiesHeader
                            activityFilter={activityFilter}
                            doneFilter={activityDone}
                            isMobile={isMobile}
                            addListShadow={addListShadow}
                            setOpenInsertActivity={setOpenInsertActivity}
                            changeActivityFilter={(e) => {
                                setActivityFilter(e.target.value == 'all' ? null : e.target.value)
                            }}

                            changeDoneFilter={(e) => {
                                setActivityDone(e.target.value == 'all' ? null : e.target.value)
                            }}

                            changeActivityFilterObj={(e) => {
                                console.log('changeActivityFilterObj', e)
                                setActivityFilterObj(e)
                                debouncedFunction(e)
                            }}

                        />
                    }

                    {
                        (!(userActivities?.totalElements !== 0 || Object.keys(activityFilterObj).length !== 0) && isMobile) &&


                        <div className={classes.mobileAddClassHeader}>
                            <div className={
                                clsx(
                                    classes.breadCrumb,
                                )}
                                onClick={() => {
                                    router.push('/profile/dashboard')
                                }
                                }
                            >
                                <ArrowForwardRoundedIcon />
                                <p>فعالیت های من</p>
                            </div>

                        </div>

                    }
                    {activityFilterObj.q !== "" && activityFilterObj.q ?
                        <div className={classes.resultForSearchInActivitiesContainer}>
                            <p className={classes.allResultForSearch}>نتایج جستجو</p>
                            <p className={classes.numOfResultForSearch}>{userActivities.content?.length == 0 ? `هیچ نتیجه ای برای "${activityFilterObj.q}" یافت نشد` : `${convertNumberToLetter(userActivities.content?.length)} نتیجه برای جستجو "${activityFilterObj.q}"`}</p>
                        </div>
                        : null}
                    {userActivities &&
                        <InfiniteScroll
                            style={{ overflow: 'visible' }}
                            dataLength={userActivities?.content?.length}
                            next={() => {
                                setPageNumber(userActivities?.pageNumber + 1)
                                Dispatch(
                                    getUserActivityList(
                                        false,
                                        user.username,
                                        { pageSize: 10, pageNumber: userActivities.pageNumber + 1 },
                                        activityFilterObj
                                    )
                                )
                            }
                            }
                            hasMore={(userActivities?.pageNumber + 1) < userActivities?.totalPages}
                            loader={
                                <Grid container className={classes.classListContainer}>
                                    در حال بارگزاری...

                                </Grid>
                            }
                        // loader={<p style={{textAlign: "center"}}>در حال بارگزاری...</p>}
                        >
                            <Grid container className={classes.activityItemContainer}>
                                {
                                    userActivities.content?.map((data) => (
                                        data.active && <ActivityItem
                                            data={data}
                                            handleActive={handleActive}
                                        />
                                    ))
                                }
                            </Grid>
                        </InfiniteScroll>}

                    {!userActivities &&

                        <Grid container className={classes.classListContainer}>
                            <ClassItemSkeleton />
                            <ClassItemSkeleton />
                            <ClassItemSkeleton />

                        </Grid>
                    }

                    {
                        userActivities?.totalElements === 0 &&
                        <TableRow style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TableCell
                                colspan="5"
                                style={{
                                    width: "100%",
                                    textAlign: "center",
                                    paddingTop: 100,
                                    borderBottom: 'none'
                                }}
                            >
                                {!activityFilterObj || !activityFilterObj.q || activityFilterObj.q == "" ?
                                    <>
                                        {activityFilterObj.q == "" ? null : <img src={noData} alt="no data" style={{ width: 170 }} />}
                                        <p style={{ fontSize: 13, color: '#0c0b31', fontFamily: 'chistaYekanM', marginTop: 30 }}>

                                            {
                                                hasActivity ?
                                                    "موردی یافت نشد"
                                                    :
                                                    "هنوز هیچ فعالیتی توسط شما ایجاد نشده است"
                                            }
                                        </p>
                                        {(userDetail && (userDetail?.teacher || userDetail?.groupOwner)) &&
                                            <div className={classes.addActivityBtnContainer}>
                                                <ChistaButton
                                                    withBgColor
                                                // onClick={() => handleOpenActivity(data)}
                                                >
                                                    <img src={addIcon} />
                                                    <span>ایجاد فعالیت</span>
                                                </ChistaButton>
                                            </div>
                                        }
                                    </>
                                    : null
                                }

                            </TableCell>
                        </TableRow>

                    }
                </Fragment>
            </div>
        </>
    )

}

export default Activities