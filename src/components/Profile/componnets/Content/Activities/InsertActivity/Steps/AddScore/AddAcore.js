import React, { useState, memo, useRef } from "react";
import { useFormik } from "formik";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import Scrollbars from "react-custom-scrollbars";
import { numberFormat } from "../../../../../../../../utilities";
import EditIcon from '../../../../../../../../assets/images/PenEdit'
import WarningIcon from '../../../../../../../../assets/images/WarningIcon'
import clsx from "clsx";
import EditScore from "./EditScore";

const AddScore = ({ handelStep, initialValues, ...props }) => {
    const classes = useStyles();
    const infoScroll = useRef();
    const [addListShadow, setAddListShadow] = useState('none');
    const [selectedScore, setSelectedScore] = useState()
    const [editScoreDialog, setEditScoreDialog] = useState(false)
    const [sum, setSum] = useState(() => {
        let s = 0
        initialValues.questions.map((q) => {
            s += parseFloat(q.score);
        })
        return s
    })
    const handleScroll = () => {
        if (infoScroll.current.viewScrollTop < 40)
            setAddListShadow('none')
        else
            setAddListShadow('0 3px 6px #00053412')
    }

    function toFixedIfNecessary(value, dp) {
        return +parseFloat(value).toFixed(dp);
    }

    const formik = useFormik({
        initialValues: {
            ...initialValues,
        },
        // validationSchema,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: values => {
            console.log(values)
            handelStep("setSetting", {
                ...formik.values,
            });
        },
    });
    const handleSubmitScore = (values, selectedScore) => {
        let tmp = [...initialValues.questions]
        tmp[selectedScore.index].score = parseFloat(values.score)
        formik.setFieldValue('questions', [...tmp]);
        setEditScoreDialog(false)

        //update sum
        let s = 0
        tmp.map((q) => {
            s += parseFloat(q.score);
        })
        setSum(s)
    }

    return (
        <>
            {editScoreDialog &&
                <EditScore
                    handleSubmit={handleSubmitScore}
                    initialValues={initialValues}
                    open={editScoreDialog}
                    selectedScore={selectedScore}
                    handleClose={() => setEditScoreDialog(false)}
                    title={`???????? ???????? ${numberFormat.toPersianDigits(selectedScore.index + 1)}`}
                />}
            <div className={classes.baseInfoMainContainer}>
                <div style={{ width: '100%', height: 92, top: 0, position: 'absolute', zIndex: 0 }}
                ></div>
                {
                    parseFloat(sum) !== parseFloat(initialValues.maxGrade) &&
                    <div className={classes.errorContainer}>
                        <WarningIcon />
                        <Typography>
                            ?????? ???????? ???????????? ???????? ???? ???? ?????????? ???? ?????????? ????????
                        </Typography>
                    </div>
                }
                <form className={classes.form} onSubmit={formik.handleSubmit}>
                    <Scrollbars ref={infoScroll} onScroll={handleScroll}>
                        <Grid container spacing={0}>
                            <Grid item md={12} xs={12} container className={classes.baseInfoContainer}>
                                {
                                    parseFloat(sum) === parseFloat(initialValues.maxGrade) &&
                                    <Typography style={{ marginBottom: 20 }}>
                                        ???? ?????????????? ???????? ???????????? ???? ???? ?????????? ???????? ???????????????? ???????? ???? ???????????? ????????
                                    </Typography>
                                }
                                {initialValues.questions.map((q, index) => (
                                    <Grid item xs={12} className={clsx(classes.scoreContainer, index === initialValues.questions.length - 1 && classes.scoreLast)}>
                                        <div>
                                            <Typography>
                                                ???????? ???????? {numberFormat.toPersianDigits(index + 1)} :
                                            </Typography>

                                            <Typography>
                                                {numberFormat.toPersianDigits(toFixedIfNecessary(q.score, 2))} ????????
                                            </Typography>
                                        </div>
                                        <div onClick={() => {
                                            setSelectedScore({ ...q, index: index })
                                            setEditScoreDialog(true)
                                        }}>
                                            {!props.sameMode &&
                                                <EditIcon />
                                            }
                                        </div>
                                    </Grid>
                                ))
                                }
                                <Typography style={{ marginTop: 20 }}>?????????? {numberFormat.toPersianDigits(toFixedIfNecessary(sum, 2))} ???? {numberFormat.toPersianDigits(initialValues.maxGrade)} ????????</Typography>
                            </Grid>
                        </Grid>
                    </Scrollbars>
                    <button type="submit" style={props.btnStyle || {}} className={clsx(classes.stepBTN, parseFloat(sum) !== parseFloat(initialValues.maxGrade) && classes.disableBtn)}>????????</button>
                </form>
            </div>
        </>
    );
};

export default memo(withSnackbar(AddScore));
