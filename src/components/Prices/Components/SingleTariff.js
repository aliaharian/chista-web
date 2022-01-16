import React from 'react';
import Style from "../../../../src/assets/stylesheet/prices.module.scss";
import CheckCircleOutlineIcon from '../../../assets/images/tarrifsCheck.svg';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import walletBlue from '../../../assets/images/WalletIconBlue.svg'
import {Button} from "@material-ui/core";
import {withSnackbar} from 'notistack';

 function singleTariff (props) {
    const [tariff , setTariff]= React.useState(props.tariff)
    return (
        <div className={Style.singleTariffContainer}>
            <span>
                {tariff.name}
            </span>
            <h4>{tariff.desc}</h4>
            <div className={Style.tariffPriceContainer}>
                <span>
                    ماهانه
                </span>
                <span>
                    {tariff.price}
                </span>
                <span>تومان</span>
            </div>
            <div className={Style.featuresContainer}>
                {tariff.features.map((feature) => (
                    <div>
                        {feature.active ?
                            <img src={CheckCircleOutlineIcon} className={Style.active}/>
                            : <CancelOutlinedIcon className={Style.nonActive}/>
                        }
                        <p>{feature.name}</p>
                    </div>
                ))}
            </div>
            <div className={Style.buyBtnContainer}>
                    <Button
                        onClick={()=>props.handleBuyPacket()}
                        variant="contained"
                        className={Style.buyBtn}>
                        <img src={walletBlue} alt=""/>
                        خرید
                    </Button>
            </div>
        </div>
    )
}

export default withSnackbar(singleTariff);