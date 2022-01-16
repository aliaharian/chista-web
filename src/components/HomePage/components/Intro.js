import React, {useEffect, useRef, useState } from 'react';
import Style from "./../../../assets/stylesheet/index.module.scss";
import { Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { authUpdateField } from "../../../../redux/auth";
import ArrowLeft from '../../../assets/images/homepageArrowLeft.svg'
import { useRouter } from "next/router";
import InsertClassDialog from "../../Profile/componnets/Content/MyClass/InsertClass/Dialog";
import playIcon from '../../../assets/images/playIcon.svg'
import { transform } from '../../../utilities';
import { Skeleton } from '@material-ui/lab';

function Intro(props) {
    const [openInsertClass, setOpenInsertClass] = useState(false)
    const [playVideo, setPlayVideo] = useState(false)
    const [browserName, setBrowserName] = useState(null)
    const [loaded, setLoaded] = useState(false)
    const videoRef = useRef()

    const [bannerUrl, setBannerUrl] = React.useState(`/images/about.png`);
    const router = useRouter();
    useEffect(() => {
        setBrowserName(transform.getBrowserName())
        if (window.innerWidth <= 960) {
            setBannerUrl(`/images/responsive-banner.png`)
        } else {
            setBannerUrl(`/images/about.png`)
        }
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);

    });

    const updateDimensions = () => {
        if (window.innerWidth <= 960) {
            setBannerUrl(`/images/responsive-banner.png`)
        } else {
            setBannerUrl(`/images/about.png`)
        }
    };

    const openStartDialog = async () => {
        await props.authUpdateField({ prop: "startFree", value: true})
        if (!props.user?.username) {
            props.authUpdateField({ prop: "openInitiable", value: true });
        } else {
            if (props.user?.packetStat === 461 || props.user?.packetStat === 463) {
                if (props.user?.groupOwner === true) {
                    router.push('/profile/dashboard/myClass')
                } else {
                    handleInsertClass()
                }
            } else {
                router.push('/profile/dashboard/myClass')
            }
        }
    }

    const handleInsertClass = () => {
        setOpenInsertClass(true)
    };

    return (<>
        {
            props.user?.username &&
            <InsertClassDialog intro open={openInsertClass}
                toggleOpen={() => setOpenInsertClass(!openInsertClass)} />
        }
        <Grid container className={Style.introSection}>
            <Grid className={Style.flexContainer} item xs={12}>
                <Grid>
                    <h2 className={Style.mainTitle}>چیستا، پلتفرم تخصصی آموزش آنلاین</h2>
                    <p className={Style.mainDesc}>
                    نسل جدید نرم افزار آموزش مجازی است که با استفاده از بورد تعاملی، تولید و ارائه محتوا را تسهیل کرده و تعریف جدیدی از کلاس مجازی بوجود می‌آورد.
                    </p>
                </Grid>
                <Grid container className={Style.flexContainer}>
                    <Grid item md={6} sm={6} xs={6} className={Style.registerBtnContainer}>
                        <Button
                            onClick={openStartDialog}
                            variant="contained"
                            className={Style.registerBtn}
                            endIcon={<img src={ArrowLeft} alt="" />}
                        >
                            {
                                props.user?.username ?
                                    props.user?.packetStat === 463 ?
                                        props.user?.groupOwner === true ?
                                            `ایجاد کلاس جدید`
                                            :
                                            `رایگان شروع کنید`
                                        :
                                        `ایجاد کلاس جدید`
                                    :
                                    `رایگان شروع کنید`
                            }
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container>
                {!playVideo ?
                    <div className={Style.videoPoster} onClick={() => {
                        setPlayVideo(true)
                    }}>
                            <Skeleton variant="rect" style={!loaded ? {
                                backgroundColor: '#0c0b310d',
                                width: '100%',
                                paddingTop: '56.3%'
                            } : {display: 'none'}}
                            animation="wave"/>
                        <img onLoad={() => setLoaded(true)} src={browserName == 'Safari' ? "/images/intro_video_poster.png" : "/images/intro_video_poster.webp"} alt="" />
                        <img src={playIcon} alt="" />
                    </div>
                    :
                    <>
                        <video id={`v`} ref={videoRef} controlsList="nodownload" disablePictureInPicture autoPlay poster={browserName == 'Safari' ? "/images/intro_video_poster.png" : "/images/intro_video_poster.webp"}
                            className={Style.introVideo}
                            controls
                        >
                            <source src="/video/intro.mp4" type="video/mp4" />
                        </video>
                    </>
                }
            </Grid>
        </Grid>
    </>
    )
}

Intro.propTypes ={};

const mapStateToProps = (state) => (
    {
        user: state.user.user,
        startFree: state.auth.startFree,
    }
);

export default connect(mapStateToProps,
    {
        authUpdateField
    }
)(Intro);