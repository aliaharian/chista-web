import DialogLayout from "../contactDialogLayout/ContactDialogLayout";
import React from "react";
import AddList from "../../../../../../assets/images/addList.svg";
import AddNumber from "../../../../../../assets/images/addNumber.svg";
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
// import useStyles from "./Styles";
import { Scrollbars } from "react-custom-scrollbars";
import noData from "../../../../../../assets/images/no_result_search.svg";
import { ChistaText, PhoneNumber, Text } from "../../../../../form";
import { Field } from "redux-form";
import Icon from "../../../../../Icon/Icon";
import UserIcon from "../../../../../../assets/images/profile/registerOstad/UserIcon";
import MobileIcon from "../../../../../../assets/images/MobileIcon";
import {
    isPhone,
    maxLength20,
    maxLength40,
    minLength2,
    numberFormat,
    required,
    requiredCustom
} from "../../../../../../utilities";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { checkUserExist, clearContactInfo } from "../../../../../../../redux/contacts";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classes from './AddContact.module.scss'
const AddByNumberDialog = (props) => {
    // const classes = useStyles();
    const [mobile, setMobile] = React.useState('')
    const [name, setName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [mobileError, setMobileError] = React.useState()
    const [nameError, setNameError] = React.useState()
    const [lastNameError, setLastNameError] = React.useState()
    const [loading, setLoading] = React.useState(false)
    const Dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    let flag = true
    let loadUserExist = useSelector(
        (state) => state.contacts.loadUserExist
    );
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
        if (mobileError || nameError || lastNameError) {
            validation()
        }
    }, [mobile, name, lastName])

    const contactInfo = useSelector(
        (state) => state.contacts.contactInfo
    );

    React.useEffect(() => {
        if (contactInfo !== '') {
            console.log(contactInfo)
            setLoading(false)
            if (contactInfo.chatUserId === 0) {
                props.addContactFromNumber({
                    "phone": numberFormat.toEnglishDigitsOnlyNum(mobile),
                    "firstName": name,
                    "lastName": lastName,
                    "fullName": name + ' ' + lastName
                })
            } else {
                props.addContactFromNumber({
                    "phone": numberFormat.toEnglishDigitsOnlyNum(contactInfo.username),
                    "firstName": name,
                    "lastName": lastName,
                    // "fullName": contactInfo.fullName,
                    "onlineTime": contactInfo.onlineTime,
                    "status": contactInfo.state,
                    "chatUserId": contactInfo.chatUserId,

                })
            }
            Dispatch(clearContactInfo())
        }
    }, [contactInfo])


    const validation = () => {
        flag = true;
        setMobileError(null);
        setNameError(null);
        setLastNameError(null);
        let mobileErrorText = requiredCustom(mobile, `تلفن همراه`) || isPhone(mobile)
        let nameErrorText = requiredCustom(name, `نام`) || minLength2(name) || maxLength20(name)
        let lastNameErrorText = minLength2(lastName) || maxLength40(lastName)
        if (mobileErrorText !== undefined) {
            flag = false;
            setMobileError(numberFormat.toPersianDigits(mobileErrorText))
        }
        if (nameErrorText !== undefined) {
            flag = false;
            setNameError(numberFormat.toPersianDigits(nameErrorText))
        }
        if (lastNameErrorText !== undefined) {
            flag = false;
            setLastNameError(numberFormat.toPersianDigits(lastNameErrorText))
        }
        if (flag) {
            setLoading(true)
        }
    }
    const handleSubmit = () => {
        validation()
        flag && Dispatch(checkUserExist(numberFormat.toEnglishDigitsOnlyNum(mobile)))
        // flag && props.addContactFromNumber({
        //     "phone":numberFormat.toEnglishDigitsOnlyNum(mobile),
        //     "firstName":name,
        //     "lastName":lastName,
        //     "fullName" : name + ' '+lastName
        // })
    }

    return (
        <DialogLayout
            open={props.open}
            title={`افزودن با شماره تلفن`}
            closeModal={props.closeModal}
            style={{ position: 'unset' }}
            // customBack
        // className={{
        //     root: classes.inviteDialogRoot
        // }}
        >
            <div className={classes.contactsAddContactBody}>
                <div>
                    <Typography className={clsx(classes.contactsPhoneInputLabel, classes.contactsPhoneInputLabelRequired, classes.contactsMt34)}>شماره
                        تلفن
                        همراه</Typography>
                    <Text style={{ marginBottom: 0, marginTop: 12 }}
                        meta={``}
                        className={clsx(classes.contactsAddContactInput, mobileError && classes.contactsInputError)}
                        onChange={(e) => handleChange('mobile', e)}
                        value={mobile}
                        InputProps={{
                            placeholder: `مثال : ۱۲۳۴۵۶۷-۰۹۱۲`,
                            startAdornment: (
                                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                    <MobileIcon style={{ height: "20px", marginRight: 0 }} />
                                </InputAdornment>),
                            maxLength: (29),
                            inputProps: (
                                {
                                    style: { textAlign: 'left', direction: 'ltr' }
                                }
                            ),
                            className: classes.contactsUpdateField,
                        }}
                    />
                    {
                        mobileError &&
                        <Typography className={clsx(classes.contactsTextError)}>{mobileError}</Typography>
                    }

                </div>

                <div>
                    <Typography
                        className={clsx(classes.contactsPhoneInputLabel, classes.contactsPhoneInputLabelRequired)}>نام</Typography>

                    <Text style={{ marginBottom: 0, marginTop: 12 }}
                        meta={``}
                        className={clsx(classes.contactsAddContactInput, nameError && classes.contactsInputError)}
                        onChange={(e) => handleChange('name', e)}
                        value={name}
                        InputProps={{
                            placeholder: `مثال : محمد`,

                            startAdornment: (
                                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                    <UserIcon style={{ height: "20px", marginRight: 0 }} />
                                </InputAdornment>),

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
                        className={clsx(classes.contactsAddContactInput, lastNameError && classes.contactsInputError)}
                        InputProps={{
                            placeholder: `مثال : محمدی`,
                            startAdornment: (
                                <InputAdornment position="start" style={{ display: "flex", height: "auto" }}>
                                    <UserIcon style={{ height: "20px", marginRight: 0 }} />
                                </InputAdornment>),

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
                    {/*{loading && <CircularProgress*/}
                    {/*    style={{width: 20, height: 20 , color:'#fff'}}*/}
                    {/*/>}*/}
                    تایید
                </Button>
            </div>
        </DialogLayout>
    )
}

export default AddByNumberDialog