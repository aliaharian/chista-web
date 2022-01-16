import React, {useState} from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
    CircularProgress,
    IconButton,
} from "@material-ui/core"
import classNames from 'classnames';
import {reduxForm, Field} from "redux-form"
import {PriceNumber} from "../form"
import {numberFormat, isValidAmount} from "../../utilities"
import Icon from "../Icon/Icon";
import backIcon from '../../assets/images/back.svg';
import {connect} from "react-redux"
import {payUpdateField, getCreditPrice, increaseCredit, initializeFromStateForm} from "../../../redux/payment"
import useStyles from './styles';

function IncreaseCreditInitial(props) {
    const classes = useStyles();
    const [values, setValues] = useState({amount: null});

    React.useEffect(() => {
        if (props.openIncreaseCredit)
            props.getCreditPrice();
        
    }, [props.openIncreaseCredit]);

    function handleClose() {
        props.payUpdateField({prop: "openIncreaseCredit", value: false});
        props.reset();
        props.initialize({ amount: null });
        setValues({...null});
    }

    function submited({amount}) {
        props.increaseCredit({amount, wallet: props.user.walletUniqueName, callback: `${process.env.REACT_APP_CALLBACK_BANK}/adviser/${props.slug}`})
    }

    const handleSelectPrice = (value) => {
        setValues({amount: value});
        props.initialize({ amount: value.toString() })
    };
    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={props.openIncreaseCredit}
            transition={Slide}
            keepMounted
            onClose={handleClose}
        >
            <form onSubmit={props.handleSubmit((values) => submited(values))} className={classes.submitBox}>
                <div className={classes.modalHead}>
                    <IconButton onClick={handleClose} className={classes.iconButton} >
                        <Icon src={backIcon} className={classes.backIcon}  />
                    </IconButton>
                    <Typography className={classes.modalTitle}>افزایش اعتبار</Typography>
                </div>
                <DialogContent className={classes.modalContent}>
                    <div className={classes.contentTitle}>
                        <Typography className={classes.title}>لطفا مبلغ افزایش اعتبار خود را به تومان وارد
                            کنید</Typography>
                    </div>
                    {props.creditPrice && props.creditPrice.length > 0 ?
                        <>
                            <ul className={classes.priceWrapperList}>
                                {props.creditPrice.map((item, i) => (
                                    <li className={classNames(classes.priceListItem, {
                                        [classes.activePrice]: values.amount == item.key})}
                                        key={`price-name-${i}`}
                                        onClick={() => {
                                            handleSelectPrice(item.key)
                                        }}>
                                        {item.value}
                                    </li>
                                ))}
                            </ul>
                        </>
                        : <></>
                    }
                    <Field
                        name="amount"
                        label="تومان"
                        component={PriceNumber}
                        validate={[isValidAmount]}
                        classInput={classes.inputBox}
                        normalize={numberFormat.toEnglishDigits}
                    />
                </DialogContent>
                <Button
                    className={classes.dialogBtn}
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={(props.fetch || (props.pristine || props.submitting || !props.valid) )}
                >
                    {props.fetch ? (
                        <CircularProgress
                            color="primary"
                            style={{width: 20, height: 20}}
                        />
                    ) : (
                        "ادامه"
                    )}
                </Button>
            </form>
        </Dialog>
    )
}

const mapStateToProps = ({payment: {fetch, openIncreaseCredit, creditPrice}}, state) => ({
    fetch,
    openIncreaseCredit,
    creditPrice,
    initialValues: {amount: ''},
    load: initializeFromStateForm
});

export default connect(
    mapStateToProps,
    {payUpdateField, getCreditPrice, increaseCredit, initializeFromStateForm }
)(reduxForm({form: "initialForm",
    enableReinitialize : true,
    keepDirtyOnReinitialize : true})(IncreaseCreditInitial))
