import React, {Component} from 'react';
import Style from "./../../../assets/stylesheet/index.module.scss";
import WebView3ImagesWebp from '../../../assets/images/why_chista/webp/web_view_3_images.webp'
import WebView3ImagesPng from '../../../assets/images/why_chista/png/web_view_3_images.png'
import { why } from '../../../utilities/constants';
import { transform } from '../../../utilities';

class WhyItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            browserName: null,
            loaded: false
        }
    }
    componentDidMount() {
        this.setState({browserName: transform.getBrowserName()})
    }
    render() {
        return (
            <div>
                <img onLoad={() => this.setState({loaded: true})} className={this.props.index == 0 ? Style.zeroPaddingTop : null} src={this.state.browserName == 'Safari' ? this.props.item.iconClassPng : this.props.item.iconClassWebp} alt={""}/>
                <h4 className={this.props.index == 0 ? Style.negativeMarginTop : null}>{this.props.item.title}</h4>
                <p>{this.props.item.desc}</p>
            </div>
        )
    }
}

export default class Why extends Component {
    constructor(props) {
        super(props);
        this.state = {
            small: false,
            index: 0,
            browserName: null,
            imgLoaded: false
        }
    }
    componentDidMount() {
        this.setState({browserName: transform.getBrowserName()})
        if (window.innerWidth <= 800) {
            this.setState({
                small: true
            })
        } else {
            this.setState({
                small: false
            })
        }
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    updateDimensions = () => {
        if (window.innerWidth <= 800) {
            this.setState({
                small: true
            })
        } else {
            this.setState({
                small: false
            })
        }
    };

    handleChange(key){
        this.setState({
            index: this.state.index == key ? 0 : key,
        })
    }
    render() {
        let {small, index, imgLoaded} = this.state;
        if (small) {
            return (
                <div className={Style.whySection}>
                    <h2>چرا چیستا؟</h2>
                    <div className={Style.whyContainer} maxWidth="lg" disableGutters={false}>
                        <div className={Style.whyGrid}>
                            {why.map((item, index) => (
                                <WhyItem
                                item={item}
                                index={index}/>
                            ))}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={Style.whySection}>
                    <h2>چرا چیستا؟</h2>
                    <div className={Style.whyContainer} maxWidth="lg" disableGutters={false}>
                        <img onLoad={() => this.setState({imgLoaded: true})} src={this.state.browserName == 'Safari' ? WebView3ImagesPng : WebView3ImagesWebp} className={`${Style.whyIcon}`}/>
                        <div className={Style.whyGrid}>
                            {why.map((item) => (
                                <div className={Style.whyDataNegativeMargin}>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
}
