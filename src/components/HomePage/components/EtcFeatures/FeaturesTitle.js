import React, {Component} from 'react';
import {Grid, Typography} from "@material-ui/core";
import Style from "../../../../../src/assets/stylesheet/prices.module.scss";

export default class EtcFeatures extends Component {
    constructor(props) {
        super(props);
        this.singeEtcFeature = React.createRef()
    }
    render() {
        let {data} = this.props;
        return (
            <Grid sm={12} md={6} lg={6} xl={6} key={data.key} className={Style.priceFaq}>
                <Typography>
                    {data.title}
                    {data.soon && <div className={Style.comingSoon}>بزودی</div>}
                </Typography>
                <Typography>
                    {data.legend}
                </Typography>
            </Grid>
        )
    }
}
