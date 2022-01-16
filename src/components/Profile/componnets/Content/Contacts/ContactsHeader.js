import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";
import SearchRoundedIcon from "../../../../../assets/images/searchIcon.svg"
import closeIcon from "../../../../../assets/images/close.svg"
import { Button } from "@material-ui/core";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import clsx from "clsx";
import { useDebouncedCallback } from "use-debounce";
import { useDispatch } from "react-redux";

import { getClassesList } from "../../../../../../redux/adviserDashboard";

import useStyles from "./Styles";
import classes from './Contacts.module.scss'
import Link from "../../../../Link/Link";
import CloseIcon from '@material-ui/icons/Close';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Back from "../../../../../assets/images/ArrowBack";
import PlusIcon from '../../../../../assets/images/PlusIcon';
const ContactsHeader = ({ checkOwner, handleSearch, handleOpenInvite, openAddContactDialog }) => {
    // const classes = useStyles();
    const Dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));
    const router = useRouter();
    const [isExpand, setIsExpand] = useState(false);
    const [showModalCheck, setShowModalCheck] = useState(false);
    const searchInput = useRef(null);
    const [openInsertClass, setOpenInsertClass] = useState(false)
    const [value, setValue] = useState('')
    const [debouncedFunction] = useDebouncedCallback((value) => {
        Dispatch(getClassesList(false, { title: value }, true));
    }, 1000);


    return (
        <>

            <div className={classes.contactsActions}>
                <div
                    className={clsx(
                        classes.contactsSearch,
                        classes.contactsSearchExpand
                    )}
                >
                    <input
                        name="title"
                        autocomplete="off"
                        placeholder={`جستجو در نام`}
                        value={value}
                        onChange={(e) => {
                            handleSearch(e)
                            setValue(e.target.value)
                        }}
                    />

                    {
                        value === '' ?
                            <img src={SearchRoundedIcon}
                                // onClick={toggleExpand}
                                className={classes.contactsSearchIcon} />
                            :
                            <img src={closeIcon}
                                style={{
                                    height: 20,
                                    width: 20
                                }}
                                onClick={() => {
                                    setValue('')
                                    handleSearch({ target: { value: '' } })

                                }}
                                className={classes.contactsSearchIcon} />
                    }
                </div>
                <>


                    {isMobile &&
                        <div className={classes.contactsHeaderRes}>
                            <div className={classes.contactsBreadcumb}>
                                <Back
                                    viewBox="0 0 22 22"
                                    style={{ marginLeft: 10 }}
                                    onClick={() => router.push('/profile/dashboard')}
                                />
                                <p>{`مخاطبین`}</p>
                            </div>
                            <Button
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
                            </Button>
                        </div>
                    }

                    {!isMobile && <Button
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
                    </Button>}
                </>
            </div>

        </>
    );
}
    ;

export default ContactsHeader;
