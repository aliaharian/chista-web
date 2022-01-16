import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

import {
    Dialog,

    DialogContent,
    Slide, Fade, Typography,
} from "@material-ui/core";

import warning from "../../../../../../../assets/images/warning.svg";

import useStyles from "./Styles";
import clsx from "clsx";
import CheckList from "../../../../../../../assets/images/CheckList";
import { dateTime, numberFormat } from "../../../../../../../utilities";

function Transition(props) {
    return <Slide direction="up" {...props} />
}

function NoTransition(props) {
    return <Fade {...props} />
}


const ResultModal = ({ closeModal, showModal, initialValues, descriptives }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [transition, setTransition] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })
    console.log('ini', initialValues)
    const calculateCorrections = (corrected, descriptiveId = 0) => {
        let corrCounter = 0;
        let nonCorrCounter = 0;

        let total = 0;
        let final = 0;
        let totalNegative = 0;
        let descriptive = 0
        initialValues.answers.map((ans) => {
            if (ans?.scoring != undefined || ans?.descriptivePartId) {
                corrCounter++
                total += (ans?.scoring > 0) ? ans.scoring : 0
                final += (ans?.scoring) ? ans.scoring : 0
                totalNegative += (ans?.scoring < 0) ? ans.scoring : 0

            } else {
                nonCorrCounter++
            }
            if (corrected === 'descriptive') {

                descriptive = ans.descriptivePartId == descriptiveId ? descriptive + 1 : descriptive
            }
        })
        switch (corrected) {
            case 'corr':
                return corrCounter;
            case 'nonCorr':
                return nonCorrCounter;
            case 'total':
                return total;
            case 'negative':
                return totalNegative * -1;
            case 'descriptive':
                return descriptive;
            case 'final':
                return final;


        }

    }

    const calculateNegative = () => {
        let negative = initialValues.negativeScore
        switch (negative) {
            case 0.5:
                return '۱/۲ بارم'
            case 0.25:
                return '۱/۴ بارم'
            case 0.3:
                return '۱/۳ بارم'
            case 0.33:
                return '۱/۳ بارم'
            case 0.333:
                return '۱/۳ بارم'
            case 0.3333:
                return '۱/۳ بارم'
            default:
                return initialValues.negativeScore
        }

    }

    return (
        <Dialog
            fullScreen
            open={showModal}
            onClose={() => closeModal()}
            TransitionComponent={transition ? Transition : NoTransition}
            aria-labelledby="responsive-dialog-title"
            classes={{
                paper: classes.modalWrapper,
                scrollPaper: classes.modalScrollPaper,

            }}
        >
            <div className={classes.headerDialog} id="responsive-dialog-title">
                <div className={classes.finalCheckTitle}>
                    <div>
                        <CheckList />
                    </div>
                    <div>
                        <Typography>{initialValues.activityType === 'EXAM' ? `آزمون` : initialValues.activityType === 'ASSIGNMENT' ? `تکلیف` : initialValues.activityTypeOther || `سایر`} - {initialValues.name}</Typography>
                        <Typography>{numberFormat.toPersianDigits(initialValues.examineeCount)} نفر - {initialValues.user.name}</Typography>
                    </div>
                </div>
                <div className={classes.modalTop}>
                    <CloseIcon
                        className={classes.closeModalIcon}
                        onClick={() => closeModal()}
                    />
                </div>

            </div>
            <DialogContent className={classes.dialogContent}>


                <div className={classes.finalCheckTable}>
                    <div>
                        <Typography>نوع سوالات</Typography>
                        <Typography>{initialValues.questionType === 'MULTIPLE_CHOICE' ? `تستی` : initialValues.questionType === 'DESCRIPTIVE' ? `تشریحی` : `ترکیبی`}</Typography>
                    </div>

                    <div>
                        <Typography>شیوه محاسبه</Typography>
                        <Typography>{initialValues.scoring ? `${numberFormat.toPersianDigits(initialValues.scoring)} نمره ای` : initialValues.descriptiveName}</Typography>
                    </div>
                    <div>
                        <Typography>تعداد سوالات</Typography>
                        <Typography>{numberFormat.toPersianDigits(initialValues.questionsCount)} سوال</Typography>
                    </div>

                    <div>
                        <Typography>طول مدت فعالیت</Typography>
                        <Typography>{initialValues.duration ? numberFormat.toPersianDigits(initialValues.duration) + 'دقیقه' : `انتخاب نشده`}</Typography>
                    </div>

                </div>
                <div className={clsx(classes.finalCheckTable, classes.customTable)}>
                    <div>
                        <Typography>تعداد سوالات تصحیح شده</Typography>
                        <Typography>{numberFormat.toPersianDigits(calculateCorrections('corr'))} سوال</Typography>
                    </div>

                    <div>
                        <Typography>تعداد سوالات تصحیح نشده</Typography>
                        <Typography>{numberFormat.toPersianDigits(calculateCorrections('nonCorr'))} سوال</Typography>
                    </div>
                    {initialValues.scoring &&
                        <div>
                            <Typography>نمره کل</Typography>
                            <Typography>{numberFormat.toPersianDigits(calculateCorrections('total'))} نمره</Typography>
                        </div>
                    }
                    {
                        (initialValues.scoring && initialValues.negativeScore != 0) &&
                        <div>
                            <Typography>نمره منفی {calculateNegative()}</Typography>
                            <Typography>{numberFormat.toPersianDigits(calculateCorrections('negative'))} نمره منفی</Typography>
                        </div>
                    }

                </div>
                <div className={clsx(classes.finalCheckTable, classes.footerTable)}>

                    {initialValues.scoring &&

                        <div>
                            <Typography>نتیجه</Typography>
                            <Typography>{numberFormat.toPersianDigits(calculateCorrections('final'))}</Typography>
                        </div>
                    }
                    {
                        initialValues.descriptiveId &&
                        descriptives.map((desc) => (
                            <div>
                                <Typography>نتیجه {desc.name}</Typography>
                                <Typography>{numberFormat.toPersianDigits(calculateCorrections('descriptive', desc.id))} سوال</Typography>
                            </div>
                        ))
                    }


                </div>
            </DialogContent>

        </Dialog>
    );
};

export default ResultModal;
