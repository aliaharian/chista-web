import React, { useEffect } from "react"
import { connect, useDispatch, useSelector } from "react-redux"
import {
    getPid,
    getPup,
    packetUpdateField,
    preFactor,
    increaseCredit,
    getPacketFactor,
    buyPacket,
    getActivityPup
} from "../../../redux/packets"
import { sendBankForPay } from "../../../redux/payment";

import SelectUsers from "./SelectUsers";
import ShowFactor from "./ShowFactor";

import { useRouter } from 'next/router'
import Done from "./Done";
import { buyActivityPacket, getActivityPacketBill } from "../../../redux/activity/Actions";
import { errorSnackbar } from "../../../redux/user";
import axios from 'axios'

function BuyPacket(props) {
    const router = useRouter()
    // let params = router.query

    const Dispatch = useDispatch();

    const [userCount, setUserCount] = React.useState(null)
    const [duration, setDuration] = React.useState(null)
    const [load, setLoad] = React.useState(false)
    const [intervalShow, setIntervalShow] = React.useState(0)
    const [waitForBank, setWaitForBank] = React.useState(false)
    const [params, setParams] = React.useState(router.query)

    const pup = useSelector(
        (state) => state.packets.pup
    );
    const activityPup = useSelector(
        (state) => state.packets.activityPup
    );

    const pid = useSelector(
        (state) => state.packets.pid
    );

    const factor = useSelector(
        (state) => state.packets.factor
    );
    const activityPacketBill = useSelector(
        (state) => state.activity.activityPacketBill
    );

    useEffect(() => {
        switch (props.packetType) {
            case "classPacket":
                if (props.currentPacket) {
                    if (params.pup != undefined && params.pid != undefined) {
                        setUserCount(params.pup)
                        setDuration(params.pid)
                    } else {
                        setUserCount(pup?.result.find((x) => x.id == props.currentPacket?.pup?.id) ?
                            props.currentPacket?.pup?.id :
                            pup?.result[0].id)
                        setDuration(pid?.result.find((x) => x.id == props.currentPacket?.pid?.id) ?
                            props.currentPacket?.pid?.id :
                            pid?.result[0].id)
                    }
                    setIntervalShow(props.currentPacket?.intervalShow)
                } else {
                    if (params.pup != undefined && params.pid != undefined) {
                        setUserCount(params.pup)
                        setDuration(params.pid)
                    } else {
                        setUserCount(pup?.result[0].id)
                        setDuration(pid?.result[0].id)
                    }
                    setIntervalShow(pid?.result[0].interval)
                }
                break;

            case "activityPacket":
                if (props.currentActivityPacket) {
                    setUserCount(activityPup?.result.find((x) => x.id == props?.currentActivityPacket?.pup?.id) ?
                        props?.currentActivityPacket?.pup?.id :
                        null)
                    setDuration(pid?.result.find((x) => x.id == props?.currentActivityPacket?.pidId) ?
                        props?.currentActivityPacket?.pidId :
                        null)
                    setIntervalShow(props?.currentActivityPacket?.intervalShow)
                }
                else {
                    if (params.pup != undefined && params.pid != undefined) {
                        setUserCount(params.pup)
                        setDuration(params.pid)
                    } else {
                        setUserCount(pup?.result[0].id)
                        setDuration(pid?.result[0].id)
                    }
                    setIntervalShow(pid?.result[0].interval)
                }
                break;
        }
    }, [])

    useEffect(() => {
        if (params.id && params.success) {
            if (params.success === 'true') {
                if (params.packetType === 'classPacket') {
                    props.buyPacket(params.pup, params.pid, localStorage.getItem('chistaPacketAct'), parseInt(localStorage.getItem('chistaPacketId')))
                    callPreFactor(params.pup, params.pid, localStorage.getItem('chistaPacketAct'), parseInt(localStorage.getItem('chistaPacketId')), true)
                } else {
                    callBuyActivityPacket(
                        props.user.username,
                        pid?.result.find(x => x.id == params.pid),
                        activityPup?.result.find(x => x.id == params.pup),
                        params.prevId,
                        params.type === 'upgrade',
                        params.type === 'extend'
                    )
                }
                localStorage.removeItem('chistaPacketAct')
                localStorage.removeItem('chistaPacketId')
            }
            props.packetUpdateField({
                prop: "openSelectUsers",
                value: true,
                upgrade: props.upgrade,
                extend: props.extend,
                type: props.packetType
            })
            changeStep('done')
        }
        console.log('here works')

    }, [params]);

    useEffect(() => {
        if (!pup)
            Dispatch(getPup());

    }, [pup]);

    useEffect(() => {
        if (!activityPup)
            Dispatch(getActivityPup());

    }, [activityPup]);

    useEffect(() => {
        if (!pid)
            Dispatch(getPid());

    }, [pid]);

    useEffect(() => {
        if (props.bank_url && props.bank_url?.result !== null)
            Dispatch(sendBankForPay(props.bank_url?.result));

    }, [props.bank_url]);

    console.log('props.step', props.step)
    console.log('params', params)
    function handleClose(update = true) {
        console.log('update', update)
        let prevStep = props.step
        props.packetUpdateField({ prop: "openSelectUsers", value: false, upgrade: props.upgrade, extend: props.extend, type: props.packetType })
        props.packetUpdateField({ prop: "step", value: 'selectUsers', upgrade: props.upgrade, extend: props.extend, type: props.packetType })
        // if (update == true) {
        if ((params.id && params.success) || prevStep === 'done' || prevStep === 'doneFree') {
            router.push('/profile/dashboard/packets')
        }
        // } else {
        //     // router.replace('/profile/dashboard/packets', {shallow: true});
        //     // window.history.pushState("", "چیستا", "/profile/dashboard/packets");
        //     props.packetUpdateField({
        //         prop: "openSelectUsers",
        //         value: true,
        //         upgrade: props.upgrade,
        //         extend: props.extend,
        //         type: props.packetType
        //     })
        //     changeStep('selectUsers')
        //     setParams({hell:'yah'})
        //     console.log('working')
        //     window.history.replaceState(null, '', '/profile/dashboard/packets')
        // }
        props.handleClose(update);
    }

    const handleBack = () => {
        handleClose()
    }

    const changeStep = (step) => {
        props.packetUpdateField({ prop: "step", value: step, upgrade: props.upgrade, extend: props.extend, type: props.packetType })
    }
    const handleRetry = () => {
        if (props.packetType === 'classPacket') {
            callPreFactor(params.pup, params.pid, localStorage.getItem('chistaPacketAct'), parseInt(localStorage.getItem('chistaPacketId')), false)
        } else {
            callActivityPacketBill(
                props.user.username,
                pid?.result.find(x => x.id == params.pid),
                activityPup?.result.find(x => x.id == params.pup),
                params.prevId,
                localStorage.getItem('chistaPacketAct') === 'upgrade',
                localStorage.getItem('chistaPacketAct') === 'extend'
            )
        }
    }
    const handleNext = (type, value) => {
        switch (type) {
            case 'buyPacket':
                if (props.extend) {
                    localStorage.setItem('chistaPacketAct', 'extend')
                    if (props.packetType === 'classPacket') {
                        localStorage.setItem('chistaPacketId', props.currentPacket.id)
                    } else {
                        localStorage.setItem('chistaPacketId', props.currentActivityPacket.id)
                    }
                } else if (props.upgrade) {
                    localStorage.setItem('chistaPacketAct', 'upgrade')
                    if (props.packetType === 'classPacket') {
                        localStorage.setItem('chistaPacketId', props.currentPacket.id)
                    } else {
                        localStorage.setItem('chistaPacketId', props.currentActivityPacket.id)
                    }
                } else {
                    localStorage.setItem('chistaPacketAct', 'buy')
                    localStorage.setItem('chistaPacketId', '0')
                }
                if (props.packetType === 'classPacket') {
                    if (factor?.result.payablePrice === 0) {
                        buyPacket(
                            userCount, props.upgrade ? props.currentPacket.pid.id : duration,
                            localStorage.getItem('chistaPacketAct'),
                            parseInt(localStorage.getItem('chistaPacketId'))
                        )
                    }
                    else {
                        if (props.upgrade)
                            props.increaseCredit(props.user.walletUniqueName, factor?.result.transaction.amount, userCount, props.currentPacket.pid.id, props.currentPacket.id, 'upgrade', props.packetType)
                        else if (props.extend) {
                            props.increaseCredit(props.user.walletUniqueName, factor?.result.transaction.amount, userCount, duration, props.currentPacket.id, 'extend', props.packetType)
                        } else {
                            props.increaseCredit(props.user.walletUniqueName, factor?.result.transaction.amount, userCount, duration, 0, 'buy', props.packetType)
                        }
                        setWaitForBank(true)
                    }
                } else if (props.packetType === 'activityPacket') {
                    if (activityPacketBill.payablePrice === 0) {
                        setLoad(true)
                        callBuyActivityPacket(
                            props.user.username,
                            props.upgrade ? pid?.result.find(x => x.interval === props.currentActivityPacket.interval) : pid?.result.find(x => x.id === duration),
                            activityPup?.result.find(x => x.id === userCount),
                            props.currentActivityPacket?.id || 0,
                            props.upgrade, props.extend)
                    } else {
                        setWaitForBank(true)

                        if (props.upgrade)
                            props.increaseCredit(
                                props.user.walletUniqueName,
                                activityPacketBill.payablePrice,
                                userCount,
                                pid?.result.find(x => x.interval === props.currentActivityPacket.interval).id,
                                props.currentActivityPacket.id,
                                'upgrade',
                                props.packetType
                            )
                        else if (props.extend) {
                            props.increaseCredit(
                                props.user.walletUniqueName,
                                activityPacketBill.payablePrice,
                                userCount,
                                duration,
                                props.currentActivityPacket.id,
                                'extend',
                                props.packetType
                            )
                        } else {
                            props.increaseCredit(
                                props.user.walletUniqueName,
                                activityPacketBill.payablePrice,
                                userCount,
                                duration,
                                0,
                                'buy',
                                props.packetType
                            )
                        }
                    }
                }
                break;
        }
    }
    const buyPacket = async (pup, pid, act = 'buy', id = 0) => {
        setLoad(true)
        let url = `/userPacket/${act}`
        try {
            const response = await axios.post(
                url,
                {
                    id: id,
                    pup: { id: pup },
                    pid: { id: pid },
                }
            );
            props.buyPacket(
                pup,
                pid,
                act,
                id,
                true,
                response.data
            )

            Dispatch(preFactor(response.data))

            localStorage.removeItem('chistaPacketAct')
            localStorage.removeItem('chistaPacketId')

            props.packetUpdateField({
                prop: "openSelectUsers",
                value: true,
                upgrade: props.upgrade,
                extend: props.extend,
                type: props.packetType
            })
            changeStep('doneFree')
            setLoad(false)

        } catch (e) {
            Dispatch(errorSnackbar(e));
            setLoad(false)
        }
    };

    const callBuyActivityPacket = async (userPhone, pid, pup, id, upgrade, extend) => {
        try {
            let uri = upgrade ? `${process.env.REACT_APP_ACTIVITY_URL}/activityPackets/upgrade` : extend ? `${process.env.REACT_APP_ACTIVITY_URL}/activityPackets/extend` : `${process.env.REACT_APP_ACTIVITY_URL}/activityPackets`
            let response;
            if (upgrade || extend) {
                response = await axios.post(uri, {
                    "id": id,
                    "pidId": pid.id,
                    "pup": {
                        id: pup.id
                    },
                    "type": "MONTHLY",
                    "userPhone": userPhone
                });
            } else {
                response = await axios.put(uri, {
                    "id": id,
                    "type": "MONTHLY",
                    "pidId": pid.id,
                    "pup": {
                        id: pup.id
                    },
                    "userPhone": userPhone
                });
            }
            Dispatch(buyActivityPacket(response.data))
            localStorage.removeItem('chistaPacketAct')
            localStorage.removeItem('chistaPacketId')
            props.packetUpdateField({
                prop: "openSelectUsers",
                value: true,
                upgrade: props.upgrade,
                extend: props.extend,
                type: props.packetType
            })
            changeStep('doneFree')
            setLoad(false)
        } catch (e) {
            setLoad(false)
            Dispatch(errorSnackbar(e));
        }
    };
    const callPreFactor = async (pup, pid, act = 'buy', id = 0, done = false) => {
        let url = `/userPacket/check?${act}=true`
        Dispatch(preFactor(null))
        try {
            const response = await axios.post(
                url, {
                id: id,
                pup: { id: pup },
                pid: { id: pid }
            }
            );
            Dispatch(preFactor(response.data))
            !done && changeStep('showFactor')
            setLoad(false)

        } catch (e) {
            Dispatch(errorSnackbar(e));
            setLoad(false)
        }
    };
    const callActivityPacketBill = async (userPhone, pid, pup, id, upgrade, extend) => {
        try {
            Dispatch(getActivityPacketBill(null));
            const response = await axios.post(`${process.env.REACT_APP_ACTIVITY_URL}/activityPackets/bill?extend=${extend}&upgrade=${upgrade}`, {
                "id": id,
                "pidId": pid.id,
                "pup": {
                    id: pup.id
                },
                "userPhone": userPhone,
            });
            Dispatch(getActivityPacketBill(response.data));
            setLoad(false)
            changeStep('showFactor')
        } catch (e) {
            setLoad(false)
            Dispatch(errorSnackbar(e));
        }
    };

    const handleSubmitPacket = (userCount, duration) => {
        setUserCount(userCount)
        setDuration(duration)

        if (props.packetType === 'classPacket') {
            if (props.extend) {
                callPreFactor(userCount, duration, 'extend', props.currentPacket.id)
            } else if (props.upgrade) {
                callPreFactor(userCount, duration, 'upgrade', props.currentPacket.id)
            } else {
                callPreFactor(userCount, duration)
            }
            setLoad(true)
        } else if (props.packetType === 'activityPacket') {
            if (props.currentActivityPacket?.statusType === 'EXPIRED') {
                callActivityPacketBill(props.user.username, pid?.result.find(x => x.id === duration), activityPup?.result.find(x => x.id === userCount), 0, props.upgrade, props.extend)
            } else {
                callActivityPacketBill(props.user.username, pid?.result.find(x => x.id === duration), activityPup?.result.find(x => x.id === userCount), props.currentActivityPacket?.id || 0, props.upgrade, props.extend)
            }
            setLoad(true)
        }
    }
    return (
        <>
            {props.step === 'selectUsers' &&
                <SelectUsers
                    open={props.openSelectUsers && props.step === 'selectUsers'}
                    handleClose={handleClose}
                    handleBack={handleBack}
                    pup={props.packetType === 'activityPacket' ? activityPup : pup}
                    selectedPup={userCount}
                    upgrade={props.upgrade}
                    extend={props.extend}
                    expire={
                        props.packetType === 'activityPacket' ?
                            props.currentActivityPacket?.endTime / 1000 :
                            props.currentPacket?.expireAt

                    }
                    currentPacket={props.packetType === 'activityPacket' ? props.currentActivityPacket : props.currentPacket}
                    handleNext={(userCount, duration) => handleSubmitPacket(userCount, duration)}
                    selectedPid={duration}
                    currentUserCount={
                        props.packetType === 'activityPacket' ?
                            props.currentActivityPacket?.pup?.userCount
                            :
                            props.currentPacket?.pup?.userCount
                    }
                    pid={pid}
                    intervalShow={intervalShow}
                    packetType={props.packetType}
                    load={load}
                />
            }
            {props.step === 'showFactor' &&
                <ShowFactor
                    open={props.openSelectUsers && props.step === 'showFactor'}
                    handleClose={handleClose}
                    handleBack={handleBack}
                    factor={factor}
                    activityPacketBill={props.activityPacketBill}
                    packetType={props.packetType}
                    extend={props.extend}
                    upgrade={props.upgrade}
                    handleNext={() => handleNext('buyPacket', 'done')}
                    waitForBank={waitForBank}
                    load={load}
                />
            }
            {props.step === 'done' &&
                <Done
                    open={(props.openSelectUsers && props.step === 'done')}
                    handleClose={handleClose}
                    handleBack={handleBack}
                    success={params.success === 'true' || props.step === 'doneFree' ? 'true' : 'false'}
                    buy={props.factor}
                    handleNext={() => handleNext('done', 'done')}
                    handleRetry={handleRetry}
                    packetType={props.packetType}
                    upgrade={props.upgrade}
                    extend={props.extend}
                />
            }
            {props.step === 'doneFree' &&
                <Done
                    open={(props.openSelectUsers && props.step === 'doneFree')}
                    handleClose={handleClose}
                    handleBack={handleBack}
                    success={params.success === 'true' || props.step === 'doneFree' ? 'true' : 'false'}
                    buy={props.packetType === 'classPacket' ? props.factor : props.activityPacketBill}
                    handleNext={() => handleNext('done', 'done')}
                    packetType={props.packetType}
                    activityPacketBuyResponse={props.packetType === 'activityPacket' ? props.activityPacketBuyResponse : false}
                    upgrade={props.upgrade}
                    extend={props.extend}
                />
            }
        </>
    )
}

const mapStateToProps = ({
    packets: { openSelectUsers, step, upgrade, factor, bank_url, buy, currentPacket, extend, packetType },
    user: { user },
    activity: { currentActivityPacket, activityPacketBill, activityPacketBuyResponse }
}) => ({
    openSelectUsers,
    step,
    factor,
    user,
    bank_url,
    buy,
    upgrade,
    extend,
    currentPacket,
    packetType,
    currentActivityPacket,
    activityPacketBill,
    activityPacketBuyResponse
})

export default connect(
    mapStateToProps,
    { packetUpdateField, getPup, getPid, preFactor, increaseCredit, getPacketFactor, buyPacket }
)(BuyPacket)