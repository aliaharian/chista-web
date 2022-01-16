import React from "react";

import Layout from "../../src/components/HomePage/Layout/Layout";
import Style from "../../src/assets/stylesheet/blog.module.scss";
import {Grid} from "@material-ui/core";
import Link from "next/link";
import {numberFormat} from "../../src/utilities";


const blogData = [
    {
    key: 1,
    title: 'آینده آموزش با تدریس آنلاین چگونه رقم می خورد؟',
    desc: 'آینده آموزش و پرورش از آن دست موضوع‌هایی است که این روزها به‌بهانه‌ی کرونا و دوره‌ی پساکرونا زیاد از آن می‌شنویم. در دوره‌ای که کلاس‌های حضوری در جای‌جای دنیا تعطیل شده‌اند و به‌صورت آنلاین برگزار می‌شوند صحبت در این باره چندان عجیب نیست.',
    day: '16',
    month: 'آذر',
    year: '1399',
    image_url: '/blog/images/future_of_online_education/main.png',
    col: 8,
    style: {paddingLeft: '14px' , transform:' translateY(-2px)'}
}, {
    key: 2,
    title: 'مزایای سیستم آموزش آنلاین',
    desc: 'در این آموزش شما به‌طور ۲۴ ساعته به منابع دسترسی دارید، شما قادر هستید که متناسب با ویژگی‌های خودتان، گام بردارید یعنی اگر سریع یاد می‌گیرید، می‌توانید سریع‌تر درس را تمام کنید.',
    day: '16',
    month: 'آذر',
    year: '1399',
    image_url: '/blog/images/benefits_of_online_education/main.png',
    col: 4,
    style: {paddingRight: '14px'}
}, {
    key: 3,
    title: 'تاریخچه آموزش مجازی',
    desc: `کلمه آموزش مجازی یا vitrual learning و یا به عبارت دیگر آموزش الکترونیکی e-learning خیلی زود در سایت های مختلف جا افتاد و افراد زیادی از این سیستم برای انتقال دانش خود استفاده کردند . `,
    day: '16',
    month: 'آذر',
    year: '1399',
    image_url: '/blog/images/history_of_online_education/main.png',
    col: 4,
    style: {paddingLeft: '14px', marginTop: '16px'}
}, {
    key: 4,
    title: 'استراتژی‌های اساسی برای یادگیری موفق آنلاین',
    desc: `برای بهبود تدریس آنلاین چه مواردی باید رعایت شود؟ 
آیا به تازگی وارد حوزه آموزش الکترونیکی شده اید؟ یا به دنبال راه کارهایی برای بهبود روش های تدریس آنلاین خود هستید؟`,
    day: '16',
    month: 'آذر',
    year: '1399',
    image_url: '/blog/images/strategies_of_online_education/main.png',
    col: 4,
    style: {paddingLeft: '7px', paddingRight: '7px', marginTop: '16px'}
}, {
    key: 5,
    title: 'چند نکته برای یادگیری موثر آنلاین',
    desc: `این روزها یادگیری مهارت‌های جدید به واسطه آموزش آنلاین بیش از هر زمان دیگری ساده شده است. تکنولوژی‌های ارتباطی و رسانه‌ای روز به روز گسترش یافته‌اند.`,
    day: '16',
    month: 'آذر',
    year: '1399',
    image_url: '/blog/images/online_education_notes/main.png',
    col: 4,
    style: {paddingRight: '14px', marginTop: '16px'}
},

];

export default function blog() {
    const [loadedNumber , SetLoadedNumber]=React.useState(10)


    return (
        <Layout>
            <div className={Style.blogContainer}>
                <Grid container className={Style.blogItemsContainer}>
                    {blogData.map((data) => (
                        <Grid container item md={data.col} sm={12} xs={12} style={data.style}>
                            <Link href={`/blog/${data.title.split(' ').join('-')}`}>
                                <a>
                                    <div className={Style.blogImage}>

                                            <img src={data.image_url} alt={data.title}/>

                                    </div>

                                            <div className={Style.blogDate}>
                                                <span>{numberFormat.toPersianDigits(data.day)}</span>
                                                <span>{numberFormat.toPersianDigits(data.month)}</span>
                                                <span>{numberFormat.toPersianDigits(data.year)}</span>
                                            </div>


                                    <div className={Style.blogTitle}>

                                                <h3>{data.title}</h3>


                                    </div>
                                    <div className={Style.blogDesc}>
                                        <p>{data.desc}</p>
                                    </div>
                                </a>
                            </Link>

                        </Grid>
                    ))}


                </Grid>
            </div>
        </Layout>
    )
}