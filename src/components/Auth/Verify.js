import React, {useEffect, useRef} from "react"
import {
    Button,
    DialogContent,
    Typography,
} from "@material-ui/core"
import {reduxForm, Field, formValueSelector} from "redux-form"
import {VerifyText} from "../form"
import {minLength4} from "../../utilities"
import {connect} from "react-redux"
import {
    authUpdateField,
    verify,
    callWithMe,
    resendCode,
    resetAuth,
    decrementResendCodeTimer,
    resetResendCodeTimer
} from "../../../redux/auth"
import useStyles from './styles';
import numberFormat from "../../utilities/numberFormat";
import refreshIcon from '../../assets/images/refresh.svg'
import DialogLayout from "../Profile/componnets/Content/Contacts/dialog/DialogLayout";

function Verify(props) {
    const classes = useStyles();
    const [called, setCalled] = React.useState(false);
    const [resend, setResend] = React.useState(0);
    const [transition, setTransition] = React.useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })

    const interval = useRef(false)
    useEffect(() => {
        if (props.openVerify) {
            interval.current = setInterval(() => {
                props.decrementResendCodeTimer();
            }, 1000);
        } else {
            if (interval.current) clearInterval(interval.current);
            props.resetResendCodeTimer();
        }
    }, [props.openVerify, resend]);

    function handleClose() {
        props.authUpdateField({prop: "openVerify", value: false});
        props.reset();
    }

    function submited({validationCode}) {
        props.verify({
            validationCode: numberFormat.toEnglishDigits(validationCode),
        });
    }

    function getTimerInFormat() {
        return (
            numberFormat.toPersianDigits(Math.floor(props.timer / 60)) +
            ":" +
            numberFormat.toPersianDigits(props.timer % 60)
        );
    }

    let submitter = props.handleSubmit((values) => submited(values));
    return (
        <DialogLayout
            open={props.openVerify}
            closeModal={handleClose}
            className={{
                root: classes.root
            }}
            title={`تاییدیه پیامکی`}
            customBack
        >
            <form onSubmit={submitter} className={classes.modalContent}>
                <div className={classes.modalHead}>
                    <Typography className={classes.verifyModalTitleDesc}>کد ارسال شده
                        به {numberFormat.toPersianDigits(props.username)} راوارد کنید</Typography>
                    <Button
                        onClick={() => {
                            props.resetAuth();
                        }}
                        className={classes.resetBtn}
                    >
                        ویرایش شماره همراه
                    </Button>
                </div>
                <DialogContent className={classes.dialogContent}>
                    <Field
                        name="validationCode"
                        label="کد تایید"
                        component={VerifyText}
                        validate={[minLength4]}
                        normalize={numberFormat.toPersianDigits}
                        submit={submitter}
                    />
                    <div className={classes.verifyActions}>
                        <div>
                            {props.timer > 0 ? (
                                <>
                                    <Typography className={classes.timer}>
                                        {getTimerInFormat()}
                                        <span> تا ارسال مجدد</span>
                                    </Typography>
                                </>
                            ) : (
                                <Typography className={classes.timerNote}>

                                    {resend<2?resend === 0 ?
                                        `پیامک را دریافت نکردید؟`
                                        :
                                        `هنوز مشکل دارید؟`
                                        :
                                        `ورود برای شما انجام نشد لطفا مجددا تلاش نمایید`
                                    }
                                </Typography>
                            )}
                        </div>
                        {props.timer <= 0 && resend < 2 ?
                            resend === 0 ?
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.resendCodeBtn}
                                    disabled={props.timer > 0 || props.load}
                                    onClick={() => {
                                        props.resendCode();
                                        setResend(resend + 1);
                                        clearInterval(interval.current);
                                        props.resetResendCodeTimer();
                                    }}
                                >
                                    <img src={refreshIcon} alt=""/>
                                    <p>ارسال مجدد</p>
                                </Button>
                                :
                                <Button
                                    disabled={called}
                                    onClick={() => {
                                        props.callWithMe();
                                        setCalled(true);
                                        setResend(resend + 1);
                                        clearInterval(interval.current);
                                        props.resetResendCodeTimer();
                                    }}
                                    className={classes.callWithMeBtn}
                                >
                                    دریافت با تماس
                                </Button>
                            :
                            <></>
                        }
                    </div>
                </DialogContent>
            </form>
        </DialogLayout>
    );
}

const selector = formValueSelector("verifyForm");

const mapStateToProps = (state) => {
    return {
        filledCode: selector(state, "validationCode"),
        load: state.auth.load,
        uuid: state.auth.uuid,
        openVerify: state.auth.openVerify,
        username: state.auth.username,
        timer: state.auth.timer,
    };
};

export default connect(mapStateToProps, {
    authUpdateField,
    verify,
    callWithMe,
    resetAuth,
    decrementResendCodeTimer,
    resetResendCodeTimer,
    resendCode,
})(reduxForm({form: "verifyForm"})(Verify));
