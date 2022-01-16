import React, { useEffect, useRef, useState } from 'react';
import { Typography, useTheme, useMediaQuery } from '@material-ui/core'
import Layout from "../../src/components/HomePage/Layout/Layout";
import classes from "../../src/assets/stylesheet/privacy.module.scss";
import typography from "../../src/components/Kit/Style/kits.module.scss";
import Head from "next/head";
import LayoutWithSidebar from '../../src/components/Kit/Layouts/LayoutWithSidebar';
import clsx from 'clsx';

const sidebarItems = [
    { title: 'تعاریف', link: 'defenition' },
    { title: 'نگهداری اطلاعات', link: 'keep' },
    { title: 'جمع آوری اطلاعات', link: 'collect' },
    { title: 'استفاده از اطلاعات', link: 'usage' },
    { title: 'انتشار اطلاعات', link: 'share' },
    { title: 'ویرایش اطلاعات', link: 'edit' },
    { title: 'امنیت اطلاعات', link: 'security' },
    { title: 'سایر وب سایت ها', link: 'others' },
    { title: 'قوانین کودکان', link: 'kids' },
    { title: 'تغییرات و به روز رسانی', link: 'updates' },

]

function Terms() {
    const [activeMenu, setActiveMenu] = useState()
    const privacyRefs = useRef([]);
    const [darkMode, setDarkmode] = useState(true)
    const theme = useTheme();
    const isTablet = useMediaQuery(theme.breakpoints.down(800));

    const handleScroll = () => {
        // let height = window.
        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos < 50) {
            setDarkmode(true)
        } else {
            setDarkmode(false)

        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <Layout darkMode={darkMode}>
            <Head>
                <title>حریم شخصی - چیستا</title>
            </Head>
            <div className={classes.privacyHeader}>
                <h2 className={`${typography.lineHeight} ${typography.fontFamB}`}>حریم شخصی چیستا</h2>
            </div>
            <LayoutWithSidebar>
                <div className={classes.sidebar}>
                    {isTablet &&
                        <>
                            <Typography className={typography.fontFamB} variant="h1"> سیاست حریم شخصی چیستا</Typography>
                            <Typography className={clsx(classes.updateTime, typography.fontFamR)}>این توافق‌نامه آخرین بار در تاریخ ۱ تیر ۱۴۰۰ به‌روزرسانی شده است</Typography>
                        </>
                    }
                    <ul>
                        {
                            sidebarItems.map((item, index) => (
                                <div
                                    className={classes.sidebarMenuItemLink}
                                    onClick={() => {
                                        setActiveMenu(item.link);
                                        privacyRefs.current[index].scrollIntoView({ behavior: 'smooth' })

                                    }}
                                >
                                    <li
                                        className={clsx(
                                            classes.sidebarMenuItem,
                                            (activeMenu == item.link || (item.link == 'defenition' && activeMenu == null)) && classes.sidebarMenuItemActive
                                        )}
                                    >
                                        <Typography className={clsx(classes.sidebarMenuItemText, typography.fontFamR)}>
                                            {item.title}
                                        </Typography>
                                    </li>
                                </div>
                            ))}

                    </ul>

                </div>
                <div className={classes.content}>
                    {!isTablet &&
                        <>
                            <Typography className={typography.fontFamB} variant="h1"> سیاست حریم شخصی چیستا</Typography>
                            <Typography className={clsx(classes.updateTime, typography.fontFamR)}>این توافق‌نامه آخرین بار در تاریخ ۱ تیر ۱۴۰۰ به‌روزرسانی شده است</Typography>
                        </>
                    }
                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[0] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}> تعاریف</h3>
                        <ul className={classes.ulNoStyle}>
                            <li>
                                <b> اطلاعات شخصی: </b>کلیه اطلاعات موردنیاز جهت عضویت در<b> چیستا </b> و بهره‌برداری از خدمات ما، در این توافق‌نامه و سایر توافق‌نامه‌های<b> چیستا </b> در اصطلاح <b> "اطلاعات شخصی" </b>نام می‌گیرند
                            </li>
                            <li>
                                <b> چیستا- ما: </b><b>شرکت رهروان دانایی چیستا</b> ، در این توافق‌نامه و سایر توافق‌نامه‌های <b> چیستا </b>در اصطلاح<b> "چیستا" </b>یا<b> "ما" </b>نام می‌گیرند
                            </li>
                            <li>
                                <b> خدمات: </b> کلیه خدمات، امکانات، وب‌سایت‌ و سرویس‌های <b> چیستا </b> ، در این توافق‌نامه و سایر توافق‌نامه‌های <b> چیستا </b>در اصطلاح<b> "خدمات" </b>نام می‌گیرند
                            </li>
                        </ul>
                    </div>
                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[1] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}> نگهداری اطلاعات</h3>
                        <Typography>
                            <b> چیستا </b> در کشور جمهوری اسلامی ایران مستقر بوده و کلیه اطلاعات شخصی جمع‌آوری شده، در دیتاسنترهای مورد تایید سازمان فن‌آوری اطلاعات و ارتباطات ایران و بر روی سرورهای داخل کشور نگهداری و ذخیره‌سازی می‌گردند که این امر موجب بالا رفتن امنیت اطلاعات خصوصی شما خواهد شد. شما با ارایه اطلاعات شخصی خود و استفاده از خدمات <b> چیستا </b> ، موافقت خود را با این موضوع اعلام می‌نمایید. ما بر طبق این توافق‌نامه از اطلاعات شخصی شما نهایت مراقبت و حفاظت را به عمل می‌آوریم. اطلاعات شخصی ذخیره‌سازی‌شده در جمهوری اسلامی ایران مشمول قوانین و مقررات این کشور است و از آن جمله حق دسترسی نظام جمهوری اسلامی، دادگاه‌ها، قوای سه‌گانه، سازمان‌های نظارتی و هر آن‌که صلاحیت قانونی لازم برای درخواست ارایه اطلاعات شخصی شما را از <b> چیستا </b> داشته باشد مورد تایید ما بوده و در صورت ارایه احضاریه معتبر، حکم دادگاه و یا درخواست‌های رسمی مشابه، اطلاعات شخصی شما در اختیار متقاضی قرار می‌گیرد. بنابراین شما با علم به این واقعیت، رضایت خود را از این موضوع اعلام می‌نمایید
                        </Typography>
                    </div>

                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[2] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>جمع آوری اطلاعات</h3>
                        <Typography>
                            به‌طورکلی شما می‌توانید بدون نیاز به ارایه اطلاعات شخصی و هویتی از وب‌سایت ما بازدید نمایید. اگرچه در حین بازدید از وب‌سایت و یا استفاده از خدمات ما، اطلاعات عمومی و ناشناس مانند
                            کوکی‌ها                ، آدرس آی پی       ، مشخصات سیستم‌عامل، مشخصات مرورگر و… به‌صورت خودکار و بدون مشارکت شما توسط سرورهای ما جمع‌آوری می‌شوند که این اطلاعات فاقد مشخصات هویتی و
                            شخصی بوده و کاملا عمومی است. مرورگر اینترنتی شما به‌صورت خودکار بخشی از این اطلاعات ناشناس از قبیل آدرس اینترنتی که شما را به وب‌سایت ما هدایت نموده است، تاریخ و زمان ورود شما به
                            وب‌سایت ما و صفحات بازدیدشده توسط شما را برای سرورهای ما ارسال می‌نماید. این اطلاعات توسط ما برای اهداف درون سازمانی و به منظور تحلیل رویه‌ها و فرآیندها و رفتار مشتریان جهت بهبود وب‌سایت
                            و خدمات <b> چیستا </b> مورد استفاده قرار می‌گیرند
                        </Typography>
                        <Typography>
                            <b> چیستا </b> همچنین اطلاعات شخصی را که شما در موارد زیر به‌صورت آگاهانه و با رضایت خود در اختیار ما قرار می‌دهید، جمع‌آوری نموده و مورد استفاده قرار می‌دهد:
                        </Typography>
                        <ul>
                            <li>
                                عضویت در سایت و ایجاد حساب کاربری به منظور استفاده از خدمات و سرویس‌های ما
                            </li>
                            <li>
                                ثبت‌نام برای شرکت در رویدادهای آنلاین (وبینار، وب‌کنفرانس، آموزش مجازی، مشاوره آنلاین و…) که با استفاده از خدمات و یا سرویس‌های <b> چیستا </b> برگزار می‌گردند
                            </li>
                            <li>
                                تماس با ما جهت درخواست اطلاعات، پشتیبانی، طرح سوالات و برقراری هرگونه ارتباط با ما
                            </li>
                        </ul>
                        <Typography>
                            همچنین ممکن است ما اطلاعات شخصی را از نمایندگی‌ها، مشتریان (برگزارکنندگان رویدادها) و یا شرکای تجاری <b> چیستا </b> دریافت نماییم. تا زمانی که جمع‌آوری این اطلاعات بر طبق توافق‌نامه‌های قانونی ارایه‌دهندگان اطلاعات و با رضایت کامل شما صورت پذیرفته باشد، مورد استفاده ما قرار خواهد گرفت و مشمول شرایط و ضوابط این توافق‌نامه هستند
                            با توجه به اینکه <b> چیستا </b> بستر برگزاری رویدادهای آنلاین توسط اشخاص حقیقی و حقوقی است و در این بستر امکان تبادل اطلاعات میان کاربران وجود دارد، تاکید می‌گردد از ارایه هرگونه اطلاعات شخصی در محیط رویدادها به سایر افراد جدا خودداری نمایید چرا که به دلیل حضور افراد مختلف در این رویدادها احتمال انتشار اطلاعات تبادل شده بسیار زیاد بوده و در صورت عدم رعایت این امر عواقب ناشی از آن متوجه شما خواهد بود و <b> چیستا </b> هیچ‌گونه تعهدی در خصوص حفظ امنیت اطلاعات شخصی شما در محیط برگزاری رویدادها را بر عهده ندارد
                        </Typography>
                    </div>

                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[3] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>استفاده از اطلاعات</h3>
                        <Typography>
                            <b> چیستا </b> از اطلاعات شخصی جمع‌آوری شده در جهت اهداف اصلی کسب‌وکار خود که شامل موارد زیر می‌گردد استفاده می‌نماید:
                        </Typography>

                        <ul>
                            <li>
                                ارایه خدمات <b> چیستا </b>
                                <li>
                                    آنالیز، تحقیق، نظارت و بهبود کیفیت سرویس‌ها و خدمات
                                </li>
                                <li>
                                    پاسخگویی به درخواست‌های شما مبنی بر استفاده از خدمات، سرویس‌ها و محصولات و پشتیبانی
                                </li>
                                <li>
                                    بازاریابی خدمات و محصولات <b> چیستا </b> یا خدمات و محصولات شرکای تجاری با هدف آگاهی و اطلاع‌رسانی به شما در خصوص آخرین به‌روزرسانی‌های محصولات و خدمات، اطلاعیه‌ها و پیشنهادهای ویژه که شما می‌توانید در هر زمان از دریافت این اطلاع‌رسانی ها انصراف دهید
                                </li>
                                <li>
                                    پیگیری، رهگیری، شناسایی و معرفی اشخاص حقیقی و حقوقی به مراجع قانونی ذکر شده در این توافق‌نامه در صورت هرگونه تخلف و تخطی از قوانین جمهوری اسلامی ایران و توافق‌نامه‌های <b> چیستا </b> و دریافت شکایت در این خصوص                            </li>
                            </li>
                        </ul>
                    </div>

                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[4] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>انتشار اطلاعات</h3>
                        <Typography>
                            <b> چیستا </b> اطلاعات شخصی شما را تحت هیچ شرایطی به اشخاص ثالث ارایه نمی‌نماید.تنها در صورت دریافت حکم قانونی و یا دستور قضایی از مراجع ذی‌صلاح اقدام به ارایه اطلاعات شخصی شما در حد نیاز و بدون آگاهی و کسب اجازه از شما خواهد نمود
                        </Typography>
                        <Typography>
                            همچنین ممکن است اطلاعات فاقد هویت اشخاص در خصوص کاربران <b> چیستا </b> مانند آمار تعداد کاربران را با شرکت‌های تبلیغاتی، شرکای تجاری و سایر اشخاص ثالث با هدف تبلیغات، سفارشی‌سازی و بهبود فعالیت‌های تبلیغاتی <b> چیستا </b> به اشتراک بگذارد
                        </Typography>
                    </div>

                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[5] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>ویرایش اطلاعات</h3>
                        <Typography>
                            شما همواره می‌توانید اطلاعات شخصی خود را که توسط ما جمع‌آوری شده‌اند، بازبینی نموده و نسبت به ویرایش، به‌روزرسانی و یا حذف آن‌ها اقدام نمایید
                        </Typography>
                    </div>
                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[6] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>امنیت اطلاعات</h3>
                        <Typography>
                            اطلاعات شخصی شما با هدف حفظ حریم خصوصی و امنیت شما حفاظت می‌گردند. <b> چیستا </b> از امنیت و محرمانگی اطلاعات شخصی ارسال شده توسط شما، با فرآیندهای مدیریتی، فنی و فیزیکی حفاظت می‌نماید. اطلاع داشته باشید صرف نظر از تمامی تلاش‌های ما، هیچ سیستم امنیتی کاملا امن و غیرقابل نفوذ نیست. اگرچه ما همواره در تلاش برای حفظ امنیت اطلاعات شما هستیم ولی قادر به تضمین امنیت اطلاعات شخصی شما نیستیم و ازاین ‌رو خواهشمندیم تمامی تمهیدات امنیتی مانند اطمینان از صحت آدرس اینترنتی ما <a href="https://chista.ir" target="_blank">www.chista.ir</a>  به هنگام ارایه اطلاعات شخصی، تغییر گذرواژه به‌صورت ماهیانه، استفاده از ترکیب حروف و اعداد و ایجاد گذرواژه‌های پیچیده، به‌روزرسانی مرورگر اینترنتی و… را برای افزایش سطح امنیت اطلاعات شخصی خود به کار گیرید
                        </Typography>
                    </div>
                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[7] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>سایر وب سایت ها</h3>
                        <Typography>
                            وب‌سایت <b> چیستا </b> ممکن است حاوی لینک‌هایی به سایر وب‌سایت‌ها باشد. برخی از این وب‌سایت‌های ثالث ممکن است در قالب شرکای تجاری و با برند <b> چیستا </b> فعالیت نمایند اگرچه مستقیما توسط ما مدیریت و نگهداری نمی‌شوند. ما شرکای تجاری خود را با دقت و حساسیت زیاد انتخاب می‌نماییم اما مسئولیت حفظ حریم خصوصی افراد در وب‌سایت‌های مذکور که توسط اشخاص ثالث اداره می‌شوند و لینک آن‌ها در وب‌سایت ما قرار دارد را بر عهده نمی‌گیریم. از لحظه‌ای که شما وب‌سایت ما را ترک نمایید، مسئولیت بررسی صلاحیت و راهکارهای‌ امنیت اطلاعات در سایر وب‌سایت‌ها بر عهده شما خواهد بود
                        </Typography>
                    </div>
                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[8] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>قوانین کودکان</h3>
                        <Typography>
                            وب‌سایت و خدمات <b> چیستا </b> برای مخاطبین عمومی ایجاد شده است و برای کودکان زیر ۱۳ سال هدف گذاری و طراحی نگردیده است. لذا استفاده کودکان زیر ۱۳ سال از خدمات و امکانات <b> چیستا </b> منوط به اذن والدین و یا افراد معتمد و بالای ۱۳ سال است و مسئولیت عدم رعایت این موضوع و عواقب ناشی از آن به هیچ عنوان بر عهده <b> چیستا </b> نخواهد بود
                        </Typography>
                    </div>
                    <div className={classes.privacyContentItem} ref={(el) => (privacyRefs.current[9] = el)}>
                        <h3 className={clsx(typography.fontFamB, classes.privacyItemTitle)}>تغییرات و به روز رسانی</h3>
                        <Typography>
                            <b> چیستا </b> ممکن است در بازه‌های زمانی مختلف این توافق‌نامه را به‌روزرسانی نموده و شرایط و مفاد آن را تغییر دهد که در این صورت اطلاع‌رسانی لازم از طریق ایمیل و سایر کانال‌های ارتباطی به آگاهی شما خواهد رسید. دقت داشته باشید پس از این به‌روزرسانی‌ها، ادامه استفاده شما از وب‌سایت و خدمات <b> چیستا </b> به منزله پذیرش آگاهانه کلیه مفاد این توافق‌نامه خواهد بود                                 </Typography>
                    </div>
                </div>
            </LayoutWithSidebar>
        </Layout>
    )
}

export default Terms;
