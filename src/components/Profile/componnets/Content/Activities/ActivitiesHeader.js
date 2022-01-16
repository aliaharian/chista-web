import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import SearchRoundedIcon from "../../../../../assets/images/searchIcon.svg"
import { Button } from "@material-ui/core";
import clsx from "clsx";
import { useSelector } from "react-redux";
import useStyles from "./Styles";
import FilterSelect from "../../../../form/FilterSelect";
import CircularProgress from '@material-ui/core/CircularProgress';
import closeIcon from "../../../../../assets/images/close.svg";
import ActivityFilterModal from "./activityFilterModal/ActivityFilterModal";
import settingIcon from "../../../../../assets/images/setting.svg"

const ActivitiesHeader = ({ userDetail, ...props }) => {
    const router = useRouter();
    const classes = useStyles();

    const [isExpand, setIsExpand] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [activityType, setActivityType] = useState('all');
    const [openActivityFilter, setOpenActivityFilter] = useState(false)
    const [resFilterTop, setResFilterTop] = React.useState(0);
    const [prevScrollpos, setPrevScrollpos] = React.useState(0);
    const [openFilter, setOpenFilter] = React.useState(false);

    const handleScroll = () => {
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
            setSearchText('')
            props.changeActivityFilter({ target: { value: 'all' } })
            props.changeActivityFilterObj({})
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
                            let obj = {};
                            if (e.activityType !== 'all') obj.activityType = e.activityType
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
                            }}
                        >
                            <ArrowForwardRoundedIcon />
                            <p>فعالیت ها</p>
                        </div>
                        <div className={classes.addClassResBtn}>
                            {userDetail.teacher && ((props.hasActivity || props.loadingActivity)) &&
                                <Button
                                    className={clsx(
                                        classes.statusWrapper,
                                        classes.statusWrapperActive,
                                        classes.addClass
                                    )}
                                    onClick={handleInsertActivity}
                                >
                                    <span>ایجاد فعالیت</span>
                                </Button>}
                        </div>
                    </div>
                </>
            }
            {props.isMobile && ((props.hasActivity || props.loadingActivity)) &&
                <div className={classes.headerWrapper}>
                    <div
                        className={clsx(
                            classes.searchMobile,
                            classes.search,
                            classes.searchExpandMobile
                        )}
                    >
                        <input
                            name="title"
                            placeholder={`جستجو`}
                            value={searchText}
                            autoComplete={`off`}
                            onChange={(e) => {
                                setIsExpand(true)
                                setSearchText(e.target.value)
                                let obj = {};
                                if (activityType !== 'all') obj.activityType = activityType
                                obj.q = e.target.value
                                props.changeActivityFilterObj(obj)
                            }}
                        />
                        {
                            loadClassesLoading &&
                            <CircularProgress className={classes.classSearchLoading} />
                        }
                        {
                            searchText.length === 0 ?
                                <img src={SearchRoundedIcon}
                                    onClick={toggleExpand}
                                    className={classes.searchIcon} />
                                :
                                <img src={closeIcon}
                                    style={{
                                        height: 20,
                                        width: 20
                                    }}
                                    onClick={toggleExpand}
                                    className={classes.searchIcon} />
                        }
                    </div>
                    <img src={settingIcon} style={{ cursor: 'pointer' }} onClick={() => { setOpenFilter(true) }} />
                </div>
            }
            {!props.isMobile && ((props.hasActivity || props.loadingActivity)) &&
                <div className={classes.actions}>
                    <div>
                        <div
                            className={clsx(
                                classes.searchDesktop,
                                classes.search,
                                classes.searchExpand
                            )}
                        >
                            <input
                                name="title"
                                placeholder={`جستجو`}
                                value={searchText}
                                autoComplete={`off`}
                                onChange={(e) => {
                                    setIsExpand(true)
                                    setSearchText(e.target.value)
                                    props.changeActivityFilterObj(activityType === 'all' ? { q: e.target.value } : { q: e.target.value, activityType: activityType })
                                }}
                            />
                            {
                                loadClassesLoading &&
                                <CircularProgress className={classes.classSearchLoading} />
                            }
                            {
                                searchText.length === 0 ?
                                    <img src={SearchRoundedIcon}
                                        onClick={toggleExpand}
                                        className={classes.searchIcon} />
                                    :
                                    <img src={closeIcon}
                                        style={{
                                            height: 18,
                                            width: 18,
                                            top: 11
                                        }}
                                        onClick={toggleExpand}
                                        className={classes.searchIcon} />
                            }
                        </div>
                        <FilterSelect
                            open={openActivityFilter}
                            handleOpen={() => setOpenActivityFilter(true)}
                            handleClose={() => setOpenActivityFilter(false)}
                            value={props.activityFilter}
                            handleChange={(e) => {
                                props.changeActivityFilter(e)
                                setActivityType(e.target.value)
                                props.changeActivityFilterObj(e.target.value === 'all' ? { q: searchText } : { activityType: e.target.value, q: searchText })
                            }}
                            label={`نمایش`}
                            datas={[
                                {
                                    label: `همه`,
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
                        />
                    </div>
                    {userDetail.teacher &&
                        <Button
                            className={clsx(
                                classes.statusWrapper,
                                classes.statusWrapperActive,
                                classes.addClass
                            )}
                            onClick={handleInsertActivity}
                        >
                            <span>ایجاد فعالیت</span>
                        </Button>}
                </div>}
        </>
    );
};

export default ActivitiesHeader;
