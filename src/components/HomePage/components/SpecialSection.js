import React from 'react';
import Style from "./../../../assets/stylesheet/index.module.scss";
import {Grid} from "@material-ui/core";
import Link from "next/link";
import ArrowLeft from "../../../assets/images/ArrowBack";
import {withSnackbar} from "notistack";
import {useDispatch} from "react-redux";
import {infoSnackbar} from "../../../../redux/user";

function SpecialSection () {
    const Dispatch=useDispatch();

    const handleComingSoon = () =>{
        Dispatch(infoSnackbar(0))
    }
        return (
            <Grid className={Style.SpecialSection}>
                <h3>استاد هستید؟</h3>
                <h4>برای شما امکانات ویژه ای داریم</h4>
                <Grid container className={Style.SpecialContainer} maxWidth="lg" disableGutters={false}>
                    <div>
                        <h4>صفحه شخصی</h4>
                        <p>
                            استاد گرامی در هر زمینه ای که تدریس میکنید این امکان را دارید که صفحه شخصی خود را بدون
                            پرداخت هرینه ای در چیستا ایجاد و تخصصهای خود را در آن معرفی میکنید. تا امکان ایجاد ارتباط
                            مستقیم و ارسال پیام تمامی متقاضیان بهره گیری از مهارت و دانش شما برقرار شود
                        </p>
                        <Link href="#">
                            <a onClick={(e)=>{
                              e.preventDefault();
                              handleComingSoon()
                            }}>ثبت نام کنید
                                <ArrowLeft />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <h4>تسویه حساب خودکار</h4>
                        <p>
                            در پلتفرم چیستا این امکان فراهم آمده است که تسویه حساب حق التدریس اساتید در هر جلسه بصورت
                            خودکار صورت پذیرد.برای اینکار شرکت کننده در کلاس می بایست قبل از ورود به کلاس مبلغ را به
                            اعتبار خود اضافه نموده و پس از پایان جلسه و بر اساس میزان ساعت حضور در کلاس این مبلغ بصورت
                            خودکار به اعتبار اضافه میگردد
                        </p>
                        <Link href="#">
                            <a onClick={(e)=>{
                                e.preventDefault();
                                handleComingSoon()
                            }}>ثبت نام کنید
                                <ArrowLeft />
                            </a>
                        </Link>
                    </div>
                    <div>
                        <h4>ویدیوهای شما</h4>
                        <p>
                            اگر مایل هستید ویدیو های آموزشی شما با حفظ حق کپی رایت در دسترس عموم قرار گیرد، از سرویس
                            فروشگاه ویدیو چیستا استفاده کنید. متقاضیان میتوانند بصورت آنلاین و بدون امکان دانلود پس از
                            پرداخت مبلغ مشخص شده از طرف شما، از محتوای ارائه شده استفاده نمایند.
                        </p>
                        <Link href="#">
                            <a onClick={(e)=>{
                                e.preventDefault();
                                handleComingSoon()
                            }}>ثبت نام کنید
                                <ArrowLeft />
                            </a>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        )
}

export default withSnackbar(SpecialSection)