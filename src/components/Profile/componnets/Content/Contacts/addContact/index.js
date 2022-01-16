import DialogLayout from "../contactDialogLayout/ContactDialogLayout";
import React, { useCallback, useRef, useState } from "react";
import AddList from "../../../../../../assets/images/addList.svg";
import AddNumber from "../../../../../../assets/images/excelIcon.svg";

import { Grid, Link, Divider, Button } from "@material-ui/core";
import useStyles from "./Styles";
import { Scrollbars } from "react-custom-scrollbars";
// import noData from "../../../../../../assets/images/no_result_search.svg";
import noData from "../../../../../../assets/images/meetings.svg";
import AddByNumberDialog from "./AddByNumberDialog";
import { useDispatch, useSelector } from "react-redux";
import { checkUserExist, uploadContactExcel } from "../../../../../../../redux/contacts";
import MemberItem from "./MemberItem";
import deleteIcon from "../../../../../../assets/images/delete.svg";
import AddByExcelDialog from "./AddByExcelDialog";
import { numberFormat } from "../../../../../../utilities";
import clsx from "clsx";
import axios from "axios";
import { errorSnackbar } from "../../../../../../../redux/user";
import classes from './AddContact.module.scss';
const AddContact = (props) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();
    const [newContacts, setNewContacts] = React.useState([]);
    const [openAddByNumber, setOpenAddByNumber] = React.useState(false);
    const [openAddByExcel, setOpenAddByExcel] = React.useState(false);
    const [addListShadow, setAddListShadow] = useState('none');
    let contactsTemp;
    // let contactInfo = useSelector(
    //     (state) => state.contacts.contactInfo
    // );
    const addContactScroll = useRef();

    const handleScroll = () => {
        if (addContactScroll.current.viewScrollTop < 5) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00000012 inset')
        }
    }

    const [sampleFile, setSampleFile] = React.useState();

    React.useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await axios.get(`contact/sampleFile`);
                setSampleFile(response.data.message);
            } catch (e) {
                Dispatch(errorSnackbar(e));
                console.log(e)
            }
        }
        if (!sampleFile) {
            fetchMyAPI();
        }
    })
    // const getSampleFile = useCallback(async () => {
    //     try {
    //         const response = await axios.get(`contact/sampleFile`);
    //         setSampleFile(response.data.message);
    //     } catch (e) {
    //         Dispatch(errorSnackbar(e));
    //         console.log(e)
    //     }

    // }, []);

    let excelContacts = useSelector(
        (state) => state.contacts.excelContacts
    );

    const addContactFromNumber = (info) => {
        setOpenAddByNumber(false)
        contactsTemp = newContacts;

        let duplicate = false;  /* prevent to import duplicated number */
        contactsTemp?.map((contact) => {
            if (contact.phone === info.phone) duplicate = true;
        })
        if (!duplicate) {
            contactsTemp.push(info)
        }
        setNewContacts(contactsTemp)
        // Dispatch(checkUserExist(info.phone))
    }

    const removeNewContact = (index) => {
        contactsTemp = [...newContacts]
        contactsTemp.splice(index, 1)
        setNewContacts(contactsTemp)
    }

    React.useEffect(() => {
        if (excelContacts.length > 0) {
            contactsTemp = newContacts;
            excelContacts.map((contact) => {
                contact.phone && contact.phone !== '' && contact.firstName !== '' && contactsTemp.push(
                    {
                        "phone": numberFormat.toEnglishDigitsOnlyNum(contact.phone),
                        "firstName": contact.firstName || '',
                        "lastName": contact.lastName || '',
                        // "fullName": contact.firstName||'' + ' ' + contact.lastName||''
                    }
                )
            })
            // setNewContacts(contactsTemp)
            removeDuplicates(contactsTemp)
        }
    }, [excelContacts])

    const addContactFromExcel = (excelFile) => {
        Dispatch(uploadContactExcel(excelFile))
        setOpenAddByExcel(false)
    }

    const removeDuplicates = (contacts) => {
        contactsTemp = contacts;
        let contactsKeyList = []; // used to store the contacts we've already processed
        let uniqueContacts = contactsTemp.reduce(function (allContacts, contact) {
            // get the indexOf our processed array for the current contact
            let index = contactsKeyList.indexOf(contact.phone);
            // if the contact details already exist , remove it
            if (index >= 0) {
                allContacts[index].firstName = contact.firstName;
                return allContacts
            } else { // otherwise append the contact
                contactsKeyList.push(contact.phone)
                return allContacts.concat(contact);
            }

        }, []);
        setNewContacts(uniqueContacts)
    }

    return (
        <DialogLayout
            open={props.open}
            title={`افزودن مخاطب جدید`}
            closeModal={() => {
                setNewContacts([])
                setOpenAddByNumber(false)
                setOpenAddByExcel(false)
                props.closeModal();

            }}
            customBack
            style={{ position: 'unset' }}
        // className={{
        //     root: classes.inviteDialogRoot
        // }}
        >
            {openAddByNumber &&
                <AddByNumberDialog
                    open={openAddByNumber}
                    closeModal={() => setOpenAddByNumber(false)}
                    addContactFromNumber={addContactFromNumber}
                />
            }
            {openAddByExcel &&
                <AddByExcelDialog
                    open={openAddByExcel}
                    closeModal={() => setOpenAddByExcel(false)}
                    addContactFromExcel={addContactFromExcel}
                />
            }

            <div className={classes.contactsAddContactBody}>
                <div className={classes.contactsAddMemberBTNWrapper}>
                    <button
                        className={classes.contactsaddMemberBTN}
                        onClick={() => setOpenAddByNumber(true)}
                    >
                        <img src={AddList} alt="افزودن از شماره تلفن" />
                        اضافه کردن با شماره تلفن
                    </button>
                    <button
                        className={classes.contactsaddMemberBTN}
                    >
                        <div onClick={() => setOpenAddByExcel(true)}>
                            <img src={AddNumber} alt="افزودن از لیست مخاطبین" style={{ height: 24, marginLeft: 8 }} />
                            اضافه کردن با فایل اکسل
                        </div>
                        <Link className={classes.contactsDownloadExcel} href={process.env.REACT_APP_IMAGE_URL + sampleFile}>(دانلود نمونه فایل اکسل)</Link>
                    </button>

                    <Divider className={classes.dividerContact} style={{ backgroundColor: addListShadow === 'none' ? '#EBEBEF' : newContacts?.length == 0 ? '#EBEBEF' : '#fff' }} />
                </div>
                {
                    newContacts && newContacts?.length > 0 ?
                        <div className={classes.contactsNewContactsContainer}>
                            <Scrollbars onScroll={handleScroll} ref={addContactScroll} style={{ boxShadow: addListShadow }}>
                                {
                                    newContacts.map((item, index) => (
                                        <Grid key={item.phone} item md={12} xs={12}
                                            className={classes.addContactItemContainer}>
                                            <div className={classes.addContactItemWrapper}>
                                                <MemberItem ostad memberInfo={item} />
                                                <button style={{ transform: 'translateX(-5px)' }} onClick={() => removeNewContact(index)}>
                                                    <img src={deleteIcon} alt="delete" />
                                                </button>
                                            </div>
                                        </Grid>
                                    ))
                                }
                            </Scrollbars>
                        </div>
                        :
                        <p className={classes.contactsNoMember}>
                            <img src={noData} style={{ height: 51 }} alt="" />
                            کاربری موجود نیست
                        </p>
                }
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        props.handleAddContact(newContacts)
                        setNewContacts([])
                    }}

                    className={clsx(classes.addContactActionBtn, newContacts?.length === 0 && classes.addContactDisabledBtn)}
                >
                    تایید
                </Button>
            </div>
        </DialogLayout>
    )
}

export default AddContact