import React, {Component} from 'react';
import Style from "./../../../assets/stylesheet/index.module.scss";
import {Grid} from "@material-ui/core";
import FeaturesTitle from "./Features/FeaturesTitle";
import FeaturesCarousel from "./Features/FeaturesCarousel";
import ScrollContainer from "react-indiana-drag-scroll";
import FeaturesDesc from "./Features/FeaturesDesc";
import FeaturesDots from "./Features/FeaturesDots";
let animation;

const features = [
    {
        title: `گزارش حرفه ای`,
        key: 1,
        image: `/images/features/reportFeature.png`,
        legend: `حضور و غیاب، تاخیر، شاخص توجه و میزان تعامل و بسیاری گزارشات دیگر به اساتید و مراکز آموزشی کمک خواهد کرد تا فرآیند های آموزشی با کنترل و کیفیت بیشتری صورت پذیرد.`
    },
    {
        title: `گفتگو`,
        key: 2,
        image: `/images/features/chatFeature.png`,
        legend: `چیستا تنها یک پلتفرم تماس تصویری نیست بلکه در هسته خود از یک پیام رسان قدرتمند بهره میبرد که امکان تشکیل خودکار گروه و ارسال پیام را حتی بعد از پایان کلاس فراهم می آورد. بزودی ارسال فایل، تصویر و ویدیو هم از طریق صفحه گفتگوها فعال خواهد شد.`
    }
    ,
    {
        title: `وایت برد`,
        key: 3,
        image: `/images/features/whiteBoardFeature.png`,
        legend: `محیط جذاب، ابزارهای کامل ، امکان نمایش انواع فایل روی صفحه وایت برد آنلاین و ده ها ویژگی یک ارائه حرفه ای را در کلاس شما به ارمغان خواهد آورد.`
    }
    ,
    {
        title: `اشتراک صفحه`,
        key: 4,
        image: `/images/features/screenShareFeature.png`,
        legend: `در هنگام کلاس علاوه بر صدا و تصویر خود، عکسها ، فایل ها ، ویدیو یا هر آنچه در صفحه موبایل یا کامپیوتر است به دیگران نمایش دهید.`
    }
    ,
    {
        title: `ارتباط تصویری`,
        key: 5,
        image: `/images/features/videoCallFeature.png`,
        legend: `صدا و تصویر واضح و با کیفیت را به واسطه سامانه و سرورهای قدرتمند چیستا تجربه خواهید کرد. برای تعامل بیشتر میتوانید تا چهار ویدیوی همزمان را در کلاس خود داشته باشید.`
    }
]

export default class Features extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 3
        }
    }
    componentDidMount() {
        this.initAnimation();
    }

    changeSlide(key) {
        if (key > 0 && key <= features.length) {
            this.setState({
                index: key
            })
        }else if (key===0){
            this.setState({
                index: features.length
            })
        }else if (key>features.length){
            this.setState({
                index: 1
            })
        }
        this.initAnimation();
    }

    initAnimation() {
        clearInterval(animation)
        let that = this;
        animation = setInterval(() => {
            if (that.state.index === 1 ) {
                that.setState({
                    index:features.length
                })
            } else {
                that.setState({
                    index: that.state.index - 1
                })
            }
        }, 5000)
    }

    get rightStyle() {
        return {}
    }

    get leftStyle() {
        return {}
    }

    render() {
        let {index} = this.state
        return (
            <Grid className={Style.featuresSection}>
                <h2>برخی ویژگی های چیستا</h2>
                <ScrollContainer horizontal className={Style.featuresTitleContainer} style={{direction: 'ltr'}}>
                    {features.map((feature) => (
                        <FeaturesTitle title={feature.title} index={feature.key} key={feature.key}
                                       active={feature.key === index}
                                       _changeSlide={this.changeSlide.bind(this)}/>
                    ))}
                </ScrollContainer>
                <Grid container className={Style.featuresImageContainer}>
                    <div className={`${Style.rightArrow} ${this.rightStyle}`}
                         onClick={this.changeSlide.bind(this, index + 1)}>
                    </div>
                    <div className={Style.featureFrame}/>
                    <div className={Style.featuresMobilePlace}>
                        <FeaturesCarousel _updateCurrentSlide={this.changeSlide.bind(this)} index={index}
                                          items={features}/>
                    </div>
                    <div  className={`${Style.leftArrow} ${this.leftStyle}`}
                         onClick={this.changeSlide.bind(this, index - 1)}>
                    </div>
                </Grid>
                <FeaturesDots features={features} featureIndex={index-1}/>
                <FeaturesDesc key={index} desc={features[index - 1].legend}/>
            </Grid>
        )
    }
}
