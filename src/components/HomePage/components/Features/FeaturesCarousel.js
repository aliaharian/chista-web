import React, {Component} from 'react';
import {Carousel} from "react-responsive-carousel";

export default class extends Component {
    constructor(props) {
        super(props);
    }

    updateCurrentSlide(index) {
        this.props._updateCurrentSlide(index + 1)
    }
    render() {
        let {index, items} = this.props;
        return (
            <Carousel
                autoPlay={false}
                selectedItem={index - 1}
                emulateTouch={true}
                showThumbs={false}
                showStatus={false}
                showArrows={true}
                showIndicators={false}
                onChange={this.updateCurrentSlide.bind(this)}
                {...this.props}
            >
                {items.map((item) => (
                    <div style={{maxWidth:'100%'}}>
                        <img src={item.image} style={{maxWidth:'100%'}}/>
                    </div>
                ))}
            </Carousel>
        )
    }
}
