import React from 'react';
import Style from "../../../../src/assets/stylesheet/prices.module.scss";
import checkList from '../../../../src/assets/images/actvitityPacketIcon.svg';
import walletBlue from '../../../assets/images/WalletIconBlue.svg'
import { Button, Grid } from "@material-ui/core";
import { withSnackbar } from 'notistack';
import { numberFormat } from '../../../utilities';

function SingleActivityTariff(props) {
    const [tariff, setTariff] = React.useState(props.tariff)
    return (
        <div className={Style.singleActivityTariffContainer}>
            <span>
                <img src={checkList} />
            </span>
            <h4><span className={Style.userCount}>{numberFormat.toPersianDigits(tariff.userCount)}</span> نفر همزمان</h4>
            <div className={Style.tariffPriceContainer}>
                <span>
                    ماهانه
                </span>
                <span>
                    {numberFormat.toPersianSeprateTomanCommas(tariff.price)}
                </span>
                <span>تومان</span>
            </div>
            <Grid item md={12} sm={12} xs={12} className={Style.buyBtnContainer}>
                <Button
                    onClick={() => props.handleBuyPacket()}
                    variant="contained"
                    className={Style.buyBtn}>
                    <img src={walletBlue} alt="" />
                    خرید
                </Button>
            </Grid>
        </div>
    )
}

export default withSnackbar(SingleActivityTariff);