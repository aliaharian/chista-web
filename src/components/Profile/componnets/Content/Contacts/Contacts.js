import React, { useEffect, useRef, useState } from "react";
import {
    clearExcelContacts,
    deleteContact,
    getContactList,
    getContactPaginate,
    getInviteLink,
    importContacts,
    setContactSearchLoading,
    startContactSearch,
    updateContact
} from "../../../../../../redux/contacts";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./Styles";

import { Grid, Paper, Avatar, Button, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import noDataIcon from "../../../../../assets/images/noContactIcon.webp";
import clsx from "clsx";
import InfiniteScroll from "react-infinite-scroll-component";
import SkeletonLoading from "../../../../Advisers/componnets/SkeletonLoading/SkeletonLoading";
import AlphabetListSearch from "./AlphabetListSearch";
import ContactsHeader from "./ContactsHeader";
import ContactItem from "./ContactItem";
import InviteDialog from "./InviteDialog";
import { sorting } from '../../../../../utilities/transform'
import DeleteContactDialog from "./deleteContactDialog";
import addContactIcon from "../../../../../assets/images/addContact.svg";
import AddContact from "./addContact";
import { numberFormat, transform } from "../../../../../utilities";
import UpdateContact from "./UpdateContact";
import ContactsSkeleton from "./ContactsSkeleton";
import { ref } from "yup";
import PlusIcon from '../../../../../assets/images/PlusIcon';
import ContactsItemSkeleton from "./ContactsItemSkeleton";
import Back from "../../../../../assets/images/ArrowBack";

import classes from './Contacts.module.scss'
import { useDebouncedCallback } from "use-debounce/lib";

const Contacts = ({ display = 'desktop' }) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();
    let alphabet = [];
    let result = [];
    let contactResult = [];
    let contactListTemp = [];
    const [contactAlphabet, setContactAlphabet] = React.useState([])
    const [contactSortList, setContactSortList] = React.useState(null)
    const [searchQuery, setSearchQuery] = React.useState('')
    const [inviteDialog, setInviteDialog] = React.useState(false)
    const [deleteDialog, setDeleteDialog] = React.useState(false)
    const [updateDialog, setUpdateDialog] = React.useState(false)
    const [selectedUser, setSelectedUser] = React.useState()
    const [searchPhrase, setSearchPhrase] = React.useState("")
    const [addContactDialog, setAddContactDialog] = React.useState(false)
    const [remains, setRemains] = React.useState([])
    const [scrollRefs, setScrollRefs] = React.useState([])
    const [scrollRefActive, setScrollRefActive] = React.useState()

    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down(800));

    let contactList = useSelector(
        (state) => state.contacts.contact
    );
    const contactDeleteResponse = useSelector(
        (state) => state.contacts.deleteResponse
    );
    const contactUpdateResponse = useSelector(
        (state) => state.contacts.updateResponse
    );

    const contactImportResponse = useSelector(
        (state) => state.contacts.importResponse
    );
    const inviteLink = useSelector(
        (state) => state.contacts.inviteLink
    );
    const contactLoading = useSelector(
        (state) => state.contacts.contactLoading
    );

    const contactSearchLoading = useSelector(
        (state) => state.contacts.contactSearchLoading
    );


    const noContact = useSelector(
        (state) => state.contacts.noContact
    );
    const searchMode = useSelector(
        (state) => state.contacts.searchMode
    );

    const [debouncedFunction] = useDebouncedCallback(() => {
        if (searchPhrase !== null && searchPhrase !== undefined) {
            Dispatch(getContactPaginate({ offset: 0, max: 30, name: searchPhrase, searchMode: true }))
        }
    }, 500);




    useEffect(() => {
        !contactList && Dispatch(getContactPaginate({ offset: 0, max: 30, name: searchPhrase }));
        contactList && setContactSortList(contactList.result)
    }, [contactList]);



    const getPosByName = (array, name) => {
        return array.map(function (e) {
            return e.name;
        }).indexOf(name);
    }

    const handleSearch = (e, direct = false) => {
        setSearchPhrase(e.target.value)
        Dispatch(setContactSearchLoading())
        debouncedFunction()
        if (e.target.value != "") {
            Dispatch(startContactSearch(true))
        } else {
            // Dispatch(startContactSearch(false))
        }
    }



    useEffect(() => {
        if (contactDeleteResponse?.message === 'OK' || contactImportResponse?.message === 'OK') {
            Dispatch(getContactPaginate(
                { max: 30, offset: 0, name: "" },
            ))
        }


    }, [contactDeleteResponse, contactUpdateResponse, contactImportResponse])

    useEffect(() => {
        if (inviteLink === '') {
            Dispatch(getInviteLink())
        }

    }, [inviteLink])

    useEffect(() => {
        if (contactUpdateResponse !== '') {
            Dispatch(getContactPaginate(
                { max: 30, offset: 0, name: '' },
            ))
        }

    }, [contactUpdateResponse])

    const handleDeleteContact = (user) => {
        Dispatch(deleteContact(user.phone))
        setDeleteDialog(false)

    }
    const handleUpdateContact = (user) => {
        Dispatch(updateContact(user))
        setUpdateDialog(false)
    }

    const handleAddContact = (contacts) => {
        if (contacts.length > 0) {
            let contactsArray = [];
            contacts.map((contact) => {
                contactsArray.push({
                    "phone": contact.phone,
                    "firstName": contact.firstName,
                    "lastName": contact.lastName,
                })
            })
            Dispatch(importContacts(contactsArray))
        }
        setAddContactDialog(false)
        // Dispatch(getContactList())
    }

    // if (1){
    console.log('s', searchMode)
    if (contactLoading || (contactSortList?.length === 0 && noContact === false && searchMode === false && !contactSearchLoading)) {
        // console.log('contactSortList',contactSortList)
        // console.log('noContact',noContact)
        // console.log('searchMode',searchMode)
        return (
            <ContactsSkeleton />
        )
    }
    else
        return (
            <>
                {/*{inviteDialog &&*/}
                <InviteDialog
                    open={inviteDialog}
                    selectedUser={selectedUser}
                    inviteLink={inviteLink}
                    closeModal={() => setInviteDialog(false)}
                />
                {/*}*/}

                {/*{deleteDialog &&*/}
                <DeleteContactDialog
                    open={deleteDialog}
                    closeModal={() => setDeleteDialog(false)}
                    user={selectedUser}
                    handleDeleteContact={handleDeleteContact}
                />
                {/*}*/}

                {/*{selectedUser &&*/}
                <UpdateContact
                    open={updateDialog}
                    closeModal={() => setUpdateDialog(false)}
                    user={selectedUser}
                    handleUpdateContact={handleUpdateContact}
                />
                {/*}*/}
                {/*{addContactDialog &&*/}
                <AddContact
                    open={addContactDialog}
                    closeModal={() => {
                        setAddContactDialog(false)
                        Dispatch(clearExcelContacts())
                    }}
                    user={selectedUser}
                    handleAddContact={handleAddContact}
                />
                {/*}*/}


                <Grid className={classes.contactsMainWrapper}>

                    {(contactSortList?.length > 0 || searchMode || contactSearchLoading) ?
                        <ContactsHeader
                            handleSearch={handleSearch}
                            handleOpenInvite={() => {
                                setSelectedUser(null)
                                setInviteDialog(true)
                            }}
                            openAddContactDialog={() => {
                                setAddContactDialog(true);
                            }}
                        />
                        :

                        isMobile &&
                        <div className={classes.contactsHeaderRes} style={{marginTop:13}}>
                            <div className={classes.contactsBreadcumb}>
                                <Back
                                    viewBox="0 0 22 22"
                                    style={{ marginLeft: 10 }}
                                    onClick={() => router.push('/profile/dashboard')}
                                />
                                <p>{`مخاطبین`}</p>
                            </div>
                            {/* <Button
                                className={clsx(
                                    classes.contactsAddContact
                                )}
                                onClick={() => {
                                    // setValue('')
                                    // handleSearch({ target: { value: '' } })
                                    openAddContactDialog()
                                }

                                }
                            >
                                <PlusIcon />
                                <span>مخاطب جدید</span>
                            </Button> */}
                        </div>

                    }

                    {
                        contactSearchLoading &&

                        <Grid className={classes.contactsWrapper}>
                            {/* <Grid>
                            <ul className={classes.alphabetList}>
                                {renderAlphabet()}
    
                            </ul>
    
                        </Grid> */}
                            <Grid>

                                <Grid container spacing={3}>
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />
                                    <ContactsItemSkeleton />

                                </Grid>
                            </Grid>
                        </Grid>
                    }

                    {(searchMode && !contactSearchLoading) &&
                        <div className={classes.contactSearchPhrase}>
                            <Typography variant="h4">نتایج جستجو</Typography>
                            {
                                contactSortList.length < 1 ?
                                    <Typography>هیچ نتیجه ای برای  "{searchPhrase}" یافت نشد</Typography>
                                    :
                                    <Typography>{numberFormat.toPersianDigits(contactSortList.length)} نتیجه برای "{searchPhrase}"</Typography>
                            }
                        </div>
                    }

                    <Grid className={classes.contactsWrapper}>
                        <Grid>
                            {(!contactLoading && !contactSearchLoading) && (
                                contactSortList?.length > 0 ? (
                                    <InfiniteScroll
                                        style={{ overflow: 'visible' }}
                                        dataLength={contactList?.result?.length}
                                        scrollThreshold={isMobile ? 0.2 : 0.7}
                                        next={() => {
                                            Dispatch(
                                                getContactPaginate(
                                                    { max: 30, offset: contactList?.offset + 1, name: searchPhrase },
                                                )
                                            )
                                        }
                                        }
                                        hasMore={(contactList?.offset + 1) * contactList?.max < (contactList?.total)}
                                        loader={
                                            <Grid container spacing={3} style={{ paddingRight: 12, marginTop: 10 }}>
                                                <ContactsItemSkeleton />
                                                <ContactsItemSkeleton />
                                                <ContactsItemSkeleton />

                                            </Grid>
                                            // <ContactsSkeleton />
                                        }
                                    // loader={<p style={{textAlign: "center"}}>در حال بارگزاری...</p>}
                                    >
                                        <Grid container spacing={3} className={classes.contactsSortContainer}>
                                            {

                                                contactSortList.map((item) => (
                                                    <ContactItem
                                                        // handleSearch={(e) => { searchPhrase != '' && handleSearch(e) }}
                                                        ref={item.hasRef ? scrollRefs[getPosByName(scrollRefs, item.hasRef)]?.value : null}
                                                        itemRef={item.hasRef ? scrollRefs[getPosByName(scrollRefs, item.hasRef)]?.value : null}
                                                        openInviteDialog={(user) => {
                                                            setSelectedUser(user)
                                                            setInviteDialog(true)
                                                        }}
                                                        openDeleteDialog={(user) => {
                                                            setSelectedUser(user)
                                                            setDeleteDialog(true)
                                                        }}
                                                        openUpdateDialog={(user) => {
                                                            setSelectedUser(user)
                                                            setUpdateDialog(true)
                                                        }}
                                                        details={item}
                                                        key={item.id}
                                                        display={display}
                                                    />
                                                ))
                                            }
                                        </Grid>
                                    </InfiniteScroll>
                                ) : (
                                    <div className={classes.contactsNoDataContainer}>
                                        {/* {searchMode &&
                                        <p style={{ fontSize: 16, fontFamily: 'chistaYekanR', color: '#0c0b31' }}>
                                            مخاطب یافت نشد
                                        </p>} */}
                                        {
                                            !searchMode &&
                                            <>
                                                <img src={noDataIcon} alt="no data" />
                                                <p className={classes.contactsNoResultText}>
                                                    لیست مخاطبین شما خالی است
                                                </p>
                                                <p
                                                    className={classes.contactsOfferAddText}
                                                    style={{

                                                    }}>
                                                    برای شروع ابتدا یک مخاطب اضافه نمایید
                                                </p>
                                                <Button
                                                    className={clsx(
                                                        classes.contactsAddContact,
                                                        classes.contactsAddContactAlt
                                                    )}
                                                    onClick={() => setAddContactDialog(true)}
                                                    variant="contained"
                                                >
                                                    <PlusIcon />
                                                    <span>مخاطب جدید</span>
                                                </Button>
                                            </>
                                        }

                                    </div>
                                ))}

                        </Grid>

                    </Grid>
                </Grid>


            </>
        );
}

export default Contacts;
