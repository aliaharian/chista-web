import React, {useEffect} from "react"
import {
    Button,
    DialogContent,
    Typography,
    CircularProgress

} from "@material-ui/core"
import {reduxForm, Field} from "redux-form"
import {PhoneNumber} from "../form"
import {isPhone, numberFormat} from "../../utilities"
import {connect} from "react-redux"
import {authUpdateField, initiable} from "../../../redux/auth"
import useStyles from './styles';
import DialogLayout from "../Profile/componnets/Content/Contacts/dialog/DialogLayout";

function Initiable(props) {
    const classes = useStyles();
    const [transition, setTransition] = React.useState(false)
    const [mobile, setMobile] = React.useState('')
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })

    function handleClose() {
        props.authUpdateField({prop: "openInitiable", value: false})
        props.reset()
    }

    const handleChangeMobile = (e) => {
        setMobile(e.target.value)
    }

    function submited({username}) {
        props.initiable({username: numberFormat.toEnglishDigitsOnlyNum(username)})
    }
    return (
        <DialogLayout
            open={props.openInitiable}
            className={{
                root: classes.root
            }}
            closeModal={handleClose}
            title={`ورود / ثبت نام`}
            customBack
        >
            <form onSubmit={props.handleSubmit((values) => submited(values))} className={classes.modalContent}>
                <DialogContent className={classes.loginFormContainer}>
                    <Typography className={classes.initiableTitle}>لطفا شماره همراه مورد نظر را وارد کنید</Typography>
                    <Typography className={classes.phoneInputLabel}>تلفن همراه</Typography>
                    <Field
                        name="username"
                        label="شماره موبایل"
                        component={PhoneNumber}
                        validate={[isPhone]}
                        normalize={numberFormat.phoneMask}
                        onChange={(e) => handleChangeMobile(e)}
                        autoComplete={'off'}
                        suggestions={'off'}
                        autoCorrect={'off'}
                        spellCheck={'off'}
                    />
                    {
                        props.load &&
                        <div className={classes.loadingContainer}>
                            <CircularProgress
                                color="primary"
                                style={{width: 50, height: 50 ,color:'#0c0b31'}}
                            />
                        </div>
                    }
                </DialogContent>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={mobile.length < 13 || props.load || (props.pristine || props.submitting)}
                    className={classes.actionBtn}
                >
                     بعدی
                </Button>
            </form>
        </DialogLayout>
    )
}

const mapStateToProps = ({auth: {load, openInitiable}}) => ({
    load,
    openInitiable,
})

export default connect(
    mapStateToProps,
    {authUpdateField, initiable}
)(reduxForm({form: "initiableForm", touchOnBlur: false})(Initiable))