import React, { useState, useEffect, useRef } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import SearchRoundedIcon from "../../../../../../../../assets/images/searchIcon.svg";
import closeIcon from "../../../../../../../../assets/images/close.svg";
import {
    Dialog,
    Grid,
    DialogContent,
    CircularProgress,
    ListItem,
    Checkbox,
    Radio,
    Divider,
} from "@material-ui/core";
import { convertNumberToLetter } from '../../../../../../../../utilities/convertToArabicNum';

import noData from "../../../../../../../../assets/images/no_contact_found.svg";
import MemberItem from "./MemberItem";
import { useDispatch, useSelector } from "react-redux";
import { getContactList } from "../../../../../../../../../redux/contacts";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/addMemberModal.module.scss';
// import useStyles from "./Styles";
import back from '../../../../../../../../assets/images/arrowBack.svg';
import { Scrollbars } from "react-custom-scrollbars";
import { withSnackbar } from "notistack";
import ModalLayoutWithHeader from "../../../../../../../Kit/Layouts/ModalLayoutWithHeader";
import ChistaButton from "../../../../../../../Kit/Buttons/ChistaButton";
import CircleCheckbox from "../../../../../../../Kit/Checkbox/CircleCheckbox";
import RadioButton from "../../../../../../../Kit/Checkbox/RadioButton";
const AddFromContactModal = ({
    closeContactModal,
    closeModal,
    showModalContact,
    handleAddMember,
    initialValues,
    selectOstad,
    ostad,
    selectAssistant,
    enqueueSnackbar,
    generator
}) => {
    console.log('initialValues', initialValues)
    const Dispatch = useDispatch();
    // const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const [loading, setLoading] = useState(true);
    const [contactFiltered, setContactFiltered] = useState();
    const [selectAll, setSelectAll] = useState(false);
    const [addListShadow, setAddListShadow] = useState('none');
    const [searchInput, setSearchInput] = useState('');
    const [onSearch, setOnSearch] = useState(false)
    const addContactScroll = useRef();
    const contact = useSelector((state) => state.contacts.contact);
    const [checked, setChecked] = useState(() => {
        if (selectOstad) {
            return ostad || []
        } else if (selectAssistant) {
            return []
        } else {
            return []
        }
    })
        ;


    const handleScroll = () => {
        if (addContactScroll.current.viewScrollTop < 5) {
            setAddListShadow('none')
        } else {
            setAddListShadow('0 3px 6px #00053412')
        }
    }
    const handelSubmit = () => {
        let locContact = contact
        if (selectAssistant) {
            // if (checked.length > process.env.REACT_APP_CLASS_MAX_ASSISTANTS) {
            //     enqueueSnackbar(`شما نمیتوانید بیشتر از ${numberFormat.toPersianDigits(process.env.REACT_APP_CLASS_MAX_ASSISTANTS)} ناظر انتخاب کنید`, {
            //         variant: 'error',
            //         style: {},
            //         anchorOrigin: {
            //             vertical: 'bottom',
            //             horizontal: 'left',
            //         },
            //     });
            // } else {
            handleClose(false)
            handleAddMember(checked);
            // }
        } else {
            handleClose(false)
            if (selectAll) {
                contact && generator && contact.some(contact => {
                    if ((contact.phone == generator.phone) || (contact.phone == generator.username)) {
                        handleAddMember(contact);
                        return;
                    }
                })
                handleAddMember([...locContact, generator]);
                return;
            }
            contact && generator && contact.some(contact => {
                if ((contact.phone == generator.phone) || (contact.phone == generator.username)) {
                    handleAddMember(checked);
                    return;
                }
            })
            if (Array.isArray(checked)) {
                generator !== undefined ? handleAddMember([...checked, generator]) : handleAddMember([...checked]);
            } else {
                generator !== undefined ? handleAddMember([checked, generator]) : handleAddMember(checked);

            }

        }
    };
    const handleClose = () => {
        if (selectOstad || selectAssistant) {
            closeContactModal(false)
        } else {
            closeModal(false)
        }
    }

    const handleToggle = (value) => () => {
        if (selectOstad) {
            setChecked(value);
        } else {
            const currentIndex = checked.findIndex(
                (item) => ((item.phone === value.phone) || (item.username === value.phone))
            );
            const newChecked = [...checked];
            if (currentIndex === -1) {
                newChecked.push(value);
            } else {
                newChecked.splice(currentIndex, 1);
            }

            setChecked(newChecked);
        }
    };

    const handleSelectAll = (status) => {
        setChecked([...contact]);
        setSelectAll(true)
        if (status) return;
        setChecked([]);
        setSelectAll(false)
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
        !contact && Dispatch(getContactList());
        contact && setLoading(false);
        contact && generator && contact.some(contact => {
            if ((contact.phone == generator.phone) || (contact.phone == generator.username)) {
                if (selectOstad) {
                    setChecked(initialValues);

                } else {
                    setChecked([...initialValues]);
                }
                return;
            }
        })
    }, [contact]);
    useEffect(() => {
        if (initialValues) {
            console.log('scscs')
            if (selectOstad) {
                setChecked(initialValues);

            } else {
                setChecked([...initialValues]);
            }
        }
    }, [])
    return (
        <ModalLayoutWithHeader
            openDialog={showModalContact}
            closeModal={() => handleClose(false)}
            PaperProps={{ className: classes.modalWrapper }}
            style={{ position: 'unset' }}
            hideBackdrop
        >
            <div className={classes.addClassHeaderWrapper}>
                <div className={classes.selectAddClassTitle}>
                    <div>
                        <img
                            src={back}
                            alt="icon"
                            style={{ marginLeft: 13, width: 17 }}
                            onClick={() => {
                                handleClose(false)
                            }}
                        />
                        <p>انتخاب کاربران</p>
                    </div>
                </div>
            </div>
            <Divider className={classes.divider} />

            <div className={classes.contactListContent}>
                {(contactFiltered || contact)?.length >= 0 ?
                    <div className={classes.addFromContactsDetailsContainer}>

                        {selectOstad ?
                            <div className={classes.addFromContactSearchContainerSelectOstad}>
                                <input value={searchInput} name="title" onChange={handleSearch} placeholder={`جستجو در مخاطبین`} />
                                <img
                                    src={searchInput.length !== 0 ? closeIcon : null}
                                    onClick={() => { searchInput.length !== 0 && handleSearch({ target: { value: '' } }) }}
                                    className={classes.deleteSearchText}
                                />
                            </div>
                            :
                            !onSearch ?
                                <div className={classes.addFromContactsDetails}>
                                    <p>
                                        {`${checked && checked.length && convertNumberToLetter(checked.length)} از ${contact && contact.length && convertNumberToLetter(contact.length == 0 ? 0 : contact.length)} نفر`}
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
                                <div className={classes.addFromContactSearchContainer}>
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
                                        className={classes.deleteSearchText}
                                    />
                                </div>
                        }

                    </div>
                    : null}

                {loading ? (
                    <div className={classes.infoWrapper}>
                        <CircularProgress
                            color="primary"
                            style={{ width: 20, height: 20 }}
                        />
                        <p>در حال دریافت اطلاعات</p>
                    </div>
                ) : (
                    <Grid container className={classes.contactList}>
                        <Scrollbars onScroll={handleScroll} ref={addContactScroll}>
                            {(contactFiltered || contact).length > 0 ? (
                                (contactFiltered || contact).map((item, index) => (
                                    <ListItem
                                        key={index}
                                        button
                                        onClick={handleToggle(item)}
                                        className={classes.itemWrapper}
                                    >

                                        <div onClick={handleToggle(item)} className={classes.checkboxContainer}>
                                            {selectOstad ?
                                                (checked?.phone === item.phone) &&
                                                <RadioButton
                                                    isChecked={selectOstad ?
                                                        checked?.phone === item.phone
                                                        :
                                                        checked?.some(
                                                            (check) => ((check?.phone == item.phone) || (check?.username == item.phone) || (item.phone == generator?.phone) || (item.phone == generator?.username))
                                                        )}
                                                />
                                                :
                                                (checked.some(
                                                    (check) => ((check?.phone == item.phone) || (check?.username == item.phone) || (item.phone == generator?.phone) || (item.phone == generator?.username))
                                                ))
                                                &&
                                                <CircleCheckbox
                                                    isChecked={selectOstad ?
                                                        checked?.phone === item.phone
                                                        :
                                                        checked.some(
                                                            (check) => ((check?.phone == item.phone) || (check?.username == item.phone) || (item.phone == generator?.phone) || (item.phone == generator?.username))
                                                        )}
                                                />
                                            }
                                        </div>
                                        <MemberItem memberInfo={item} />

                                    </ListItem>
                                ))
                            ) : (
                                <div className={classes.noDataWrapper}>
                                    <img src={noData} alt="no data" />
                                    <p>کاربری یافت نشد</p>
                                </div>
                            )}
                        </Scrollbars>
                    </Grid>
                )}
            </div>
            <div className={classes.stepBtnContainer}>
                <ChistaButton onClick={handelSubmit}>تایید</ChistaButton>
            </div>
        </ModalLayoutWithHeader>
    );
};

export default withSnackbar(AddFromContactModal);
