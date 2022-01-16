import React from 'react';
import TrustUsSwiper from './trustUsSwiper';
import Style from '../../../assets/stylesheet/index.module.scss';

function TrustUs() {
    return (
        <div className={Style.trustedUsSection}>
            <h2>به ما اعتماد کردند...</h2>
            <div className={Style.brandsContainer}>
                <TrustUsSwiper/>
            </div>
        </div>
    )
}

export default TrustUs;