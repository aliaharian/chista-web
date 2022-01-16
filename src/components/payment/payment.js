import React from 'react';
import {connect} from "react-redux";
import {useRouter} from 'next/router'
import {sendBankForPay} from "../../../redux/payment";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    textCenter: {
        '&>p': {
            textAlign: "center",
            '&:nth-child(1)': {
                fontFamily: theme.font.medium,
                color: theme.textColor.primary,
                marginTop: 160,
                [theme.breakpoints.down('sm')]: {
                    marginTop: 70,
                },

            },
            '&:nth-child(2)': {
                fontSize: 13,
                color: theme.textColor.primary,
                marginBottom: 300,
                [theme.breakpoints.down('sm')]: {
                    marginBottom: 114
                },
            }
        }
    }
}));

function Payment(props) {
    const classes = useStyles();
    const router = useRouter();
    React.useEffect(() => {
        sendBank();
        //clear adviser store back flag
    }, []);

    async function sendBank() {
        const result = await props.sendBankForPay(props.slug);
    }

    return (
        <div className={classes.textCenter}>
            <p>در حال انتقال به بانک </p>
            <p>لطفا منتظر بمانید </p>
        </div>
    );
}

Payment.propTypes = {};

const mapStateToProps = (state) => ({
    bankType: state.payment.bankType
});

export default connect(mapStateToProps, {sendBankForPay})(Payment);