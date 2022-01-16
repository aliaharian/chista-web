import React, {useRef} from "react";
import {Grid} from "@material-ui/core";

import copy from "../../../../../../../../assets/images/copy.svg";
import brokenLink from "../../../../../../../../assets/images/broken-link.svg";

import useStyles from "./Styles";
import clsx from "clsx";
import {Scrollbars} from "react-custom-scrollbars";
import {withSnackbar} from "notistack";
import classes from '../../../../../../../../assets/stylesheet/profile/myClass/classDetailSettingTab.module.scss';
const ClassLink = ({data , enqueueSnackbar}) => {
    const linkRef = useRef(null);



    const copyToClipboard = () => {


        let copyText = linkRef.current
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        enqueueSnackbar('لینک در کلیپ بورد کپی شد', {
            variant: 'info',
            // persist:true,
            style: {},
            anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
            },
        });

    };

    return (
        <div className={classes.myClassSettingContainer}>
            <div className={classes.settingItem}>
                <div>
                    <img src={brokenLink} alt="broken link"/>
                    <div className={clsx(classes.settingInput, classes.ShareLinkWrapper)}>
                        <span>آدرس کلاس</span>
                            <input ref={linkRef} className={classes.settingShareLink} value={data.shareUrl}/>
                    </div>
                </div>
                <img src={copy} alt="users" onClick={copyToClipboard}/>
            </div>
        </div>
    );
};

export default withSnackbar(ClassLink);
