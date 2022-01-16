import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Grid, CircularProgress, Typography } from "@material-ui/core";
import AddList from "../../../../../../../../assets/images/addList.svg";
import AddNumber from "../../../../../../../../assets/images/addNumber.svg";
import deleteIcon from "../../../../../../../../assets/images/delete.svg";
import noData from "../../../../../../../../assets/images/meetings.svg";
import ProfileAvatar from "../../../../../../../ProfileAvatar/ProfileAvatar";
import AddFromNumberModal from "./AddFromNumberModal";
import AddFromContactModal from "./AddFromContactModal";
import MemberItem from "./MemberItem";
import { Scrollbars } from 'react-custom-scrollbars';
import WarningIcon from '../../../../../../../../assets/images/WarningIcon'
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/createClass.module.scss'
import ChistaButton from "../../../../../../../Kit/Buttons/ChistaButton";
import { numberFormat } from "../../../../../../../../utilities";

const AddMember = ({ handelStep, initialValues, owner, handleClose, loading = false }) => {
    const [showModalNumber, setShowModalNumber] = useState(false);
    const [showModalContact, setShowModalContact] = useState(false);
    const [addListShadow, setAddListShadow] = useState('none');
    const [error, setError] = useState(false);
    const [addContactNumber, setAddContactNumber] = useState(
        initialValues.addContactNumber || []
    );
    const [addContactList, setAddContactList] = useState(
        initialValues.addContactList || []
    );
    const addContactScroll = useRef();

    const handleScroll = () => {
        if (addContactScroll.current.viewScrollTop < 5) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }
    const handelToggleModalNumber = (status) => {
        setShowModalNumber(status);
    };
    const handelToggleModalContact = (status) => {
        setShowModalContact(status);
    };
    const handleAddMember = (members) => {
        let existInNumber
        if ([...addContactNumber, ...addContactList].length > 0) {
            let flag = true;
            let membersTmp = members;
            let existTemp = [...addContactNumber, ...addContactList]
            membersTmp.map((member, index) => {
                if (!member.phone) {
                    membersTmp[index].phone = member.username;
                }
            })
            existTemp.map((member, index) => {
                if (!member.phone) {
                    existTemp[index].phone = member.username;
                }
            })
            let tmp = [...addContactList]

            console.log('membersTmp', membersTmp)
            console.log('existTemp', existTemp)
            membersTmp.map((member) => {
                flag = true
                for (let i = 0; i < existTemp.length; i++) {
                    if ((member.phone === existTemp[i]?.phone || tmp.indexOf(member) !== -1)) {
                        console.log(member.phone + 'is eq to' + existTemp[i]?.phone)
                        flag = false;
                        break;
                    }
                }
                flag && tmp.push(member)
            })
            existInNumber = tmp;
        } else {
            existInNumber = members;

        }


        setAddContactList(existInNumber);
    };

    const handleAddMemberNumber = (member) => {
        const existInContact =
            addContactList.length > 0
                ? addContactList.some(
                    (item) =>
                        (item.username || item.phone) ===
                        (member.username || member.number || member.phone)
                )
                : false;

        const existInNumber =
            addContactNumber.length > 0
                ? addContactNumber.some(
                    (item) =>
                        (item.username || item.id) === (member.username || member.phone)
                )
                : false;

        if (!existInContact && !existInNumber) {
            setAddContactNumber([...addContactNumber, member]);
        }
    };

    const handleSubmit = () => {
        handelStep("setSetting", {
            addContactNumber: addContactNumber.map((item) => ({
                ...item,
                memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
            })),
            addContactList: addContactList.map((item) => ({
                ...item,
                memberRoleType: process.env.REACT_APP_MEMBER_ROLE_TYPE,
            })),
        });
    };


    const deleteItem = (username, type) => {

        if (type === 'number') {
            const currentIndexNumber = addContactNumber.findIndex(
                (item) => item.username === username
            );

            if (currentIndexNumber > -1) {
                let newList = addContactNumber;
                newList.splice(currentIndexNumber, 1);
                setAddContactNumber([...newList]);
                return;
            }

        }


        if (type === 'list') {
            const currentIndexList = addContactList.findIndex(
                (item) => item.phone === username
            );

            if (currentIndexList > -1) {
                let newList = addContactList;
                newList.splice(currentIndexList, 1);
                setAddContactList([...newList]);
                return;
            }

        }
    };

    useEffect(() => {

        if (addContactNumber.length + addContactList.length > process.env.REACT_APP_CLASS_MAX_USERS) {
            setError(`اعضای کلاس باید کمتر از ${numberFormat.toPersianDigits(process.env.REACT_APP_CLASS_MAX_USERS)} نفر باشد`)
        } else {
            setError(false)
        }
    }, [addContactNumber, addContactList])


    console.log('addContactList', addContactList);
    console.log('addContactNumber', addContactNumber)
    return (
        <div style={{ height: '100%' }}>
            <Grid container style={{ overflow: 'hidden' }}>
                {error &&
                    <div className={classes.errorContainer}>
                        <WarningIcon />
                        <Typography>
                            {error}
                        </Typography>
                    </div>

                }
                <Grid item container className={clsx(classes.addMemberMainWrapper, error && classes.pt20)} md={12} xs={12} style={{ boxShadow: addListShadow }}>

                    <div className={classes.addMemberBTNWrapper}>
                        <button
                            className={classes.addMemberBTN}
                            onClick={() => handelToggleModalNumber(true)}
                        >
                            <img src={AddList} alt="افزودن از شماره تلفن" />
                            اضافه کردن با شماره تلفن
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


            </Grid>
            <div className={clsx(classes.memberWrapper, error && classes.memberWrapperError)} >
                {(addContactNumber.length + addContactList.length > 0) && (
                    <Scrollbars style={{ width: '100%' }} onScroll={handleScroll} ref={addContactScroll}>
                        {addContactNumber.length > 0 &&
                            addContactNumber.map((memberInfo, index) => {
                                if (typeof memberInfo != 'undefined') {
                                    return (
                                        <Grid key={index} item md={12} xs={12}
                                            className={classes.itemContainer}>
                                            <div className={classes.itemWrapper}>
                                                <MemberItem memberInfo={memberInfo} />
                                                <button onClick={() => deleteItem(memberInfo.username, 'number')}>
                                                    <img src={deleteIcon} alt="delete" />
                                                </button>
                                            </div>
                                        </Grid>
                                    )
                                }
                            })}
                        {addContactList.length > 0 &&
                            addContactList.map((memberInfo, index) => {
                                if (typeof memberInfo != 'undefined') {
                                    return (
                                        <Grid key={index} item md={12} xs={12}
                                            className={classes.itemContainer}>
                                            <div className={classes.itemWrapper}>
                                                <MemberItem memberInfo={memberInfo} />
                                                <button onClick={() => deleteItem(memberInfo.phone, 'list')}>
                                                    <img src={deleteIcon} alt="delete" />
                                                </button>
                                            </div>
                                        </Grid>
                                    )
                                }
                            })
                        }

                    </Scrollbars>
                )}
                {addContactList.length < 1 && addContactNumber.length < 1 && (
                    <p className={classes.noMember}>
                        <img src={noData} alt="" style={{ width: 51, marginBottom: 35 }} />
                        کاربری موجود نیست
                    </p>
                )}


            </div>
            {addContactNumber.length + addContactList.length > 0 ? (
                <div className={classes.stepBtnContainer}>
                    <ChistaButton customClassName={error && classes.disableBtn} onClick={handleSubmit} loading={loading} disabled={error}>بعدی</ChistaButton>
                </div>
            ) : (
                <div className={classes.stepBtnContainer}>
                    <ChistaButton customClassName={classes.disableBtn} onClick={handleSubmit} loading={loading} disabled={true}>بعدی</ChistaButton>
                </div>
            )}

            {showModalNumber && (
                <AddFromNumberModal
                    handleAddMember={handleAddMemberNumber}
                    showModalNumber={showModalNumber}
                    closeModal={handelToggleModalNumber}
                    handleCloseAll={handleClose}

                />
            )}
            {showModalContact ? (
                <AddFromContactModal
                    handleAddMember={handleAddMember}
                    showModalContact={showModalContact}
                    closeModal={handelToggleModalContact}
                    initialValues={addContactList}
                    handleCloseAll={handleClose}
                    generator={addContactList[0]}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default AddMember;
