import React from 'react';
import Style from "../../../../src/assets/stylesheet/prices.module.scss";
import { Button } from "@material-ui/core";
import FaqItem from "./FaqItem";

export default function Faq({ faq }) {
    return (
        <div className={Style.FaqSection}>
            <h2>سوالات متداول</h2>
            <div container className={Style.etcFeaturesContainer}>
                {faq.map((q, index) => (
                    <FaqItem
                        q={q}
                    />
                ))}
            </div>
            <Button
                onClick={() => window?.$imber?.toggle()}
                variant="contained"
                className={Style.loadMore}>
                تماس با بخش فروش
            </Button>
        </div>
    )
}
