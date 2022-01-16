import React, {useState} from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Slide,
    Typography,
} from "@material-ui/core"
import {reduxForm} from "redux-form"
import Icon from "../Icon/Icon";
import {connect} from "react-redux"
import {payUpdateField, getFactor} from "../../../redux/payment"
import useStyles from './styles';
import logoIcon from '../../assets/images/logo-wihtout-typo.svg'
import checkIcon from '../../assets/images/done-check.svg'
import walletIcon from '../../assets/images/wallet.svg'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function Factor(props) {
    const {transactionId} = props
    const classes = useStyles();

    const [values, setValues] = useState({amount: null});

    React.useEffect(() => {
        if (props.openFactor)
            props.getFactor(transactionId);
        
    }, [props.openFactor]);

    function handleClose() {
        props.payUpdateField({prop: "openFactor", value: false});
        props.reset();
    }

    return (
        <Dialog
            fullWidth
            maxWidth="xs"
            open={props.openFactor}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}>
            <div className={classes.contentWrapper}>
                <DialogContent className={classes.modalContent}>
                    <div className={classes.logoBox}>
                        <Icon src={logoIcon} className={classes.modalLogoIcon}/>
                    </div>
                    <div className={classes.contentTitle}>
                        {props.factorData && props.factorData.success &&
                        <Typography>مبلغ <span className={classes.blueText}>{props.factorData.amount} تومان </span>
                            با موفقیت به کیف پول شما اضافه شد
                        </Typography>
                        }
                        {props.factorData && !props.factorData.success &&
                        <Typography >
                            {props.factorData.success ? "با موفقیت به کیف پول شما اضافه شد" : props.factorData.note}
                        </Typography>
                        }
                    </div>
                    {props.factorData && props.factorData.success &&
                    <div>
                        <Icon src={checkIcon} className={classes.checkIcon}/>
                    </div>}
                    {props.factorData && !props.factorData.success &&
                    <div>
                        <HighlightOffIcon style={{width: '140px', height: '140px'}} />
                    </div>}
                    <div>
                        <Typography className={classes.walletLabel}>
                            <Icon src={walletIcon} className={classes.walletIcon}/>
                            موجودی فعلی:
                        </Typography>
                    </div>
                    <div>
                        {props.factorData && <Typography className={classes.creditBox}>{props.factorData.currentCredit} تومان</Typography>}
                    </div>
                </DialogContent>
                <Button
                    className={classes.dialogBtn}
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleClose}>
                    بازگشت
                </Button>
            </div>
        </Dialog>
    )
}

const mapStateToProps = ({payment: {factorData, openFactor}}, state) => ({
    openFactor,
    factorData,
});

export default connect(
    mapStateToProps,
    {payUpdateField, getFactor}
)(reduxForm({
    form: "initialForm",
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(Factor))
