import React, { useEffect, useRef } from "react"
import {
    Button,
    Dialog,
    DialogContent,
    Typography,
    CircularProgress, FormControlLabel, useTheme, LinearProgress
} from "@material-ui/core"
import { numberFormat } from "../../utilities"
import classes from '../../assets/stylesheet/profile/buyPacket.module.scss';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import BeatLoader from "react-spinners/BeatLoader";
import ChistaTable from "../Table/Table";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import closeIcon from "../../assets/images/close.svg";
import arrowBackIcon from "../../assets/images/arrowBack.svg";
import clsx from "clsx";
import RectangleCheckbox from '../Kit/Checkbox/RectangleCheckbox'

function ShowFactor(props) {
    const [transition, setTransition] = React.useState(false)
    const [factor, setFactor] = React.useState(null)
    const [activityPacketBill, setActivityPacketBill] = React.useState(null)
    const [policy, setPolicy] = React.useState(false)
    const [lastTable, setLastTable] = React.useState([])
    const [act, setAct] = React.useState(props.upgrade ? `ارتقا` : props.extend ? `تمدید` : `خرید`)
    const theme = useTheme();
    const terms = useRef(null)
    const factorRef = useRef()
    const isMobile = useMediaQuery(theme.breakpoints.down(480));

    const isDesktopSm = useMediaQuery(theme.breakpoints.down(1800));
    useEffect(() => {
        if (factor === null && props.factor !== null)
            setFactor(props.factor?.result)

    }, [props.factor])
    useEffect(() => {
        if (activityPacketBill === null && props.activityPacketBill !== null)
            setActivityPacketBill(props.activityPacketBill)

    }, [props.activityPacketBill])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })
    useEffect(() => {
        if (activityPacketBill !== null && lastTable.length < 1 && props.packetType === 'activityPacket') {
            let lastTableTemp = [];
            lastTableTemp.push([
                <>
                    ‍{` تخفیف (${numberFormat.toPersianDigits(activityPacketBill.discountPercent)}٪)`}
                </>
                ,
                <>
                    {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.discountPrice)} تومان`}
                </>
            ],
                [
                    <>
                        ‍{` مالیات (${numberFormat.toPersianDigits(activityPacketBill.taxPercent)}٪)`}
                    </>
                    ,
                    <>
                        {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.taxPrice)} تومان`}
                    </>
                ]
            )

            if (activityPacketBill.id !== 0 && props.extend === false && activityPacketBill.preRemainedDays) {
                lastTableTemp.push(
                    [
                        <>
                            {`تعداد روزهای باقی مانده از بسته قبلی`}
                        </>
                        ,
                        <>
                            {`${numberFormat.toPersianDigits(activityPacketBill.preRemainedDays)}`}
                        </>
                    ]
                )
            }
            if (props.upgrade) {
                lastTableTemp.push(

                    [
                        <>
                            {`مبلغ بسته جدید`}
                        </>
                        ,
                        <>
                            {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.packetPrice)} تومان`}
                        </>
                    ]
                )

            }
            lastTableTemp.push(
                [
                    <>
                        جمع کل
                    </>
                    ,
                    <>
                        {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.totalPrice)} تومان`}
                    </>
                ])

            if (props.upgrade) {
                lastTableTemp.push([
                    <>
                        {`مبلغ باقی مانده از بسته قبلی`}
                    </>
                    ,
                    <>
                        {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.preRemainedPrice)} تومان`}
                    </>
                ])
            }
            setLastTable(lastTableTemp)
        }

        else if (factor !== null && lastTable.length < 1 && props.packetType === 'classPacket') {
            let lastTableTemp = [];
            lastTableTemp.push([
                <>
                    ‍{` تخفیف (${numberFormat.toPersianDigits(factor.discountPercent)}٪)`}
                </>
                ,
                <>
                    {`${numberFormat.toPersianSeprateTomanCommas(factor.discountPrice)} تومان`}
                </>
            ],
                [
                    <>
                        ‍{` مالیات (${numberFormat.toPersianDigits(factor.taxPercent)}٪)`}
                    </>
                    ,
                    <>
                        {`${numberFormat.toPersianSeprateTomanCommas(factor.tax)} تومان`}
                    </>
                ]
            )
            if (factor.id !== 0 && props.extend === false && factor.preRemainedDays) {
                lastTableTemp.push(
                    [
                        <>
                            {`تعداد روزهای باقی مانده از بسته قبلی`}
                        </>
                        ,
                        <>
                            {`${numberFormat.toPersianDigits(factor.preRemainedDays)}`}
                        </>
                    ]
                )
            }
            if (props.upgrade) {
                lastTableTemp.push(
                    [
                        <>
                            {`مبلغ بسته جدید`}
                        </>
                        ,
                        <>
                            {`${numberFormat.toPersianSeprateTomanCommas(factor.totalPrice)} تومان`}
                        </>
                    ]
                )

            }

            lastTableTemp.push(
                [
                    <>
                        جمع کل
                    </>
                    ,
                    <>
                        {`${numberFormat.toPersianSeprateTomanCommas(factor.payablePrice)} تومان`}
                    </>
                ])
            if (props.upgrade) {
                lastTableTemp.push(
                    [
                        <>
                            {`مبلغ باقی مانده از بسته قبلی`}
                        </>
                        ,
                        <>
                            {`${numberFormat.toPersianSeprateTomanCommas(factor.preRemainedPriceForUpgrade || factor.remainedPriceForUpgrade)} تومان`}
                        </>
                    ]
                )

            }
            setLastTable(lastTableTemp)
        }
    })
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            fullScreen={isMobile}
            PaperProps={{
                className: clsx(classes.factorRoot, props.waitForBank && classes.overflowHidden)
            }}
            ref={factorRef}
        >
            {props.load && <LinearProgress className={classes.loadingProgressFactor} />}
            {
                isMobile &&
                <div className={classes.modalHead}>
                    <div>
                        <img src={arrowBackIcon} onClick={props.handleClose} />
                        <p>{`${props.upgrade ? `ارتقا` : props.extend ? `تمدید` : `خرید`} بسته ${props.packetType === 'classPacket' ? 'کلاس آنلاین' : 'فعالیت'}`}</p>
                    </div>
                </div>
            }
            {
                props.waitForBank &&
                <div className={classes.bankWaiting}>
                    <Typography>در حال اتصال به بانک</Typography>
                    <BeatLoader color={'#fff'} loading={true} size={20} />
                </div>
            }
            {
                (factor?.pup && props.packetType === 'classPacket') ?
                    <div>
                        {!isMobile && <div className={classes.factorModalHead}>
                            <div className={classes.factorModalTitle}>
                                <img src={closeIcon} onClick={() => props.handleBack()} style={{ cursor: 'pointer' }} />
                                {`${props.upgrade ? `ارتقا` : props.extend ? `تمدید` : `خرید`} بسته ${props.packetType === 'classPacket' ? 'کلاس' : 'فعالیت'}`}</div>
                        </div>}
                        <DialogContent className={classes.factorBuyPacketContainer} style={{ marginBottom: 0 }}>
                            <h4 className={classes.factorTitle} style={isMobile ? { marginTop: 7 } : {}}>مشخصات سفارش</h4>
                            <TableContainer style={{ marginBottom: 7 }} component={Paper}>
                                {
                                    !isMobile ?
                                        <ChistaTable
                                            className={{ table: classes.table }}
                                            head={{
                                                cells: props.upgrade ?
                                                    [
                                                        'نوع بسته',
                                                        'تعداد کاربر همزمان'
                                                    ]
                                                    :
                                                    [
                                                        'نوع بسته',
                                                        'طول مدت',
                                                        'تعداد کاربر همزمان'
                                                    ]
                                            }}
                                            body={{
                                                cells: [
                                                    props.upgrade ?
                                                        [
                                                            <div className={classes.packetTypeTd}>
                                                                {`بسته ${numberFormat.toPersianDigits(factor.pup.typeName)}`}
                                                            </div>
                                                            ,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pup.userCount)} نفر`}
                                                            </>
                                                        ]
                                                        :
                                                        [
                                                            <div className={classes.packetTypeTd}>
                                                                {`بسته ${numberFormat.toPersianDigits(factor.pup.typeName)}`}
                                                            </div>,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pid.interval)} ماه`}
                                                            </>
                                                            ,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pup.userCount)} نفر`}
                                                            </>
                                                        ],
                                                ],
                                                component: 'td',
                                                scope: 'row',
                                            }}
                                        />
                                        :
                                        <ChistaTable
                                            className={{ table: classes.table }}
                                            bordered
                                            stripped
                                            body={{
                                                cells: props.upgrade ?
                                                    [
                                                        [
                                                            'نوع بسته',
                                                            <div className={classes.packetTypeTd}>
                                                                {`بسته ${numberFormat.toPersianDigits(factor.pup.typeName)}`}
                                                            </div>
                                                        ],
                                                        [
                                                            'تعداد کاربر همزمان',
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pup.userCount)} نفر`}
                                                            </>
                                                        ],
                                                    ]
                                                    :

                                                    [
                                                        [
                                                            'نوع بسته',
                                                            <div className={classes.packetTypeTd}>
                                                                {`بسته ${numberFormat.toPersianDigits(factor.pup.typeName)}`}
                                                            </div>
                                                        ],
                                                        [
                                                            'طول مدت',
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pid.interval)} ماه`}
                                                            </>
                                                        ],
                                                        [
                                                            'تعداد کاربر همزمان',
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pup.userCount)} نفر`}
                                                            </>
                                                        ],
                                                    ],
                                                component: 'td',
                                                scope: 'row',
                                            }}
                                        />
                                }

                            </TableContainer>

                            {!props.upgrade &&
                                <>
                                    <h4 className={classes.factorTitle}>هزینه ها</h4>
                                    <TableContainer component={Paper}>
                                        {!isMobile ?
                                            <ChistaTable
                                                className={{ table: classes.table }}
                                                head={{
                                                    cells:
                                                        [
                                                            'عنوان',
                                                            'قیمت پایه',
                                                            'تعداد',
                                                            'مجموع'
                                                        ]
                                                }}
                                                body={{
                                                    cells: [[
                                                        <>
                                                            {`
                                                ${act}                                 
                                                سرویس 
                                                ${numberFormat.toPersianDigits(factor.pup.userCount)} 
                                                کاربر همزمان
                                                `}
                                                        </>
                                                        ,
                                                        <>
                                                            {`${numberFormat.toPersianSeprateTomanCommas(factor.pup.price)} تومان`}
                                                        </>
                                                        ,
                                                        <>
                                                            {`${numberFormat.toPersianDigits(factor.pid.interval)} ماه`}
                                                        </>,
                                                        <>
                                                            {`${numberFormat.toPersianSeprateTomanCommas(factor.totalPrice)} تومان`}
                                                        </>

                                                    ]],
                                                    component: 'td',
                                                    scope: 'row'
                                                }}
                                            />
                                            :
                                            <ChistaTable
                                                className={{ table: classes.table }}
                                                bordered
                                                stripped
                                                body={{
                                                    cells: [
                                                        [
                                                            'عنوان',

                                                            <>
                                                                {`سرویس ${numberFormat.toPersianDigits(factor.pup.userCount)} کاربره`}
                                                            </>
                                                        ],
                                                        [
                                                            'قیمت پایه',
                                                            <>
                                                                {`${numberFormat.toPersianSeprateTomanCommas(factor.pup.price)} تومان`}
                                                            </>
                                                        ],
                                                        [
                                                            'تعداد',
                                                            <>
                                                                {`${numberFormat.toPersianDigits(factor.pid.interval)} ماه`}
                                                            </>
                                                        ],
                                                        [
                                                            'مجموع',
                                                            <>
                                                                {`${numberFormat.toPersianSeprateTomanCommas(factor.totalPrice)} تومان`}
                                                            </>
                                                        ]
                                                    ],
                                                    component: 'td',
                                                    scope: 'row'
                                                }}
                                            />
                                        }
                                    </TableContainer>
                                </>
                            }
                            <TableContainer style={isDesktopSm ? { marginTop: 9 } : { marginTop: 14 }} component={Paper}>
                                <ChistaTable
                                    className={{ table: classes.table }}
                                    stripped
                                    bordered
                                    body={{
                                        cells: lastTable,
                                        component: 'td',
                                        scope: 'row'
                                    }}
                                    footer={{
                                        cells: [
                                            <>
                                                قابل پرداخت
                                            </>,
                                            <>
                                                {numberFormat.toPersianSeprateTomanCommas(factor.transaction.amount)} <span
                                                    style={isDesktopSm ? { fontSize: 11 } : { fontSize: 13, fontFamily: 'chistaYekanM' }}>تومان</span>
                                            </>
                                        ],
                                        component: 'td',
                                        scope: 'row'
                                    }}
                                />
                            </TableContainer>

                            <div className={classes.factorFooter}>
                                <FormControlLabel
                                    className={classes.policyContainer}
                                    ref={terms}
                                    onClick={() => setPolicy(!policy)}
                                    control={
                                        <RectangleCheckbox isChecked={policy} />
                                    }
                                    label={
                                        <p>
                                            شرایط
                                            <a href="/terms" target="_blank" className={classes.policy}>&nbsp;قوانین و
                                                مقررات&nbsp;</a>
                                            را قبول دارم
                                        </p>
                                    }
                                />

                                <div className={classes.factorActionBtnContainer}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        type="button"
                                        onClick={() => {
                                            !policy ? terms.current.scrollIntoView({ behavior: 'smooth' }) : props.handleNext()
                                        }}
                                        disabled={!policy && !isMobile}
                                        className={clsx(classes.factorActionBtn, (!policy && !isMobile) && classes.actionBtnDisabled)}
                                    >
                                        {props.load ? (
                                            <CircularProgress
                                                color="primary"
                                                style={{ width: 20, height: 20 }}
                                            />
                                        ) : (
                                            isMobile ?
                                                "تایید پرداخت"
                                                :
                                                "تایید و پرداخت"
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </DialogContent>
                    </div>
                    :
                    (activityPacketBill && props.packetType === 'activityPacket') ?
                        <div>
                            {!isMobile && <div className={classes.factorModalHead}>
                                <div className={classes.factorModalTitle}>
                                    <img src={closeIcon} onClick={() => props.handleBack()} style={{ cursor: 'pointer' }} />
                                    {`${props.upgrade ? `ارتقا` : props.extend ? `تمدید` : `خرید`} بسته ${props.packetType === 'classPacket' ? 'کلاس' : 'فعالیت'}`}</div>
                            </div>}
                            <DialogContent className={classes.factorBuyPacketContainer} style={{ marginBottom: 0 }}>
                                <h4 className={classes.factorTitle} style={isMobile ? { marginTop: 7 } : {}}>مشخصات سفارش</h4>
                                <TableContainer style={{ marginBottom: 7 }} component={Paper}>
                                    {
                                        !isMobile ?
                                            <ChistaTable
                                                className={{ table: classes.table }}
                                                head={{
                                                    cells: props.upgrade ?
                                                        [
                                                            'نوع بسته',
                                                            'تعداد کاربر همزمان'
                                                        ]
                                                        :
                                                        [
                                                            'نوع بسته',
                                                            'طول مدت',
                                                            'تعداد کاربر همزمان'
                                                        ]
                                                }}
                                                body={{
                                                    cells: [
                                                        props.upgrade ?
                                                            [
                                                                <div className={classes.packetTypeTd}>
                                                                    {`بسته ${numberFormat.toPersianDigits(activityPacketBill.typeName)}`}
                                                                </div>,
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(activityPacketBill.pup.userCount)} نفر`}
                                                                </>
                                                            ]
                                                            :
                                                            [
                                                                <div className={classes.packetTypeTd}>
                                                                    {`بسته ${numberFormat.toPersianDigits(activityPacketBill.typeName)}`}
                                                                </div>,
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(activityPacketBill.interval)} ماه`}
                                                                </>
                                                                ,
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(activityPacketBill.pup.userCount)} نفر`}
                                                                </>
                                                            ],
                                                    ],
                                                    component: 'td',
                                                    scope: 'row',
                                                }}
                                            /> :
                                            <ChistaTable
                                                className={{ table: classes.table }}
                                                bordered
                                                stripped
                                                body={{
                                                    cells:
                                                        props.upgrade ?
                                                            [
                                                                [
                                                                    'نوع بسته',

                                                                    <div className={classes.packetTypeTd}>
                                                                        {`بسته ${numberFormat.toPersianDigits(activityPacketBill.typeName)}`}
                                                                    </div>
                                                                ],
                                                                [
                                                                    'تعداد کاربر همزمان',
                                                                    <>
                                                                        {`${numberFormat.toPersianDigits(activityPacketBill.pup.userCount)} نفر`}
                                                                    </>
                                                                ],
                                                            ]
                                                            :
                                                            [
                                                                [
                                                                    'نوع بسته',
                                                                    <div className={classes.packetTypeTd}>
                                                                        {`بسته ${numberFormat.toPersianDigits(activityPacketBill.typeName)}`}
                                                                    </div>
                                                                ],
                                                                [
                                                                    'طول مدت',
                                                                    <>
                                                                        {`${numberFormat.toPersianDigits(activityPacketBill.interval)} ماه`}
                                                                    </>
                                                                ],
                                                                [
                                                                    'تعداد کاربر همزمان',
                                                                    <>
                                                                        {`${numberFormat.toPersianDigits(activityPacketBill.pup?.userCount)} نفر`}
                                                                    </>
                                                                ],
                                                            ],
                                                    component: 'td',
                                                    scope: 'row',
                                                }}
                                            />
                                    }
                                </TableContainer>

                                {!props.upgrade &&
                                    <>
                                        <h4 className={classes.factorTitle}>هزینه ها</h4>
                                        <TableContainer component={Paper}>
                                            {!isMobile ?
                                                <ChistaTable
                                                    className={{ table: classes.table }}
                                                    head={{
                                                        cells:
                                                            [
                                                                'عنوان',
                                                                'قیمت پایه',
                                                                'تعداد',
                                                                'مجموع'
                                                            ]
                                                    }}
                                                    body={{
                                                        cells: [[
                                                            <>
                                                                {`
                                            ${act}                                 
                                            سرویس 
                                            ${numberFormat.toPersianDigits(activityPacketBill.pup?.userCount)} 
                                            کاربر همزمان
                                            `}
                                                            </>
                                                            ,
                                                            <>
                                                                {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.pup?.price)} تومان`}
                                                            </>
                                                            ,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(activityPacketBill.interval)} ماه`}
                                                            </>,
                                                            <>
                                                                {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.packetPrice)} تومان`}
                                                            </>

                                                        ]],
                                                        component: 'td',
                                                        scope: 'row'
                                                    }}
                                                />
                                                :
                                                <ChistaTable
                                                    className={{ table: classes.table }}
                                                    bordered
                                                    stripped
                                                    body={{
                                                        cells: [
                                                            [
                                                                'عنوان',
                                                                <>
                                                                    {`سرویس ${numberFormat.toPersianDigits(activityPacketBill.pup.userCount)} کاربره`}
                                                                </>
                                                            ],
                                                            [
                                                                'قیمت پایه',
                                                                <>
                                                                    {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.pup.price)} تومان`}
                                                                </>
                                                            ],
                                                            [
                                                                'تعداد',
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(activityPacketBill.interval)} ماه`}
                                                                </>
                                                            ],
                                                            [
                                                                'مجموع',
                                                                <>
                                                                    {`${numberFormat.toPersianSeprateTomanCommas(activityPacketBill.packetPrice)} تومان`}
                                                                </>
                                                            ]
                                                        ],
                                                        component: 'td',
                                                        scope: 'row'
                                                    }}
                                                />
                                            }
                                        </TableContainer>
                                    </>
                                }
                                <TableContainer style={isDesktopSm ? { marginTop: 9 } : { marginTop: 14 }} component={Paper}>
                                    <ChistaTable
                                        className={{ table: classes.table }}
                                        stripped
                                        bordered
                                        body={{
                                            cells: lastTable,
                                            component: 'td',
                                            scope: 'row'
                                        }}
                                        footer={{
                                            cells: [
                                                <>
                                                    قابل پرداخت
                                                </>,
                                                <>
                                                    {numberFormat.toPersianSeprateTomanCommas(activityPacketBill.payablePrice)} <span
                                                        style={isDesktopSm ? { fontSize: 11 } : { fontSize: 13, fontFamily: 'chistaYekanM' }}>تومان</span>
                                                </>
                                            ],
                                            component: 'td',
                                            scope: 'row'
                                        }}
                                    />
                                </TableContainer>
                                <div className={classes.factorFooter}>

                                    <FormControlLabel
                                        className={classes.policyContainer}
                                        ref={terms}
                                        onClick={() => setPolicy(!policy)}
                                        control={
                                            <RectangleCheckbox isChecked={policy} />
                                        }
                                        label={
                                            <p>
                                                شرایط
                                                <a href="/terms" target="_blank" className={classes.policy}>&nbsp; قوانین و
                                                    مقررات&nbsp; </a>
                                                را قبول دارم
                                            </p>
                                        }
                                    />
                                    <div className={classes.factorActionBtnContainer}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            type="button"
                                            onClick={() => {
                                                !policy ? terms.current.scrollIntoView({ behavior: 'smooth' }) : props.handleNext()
                                            }}
                                            disabled={!policy && !isMobile}
                                            className={clsx(classes.factorActionBtn, (!policy && !isMobile) && classes.actionBtnDisabled)}
                                        >
                                            {props.load ? (
                                                <CircularProgress
                                                    color="primary"
                                                    style={{ width: 20, height: 20 }}
                                                />
                                            ) : (
                                                isMobile ?
                                                    "تایید پرداخت"
                                                    :
                                                    "تایید و پرداخت"
                                            )}
                                        </Button>
                                    </div>
                                </div>

                            </DialogContent>
                        </div>
                        :
                        <div className={classes.modalHead}>
                            <CircularProgress />
                        </div>
            }
        </Dialog >
    )
}

export default ShowFactor