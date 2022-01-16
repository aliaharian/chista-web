import React, { useState, Fragment, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import filterIcon from "../../../../../assets/images/filter.svg";
import { useDispatch, useSelector } from "react-redux";
import { getClassesList } from "../../../../../../redux/adviserDashboard";
import noData from "../../../../../assets/images/noData.svg";
import MyClassHeader from "./MyClassHeader";
import MyClassDesktop from "./MyClassDesktop";
import MyClassMobile from "./MyClassMobile";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Grid, useTheme } from "@material-ui/core";
import clsx from "clsx";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import MyClassSkeleton from "./MyClassSkeleton";
import ClassItemSkeleton from "./ClassItemSkeleton";
import { Scrollbars } from "react-custom-scrollbars";
import { useRouter } from "next/router";
import { componentsUpdateField, joinToClass } from "../../../../../../redux/groups";
import EndClassModal from "../Contacts/contactDetail/tabs/CommonGroups/EndClassModal/EndClassModal";
import axios from 'axios'
import { errorSnackbar } from "../../../../../../redux/user";
import classes from '../../../../../assets/stylesheet/profile/myClass/myClasses.module.scss'
import ChistaButton from "../../../../Kit/Buttons/ChistaButton";

const MyClass = ({ myClass, checkOwner }) => {

    const Dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(900));
    const [classFilter, setClassFilter] = useState(`all`)
    const [searchText, setSearchText] = useState(``)
    const [showModal, setShowModal] = useState();
    const [myClassData, setMyClassData] = useState(myClass);
    const [noData, setNoData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [addListShadow, setAddListShadow] = useState('none');

    const addContactScroll = useRef();
    const router = useRouter();
    const endClassModal = useSelector((state) => state.groups.endClassModal);
    const currentClassId = useSelector((state) => state.groups.currentClassId);
    const userInfo = useSelector((state) => state.user.user);

    let loadClassesLoading = useSelector(
        (state) => state.adviserDashboard.classesListLoading
    );
    let loadClassesLoadingPagination = useSelector(
        (state) => state.adviserDashboard.classesListLoadingPagination
    );
    const showFilterModal = (status) => {
        setShowModal(status);
    };
    React.useEffect(() => {
        setMyClassData(myClass)
        if (myClass.length === 0) {
            setNoData(true)
        }
    }, [myClass])
    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    })
    console.log('classesListLoading',loadClassesLoading)

    const handleScroll = () => {
        // console.log(addContactScroll.current.lastScrollTop)
        if (addContactScroll.current?.lastScrollTop < 150) {
            setAddListShadow('none')
        } else {
            setAddListShadow('has')
        }
    }
    const handleEndClass = async () => {
        console.log('cha', userInfo)

        try {
            if (currentClassId) {
                let response = await axios.get(`/group/joinEnd?chatGroupId=${currentClassId}&forceEnd=true`);
                await Dispatch(joinToClass(currentClassId, userInfo.chatUserId, 'chatGroupId', '_blank'))
                Dispatch(componentsUpdateField({ prop: "endClassModal", value: false }))
                Dispatch(componentsUpdateField({ prop: "currentClassId", value: null }))
            }
        }
        catch (e) {
            Dispatch(errorSnackbar(e))
        }
    }
    return (
        <div className={classes.myClassWrapper}>
            <EndClassModal
                closeModal={() => { Dispatch(componentsUpdateField({ prop: "endClassModal", value: false })) }}
                showModal={endClassModal}
                handelSubmit={handleEndClass}
            />
            {loading ?
                <MyClassSkeleton />
                :
                myClassData.result ? (
                    <Fragment>
                        {!myClassData.empty &&
                            <MyClassHeader
                                checkOwner={checkOwner}
                                classFilter={classFilter}
                                isMobile={isMobile}
                                addListShadow={addListShadow}
                                setSearchText={(e) => {
                                    setSearchText(e)
                                }}
                                searchText={searchText}
                                changeClassFilter={(e) => {
                                    setClassFilter(e.target.value)
                                }}
                            />}
                        {isMobile && myClassData.empty === true &&
                            <div className={
                                clsx(
                                    classes.breadCrumb
                                )}
                                onClick={() => router.push('/profile/dashboard')}
                            >
                                <ArrowForwardRoundedIcon />
                                <p>کلاس های من</p>
                            </div>
                        }

                        {
                            loadClassesLoading ?
                                <div className={classes.skeletonMyClassesMainContainer}>
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                    <ClassItemSkeleton />
                                </div>
                                :

                                // <InfiniteScroll
                                //     style={{ overflow: 'visible' }}
                                //     dataLength={myClassData.result?.length}
                                // next={() => {
                                //     Dispatch(
                                //         getClassesList(
                                //             false,
                                //             classFilter === `all` ?
                                //                 { max: 12, offset: myClassData.offset + 1, title: searchText }
                                //                 :
                                //                 { max: 12, offset: myClassData.offset + 1, active: classFilter, title: searchText }
                                //             ,
                                //             false
                                //         )
                                //     )
                                // }
                                // }
                                //     hasMore={(myClassData?.offset + 1) * myClassData?.max < myClassData?.total}
                                //     loader={
                                //         <div className={classes.skeletonMyClassesMainContainer}>
                                //             <ClassItemSkeleton />
                                //             <ClassItemSkeleton />
                                //             <ClassItemSkeleton />
                                //         </div>
                                //     }
                                // >
                                <>
                                    <MyClassDesktop myClass={myClassData}
                                        checkOwner={checkOwner}
                                        noData={noData}

                                    />
                                    {
                                        ((myClassData?.offset + 1) * myClassData?.max < myClassData?.total) &&
                                        <div className={classes.loadMoreBtnContainer}>
                                            <ChistaButton
                                                loading={loadClassesLoadingPagination}
                                                onClick={() => {
                                                    Dispatch(
                                                        getClassesList(
                                                            false,
                                                            classFilter === `all` ?
                                                                { max: 12, offset: myClassData.offset + 1, title: searchText }
                                                                :
                                                                { max: 12, offset: myClassData.offset + 1, active: classFilter, title: searchText }
                                                            ,
                                                            false
                                                        )
                                                    )
                                                }}
                                            >
                                                مشاهده بیشتر
                                            </ChistaButton>
                                        </div>
                                        }

                                </>
                            //  </InfiniteScroll> 
                        }
                    </Fragment>
                ) : (
                    <div style={{ width: "100%", textAlign: "center", marginTop: 30 }}>
                        <img src={noData} alt="no data" />
                        <p style={{ fontSize: 20 }}>هیچ موردی یافت نشد!</p>
                    </div>
                )}
        </div>
    );
};

export default MyClass;
