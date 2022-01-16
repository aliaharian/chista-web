import React, {useEffect, useState} from 'react';
import Style from "./../../../assets/stylesheet/index.module.scss";
import {Grid} from "@material-ui/core";
import { etcFeaturesObj } from '../../../utilities/constants';
import { transform } from '../../../utilities';

function EtcFeaturesItems({item}) {

    const [browserName, setBrowserName] = useState(null)
    const [etcFeaturesLoaded, setEtcFeaturesLoaded] = useState(false)

    useEffect(() => {
        setBrowserName(transform.getBrowserName())
    }, {})

    const handleLoad = () => {
        setEtcFeaturesLoaded(true)
    } 
    
    return (
        <div className={Style.etcFeaturesItem}>
            <img onLoad={handleLoad} src={browserName == 'Safari' ? item.iconClassPng : item.iconClassWebp} className={`${Style.whyIcon}`} alt={"etc"}/>
            <h4>{item.title}</h4>
            <p>{item.desc}</p>
        </div>
    )
}

export default function EtcFeatures() {
    return (
        <Grid className={Style.etcFeatureSection}>
            <h2>سایر ویژگی‌ها</h2>
            <div className={Style.etcFeaturesContainer}>
                {etcFeaturesObj.map((item) => (
                    <EtcFeaturesItems item={item}/>
                ))}
            </div>
        </Grid>
    )
}
