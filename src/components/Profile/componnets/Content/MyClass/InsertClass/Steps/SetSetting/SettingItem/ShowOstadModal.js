import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Grid, Divider, ListItemSecondaryAction, Checkbox, ListItem } from "@material-ui/core";
import lodash from "lodash";

import { transform } from "../../../../../../../../../utilities";
import AddList from "../../../../../../../../../assets/images/addList.svg";
import AddNumber from "../../../../../../../../../assets/images/addNumber.svg";
import noData from "../../../../../../../../../assets/images/no_result_search.svg";
import AddFromNumberModal from "./../../AddMember/AddFromNumberModal";
import AddFromContactModal from "./../../AddMember/AddFromContactModal";
import MemberItem from "./../../AddMember/MemberItem";
import { Scrollbars } from 'react-custom-scrollbars';
import back from '../../../../../../../../../assets/images/arrowBack.svg';

// import useStyles from "../../Styles";

import Radio from '@material-ui/core/Radio';

import radioChecked from "../../../../../../../../../assets/images/RadioSelected.svg";
import ModalLayoutWithHeader from "../../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import ChistaButton from "../../../../../../../../Kit/Buttons/ChistaButton";
import RadioButton from "../../../../../../../../Kit/Checkbox/RadioButton";

const ShowOstadModal = ({ hideBackdrop = true, ...props }) => {
    // const classes = useStyles();
    const [showModalNumber, setShowModalNumber] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);
    const [showOstadModal, setShowOstadModal] = useState(true)
    const [checked, setChecked] = useState(props.ostad)
    const [tempUser, setTempUser] = useState()
    const [addContactList, setAddContactList] = useState(
        []
    );


    React.useEffect(() => {
        if (!tempUser) {
            let tmp
            if (props.classDetail) {
                tmp = []
                props.allData.addContactList.map((temp, index) => {

                    tmp.push(
                        {
                            ...temp,
                            phone: transform.hashThis(temp.key, false),
                        })
                })
                if (props.ostad) {
                    setChecked({ ...props.ostad, phone: transform.hashThis(props.ostad.key, false) })
                }
            } else {
                tmp = lodash.uniqWith([props.user, props.ostad, ...props.assistantList, ...props.allData.addContactList, ...props.allData.addContactNumber], (a, b) => {
                    if (a.phone) {
                        if (b.phone) {
                            return a.phone === b.phone
                        } else {
                            return a.phone === b.username
                        }
                    } else {
                        if (b.phone) {
                            return a.username === b.phone
                        } else {
                            return a.username === b.username
                        }
                    }
                }
                )
            }
            setTempUser(tmp)
        }
    })

    const handelToggleModalNumber = (status) => {
        setShowModalNumber(status);
    };

    const handelToggleModalContact = (status) => {
        setShowModalContact(status);
    };






    const handleAddToList = (user) => {
        delete user.id
        let tmp = [];
        if (props.classDetail) {

            let tempUserCrypto = []
            let tempInsertedUser = user;
            tempUser.map((temp, index) => {

                if (!temp.phone) {
                    tempUserCrypto.push(
                        {
                            ...temp,
                            phone: transform.hashThis(temp.key, false),
                        })
                } else {
                    tempUserCrypto.push(
                        {
                            ...temp,
                        })
                }
            })
            if (!user.phone) {
                tempInsertedUser = { ...user, phone: user.username }
            }
            tmp = lodash.uniqWith(
                [
                    ...tempUserCrypto,
                    tempInsertedUser,
                ], (a, b) => {
                    return a.phone === b.phone
                }
            )
            // console.log('tmp', tmp)

        } else {
            tmp =
                lodash.uniqWith(
                    [
                        ...tempUser,
                        user,
                    ], (a, b) => {
                        if (a.phone) {
                            if (b.phone) {
                                return a.phone === b.phone
                            } else if (b.contactObj) {
                                return a.phone === b.contactObj.phone
                            } else {
                                return a.phone === b.username
                            }
                        } else {
                            if (b.phone) {
                                return a.username === b.phone
                            } else if (b.contactObj) {
                                return a.username === b.contactObj.phone
                            } else {
                                return a.username === b.username
                            }
                        }
                    }
                )

        }
        console.log('user', user)
        console.log('tmp', tmp)
        setTempUser(tmp)
        setChecked({ ...user, phone: user.phone || user.username });
    }
    const handleSubmit = () => {
        // !props.classDetail && props.handleAddMember(checked)

        props.handleAddMember(checked)
        props.forceClose && props.forceClose()
        // props.closeModal();
    };

    const handleToggle = (value) => {
        setChecked(value);
    }
    return (


        <ModalLayoutWithHeader
            openDialog={showOstadModal}
            closeModal={() => props.closeModal()}
            PaperProps={{ className: classes.modalWrapper }}
            style={{ position: 'unset' }}
            hideBackdrop={hideBackdrop}
        >
            <div className={classes.addClassHeaderWrapper}>
                <div className={classes.selectAddClassTitle}>
                    <div>
                        <img
                            src={back}
                            alt="icon"
                            style={{ marginLeft: 13, width: 17 }}
                            onClick={() => {
                                props.closeModal()
                            }}
                        />
                        <p>ویرایش استاد</p>
                    </div>
                </div>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.stepContainer} style={{ height: '100%' }}>
                <Grid item container md={12} xs={12} className={classes.addMemberMainWrapper}>
                    <div className={classes.addMemberBTNWrapper}>
                        <button
                            className={classes.addMemberBTN}
                            onClick={() => handelToggleModalNumber(true)}
                        >
                            <img src={AddList} alt="افزودن از شماره تلفن" />
                            اضافه کردن شماره تلفن
                        </button>
                        <button
                            className={classes.addMemberBTN}
                            onClick={() => handelToggleModalContact(true)}
                        >
                            <img src={AddNumber} alt="افزودن از لیست مخاطبین" />
                            اضافه کردن از لیست مخاطبین
                        </button>
                    </div>
                </Grid>

                {/*<div className={classes.memberHeader}>اعضای کلاس</div>*/}
                <Grid container className={classes.memberWrapper}>
                    {props.ostad && (
                        <Scrollbars>
                            {
                                tempUser && tempUser.map((user) => (
                                    <div
                                        key={user.phone || user.username}
                                        onClick={() => handleToggle(user)}
                                        className={clsx(classes.itemWrapper, classes.cursorPointer)}>
                                        {
                                            (props.classDetail ?
                                                checked.phone == user.phone
                                                :
                                                (user.phone) ?
                                                    checked.phone == user.phone ||
                                                    checked.username == user.phone

                                                    : (user.username) ?
                                                        checked.username == user.username ||
                                                        checked.phone == user.username
                                                        :
                                                        checked.id == user.id) &&
                                            <div onClick={() => handleToggle(user)} className={classes.radioContainer}>
                                                <RadioButton
                                                    isChecked={
                                                        props.classDetail ?
                                                            checked.phone == user.phone
                                                            :
                                                            (user.phone) ?
                                                                checked.phone == user.phone ||
                                                                checked.username == user.phone

                                                                : (user.username) ?
                                                                    checked.username == user.username ||
                                                                    checked.phone == user.username
                                                                    :
                                                                    checked.id == user.id

                                                    }
                                                />
                                            </div>}
                                        <MemberItem memberInfo={user} />
                                    </div>
                                ))
                            }
                        </Scrollbars>
                    )}
                    {!props.ostad && (
                        <p className={classes.noMember}>
                            <img src={noData} alt="" />
                            کاربری موجود نیست
                        </p>
                    )}


                </Grid>
                <div className={classes.stepBtnContainer}>
                    <ChistaButton 
                    // customClassName={classes.disableBtn}
                    onClick={handleSubmit}>تایید</ChistaButton>
                </div>
                {showModalNumber && (
                    <AddFromNumberModal
                        handleCloseAll={() => {
                            props.closeModal()
                            props.handleCloseAll()
                        }}
                        handleAddMember={(user) => {
                            handleAddToList(user)
                        }}
                        showModalNumber={showModalNumber}
                        closeModal={handelToggleModalNumber}
                    />
                )}
                {showModalContact ? (
                    <AddFromContactModal
                        handleCloseAll={() => {
                            props.closeModal()
                            props.handleCloseAll()
                        }}

                        selectOstad
                        ostad={props.ostad}
                        handleAddMember={(user) => {
                            handleAddToList(user)
                        }}

                        showModalContact={showModalContact}
                        closeContactModal={() => {
                            handelToggleModalContact()
                        }}
                        initialValues={checked}
                        user={props.user}
                    />
                ) : (
                    ""
                )}
            </div>
        </ModalLayoutWithHeader>
    );
};

export default ShowOstadModal;
