import React, { useState, useEffect, useRef } from "react";
import SearchRoundedIcon from "../../../../../../../../assets/images/searchIcon.svg";
import closeIcon from "../../../../../../../../assets/images/close.svg";
import {
    ListItem,
    Checkbox,
    Typography,
} from "@material-ui/core";
import noData from "../../../../../../../../assets/images/meetings.svg";
import MemberItem from "./MemberItem";
import back from '../../../../../../../../assets/images/arrowBack.svg'
import useStyles from "./Styles";
import Style from '../../../../../../../../assets/stylesheet/profile/activities/activities.module.scss';
import { Scrollbars } from "react-custom-scrollbars";
import checkboxChecked from "../../../../../../../../assets/images/checkbox-checked.svg";
import { withSnackbar } from "notistack";
import danger from "../../../../../../../../assets/images/warning.svg"
import { numberFormat } from "../../../../../../../../utilities";

const AddMember = ({
    initialValues,
    handelStep,
    updateData,
    ...props
}) => {
    const classes = useStyles();
    const [contactFiltered, setContactFiltered] = useState();
    const [selectAll, setSelectAll] = useState(false);
    const [addListShadow, setAddListShadow] = useState('none');
    const [searchInput, setSearchInput] = useState('');
    const addContactScroll = useRef();
    const [onSearch, setOnSearch] = useState(false)
    const [checked, setChecked] = useState(initialValues.examinees || [])
    const contactProp = initialValues.addContactList;
    const [contact, setContact] = useState()
    const [showError, setShowError] = useState(false)

    const handleScroll = () => {
        if (addContactScroll.current.viewScrollTop < 5)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }
    const handelSubmit = () => {
        if (checked.length > 0) {
            handelStep("addQuestions", {
                examinees: checked
            });
        } else {
            setShowError(true)
        }
    };

    const handleToggle = (value) => () => {
        setShowError(false)
        const currentIndex = checked.findIndex(
            (item) => item.id === value.id || item.memberId === value.id
        );
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push({ ...value, memberId: value.memberId || value.id });
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        if (newChecked.length < contact.length) setSelectAll(false)
    };

    const handleSelectAll = (status) => {
        setSelectAll(status);
        if (status) {
            setChecked(contact)
        } else {
            setChecked([])
        }
    };

    const handleSearch = (e) => {
        setSearchInput(e.target.value)
        const filteredContact = (contact || []).filter((item) => {
            return (item.firstName || item.fullName)
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
        });
        setContactFiltered(filteredContact);
    };


    useEffect(() => {
        if (!contact) {
            let tmp = [];
            contactProp.map((c) => {
                if (c.roleType) {
                    if (c.roleType !== process.env.REACT_APP_OSTAD_ROLE_TYPE && c.roleType !== process.env.REACT_APP_GUEST_ROLE_TYPE && c.roleType !== process.env.REACT_APP_CREATOR_ROLE_TYPE) {
                        tmp.push(c)
                    }
                } else if (c.memberRoleType) {
                    if (c.memberRoleType !== process.env.REACT_APP_OSTAD_ROLE_TYPE && c.memberRoleType !== process.env.REACT_APP_GUEST_ROLE_TYPE && c.memberRoleType !== process.env.REACT_APP_CREATOR_ROLE_TYPE) {
                        tmp.push(c)
                    }
                }
            })
            setContact(tmp)
        }
    }, [contact])

    useEffect(() => {
        updateData && updateData({
            examinees: checked
        })
    }, [checked])
    return (
        <div className={classes.overrideStepContainer}>
            {showError &&
                <div className={classes.errorContainer}>
                    <img src={danger} />
                    <Typography>حداقل یک نفر را انتخاب کنید</Typography>
                </div>}
            {!onSearch ?
                <div className={Style.addFromContactsDetails}>
                    <p>
                        {`${(checked && checked.length >= 0) && numberFormat.toPersianDigits(checked.length)} از ${(contact && contact.length >= 0) && numberFormat.toPersianDigits(contact.length)} نفر`}
                    </p>
                    <div>
                        <p onClick={() => handleSelectAll(!selectAll)}>
                            {selectAll || checked?.length == contact?.length ? "لغو انتخاب" : "انتخاب همه"}
                        </p>
                        <div onClick={() => setOnSearch(true)}>
                            <img
                                src={SearchRoundedIcon}
                                alt={"search"}
                            />
                        </div>
                    </div>
                </div>
                :
                <div className={Style.addFromContactSearchContainer}>
                    <img
                        src={back}
                        alt="icon"
                        style={{ width: 17 }}
                        onClick={() => {
                            setOnSearch(false)
                            handleSearch({ target: { value: '' } })
                        }}
                    />
                    <input value={searchInput} name="title" onChange={handleSearch} placeholder={`جستجو در مخاطبین`} />
                    <img
                        src={searchInput.length !== 0 ? closeIcon : null}
                        onClick={() => { searchInput.length !== 0 && handleSearch({ target: { value: '' } }) }}
                        className={Style.deleteSearchText}
                    />
                </div>
            }
            <div className={classes.contactList}>
                <Scrollbars onScroll={handleScroll} ref={addContactScroll}>
                    {(contactFiltered || contact)?.length > 0 ? (
                        (contactFiltered || contact).map((item, index) => (
                            <ListItem
                                key={index}
                                button
                                onClick={handleToggle(item)}
                                className={classes.itemWrapper}
                            >
                                <div className={classes.usersCheckbox}>
                                    <Checkbox
                                        edge="end"
                                        onChange={handleToggle(item)}
                                        icon={<img src={null} alt="" />}
                                        className={classes.checkboxRoot}
                                        checkedIcon={<img src={checkboxChecked} alt="" />}
                                        checked={
                                            checked.some(
                                                (check) => check.id == item.id || check.memberId == item.id
                                            )
                                        }
                                        inputProps={{ "aria-labelledby": item.id }}
                                    />
                                </div>
                                <MemberItem memberInfo={item} />
                            </ListItem>
                        ))
                    ) : (
                        <div className={classes.noDataWrapper}>
                            <img src={noData} alt="no data" />
                            <p>مخاطب یافت نشد</p>
                        </div>
                    )}
                </Scrollbars>
            </div>
            <button onClick={handelSubmit} style={props.stepBtnStyle ? props.stepBtnStyle : {}} className={classes.stepBTN}>تایید</button>
        </div>
    );
};

export default withSnackbar(AddMember);
