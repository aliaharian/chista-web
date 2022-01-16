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


const DetailModal = ({ closeModal, showModal, initialValues }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [transition, setTransition] = React.useState(false)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    React.useEffect(() => {
        isMobile ? setTransition(true) : setTransition(false)
    })

    const calculateNegativeScore = () => {
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
                        <Typography>{numberFormat.toPersianDigits(initialValues.examineeCount)} نفر</Typography>
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
                        <Typography>نمره منفی</Typography>
                        <Typography>{initialValues.negativeScore ?
                            calculateNegativeScore() :
                            'ندارد'}</Typography>
                    </div>
                    <div>
                        <Typography>طول مدت فعالیت</Typography>
                        <Typography>{initialValues.duration ? numberFormat.toPersianDigits(initialValues.duration) + 'دقیقه' : 'تعریف نشده'}</Typography>
                    </div>

                </div>
            </DialogContent>

        </Dialog>
    );
};

export default DetailModal;
