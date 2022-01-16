import React, { useState } from 'react';
import Style from "../../../../src/assets/stylesheet/prices.module.scss";
import SingleTariff from './SingleTariff'
import { useDispatch, useSelector } from 'react-redux';
import { authUpdateField } from '../../../../redux/auth';
import BuyPacket from '../../BuyPacket';
import { packetUpdateField } from '../../../../redux/packets';
import ErrorModal from './ErrorModal/ErrorModal';
import { useRouter } from 'next/router';

function Tariffs({ tariffs }) {
    const [openBuyPacket, setOpenBuyPacket] = useState(false)
    const [errorModal, setErrorModal] = useState(false)
    const user = useSelector((state) => state.user.user);
    const Dispatch = useDispatch()
    const Router = useRouter();
    function handleBuyPacket() {
        if (user.username) {
            if (user.packetStat == 462) {
                setOpenBuyPacket(true)
                Dispatch(packetUpdateField({ prop: "openSelectUsers", value: true, upgrade: false, extend: false, type: 'classPacket' }))
            } else {
                setErrorModal(true)
            }
        } else {
            Dispatch(authUpdateField({ prop: "startFree", value: true}));
            Dispatch(authUpdateField({ prop: "openInitiable", value: true }));
        }
    }
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
                    Router.push('/profile/dashboard/packets')
                } }
            />
            {/*<h3>تعرفه پلن ها</h3>*/}
            <div className={Style.tariffPlansContainer}>
                {tariffs.map((tariff, index) => (
                    <SingleTariff tariff={tariff} key={index} handleBuyPacket={handleBuyPacket} />
                ))}
            </div>
        </div>
    )
}

export default Tariffs;