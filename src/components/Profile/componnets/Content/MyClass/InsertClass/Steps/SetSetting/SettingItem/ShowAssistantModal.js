import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { Grid, Divider, ListItem, ListItemSecondaryAction, Checkbox } from "@material-ui/core";
import lodash from "lodash";

import { numberFormat, transform } from "../../../../../../../../../utilities";
import AddList from "../../../../../../../../../assets/images/addList.svg";
import AddNumber from "../../../../../../../../../assets/images/addNumber.svg";
import deleteIcon from "../../../../../../../../../assets/images/delete.svg";
import noData from "../../../../../../../../../assets/images/no_result_search.svg";
import ProfileAvatar from "../../../../../../../../ProfileAvatar/ProfileAvatar";
import AddFromNumberModal from "./../../AddMember/AddFromNumberModal";
import AddFromContactModal from "./../../AddMember/AddFromContactModal";
import MemberItem from "./../../AddMember/MemberItem";
import { Scrollbars } from 'react-custom-scrollbars';

// import useStyles from "../../Styles";
import DialogLayout from "./DialogLayout";
import { useSelector } from "react-redux";
import { withSnackbar } from "notistack";
import checkboxChecked from "../../../../../../../../../assets/images/checkbox-checked.svg";
import { enqueueSnackbar } from "../../../../../../../../../../redux/user";
import back from '../../../../../../../../../assets/images/arrowBack.svg';
import ModalLayoutWithHeader from "../../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import classes from '../../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import ChistaButton from "../../../../../../../../Kit/Buttons/ChistaButton";
import CircleCheckbox from "../../../../../../../../Kit/Checkbox/CircleCheckbox";

const ShowAssistantModal = ({ hideBackdrop = true, ...props }) => {
    // const classes = useStyles();
    const [showModalNumber, setShowModalNumber] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);
    const [showOstadModal, setShowOstadModal] = useState(true)
    const [checked, setChecked] = useState(props.assistantList || []);
    const [assistants, setAssistants] = useState()
    useEffect(() => {
        if (!assistants) {
            let tmp;
            if (props.classDetail) {
                tmp = []
                props.allData.addContactList.map((temp, index) => {

                    tmp.push(
                        {
                            ...temp,
                            phone: transform.hashThis(temp.key, false),
                        })
                })
                let checkedTmp = []
                props.assistantList.map((temp) => {
                    checkedTmp.push(
                        {
                            ...temp,
                            phone: transform.hashThis(temp.key, false),
                        })
                })

                setChecked([...checkedTmp])

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
                setChecked(props.assistantList)

            }
            setAssistants(tmp)
        }
    })

    const handleAddToList = (user, number = false) => {
        let tmp
        if (number) {
            if (props.classDetail) {
                let tempUserCrypto = []
                let tempInsertedUser = user;
                assistants.map((temp, index) => {
                    if (!temp.phone) {
                        tempUserCrypto.push(
                            {
                                ...temp,
                                phone: transform.hashThis(temp.key, false),
                            })
                    } else {
                        tempUserCrypto.push(
                            {
                                ...temp
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

            } else {
                tmp = lodash.uniqWith([
                    user,
                    ...assistants
                ], (a, b) => {
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
        } else {
            if (props.classDetail) {

                let tempUserCrypto = []
                let tempInsertedUser = user;
                assistants.map((temp, index) => {
                    if (!temp.phone) {
                        tempUserCrypto.push(
                            {
                                ...temp,
                                phone: transform.hashThis(temp.key, false),
                            })
                    } else {
                        tempUserCrypto.push(
                            {
                                ...temp
                            })
                    }
                })
                user.map((added, index) => {
                    if (!added.phone) {
                        tempInsertedUser[index] = { ...added, phone: added.username }
                    }
                })
                tmp = lodash.uniqWith(
                    [
                        ...tempUserCrypto,
                        ...tempInsertedUser,
                    ], (a, b) => {
                        return a.phone === b.phone
                    }
                )
            } else {
                tmp = lodash.uniqWith([
                    ...user,
                    ...assistants
                    // props.user, ...props.assistantList, ...props.allData.addContactList, ...props.allData.addContactNumber
                ], (a, b) => {
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
        }

        setAssistants(tmp)
        if (user.length) {
            if (checked.length + user.length > 5) {
                enqueueSnackbar('شما نمیتوانید بیشتر از ۵ ناظر انتخاب کنید', {
                    variant: 'error',
                    style: {},
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    },
                });
            }
            else {
                setChecked([...checked, ...user])
            }
        }
        else {
            if (checked.length + 1 > 5) {
                enqueueSnackbar('شما نمیتوانید بیشتر از ۵ ناظر انتخاب کنید', {
                    variant: 'error',
                    style: {},
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'right',
                    },
                });
            }
            else {
                setChecked([...checked, user])
            }
        }
    }

    const handelToggleModalNumber = (status) => {
        setShowModalNumber(status);
    };

    const handelToggleModalContact = (status) => {
        setShowModalContact(status);
    };

    const handleSubmit = () => {
        if (checked.length > 5) {
            errorSnackbar('شما نمیتوانید بیشتر از ۵ ناظر انتخاب کنید');
        } else {
            props.handleAddMember && props.handleAddMember(checked);
            props.handleEditAssistant && props.handleEditAssistant(checked)
            props.closeModal();
        }
    };

    const handleToggle = (value) => {
        let currentIndex;
        if (value.username) {
            currentIndex = checked.findIndex(
                (item) => item.username === value.username
            )
        } else if (value.phone) {
            currentIndex = checked.findIndex(
                (item) => item.phone === value.phone
            )
        } else {
            currentIndex = checked.findIndex(
                (item) => item.id === value.id
            )
        }

        const newChecked = [...checked];
        if (currentIndex === -1 && newChecked.length < 5) {
            newChecked.push(value);
        } else if (currentIndex !== -1) {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };
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
                        <p>ویرایش ناظر</p>
                    </div>
                </div>
            </div>
            <Divider className={classes.divider} />
            <div className={classes.stepContainer} style={{ height: '100%' }}>
                <Grid>
                    <div className={classes.addMemberBTNWrapper}>
                        <button
                            className={classes.addMemberBTN}
                            onClick={() => {
                                // if (checked.length >= 5) {
                                //     props.enqueueSnackbar('شما نمیتوانید بیشتر از ۵ ناظر انتخاب کنید', {
                                //         variant: 'error',
                                //         // persist:true,
                                //         style: {},
                                //         anchorOrigin: {
                                //             vertical: 'bottom',
                                //             horizontal: 'left',
                                //         },
                                //     });
                                // } else {
                                handelToggleModalNumber(true)
                                // }
                            }}
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
                {/* <Divider className={classes.divider} /> */}

                {/*<div className={classes.memberHeader}>اعضای کلاس</div>*/}

                <Grid container className={classes.memberWrapper}>
                    <Scrollbars>

                        {assistants && assistants.length > 0 ?
                            assistants.map((item, index) => (
                                <div
                                    key={item.phone || item.username}
                                    onClick={() => handleToggle(item)}
                                    className={clsx(classes.itemWrapper, classes.cursorPointer)}
                                >
                                    {
                                        (props.classDetail ?
                                            checked.some(
                                                (check) => {
                                                    return check.phone == item.phone
                                                })
                                            :
                                            checked.some(
                                                (check) => {
                                                    if (item.phone) {
                                                        return check.phone == item.phone
                                                    } else if (item.username) {
                                                        return (
                                                            check.username == item.username
                                                            //  ||
                                                            // check.fullName == item.username
                                                        )
                                                    }
                                                    else if (item.fullName) {
                                                        return (
                                                            check.fullName == item.fullName
                                                        )
                                                    }
                                                    else {
                                                        return check.id == item.id
                                                    }
                                                }
                                            )) &&
                                        <div onClick={() => handleToggle(item)} className={classes.radioContainer}>
                                            <CircleCheckbox
                                                isChecked={
                                                    props.classDetail ?
                                                        checked.some(
                                                            (check) => {
                                                                return check.phone == item.phone
                                                            })
                                                        :
                                                        checked.some(
                                                            (check) => {
                                                                if (item.phone) {
                                                                    return check.phone == item.phone
                                                                } else if (item.username) {
                                                                    return (
                                                                        check.username == item.username
                                                                        //  ||
                                                                        // check.fullName == item.username
                                                                    )
                                                                }
                                                                else if (item.fullName) {
                                                                    return (
                                                                        check.fullName == item.fullName
                                                                    )
                                                                }
                                                                else {
                                                                    return check.id == item.id
                                                                }
                                                            }
                                                        )
                                                }
                                            />
                                        </div>}
                                    <MemberItem memberInfo={item} />
                                </div>
                            )
                            ) :
                            <p className={classes.noMember}>
                                <img src={noData} alt="" />
                                کاربری موجود نیست
                            </p>
                        }
                    </Scrollbars>


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
                            props.handleCloseAll();
                        }}
                        handleAddMember={(user) => {
                            handleAddToList(user, true)
                        }}
                        showModalNumber={showModalNumber}
                        closeModal={handelToggleModalNumber}
                    />

                )}
                {showModalContact ? (
                    <AddFromContactModal
                        selectAssistant
                        showModalContact={showModalContact}
                        closeContactModal={() => {
                            handelToggleModalContact()
                        }}
                        initialValues={checked}
                        handleCloseAll={() => {
                            props.closeModal()
                            props.handleCloseAll();
                        }}
                        assistantList={assistants}
                        handleAddMember={(user) => {
                            handleAddToList(user)
                        }}
                    />
                ) : (
                    ""
                )}
            </div>
        </ModalLayoutWithHeader>
    );
};


export default withSnackbar(ShowAssistantModal);
