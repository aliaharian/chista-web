import React, {useState} from 'react';
import Style from "./../../../assets/stylesheet/index.module.scss";
import {Button, Grid} from "@material-ui/core";
import PlayIcon from '../../../assets/images/PlayIconAlt';
import {withSnackbar} from "notistack";
import HelpDialog from "./Help/HelpDialog";
import {useDispatch} from "react-redux";
import {infoSnackbar} from "../../../../redux/user";

const helps = [
    {
        title: `چگونه یک کلاس جدید تشکیل دهم؟`,
        text: `کافیست در  قسمت کلاس های من گزینه "کلاس جدید" را انتخاب نمایید. سپس اعضای کلاس را با اضافه کردن از لیست مخاطبینتان انتخاب نمایید. دستیار و استاد و تعداد شرکت کنندگان را مشخص نمایید. کلاس با موفقیت ایجاد شد.`,
        image_url: `/images/help/createClass.JPG`,
        gif: `/gif/createClass.gif`
    },
    {
        title: `چگونه استاد صفحه کامپیوتر خود را به اشتراک می گذارد؟`,
        text: `شما می توانید با انتخاب گزینه اشتراک صفحه که در سمت راست صفحه برگزاری کلاس قراردارد، دسکتاپ خود را به اشتراک بگذارید.`,
        image_url: `/images/help/screenSharing.JPG`,
        gif: `/gif/screenSharing.gif`,
    },
    {
        title: `چگونه یک فایل PDF یا تصویر را در برد قرار دهیم؟`,
        text: `برای نشان دادن فایل و یا تصویر روی برد ، کافیست روی علامت  در نوار ابزار کلیک نموده و تصویر یا فایل مورد نظر را آپلود نمایید.`,
        image_url: `/images/help/pdf.JPG`,
        gif: `/gif/screenSharing.gif`,

    },
    {
        title: `دسترسی ها در کلاس چگونه مدیریت می شوند؟`,
        text: `گزینه "اعضا" در جزییات کلاس را انتخاب نموده و با کلیک کردن روی "جزییات" که در مقابل نام کاربر قرار دارد، دسترسی ها را از طریق خاموش یا روشن کردن دکمه مربوطه تغییر دهید.`,
        image_url: `/images/help/pdf.JPG`,
        gif: `/gif/screenSharing.gif`,
    },
    {
        title: `شرکت کنندگان را چگونه به کلاس دعوت کنیم؟`,
        text: `شما می توانید تنها با کپی کردن لینک کلاس و ارسال آن از طریق پیام رسان های متعدد افراد را به کلاس دعوت کنید.`,
        image_url: `/images/help/pdf.JPG`,
        gif: `/gif/screenSharing.gif`,
    },
    {
        title: `چیستا چه گزارش هایی از شرکت کنندگان در کلاس ارائه می کند؟`,
        text: `شما می توانید به تمامی وضعیت کاربر اعم از نقش، شاخص دقت، میزان تاخیر و حضور درکلاس، تاریخچه فعالیت شرکت کننده و گزارش تمامی جلسات دسترسی داشته باشید.`,
        image_url: `/images/help/pdf.JPG`,
        gif: `/gif/screenSharing.gif`,
    },
]

function HelpSection() {
    const [openDialog, setOpenDialog] = useState(false)
    const [selectedHelp, setSelectedHelp] = useState(helps[0])

    const Dispatch=useDispatch();

    const handleComingSoon = () =>{
        Dispatch(infoSnackbar(0))
    }
    return (
        <Grid container className={Style.HelpSection}>
            <HelpDialog open={openDialog} handleClose={() => setOpenDialog(false)} data={selectedHelp}/>
            <h2 className={Style.mainTitle}>راهنمای چیستا</h2>
            <Grid container className={Style.helpItemContainer}>
                {helps.map((help) => (
                    <Grid xs={12} sm={12} md={6} lg={4} xl={4} className={Style.helpItem}>
                        <div>
                            <img src={help.image_url} alt=""/>
                            <PlayIcon viewBox="0 0 40 40" onClick={() => {
                                setSelectedHelp(help)
                                setOpenDialog(true)
                            }}/>
                        </div>
                        <h4>
                            {help.title}
                        </h4>
                        <p>
                            {help.text}
                            <span onClick={() => handleComingSoon()}> بیشتر </span>
                        </p>
                    </Grid>
                ))}
                <div className={Style.helpFooter}>
                    <p>
                        جهت کسب اطلاعات بیشتر از طریق کلید زیر به بخش راهنما
                        مراجعه نمایید
                    </p>
                    <Button className={Style.registerBtn}>
                        راهنما
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default withSnackbar(HelpSection)