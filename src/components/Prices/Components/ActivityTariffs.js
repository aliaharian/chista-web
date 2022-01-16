import React, { useEffect, useState } from 'react';
import Style from "../../../../src/assets/stylesheet/prices.module.scss";
import { useDispatch, useSelector } from 'react-redux';
import { authUpdateField } from '../../../../redux/auth';
import BuyPacket from '../../BuyPacket';
import { packetUpdateField } from '../../../../redux/packets';
import SingleActivityTariff from './SingleActivityTariff';
import { useRouter } from 'next/router';
import ErrorModal from './ErrorModal/ErrorModal';
import { getActivityActivePacket } from '../../../../redux/activity/Actions';

function ActivityTariffs({ tariffs }) {
    const [openBuyPacket, setOpenBuyPacket] = useState(false)
    const user = useSelector((state) => state.user.user);
    const [errorModal, setErrorModal] = useState(false)
    const activityActivePacket = useSelector(
        (state) => state.activity.activityActivePacket
    )
    const Router = useRouter();
    const Dispatch = useDispatch()
    function handleBuyPacket() {
        if (user.username) {
            if (activityActivePacket == {} || activityActivePacket == null) {
                setOpenBuyPacket(true)
                Dispatch(packetUpdateField({ prop: "openSelectUsers", value: true, upgrade: false, extend: false, type: 'activityPacket' }))
            } else {
                setErrorModal(true)
            }
        } else {
            Dispatch(authUpdateField({ prop: "startFree", value: true}));
            Dispatch(authUpdateField({ prop: "openInitiable", value: true }));
        }
    }

    useEffect(() => {
        !activityActivePacket && Dispatch(getActivityActivePacket())
    }, [activityActivePacket])

    return (
        <div className={Style.tariffContainer}>
            {
                openBuyPacket &&
                <BuyPacket
                    handleClose={() => setOpenBuyPacket(false)}
                />
            }
             <ErrorModal
                closeModal={()=>setErrorModal(false) }
                showModal={ errorModal}
                handelSubmit={()=>{
                    Router.push('/profile/dashboard')
                } }
            />
            <h2 className={Style.buyPackH2}>خرید بسته ایجاد فعالیت (تکلیف و آزمون)</h2>
            <div className={Style.tariffSingleActivityContainer}>
                {tariffs.map((tariff, index) => (
                    <SingleActivityTariff tariff={tariff} key={index} handleBuyPacket={handleBuyPacket} />
                ))}
            </div>
        </div>
    )
}

export default ActivityTariffs;