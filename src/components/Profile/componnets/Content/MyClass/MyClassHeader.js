import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import SearchRoundedIcon from "../../../../../assets/images/searchIcon.svg"
import classes from '../../../../../assets/stylesheet/profile/myClass/myClassHeader.module.scss';
import { Button, Menu, withStyles } from "@material-ui/core";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch, useSelector } from "react-redux";
import AddWhite from '../../../../../assets/images/white_add.webp';
import filterIcon from '../../../../../assets/images/settingBlue.svg';
import MyClassCheckOwner from "./MyClassCheckOwner";
import { getClassesList } from "../../../../../../redux/adviserDashboard";

import Link from "../../../../Link/Link";
import CloseIcon from '@material-ui/icons/Close';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InsertClassDialog from "./InsertClass/Dialog";

import FilterSelect from "../../../../form/FilterSelect";
import CircularProgress from '@material-ui/core/CircularProgress';
import closeIcon from "../../../../../assets/images/close.svg";
import SingleSelectChistaDropdown from "../../../../Kit/Dropdown/SingleSelectChistaDropdown";
import ChistaButton from "../../../../Kit/Buttons/ChistaButton";
import ChistaTextField from "../../../../Kit/Inputs/ChistaTextField";
import ChistaSearchInput from "../../../../Kit/Inputs/ChistaSearchInput";
import ClassFilterModal from "./ClassFilterModal";


const MyClassHeader = ({ checkOwner, ...props }) => {
    const router = useRouter();
    const Dispatch = useDispatch();
    const [isExpand, setIsExpand] = useState(false);
    const [showModalCheck, setShowModalCheck] = useState(false);
    // const [searchText, setSearchText] = useState('');
    const searchInput = useRef(null);
    const [openInsertClass, setOpenInsertClass] = useState(false)
    const [openClassFilter, setOpenClassFilter] = useState(false)
    const [resFilterTop, setResFilterTop] = React.useState(0);
    const [prevScrollpos, setPrevScrollpos] = React.useState(0);
    const [openFilterModal, setOpenFilterModal] = React.useState(false);

    const [debouncedFunction] = useDebouncedCallback((value) => {
        if (value.q !== undefined && value.active !== undefined) {
            if (value.active == 'all') {
                Dispatch(getClassesList(false, { title: value.q, max: 12 }, true));
            } else {
                Dispatch(getClassesList(false, { title: value.q, active: value.active, max: 12 }, true));
            }
        }
    }, 500);



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
            props.setSearchText('')
            debouncedFunction({ q: '', active: props.classFilter })
        }
    };

    const handelToggleModalCheckOwner = () => {
        setShowModalCheck((showModalCheck) => !showModalCheck);
    };

    const handleInsertClass = () => {
        if (checkOwner.responseCode !== 200) {
            setShowModalCheck(true);
            return;
        } else {
            setOpenInsertClass(true)
        }
        // router.push("/profile/dashboard/myClass/insertClass");
    };


    return (
        <>
            <InsertClassDialog
                resetFilter={() => {
                    props.setSearchText('')
                    debouncedFunction('')
                    props.changeClassFilter({ target: { value: 'all' } })
                }}
                open={openInsertClass} toggleOpen={() => setOpenInsertClass(!openInsertClass)} />
            {props.isMobile &&
                <>
                    <div className={classes.mobileAddClassHeader}>
                        <div className={classes.breadCrumb}
                            onClick={() => {
                                router.push('/profile/dashboard')
                            }
                            }
                        >
                            <ArrowForwardRoundedIcon />
                            <p>کلاس های من</p>
                        </div>
                        <ChistaButton onClick={handleInsertClass}>
                            <img src={AddWhite} alt={'add'} />
                            <span>کلاس جدید</span>
                        </ChistaButton>
                    </div>
                </>
            }


            {props.isMobile && <div className={classes.headerWrapper}>
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
                        value={props.searchText}
                        autoComplete={`off`}
                        onChange={(e) => {
                            setIsExpand(true)
                            props.setSearchText(e.target.value)
                            debouncedFunction({ q: e.target.value, active: props.classFilter })
                        }}
                    />
                    {
                        loadClassesLoading &&
                        <CircularProgress className={classes.classSearchLoading} />

                    }
                    {
                        props.searchText.length === 0 ?
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
                <img src={filterIcon} onClick={()=>setOpenFilterModal(true) } />
                {/* <FilterSelect
                    open={openClassFilter}
                    handleOpen={() => setOpenClassFilter(true)}
                    handleClose={() => setOpenClassFilter(false)}
                    value={props.classFilter}
                    handleChange={(e) => {
                        props.changeClassFilter(e)
                        debouncedFunction({ q: props.searchText, active: e.target.value })
                    }}
                    label={`نمایش`}
                    datas={[
                        {
                            label: `همه`,
                            value: `all`
                        },
                        {
                            label: `فعال`,
                            value: `true`
                        },
                        {
                            label: `غیر فعال`,
                            value: `false`
                        },
                        // {
                        //     label: `شروع نشده`,
                        //     value: `notStarted`
                        // },
                    ]}
                /> */}
            </div>}


            {!props.isMobile &&
                <div className={classes.myClassMenuContainerDesktop}>
                    <div>
           
                        <ChistaSearchInput
                            customClassContainer={classes.myClassMenuSearch}
                            inputClassName={classes.myClassMenuSearchInput}
                            lastIcon={
                                props.searchText.length === 0 ?
                                    SearchRoundedIcon
                                    :
                                    closeIcon
                            }
                            onChange={(e) => {
                                setIsExpand(true)
                                // setSearchText(e.target.value)
                                props.setSearchText(e.target.value)
                                debouncedFunction({ q: e.target.value, active: props.classFilter })
                            }}
                            placeholder={'جستجو در نام کلاس یا استاد'}
                            inputValue={props.searchText}
                            showLastIcon

                            onClickLastIcon={toggleExpand}
                        />
                       
                        <SingleSelectChistaDropdown

                            options={[
                                {
                                    title: `همه`,
                                    value: `all`
                                },
                                {
                                    title: `فعال`,
                                    value: `true`
                                },
                                {
                                    title: `غیر فعال`,
                                    value: `false`
                                },
                                // {
                                //     title: `شروع نشده`,
                                //     value: `notStarted`
                                // },
                            ]}
                            selectedValue={props.classFilter}
                            customClassRoot={classes.filterDropdown}

                            handleChange={(e) => {
                                props.changeClassFilter(e)
                                debouncedFunction({ q: props.searchText, active: e.target.value })
                            }}
                            customSize={170}
                            dropdownCustomContainer={classes.filterClassesDropDown}
                        />
                    </div>
                    <ChistaButton onClick={handleInsertClass}>
                        <img src={AddWhite} alt={'add'} />
                        <span>کلاس جدید</span>
                    </ChistaButton>
                </div>}


            {showModalCheck && (
                <MyClassCheckOwner
                    checkOwner={checkOwner}
                    closeModal={handelToggleModalCheckOwner}
                    open={showModalCheck}
                />
            )}
            <ClassFilterModal
                open={openFilterModal}
                closeModal={() => { setOpenFilterModal(false) }}
                value={'نمایش وضعیت کلاس ها'}
                classFilter={props.classFilter}
                changeClassFilter={props.changeClassFilter}
                submit={()=>{
                    debouncedFunction({ q: props.searchText, active: props.classFilter })
                    setOpenFilterModal(false) 
                }}
            />
        </>
    );
}
    ;

export default MyClassHeader;
