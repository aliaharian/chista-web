import React, {useEffect} from "react"
import {
    Button,
    Dialog,
    DialogContent,
    CircularProgress,
    Slide, Typography
} from "@material-ui/core"
import { reduxForm, Field,formValueSelector  } from "redux-form"
import Stiker1 from '../../../../../../../../assets/images/stiker-1.png'
import { connect } from "react-redux"
import useStyles from './styles';
import {getReasons,postComment} from '../../../../../../../../../redux/comments';
import {RatingInput, ChistaRadio, WriteCommentTextArea, Switch} from "../../../../../../../form";
import {required} from "../../../../../../../../utilities";

function Complete(props) {
    const classes = useStyles();
    useEffect(()=>{
        if(!props.reasonSatisfaction || props.reasonDissatisfaction)
        {
            props.getReasons()
        }
    },[]);

    function submited(data ) {

        data.reasons = [{id: data.reasons}];
        props.postComment(props.adviser.id,data,function(){
            props.handleClose()
        })
    }
    return (
        <Dialog
        maxWidth="lg"
            open={props.open}
            transition={Slide}
            keepMounted
            onClose={props.handleClose}
            PaperProps={{className:classes.root}}
        >
            <form onSubmit={props.handleSubmit((values) => submited(values))} className={classes.modalContent}>
                <div className={classes.modalHead}>
                    <Typography className={classes.modalTitle}> به {props.adviser&&props.adviser.fullName} رای میدهم </Typography>
                </div>
                <DialogContent >
                    <Field
                        name="rate"
                        component={RatingInput}
                        validate={[required]}
                    />
                   {(props.selectedRate <=3 && props.reasonDissatisfaction.length > 0 ) ||  (props.selectedRate >3 && props.reasonSatisfaction.length > 0) &&
                    <div className={classes.reasonTextContainer}><img src={Stiker1} className={classes.reasonTextImg}/><span className={classes.reasonTextP1}>{props.selectedRate>3?' دلایل رضایت ':'دلایل نارضایتی'}</span><span className={classes.reasonTextP2}>( این دلایل به عموم نشان داده نخواهد شد) </span></div>}

                   {props.selectedRate && (props.reasonDissatisfaction.length > 0 || props.reasonSatisfaction.length > 0 )&&
                    <Field
                        name="reasons"
                        component={ChistaRadio}
                        options={props.selectedRate<=3?props.reasonDissatisfaction||[]:props.reasonSatisfaction||[]}

                    />} 

                    <Field
                        name="comment"
                        component={WriteCommentTextArea}
                    />
                    <div className={classes.actionContainer}>
                        <div className={classes.actionContainerRight}>
                            <Field
                                name="unknown"
                                label={"نظر بصورت ناشناس"}
                                component={Switch}

                            />
                        </div>
                        <div className={classes.actionContainerLeft}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={props.load || (props.pristine || props.submitting)}
                                className={classes.actionBtn}
                            >
                                {props.load ? (
                                    <CircularProgress
                                        color="primary"
                                        style={{ width: 20, height: 20 }}
                                    />
                                ) : (
                                    "ثبت دیدگاه"
                                )}
                            </Button>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={props.handleClose}
                                className={classes.actionBtn}
                            >
                                    بعدا رای میدهم
                            </Button>
                        </div>
                    </div>
                </DialogContent>
            </form>
        </Dialog>
    )
}

const selector = formValueSelector('writeCommentForm')

const mapStateToProps = (state) => {
    const selectedRate=selector(state,'rate')
    return ({
    selectedRate,
    load:state.comments.load,
    adviser:state.advisers.adviser,
    reasonDissatisfaction:state.comments.reasonDissatisfaction,
    reasonSatisfaction:state.comments.reasonSatisfaction
})}

export default connect(
    mapStateToProps,
    {getReasons,postComment}
)(reduxForm({ form: "writeCommentForm" })(Complete))
