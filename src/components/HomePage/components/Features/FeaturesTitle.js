import React, {Component} from 'react';
import {Grid} from "@material-ui/core";
import Style from "./../../../../assets/stylesheet/index.module.scss";

export default class extends Component {
    constructor(props) {
        super(props);
    }
    changeSlide(key){
        this.props._changeSlide(key);
    }

    render() {
        let {title , active , index} = this.props;
        let classname=``
        if (active) classname=Style.featureActive;
        return (
            <Grid onClick={this.changeSlide.bind(this,index)} item className={classname}>
                <p>{title}</p>
            </Grid>
        )
    }
}
