import React from "react";
import AddList from "../../../../../assets/images/addList.svg";
import AddNumber from "../../../../../assets/images/addNumber.svg";
import {
    Grid,
    Link,
    Divider,
    Typography,
    DialogContent,
    InputAdornment,
    Button,
    CircularProgress
} from "@material-ui/core";
import useStyles from "./addContact/Styles";
import { Scrollbars } from "react-custom-scrollbars";
import noData from "../../../../../assets/images/no_result_search.svg";
import { ChistaText, PhoneNumber, Text } from "../../../../form";
import { Field } from "redux-form";
import Icon from "../../../../Icon/Icon";
import UserIcon from "../../../../../assets/images/profile/registerOstad/UserIcon";
import mobileIcon from "../../../../../assets/images/mobileIcon.svg";
import {
    isPhone,
    maxLength20,
    maxLength40,
    minLength2,
    numberFormat,
    required,
    requiredCustom
} from "../../../../../utilities";
import clsx from "clsx";
import { useSelector } from "react-redux";
import DialogLayout from "./contactDialogLayout/ContactDialogLayout";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classes from './addContact/AddContact.module.scss'
const UpdateContact = (props) => {
    // const classes = useStyles();
    const [mobile, setMobile] = React.useState(numberFormat.toPersianDigits(props.user?.phone || ''))
    const [name, setName] = React.useState(props.user?.firstName || '')
    const [lastName, setLastName] = React.useState(props.user?.lastName || '')
    const [mobileError, setMobileError] = React.useState()
    const [nameError, setNameError] = React.useState()
    const [lastNameError, setLastNameError] = React.useState()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    const handleChange = (type, e) => {
        switch (type) {
            case 'mobile':
                if ((/^[0-9]+$/.test(numberFormat.toEnglishDigits(e.target.value)) && e.target.value.length < 12) || e.target.value === '') {
                    setMobile(numberFormat.toPersianDigits(e.target.value))
                }
                break;
            case 'name':
                setName(e.target.value)
                break;
            case 'lastName':
                setLastName(e.target.value)
                break;
        }

    }
    React.useEffect(() => {
        setMobile(numberFormat.toPersianDigits(props.user?.phone || ''))
        setName(props.user?.firstName || '')
        setLastName(props.user?.lastName || '')

    }, [props.user])
    const handleSubmit = () => {
        let flag = true
        setMobileError(null);
        setNameError(null);
        setLastNameError(null);
        let mobileErrorText = required(mobile) || isPhone(mobile)
        let nameErrorText = requiredCustom(name, `نام`) || minLength2(name) || maxLength20(name)
        let lastNameErrorText = minLength2(lastName) || maxLength40(lastName)
        if (mobileErrorText !== undefined) {
            flag = false;
            setMobileError(mobileErrorText)
        }
        if (nameErrorText !== undefined) {
            flag = false;
            setNameError(nameErrorText)
        }
        if (lastNameErrorText !== undefined) {
            flag = false;
            setLastNameError(lastNameErrorText)
        }

        flag && props.handleUpdateContact({
            "phone": numberFormat.toEnglishDigitsOnlyNum(mobile),
            "firstName": name,
            "lastName": lastName,
            "fullName": name + ' ' + lastName
        })
    }

    return (
        <DialogLayout
            open={props.open}
            title={`ویرایش مخاطب`}
            closeModal={props.closeModal}
            // className={{
            //     root: classes.inviteDialogRoot
            // }}
            customBack
            withCloseIcon
            style={{ position: 'unset' }}
        >
            <div className={classes.contactsAddContactBody}>
                <div>
                    <Typography
                        className={clsx(classes.contactsPhoneInputLabel,classes.contactsMt18)}>شماره
                        تلفن
                        همراه</Typography>
                    <Text style={{ marginBottom: 0, marginTop: 12 }}
                        className={classes.contactsBorderNone}

                        meta={``}
                        disabled={true}
                        onChange={(e) => handleChange('mobile', e)}
                        value={mobile}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                    <Icon src={mobileIcon} style={{ height: "20px", marginRight: 0,filter:'contrast(0.01)' }} />
                                </InputAdornment>),
                            maxLength: (29),
                            inputProps: (
                                {
                                    style: { textAlign: 'left', direction: 'ltr', border: 'none' },
                                    className: classes.contactsBorderNone
                                }
                            ),
                            // className: classes.contactsBorderNone,
                            className: classes.contactsUpdateField,
                        }}
                    />
                    {
                        mobileError &&
                        <Typography className={clsx(classes.contactsInputError)}>{mobileError}</Typography>
                    }

                </div>

                <div>
                    <Typography
                        className={clsx(classes.contactsPhoneInputLabel, classes.contactsPhoneInputLabelRequired)}>نام</Typography>

                    <Text style={{ marginBottom: 0, marginTop: 12 }}
                        meta={``}
                        onChange={(e) => handleChange('name', e)}
                        value={name}
                        className={clsx(classes.contactsAddContactInput, nameError && classes.contactsInputError)}

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                    <UserIcon style={{ height: "20px", marginRight: 0 }} />
                                </InputAdornment>),
                            placeholder: 'مثلا : محمد',
                            className: classes.contactsUpdateField,
                        }}
                    />
                    {
                        nameError &&
                        <Typography className={clsx(classes.contactsTextError)}>{nameError}</Typography>
                    }
                </div>

                <div>
                    <Typography className={classes.contactsPhoneInputLabel}>نام خانوادگی</Typography>

                    <Text style={{ marginBottom: 0, marginTop: 12 }}
                        meta={``}
                        onChange={(e) => handleChange('lastName', e)}
                        value={lastName}
                        placeholder={`مثلا : محمدی`}
                        className={clsx(classes.contactsAddContactInput, lastNameError && classes.contactsInputError)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                    <UserIcon style={{ height: "20px", marginRight: 0 }} />
                                </InputAdornment>),
                            placeholder: 'مثلا : محمدی',
                            className: classes.contactsUpdateField,
                        }}
                    />
                    {
                        lastNameError &&
                        <Typography className={clsx(classes.contactsTextError)}>{lastNameError}</Typography>
                    }
                </div>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.addContactActionBtn}
                >
                    تایید
                </Button>
            </div>
        </DialogLayout>
    )
}

export default UpdateContact