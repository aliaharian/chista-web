import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import SearchRoundedIcon from "../../../../../assets/images/searchIcon.svg"

import { Button, Menu, withStyles } from "@material-ui/core";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";


// import useStyles from "./Styles";
import FilterSelect from "../../../../form/FilterSelect";
import CircularProgress from '@material-ui/core/CircularProgress';
import closeIcon from "../../../../../assets/images/close.svg";
import settingIcon from "../../../../../assets/images/setting.svg"
import ActivityFilterModal from "./activityFilterModal/ActivityFilterModal";
import classes from '../../../../../../src/assets/stylesheet/profile/activities/activitiesHeader.module.scss';
import ChistaSearchInput from "../../../../Kit/Inputs/ChistaSearchInput";
import activityFilterIcon from '../../../../../../src/assets/images/activityFilter.svg'
import ChistaButton from "../../../../Kit/Buttons/ChistaButton";
import addIcon from '../../../../../assets/images/white_add.webp'
const ActivitiesHeader = (props) => {
    const router = useRouter();
    // const classes = useStyles();
    const Dispatch = useDispatch();
    const [isExpand, setIsExpand] = useState(false);
    const [showModalCheck, setShowModalCheck] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [activityType, setActivityType] = useState('all');
    const [activityDone, setActivityDone] = useState('all');
    const searchInput = useRef(null);
    const [openActivityFilter, setOpenActivityFilter] = useState(false)
    const [openDoneFilter, setOpenDoneFilter] = useState(false)
    const [resFilterTop, setResFilterTop] = React.useState(0);
    const [prevScrollpos, setPrevScrollpos] = React.useState(0);
    const [openFilter, setOpenFilter] = useState(false)
    const userDetail = useSelector((state) => state.user.userDetail);




    const handleScroll = () => {
        // let height = window.
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setResFilterTop(79)
        } else {
            setResFilterTop(0)

        }
        setPrevScrollpos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


    let loadClassesLoading = useSelector(
        (state) => state.adviserDashboard.classesListLoading
    );

    const toggleExpand = () => {

        setIsExpand(!isExpand);
        if (!isExpand) console.log('ok')
        else {
            // setSearchText('')
            // props.changeActivityFilterObj({ activityType: activityType })

            setSearchText('')
            let obj = {};
            if (activityType !== 'all') obj.activityType = activityType
            if (activityDone !== 'all') obj.activityDone = activityDone
            obj.q = ""
            props.changeActivityFilterObj(obj)
        }
    };


    const handleInsertActivity = () => {
        props.setOpenInsertActivity(true)
    };


    return (
        <>

            {props.isMobile &&
                <>
                    <ActivityFilterModal
                        open={openFilter}
                        handleClose={() => setOpenFilter(false)}
                        handleSubmit={(e) => {
                            props.changeActivityFilter({ target: { value: e.activityType } })
                            setActivityType(e.activityType)
                            props.changeDoneFilter({ target: { value: e.doneByExaminee } })
                            setActivityDone(e.doneByExaminee)
                            let obj = {};
                            if (e.activityType !== 'all') obj.activityType = e.activityType
                            if (e.doneByExaminee !== 'all') obj.activityDone = e.doneByExaminee
                            obj.q = searchText
                            props.changeActivityFilterObj(obj)
                        }}
                    />
                    <div className={classes.mobileAddClassHeader}>
                        <div className={
                            clsx(
                                classes.breadCrumb,
                                !props.isMobile && classes.mb24
                            )}
                            onClick={() => {
                                router.push('/profile/dashboard')
                            }
                            }
                        >
                            <ArrowForwardRoundedIcon />
                            <p>فعالیت های من</p>
                        </div>
                        <div>
                        {(userDetail && (userDetail?.teacher || userDetail?.groupOwner)) &&
                            <div className={classes.addActivityBtnContainer}>
                                <ChistaButton
                                    withBgColor
                                // onClick={() => handleOpenActivity(data)}
                                >
                                    <img src={addIcon}/>
                                    <span>ایجاد فعالیت</span>
                                </ChistaButton>
                            </div>
                        }
                        </div>

                    </div>
                </>
            }


            {props.isMobile &&
                <div className={classes.headerWrapper}>
                    <ChistaSearchInput
                        customClassContainer={classes.activitiesMenuSearch}
                        // inputClassName={classes.myClassMenuSearchInput}
                        lastIcon={
                            searchText.length === 0 ?
                                SearchRoundedIcon
                                :
                                closeIcon
                        }
                        onChange={(e) => {
                            setIsExpand(true)
                            setSearchText(e.target.value)
                            let obj = {};
                            if (activityType !== 'all') obj.activityType = activityType
                            if (activityDone !== 'all') obj.activityDone = activityDone
                            obj.q = e.target.value
                            props.changeActivityFilterObj(obj)

                        }}
                        placeholder={'جستجو'}
                        inputValue={searchText}
                        showLastIcon
                        onClickLastIcon={toggleExpand}
                    />
                    <img src={activityFilterIcon} style={{ cursor: 'pointer' }} onClick={() => { setOpenFilter(true) }} />
                </div>
            }


            {!props.isMobile &&
                <div className={classes.actions}>
                    <div>

                        <ChistaSearchInput
                            customClassContainer={classes.activitiesMenuSearch}
                            // inputClassName={classes.myClassMenuSearchInput}
                            lastIcon={
                                searchText.length === 0 ?
                                    SearchRoundedIcon
                                    :
                                    closeIcon
                            }
                            onChange={(e) => {
                                setIsExpand(true)
                                setSearchText(e.target.value)
                                let obj = {};
                                if (activityType !== 'all') obj.activityType = activityType
                                if (activityDone !== 'all') obj.activityDone = activityDone
                                obj.q = e.target.value
                                props.changeActivityFilterObj(obj)

                            }}
                            placeholder={'جستجو'}
                            inputValue={searchText}
                            showLastIcon
                            onClickLastIcon={toggleExpand}
                        />
                        <div className={classes.filterBtn}>
                            <img src={activityFilterIcon} />
                        </div>

                        {/* <FilterSelect

                            open={openActivityFilter}
                            handleOpen={() => setOpenActivityFilter(true)}
                            handleClose={() => setOpenActivityFilter(false)}
                            value={activityType}
                            marginRight={20}
                            handleChange={(e) => {
                                props.changeActivityFilter(e)
                                setActivityType(e.target.value)
                                let obj = {};
                                if (e.target.value !== 'all') obj.activityType = e.target.value
                                if (activityDone !== 'all') obj.activityDone = activityDone
                                obj.q = searchText
                                props.changeActivityFilterObj(obj)

                            }}
                            label={`نوع`}
                            datas={[
                                {
                                    label: `نوع: همه`,
                                    value: `all`
                                },
                                {
                                    label: `آزمون`,
                                    value: `EXAM`
                                },
                                {
                                    label: `تکلیف`,
                                    value: `ASSIGNMENT`
                                },
                                {
                                    label: `سایر`,
                                    value: `OTHER`
                                },

                            ]}
                        /> */}



                    </div>


                    <div>
                        {(userDetail && (userDetail?.teacher || userDetail?.groupOwner)) &&
                            <div className={classes.addActivityBtnContainer}>
                                <ChistaButton
                                    withBgColor
                                // onClick={() => handleOpenActivity(data)}
                                >
                                    <img src={addIcon}/>
                                    <span>ایجاد فعالیت</span>
                                </ChistaButton>
                            </div>
                        }
                    </div>
                </div>}

        </>
    );
}
    ;

export default ActivitiesHeader;
