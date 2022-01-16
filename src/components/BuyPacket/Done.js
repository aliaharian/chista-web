import React, { useEffect } from "react"
import {
    Dialog,
    DialogContent,
    Typography, useTheme, useMediaQuery
} from "@material-ui/core"
import { numberFormat } from "../../utilities"
import { Close } from "@material-ui/icons"
import classes from '../../assets/stylesheet/profile/buyPacket.module.scss';

import warningIcon from '../../assets/images/warning.svg'
import successIcon from '../../assets/images/success.svg'
import ChistaTable from "../Table/Table";
import WalletIcon from "../../assets/images/profile/WalletSidebar";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from "clsx";
import UsersIcon from '../../assets/images/UsersIcon'
import CalendarIcon from "../../assets/images/profile/registerOstad/CalendarIcon";
import PacketIcon from '../../assets/images/profile/PacketSidebar'

function Done(props) {
    const [transition, setTransition] = React.useState(false)
    const [duration, setDuration] = React.useState(null)

    const theme = useTheme();

    const isDesktopSm = useMediaQuery(theme.breakpoints.down(1800));
    const isMobile = useMediaQuery(theme.breakpoints.down(480));
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < process.env.REACT_APP_SM_WIDTH) {
                setTransition(true)
            }
        } else {
            setTransition(false)
        }
    })
    return (
        <Dialog
            open={props.open}
            onClose={()=>{props.handleClose(props.success)}}
            fullScreen={isMobile}
            PaperProps={{
                className: clsx(classes.packetBuyDoneRoot),
                scrollPaper: classes.dialog
            }}
        >
            <Close className={classes.closeButton} onClick={()=>{props.handleClose(props.success)}} />

            <DialogContent className={classes.DoneContainer}>
                {(props.packetType === 'classPacket' && (props.buy?.result || props.success !== 'true')) ?
                    <>
                        <div className={clsx(classes.doneIcon, props.success === 'true' ? classes.successTop:classes.errorTop)}
                            style={{ backgroundColor: props.success === 'true' ? '#00dbb51a' : '#ff657529' }}>
                            <img style={{ width: props.success === 'true' ? 45 : 37 }} src={props.success === 'true' ? successIcon : warningIcon} alt="" />
                        </div>
                        <Typography className={classes.doneText}
                            style={{ color: props.success === 'true' ? '#0c0b31' : '#0c0b31' }}>
                            {
                                props.success === 'true' ?
                                    `بسته ${props.buy?.result?.pup.typeName} ${numberFormat.toPersianDigits(props.buy?.result?.pup.userCount)} کاربره با موفقیت فعال شد`
                                    :
                                    'عملیات با خطا مواجه شد'
                            }
                        </Typography>

                        {
                            props.success === 'true' &&
                            <>
                                <TableContainer component={Paper} className={classes.tableContainer}>

                                    <ChistaTable
                                        className={{ table: clsx(classes.tableNoBorder , classes.mt35) }}
                                        body={{
                                            cells:
                                                props.upgrade ?
                                                    [
                                                        [
                                                            <>
                                                                <PacketIcon />
                                                                نوع بسته
                                                            </>,
                                                            <>
                                                                {`بسته ${numberFormat.toPersianDigits(props.buy?.result?.pup.typeName)}`}
                                                            </>
                                                        ],
                                                        [
                                                            <>
                                                                <UsersIcon />
                                                                تعداد کاربر همزمان
                                                            </>,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(props.buy?.result?.pup.userCount)} نفر`}
                                                            </>
                                                        ],
                                                        [
                                                            <>
                                                                {!isDesktopSm && <WalletIcon />}
                                                                مبلغ پرداخت شده
                                                            </>
                                                            ,
                                                            <>

                                                                {props.buy?.result && numberFormat.toPersianSeprateTomanCommas(props.buy?.result?.transaction.amount)} <span>تومان</span>
                                                            </>
                                                        ]
                                                    ]
                                                    :
                                                    [
                                                        [
                                                            <>
                                                                <PacketIcon />
                                                                نوع بسته
                                                            </>,
                                                            <>
                                                                {`بسته ${numberFormat.toPersianDigits(props.buy?.result?.pup.typeName)}`}
                                                            </>
                                                        ],
                                                        [
                                                            <>
                                                                <CalendarIcon />
                                                                طول مدت
                                                            </>,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(props.buy?.result?.pid.interval)} ماه`}
                                                            </>
                                                        ],
                                                        [
                                                            <>
                                                                <UsersIcon />
                                                                تعداد کاربر همزمان
                                                            </>,
                                                            <>
                                                                {`${numberFormat.toPersianDigits(props.buy?.result?.pup.userCount)} نفر`}
                                                            </>
                                                        ],
                                                        [
                                                            <>
                                                                مبلغ پرداخت شده
                                                            </>,
                                                            <>
                                                                {props.buy?.result && numberFormat.toPersianSeprateTomanCommas(props.buy?.result?.transaction.amount)} <span>تومان</span>
                                                            </>
                                                        ]
                                                    ],

                                            component: 'td',
                                            scope: 'row'
                                        }}
                                    />
                                </TableContainer>
                            </>
                        }
                        {
                            props.success === 'false' &&
                            <button
                                className={clsx(classes.actionBTN, classes.actionActiveBTN)}
                                onClick={() => { props.handleRetry() }}
                            >
                                تلاش مجدد
                            </button>
                        }
                    </>
                    :
                    (props.packetType === 'activityPacket' && props.activityPacketBuyResponse) ?
                        <>
                            <div className={clsx(classes.doneIcon, props.success === 'true' && classes.successTop)}
                                style={{ backgroundColor: props.success === 'true' ? '#00dbb51a' : '#ff657529' }}>
                                <img style={{ width: 45 }} src={props.success === 'true' ? successIcon : warningIcon} alt="" />
                            </div>
                            <Typography className={classes.doneText}
                                style={{ color: props.success === 'true' ? '#0c0b31' : '#0c0b31' }}>
                                {
                                    props.success === 'true' ?
                                        `بسته ${props.activityPacketBuyResponse?.pup.type === 'MONTHLY' ? `ماهانه` : `روزانه`} ${numberFormat.toPersianDigits(props.activityPacketBuyResponse?.pup.userCount)} کاربره با موفقیت فعال شد`
                                        :
                                        'عملیات با خطا مواجه شد'
                                }
                            </Typography>

                            {
                                props.success === 'true' &&
                                <>
                                    <TableContainer component={Paper}>
                                        <ChistaTable
                                            className={{ table: clsx(classes.tableNoBorder , classes.mt35) }}
                                            body={{
                                                cells:  
                                                    props.upgrade ?
                                                        [
                                                            [
                                                                <>
                                                                    <PacketIcon />
                                                                    نوع بسته
                                                                </>,
                                                                <>
                                                                    {`بسته ${props.activityPacketBuyResponse?.pup.type === 'MONTHLY' ? `ماهانه` : `روزانه`}`}
                                                                </>
                                                            ],
                                                            [
                                                                <>
                                                                    <UsersIcon />
                                                                    تعداد کاربر همزمان
                                                                </>,
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(props.activityPacketBuyResponse?.pup.userCount)} نفر`}
                                                                </>
                                                            ],
                                                            [
                                                                <>
                                                                    مبلغ پرداخت شده
                                                                </>,
                                                                <>
                                                                    {props?.activityPacketBuyResponse?.transaction?.amount !== undefined ? numberFormat.toPersianDigits(props.activityPacketBuyResponse?.transaction?.amount) : ''} <span>تومان</span>
                                                                </>
                                                            ]
                                                        ]
                                                        :
                                                        [
                                                            [
                                                                <>
                                                                    <PacketIcon />
                                                                    نوع بسته
                                                                </>,
                                                                <>
                                                                    {`بسته ${props.activityPacketBuyResponse?.pup.type === 'MONTHLY' ? `ماهانه` : `روزانه`}`}
                                                                </>
                                                            ],
                                                            [
                                                                <>
                                                                    <CalendarIcon />
                                                                    طول مدت
                                                                </>,
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(props.activityPacketBuyResponse?.interval)} ماه`}
                                                                </>
                                                            ],
                                                            [
                                                                <>
                                                                    <UsersIcon />
                                                                    تعداد کاربر همزمان
                                                                </>,
                                                                <>
                                                                    {`${numberFormat.toPersianDigits(props.activityPacketBuyResponse?.pup.userCount)} نفر`}
                                                                </>
                                                            ],
                                                            [
                                                                <>
                                                                    {!isDesktopSm && <WalletIcon />}
                                                                    مبلغ پرداخت شده
                                                                </>,
                                                                <>
                                                                    {props?.activityPacketBuyResponse?.transaction?.amount !== undefined ? numberFormat.toPersianDigits(props.activityPacketBuyResponse?.transaction?.amount) : ''} <span>تومان</span>
                                                                </>
                                                            ]
                                                        ],
                                                component: 'td',
                                                scope: 'row'
                                            }}
                                        />
                                    </TableContainer>
                                </>
                            }
                            {
                                props.success === 'false' &&
                                <button
                                    className={clsx(classes.actionBTN, classes.actionActiveBTN)}
                                    onClick={() => { props.handleRetry() }}
                                >
                                    تلاش مجدد
                                </button>
                            }
                        </>
                        :
                        (props.packetType === 'activityPacket' && !props.activityPacketBuyResponse && props.success === 'false') ?
                            <>
                                <div className={clsx(classes.doneIcon)}
                                    style={{ backgroundColor: '#ff657529' }}>
                                    <img style={{ width: 68 }} src={warningIcon} alt="" />
                                </div>
                                <Typography className={classes.doneText}
                                    style={{ color: '#0c0b31' }}>
                                    {
                                        'عملیات با خطا مواجه شد'
                                    }
                                </Typography>
                                <button
                                    className={clsx(classes.actionBTN, classes.actionActiveBTN)}
                                    onClick={() => { props.handleRetry() }}
                                >
                                    تلاش مجدد
                                </button>
                            </>
                            :
                            <CircularProgress />
                }
            </DialogContent>
        </Dialog>
    )
};

export default Done