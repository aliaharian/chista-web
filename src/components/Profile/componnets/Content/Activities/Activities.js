import { Button, Grid, TableCell, TableRow, useMediaQuery, useTheme } from "@material-ui/core";
import { Fragment, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useDebouncedCallback } from "use-debounce/lib";
import { activeActivity, getActivityDescriptives, getOstadActivityList } from "../../../../../../redux/activity";
import { getClassesList } from "../../../../../../redux/adviserDashboard";
import ClassItemSkeleton from "../MyClass/ClassItemSkeleton";
import MyClassDesktop from "../MyClass/MyClassDesktop";
import ActivitiesHeader from "./ActivitiesHeader";
import ActivityItem from "./ActivityItem";
import useStyles from './Styles'
import noData from "../../../../../assets/images/noDataFaaliat.svg";
import InsertActivityDialog from "./InsertActivity/Dialog";
import clsx from "clsx";
import axios from 'axios';
import Style from '../../../../../assets/stylesheet/profile/activities/activities.module.scss';
import { errorSnackbar } from "../../../../../../redux/user";
import DeactiveModal from "./ActivityDetail/deactiveModal/DeactiveModal";
import { convertNumberToLetter } from "../../../../../utilities/convertToArabicNum";

function Activities({ activitiesProp }) {
    const [addListShadow, setAddListShadow] = useState('none');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
    const [activityFilter, setActivityFilter] = useState(`all`)
    const [pageNumber, setPageNumber] = useState(0)
    const [openDeactive, setOpenDeactive] = useState(false)
    const [hasActivity, setHasActivity] = useState(false)

    const [activityFilterObj, setActivityFilterObj] = useState({})
    const [selectedActivity, setSelectedActivity] = useState(0)
    const classes = useStyles()
    const user = useSelector((state) => state.user.user);
    const Dispatch = useDispatch()
    const [ostadActivities, setOstadActivities] = useState(activitiesProp)
    const activeActivityResponse = useSelector((state) => state.activity.activeActivityResponse);
    const activitiesState = useSelector((state) => state.activity.ostadActivities);
    const activityDescriptives = useSelector((state) => state.activity.activityDescriptives);
    const [openInsertActivity, setOpenInsertActivity] = useState(false)
    const [prevData, setPrevData] = useState()
    const userDetail = useSelector((state) => state.user.userDetail);
    const loadingActivity = useSelector((state) => state.activity.ostadActivityListLoading)

    const [debouncedFunction] = useDebouncedCallback((e) => {
        setPageNumber(0)
        Dispatch(
            getOstadActivityList(
                false,
                user.username,
                { pageSize: 10, pageNumber: 0 },
                e,
                true,
                true
            )
        )
    }, 500);

    useEffect(() => {
        if (ostadActivities?.totalElements !== 0)
            setHasActivity(true)
    })
    useEffect(() => {
        if (activitiesState)
            setOstadActivities(activitiesState)
    }, [activitiesState])

    useEffect(() => {
        !activityDescriptives &&
            Dispatch(
                getActivityDescriptives()
            )
    }, [activityDescriptives])

    const handleActive = (id) => {
        Dispatch(activeActivity(id, true))
    }
    const _handleCompleteActivity = async (data) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityExaminees/page`,
                {
                    "filter": "activityId=" + data.id,
                    "pageSize": 10000
                }
            );
            const questionsResponse =await axios.get(`${process.env.REACT_APP_ACTIVITY_URL}/activityQuestions/withAnswerInfo/${data.id}`);

            setPrevData({ ...data, questions: [...questionsResponse.data], examinees: [...response.data.content] })
            setOpenInsertActivity(true)

        } catch (err) {
            Dispatch(errorSnackbar(err));
        }
    }
    return (
        <>
            <DeactiveModal
                showModal={openDeactive}
                closeModal={() => setOpenDeactive(false)}
                handelSubmit={() => {
                    handleActive(selectedActivity.id)
                    setOpenDeactive(false)
                }}
                active={selectedActivity.active}
            />
            <InsertActivityDialog
                resetFilter={() => {
                    changeActivityFilter({ target: { value: 'all' } })
                }}
                open={openInsertActivity}
                toggleOpen={() => setOpenInsertActivity(!openInsertActivity)}
                prevData={prevData}
            />
            <div className={classes.activityWrapper}>
                <Fragment>
                    {
                        <ActivitiesHeader
                            hasActivity={hasActivity}
                            loadingActivity={loadingActivity}
                            activityFilter={activityFilter}
                            userDetail={userDetail}
                            isMobile={isMobile}
                            addListShadow={addListShadow}
                            setOpenInsertActivity={(e) => {
                                setPrevData(null)
                                setOpenInsertActivity(e)
                            }}
                            changeActivityFilter={(e) => {
                                setActivityFilter(e.target.value)
                            }}
                            changeActivityFilterObj={(e) => {
                                setActivityFilterObj(e)
                                debouncedFunction(e)
                            }}
                        />
                    }
                    {activityFilterObj.q !== "" && activityFilterObj.q ?
                    <div className={Style.resultForSearchInActivitiesContainer}>
                        <p className={Style.allResultForSearch}>نتایج جستجو</p> 
                        <p className={Style.numOfResultForSearch}>{ostadActivities.content?.length == 0 ? `هیچ نتیجه ای برای "${activityFilterObj.q}" یافت نشد`: `${convertNumberToLetter(ostadActivities.content?.length)} نتیجه برای جستجو "${activityFilterObj.q}"`}</p>
                    </div>
                    : null}
                    {ostadActivities && <InfiniteScroll
                        style={{ overflow: 'visible' }}
                        dataLength={ostadActivities?.content?.length}
                        next={() => {
                            setPageNumber(ostadActivities?.pageNumber + 1)
                            Dispatch(
                                getOstadActivityList(
                                    false,
                                    user.username,
                                    { pageSize: 10, pageNumber: ostadActivities.pageNumber + 1 },
                                    activityFilterObj
                                )
                            )
                        }
                        }
                        hasMore={(ostadActivities?.pageNumber + 1) < ostadActivities?.totalPages}
                    >
                        <div className={classes.activityItemContainer}>
                            {
                                ostadActivities.content?.map((data) => (
                                    <ActivityItem
                                        data={data}
                                        handleActive={() => {
                                            setSelectedActivity(data)
                                            setOpenDeactive(true)
                                        }}
                                        handleCompleteActivity={() => _handleCompleteActivity(data)}
                                    />
                                ))
                            }
                        </div>
                    </InfiniteScroll>}

                    {!ostadActivities &&
                        <Grid container className={classes.classListContainer}>
                            <ClassItemSkeleton />
                            <ClassItemSkeleton />
                            <ClassItemSkeleton />
                        </Grid>
                    }
                    {
                        ostadActivities?.totalElements === 0 &&
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
                                        <img src={noData} alt="no data" style={{ width: 170 }} />
                                        <p style={{ fontSize: 13, color: '#0c0b31', fontFamily: 'chistaYekanM', marginTop: 30 }}>
                                            {
                                                (hasActivity || loadingActivity) ?
                                                    "موردی یافت نشد"
                                                    :
                                                    "هنوز هیچ فعالیتی توسط شما ایجاد نشده است"}
                                        </p>
                                    </>
                                    :null
                                }
                                {
                                    (!hasActivity && !loadingActivity) &&
                                    <>
                                        {userDetail.teacher &&
                                            <Button
                                                className={clsx(
                                                    classes.addClassInNoActivity,
                                                    classes.statusWrapper,
                                                    classes.statusWrapperActive,
                                                    classes.addClass,
                                                )}
                                                style={{ margin: '30px auto' }}
                                                onClick={() => setOpenInsertActivity(true)}
                                            >
                                                <span>ایجاد فعالیت</span>
                                            </Button>}
                                    </>
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