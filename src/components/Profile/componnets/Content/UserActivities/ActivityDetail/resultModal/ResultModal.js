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
                return '??/?? ????????'
            case 0.25:
                return '??/?? ????????'
            case 0.3:
                return '??/?? ????????'
            case 0.33:
                return '??/?? ????????'
            case 0.333:
                return '??/?? ????????'
            case 0.3333:
                return '??/?? ????????'
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
                        <Typography>{initialValues.activityType === 'EXAM' ? `??????????` : initialValues.activityType === 'ASSIGNMENT' ? `??????????` : initialValues.activityTypeOther || `????????`} - {initialValues.name}</Typography>
                        <Typography>{numberFormat.toPersianDigits(initialValues.examineeCount)} ?????? - {initialValues.user.name}</Typography>
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
                        <Typography>?????? ????????????</Typography>
                        <Typography>{initialValues.questionType === 'MULTIPLE_CHOICE' ? `????????` : initialValues.questionType === 'DESCRIPTIVE' ? `????????????` : `????????????`}</Typography>
                    </div>

                    <div>
                        <Typography>???????? ????????????</Typography>
                        <Typography>{initialValues.scoring ? `${numberFormat.toPersianDigits(initialValues.scoring)} ???????? ????` : initialValues.descriptiveName}</Typography>
                    </div>
                    <div>
                        <Typography>?????????? ????????????</Typography>
                        <Typography>{numberFormat.toPersianDigits(initialValues.questionsCount)} ????????</Typography>
                    </div>

                    <div>
                        <Typography>?????? ?????? ????????????</Typography>
                        <Typography>{initialValues.duration ? numberFormat.toPersianDigits(initialValues.duration) + '??????????' : `???????????? ????????`}</Typography>
                    </div>

                </div>
                <div className={clsx(classes.finalCheckTable, classes.customTable)}>
                    <div>
                        <Typography>?????????? ???????????? ?????????? ??????</Typography>
                        <Typography>{numberFormat.toPersianDigits(calculateCorrections('corr'))} ????????</Typography>
                    </div>

                    <div>
                        <Typography>?????????? ???????????? ?????????? ????????</Typography>
                        <Typography>{numberFormat.toPersianDigits(calculateCorrections('nonCorr'))} ????????</Typography>
                    </div>
                    {initialValues.scoring &&
                        <div>
                            <Typography>???????? ????</Typography>
                            <Typography>{numberFormat.toPersianDigits(calculateCorrections('total'))} ????????</Typography>
                        </div>
                    }
                    {
                        (initialValues.scoring && initialValues.negativeScore != 0) &&
                        <div>
                            <Typography>???????? ???????? {calculateNegative()}</Typography>
                            <Typography>{numberFormat.toPersianDigits(calculateCorrections('negative'))} ???????? ????????</Typography>
                        </div>
                    }

                </div>
                <div className={clsx(classes.finalCheckTable, classes.footerTable)}>

                    {initialValues.scoring &&

                        <div>
                            <Typography>??????????</Typography>
                            <Typography>{numberFormat.toPersianDigits(calculateCorrections('final'))}</Typography>
                        </div>
                    }
                    {
                        initialValues.descriptiveId &&
                        descriptives.map((desc) => (
                            <div>
                                <Typography>?????????? {desc.name}</Typography>
                                <Typography>{numberFormat.toPersianDigits(calculateCorrections('descriptive', desc.id))} ????????</Typography>
                            </div>
                        ))
                    }


                </div>
            </DialogContent>

        </Dialog>
    );
};

export default ResultModal;
