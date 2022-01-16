import React from 'react';
import { Divider, Container, Grid, Typography } from '@material-ui/core';
import Logo from '../Logo/Logo';
import useStyles from './styles';
import HelpPhone from '../../assets/images/help_phone.svg';
import { withSnackbar } from 'notistack';
import Link from "next/link";

function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container>
                <Grid xs={12} md={12} container justify="space-between">
                    <Grid item md={4} xs={12} className={classes.footerCol}>
                        <div className={classes.logo}>
                            <Logo whiteLogo={true} /> <span className={classes.logoText}>فرشته دانش</span>
                        </div>
                        <div className={classes.aboutChista}>
                            <p>چیستا اولین پلتفرم تخصصی آموزش در ایران است که می کوشد با ایجاد تجربه ای دلچسب برای
                                کاربران خود، در مسیر توسعه شیوه های نوین یادگیری و برقراری عدالت آموزشی قدم بردارد</p>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12} className={classes.footerCol}>
                        <Typography className={classes.listTitle}></Typography>
                        <div className={classes.footerCategories}>
                            <ul className={classes.list}>
                                <li><Link href={'/privacy-policy'}><a className={classes.listItem}>حریم شخصی</a></Link></li>
                                <li><Link href={'/terms'}><a className={classes.listItem}>قوانین و مقررات</a></Link></li>
                                <li><Link href={"/prices"} ><a className={classes.listItem}>تعرفه ها</a></Link></li>
                            </ul>
                            <ul className={classes.list}>
                                <li><Link href={"/blog"}><a className={classes.listItem}>بلاگ</a></Link></li>
                                <li onClick={() => window?.$imber?.toggle()}><a className={classes.listItem}>تماس با ما</a></li>
                                <li><Link href={"/help"}><a className={classes.listItem}>راهنما</a></Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Typography className={classes.listTitle}></Typography>
                        <ul className={classes.list}
                            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}>
                            <li className={classes.logosItems}>
                                <a target="_blank" rel="origin" href="https://trustseal.enamad.ir/?id=228133&amp;Code=oLvL0Z8vcGguRtLr9IVU" className={classes.licence}><img src="https://Trustseal.eNamad.ir/logo.aspx?id=228133&amp;Code=oLvL0Z8vcGguRtLr9IVU" alt="" style={{ cursor: "pointer" }} id="oLvL0Z8vcGguRtLr9IVU" /></a>
                            </li>
                            <li style={{ marginRight: 8 }} className={classes.logosItems}>
                                <a style={{ width: '80%' }} target="_blank" href="https://logo.samandehi.ir/Verify.aspx?id=273704&amp;p=uiwkjyoexlaojyoeobpdaods" className={classes.licence}>
                                    <img alt='logo-samandehi' style={{ cursor: "pointer" }} src='https://logo.samandehi.ir/logo.aspx?id=273704&p=odrfyndtqftiyndtlymashwl' />
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
            <Divider orientation="vertical" flexItem className={classes.divider} />
            <div className={classes.footerBottom}>
                <Container style={{ maxWidth: '100%', padding: 0 }}>
                    <Grid className={classes.footerItemsContainer} container direction="column-reverse" justify="space-between">
                        <Grid item md={7} className={classes.copyRight}>
                            <Typography>© تمام حقوق مادی و معنوی این وبسایت متعلق به شرکت رهروان دانایی چیستا بوده و هرگونه کپی برداری از
                                آن پیگرد قانونی دارد.</Typography>
                        </Grid>
                        <Grid item md={2} className={classes.phoneDetail}>
                            <Typography>۸۸۹۷۱۸۶۹ - ۰۲۱ </Typography>
                            <img src={HelpPhone} alt={'phone'} />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}

Footer.propTypes = {};

export default withSnackbar(Footer);