import React from "react";
import {makeStyles} from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {numberFormat} from "../../../../../utilities";
import clsx from "clsx";

const primaryColor = '#0c0b31';
const secondaryColor = '#0c0b31cc';


const useStyles = makeStyles((theme) => ({
    breadcrumbWrapper: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 44,
        "& span": {
            margin: "0 15px 0 10px",
            fontSize: 18,
            fontFamily: 'chistaYekanR',
            color: secondaryColor,
            "&:last-child": {
                color: primaryColor,
                fontSize: 18,
                fontFamily: 'chistaYekanB',
                margin: "0 10px 0 10px",
                marginLeft:15



            }
        },
    },
    breadcrumbTitle: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",

    },
    breadcrumbSteper: {
        width: 60,
        height: 60,
        borderRadius: 8,
        fontSize: 17,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "3px solid rgba(224, 224, 224, 1)",
    },
    breadcrumbStep_1: {
        borderTop: `3px solid ${theme.palette.primary.main} !important`,
    },
    breadcrumbStep_2: {
        borderTop: `3px solid ${theme.palette.primary.main} !important`,
        borderLeft: `3px solid ${theme.palette.primary.main} !important`,
    },
    breadcrumbStep_3: {
        borderTop: `3px solid ${theme.palette.primary.main} !important`,
        borderLeft: `3px solid ${theme.palette.primary.main} !important`,
        borderBottom: `3px solid ${theme.palette.primary.main} !important`,
    },
    breadcrumbStep_4: {
        border: `3px solid ${theme.palette.primary.main} !important`,
    },
    backArrow: {
        cursor: "pointer",
    },
}));

const MobileBreadCrumb = ({step, handelStep}) => {
    const classes = useStyles();

    const stepRenderer = () => {
        switch (step) {
            case "basicInfo":
                return (
                    <div
                        className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_1)}
                    >
                        {numberFormat.toPersianDigits(1)}/{numberFormat.toPersianDigits(4)}
                    </div>
                );
            case "category":
                return (
                    <div
                        className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_2)}
                    >
                        {numberFormat.toPersianDigits(2)}/{numberFormat.toPersianDigits(4)}
                    </div>
                );
            case "further":
                return (
                    <div
                        className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_3)}
                    >
                        {numberFormat.toPersianDigits(3)}/{numberFormat.toPersianDigits(4)}
                    </div>
                );
            case "upload":
                return (
                    <div
                        className={clsx(classes.breadcrumbSteper, classes.breadcrumbStep_4)}
                    >
                        {numberFormat.toPersianDigits(4)}/{numberFormat.toPersianDigits(4)}
                    </div>
                );
            default:
                return <BasicInfo/>;
        }
    };

    const titleRenderer = () => {
        switch (step) {
            case "basicInfo":
                return "1. ?????????????? ????????";
            case "category":
                return "2. ?????????????? ?????????? ";
            case "further":
                return "3. ?????????????? ????????????";
            case "upload":
                return "4. ???????????? ?? ??????????";
            default:
                return <BasicInfo/>;
        }
    };

    const handelBack = () => {
        switch (step) {
            case "category":
                return handelStep("basicInfo");
            case "further":
                return handelStep("category");
            case "upload":
                return handelStep("further");
            default:
                return;
        }
    };

    return (
        <div className={classes.breadcrumbWrapper}>
            <div className={classes.breadcrumbTitle}>
                <ArrowForwardIcon onClick={handelBack} className={classes.backArrow}/>

                <span>{titleRenderer()}</span>
            </div>
            {/*{stepRenderer()}*/}
        </div>
    );
};

export default MobileBreadCrumb;
