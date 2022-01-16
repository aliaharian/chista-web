import Style from "../../../../assets/stylesheet/index.module.scss";
import React from "react";
import clsx from "clsx";

export default function FeaturesDots({featureIndex, features}) {
    return (
          <div className={Style.carouselDotsContainer}>
              {
                  features.map((feature , index)=>{
                      return(
                          <div className={clsx(Style.CarouselDot , featureIndex===index && Style.selectedDot)}>
                          </div>
                      )
                  })
              }
          </div>
    )
}