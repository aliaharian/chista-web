import React, { Fragment, useEffect, useState } from "react";
import { Grid, Avatar, Typography, Button, LinearProgress, Tooltip } from "@material-ui/core";
import classes from "../../../../../assets/stylesheet/profile/packets.module.scss";
import CalendarIcon from "../../../../../assets/images/profile/registerOstad/CalendarIcon";
import GiftIcon from "../../../../../assets/images/profile/PacketSidebar";
import Style from "../../../../../assets/stylesheet/index.module.scss";
import ArrowLeft from "../../../../../assets/images/homepageArrowLeft.svg";
import dashboard from "../../../../../assets/images/profile/registerOstad/dashboard.svg";
import { dateTime, numberFormat } from "../../../../../utilities";
import jMoment from "moment-jalaali";
import clsx from "clsx";
import { connect } from "react-redux";
import { packetUpdateField, setCurrentPacket } from "../../../../../../redux/packets";
import { reduxForm } from "redux-form";
import ChevronLeftOutlinedIcon from '@material-ui/icons/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import { useTheme, withStyles } from "@material-ui/core/styles";
import { JDatePicker } from "../../../../form";
import JalaliUtils from "@date-io/jalaali";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Scrollbars } from "react-custom-scrollbars";
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts'


const PacketItem = (props) => {
    // const classes = useStyles();
    const theme = useTheme();
    let i = -1;
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [xAxis, setXAxis] = useState()
    const [members, setMembers] = useState()
    const [membersData, setMembersData] = useState()
    useEffect(() => {
        if (props.datas) {
            let tmpXAxis = []
            let tmpMembers = []
            let tmpMembersData = []
            // if (props.day) {
            props.datas.map((data) => {
                tmpXAxis.push(Math.floor(data.createdAt/1000))
                tmpMembers.push(data.members)
                tmpMembersData.push({ y: data.members, key: data })
            })
            // } 
            // else {
            //     props.datas.result.usages.map((data) => {
            //         tmpXAxis.push(data.time)
            //         tmpMembers.push(data.members)
            //         tmpMembersData.push({ y: data.members, key: data })


            //     })

            // }

            setXAxis(tmpXAxis)
            setMembers(tmpMembers)
            setMembersData(tmpMembersData)
        }
    }, [props.datas])


    const options = {
        chart: {
            type: 'area'
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            console.log('calueTime', dateTime.dateTimeCustom(1615667400))
                            props.handleShowDay(this.options.key)
                        }
                    }
                },
                states: {
                    hover: {
                        enabled: true,
                        halo: {
                            size: 0
                        }
                    }
                }
            },
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#3f53d91a'],
                        [1, '#3f53d900']
                    ]
                },
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 3,
                    color: '#3f53d9',
                    fillColor: '#3f53d9',
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                },
                lineWidth: 1,
                lineColor: '#3f53d9',
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                // threshold: null
            }
        },
        title: {
            text: ''
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false

        },
        xAxis: {
            categories: xAxis,
            useHTML: true,
            labels: {
                step: 1,
                useHTML: true,
                formatter: function () {
                    if (props.day) {
                        if (dateTime.dateTimeCustom(this.value).day === '۷' || dateTime.dateTimeCustom(this.value).day === '۱۴' || dateTime.dateTimeCustom(this.value).day === '۲۱' || dateTime.dateTimeCustom(this.value).day === '۲۸') {
                            return '<p style="width:100px">' + dateTime.dateTimeCustom(this.value).day + ' ' + dateTime.dateTimeCustom(this.value).month + '</p>'
                        }
                    } else {
                        if (dateTime.dateTimeCustom(this.value).hour === '۶' || dateTime.dateTimeCustom(this.value).hour === '۱۲' || dateTime.dateTimeCustom(this.value).hour === '۱۸') {
                            return '<p style="width:20px">' + dateTime.dateTimeCustom(this.value).hour + ':۰۰</p>'
                        }
                    }
                }
            },

            // labels:{
            //     rotation:0,
            // }
        },
        tooltip: {
            useHTML: true,
            backgroundColor: '#191a25cc',
            borderColor: '#ffffff00',
            borderRadius: 16,
            borderWidth: 0,
            shadow: false,
            padding: 0,
            formatter: function () {
                var point = this.point,
                    key = point.options.key,
                    text =
                        props.day ?
                            `

                            <div style="padding:15px 14px;min-height:54px;width:178px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
                            <div style="width:100%;margin-bottom:10px;">
                                <p style="direction:rtl;text-align:center;color:#fff;font-size:11px;margin:0;">
                                ${dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).day + " " + dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).month + " " + dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).year}
                                </p>
                            </div>
                            <div style="width:100%;display:flex;align-items:center;justify-content:space-between;flex-direction:row-reverse;">
                                <div style="display:flex;align-items:center;justify-content:flex-start;flex-direction:row-reverse;">
                                    <div style="width:5px;height:5px;border-radius:5px;background-color:#3f53d9;margin-left:8px;"></div>
                                    <p style="direction:rtl;text-align:right;color:#fff;font-size:11px;margin:0;">
                                          حداکثر کاربر واقعی 
                                    </p>
                                </div>
                            <p style="direction:rtl;text-align:right;color:#fff;font-size:11px;margin:0;">
                            ${numberFormat.toPersianDigits(key.members)} نفر
                            </p>
                            </div>
            
                        </div>  


                
            `:

                            `


                            <div style="padding:15px 14px;min-height:54px;width:178px;display:flex;align-items:center;justify-content:center;flex-direction:column;">
                            <div style="width:100%;margin-bottom:10px;">
                                <p style="direction:rtl;text-align:center;color:#fff;font-size:11px;margin:0;">
                                ${dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).day + " " + dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).month + " " + dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).year}
                                - 
                                ${dateTime.dateTimeCustom(Math.floor(key.createdAt/1000)).hour + ":۰۰"}                                </p>
                            </div>
                            <div style="width:100%;display:flex;align-items:center;justify-content:space-between;flex-direction:row-reverse;">
                                <div style="display:flex;align-items:center;justify-content:flex-start;flex-direction:row-reverse;">
                                    <div style="width:5px;height:5px;border-radius:5px;background-color:#3f53d9;margin-left:8px;"></div>
                                    <p style="direction:rtl;text-align:right;color:#fff;font-size:11px;margin:0;">
                                          حداکثر کاربر واقعی 
                                    </p>
                                </div>
                            <p style="direction:rtl;text-align:right;color:#fff;font-size:11px;margin:0;">
                            ${numberFormat.toPersianDigits(key.members)} نفر
                            </p>
                            </div>
            
                        </div>          
        `

                return text;
            }
        },
        yAxis: {
            // useHTML: true,
            gridLineColor: 'transparent',
            // min: 0,
        //     plotLines: [
        //         {
        //         color: '#0c0b3126',
        //         width: 1,
        //         value: 2 || 0,
        //         label: {
        //             text: 'Last quarter minimum'
        //           }
        //     }, 
        //     {
        //         color: '#0c0b3126',
        //         width: 1,
        //         value: props?.maxUsers * 7 || 0,
        //         label: {
        //             text: 'Last quarter maximum'
        //           }
        //     }
        // ],
            title: {
                text: ''
            },
            min: props.verticalNumbers[0],
            // max: props.verticalNumbers[props.verticalNumbers.length - 1],
            // threshold: props.verticalNumbers[1] - props.verticalNumbers[0],
            // startOnTick: false,
            // endOnTick: false,
            tickAmount: props.verticalNumbers.length,

            labels: {
                // // useHTML: true,
                // style:{
                //     FontFace: ''
                // },
                step: 1,
                formatter: function (data) {
                    
                    return '<p>' + numberFormat.toPersianDigits(this.value) + '</p>'

                }
            },
        },
        series: [{
            type: 'area',
            data: membersData,
            pointStart: props.verticalNumbers[0]
        }]
    }

    return (
        <Grid container className={classes.packetItemParent} style={{marginBottom: 0}}>
            <div className={classes.packetItem}>
                <div className={classes.chart}>


                    <div className={classes.chartData}>
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                            containerProps={
                                {
                                    style: { height: '100%', width: '100%' }
                                }
                            }
                        />
                    </div>
                    <div className={classes.chartCalendar}>
                        <ChevronRightOutlinedIcon cursor={`pointer`} onClick={() => props.handleChangeDate(`prev`)} />
                        <p>
                            {props.day ?
                                props.date.month + " ماه " + props.date.year
                                :
                                props.date.day + " " + props.date.month + " " + props.date.year
                            }
                        </p>
                        <ChevronLeftOutlinedIcon cursor={`pointer`} onClick={() => props.handleChangeDate(`next`)} />
                    </div>
                    {!props.day && <div className={classes.backToMonth} onClick={() => {
                        props.handleBackToMonth(props.datas[0])
                    }}>بازگشت {!isMobile && "به نمودار ماهانه"}</div>
                    }
                </div>
            </div>
        </Grid>
    );


};

const mapStateToProps = ({ packets: { openSelectUsers } }) => ({
    openSelectUsers
})

export default connect(
    mapStateToProps,
    { packetUpdateField, setCurrentPacket }
)(PacketItem)

