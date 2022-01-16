import React, { useEffect, useRef, useState } from 'react';
import useStyles from './styles';
import {
    Typography,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide
} from "@material-ui/core";

import { Field, reduxForm } from "redux-form";
import { updateInfo } from "../../../../../../../redux/user";
import { required } from "../../../../../../utilities";
import { Select, Text, ChistaTagsSelect } from "../../../../../form"
import { connect } from "react-redux";
import { getTagsList } from "../../../../../../../redux/filters";
import groupIcon from '../../../../../../assets/images/group-icon.png';
import categoryIcon from '../../../../../../assets/images/category-icon.png';


function Transition(props) {
    return <Slide direction="up" {...props} />
}
function EditTagsDialog(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState([]);

    useEffect(() => {

        if (props.value) {
            let tags = [];
            for (let i = 0 ; i < props.value.sortedChildren.length ; i++){
                tags.push(props.value.sortedChildren[i].id);

            }
            setValue(tags)
            props.getTagsList(props.value.id, props.value);
        }

    }, [props.show])

    function submited(data) {
        props.updateInfo(data, function () {
            handleClose()
        })

    }

    function handleClose() {
        props.reset();
        props.handleClose();

    }

    let submitter = props.handleSubmit((values) => submited(values));
    return (<>
        <Dialog
            fullWidth
            maxWidth="xs"
            open={props.show}
            // TransitionComponent={Transition}
            transition={Slide}
            keepMounted
            onClose={handleClose}
            PaperProps={{ className: classes.dialogRoot }}
        >
            <div className={classes.modalHead}>
                <Typography className={classes.modalTitle}>ویرایش برچسب </Typography>
            </div>
            <form onSubmit={submitter} className={classes.modalContent}>

                <DialogContent className={classes.dialogContent}>
                    <div className={classes.inputWrapper}>
                        <Field
                            name="tags"
                            label="برچسب ها"
                            component={ChistaTagsSelect}
                            options={props.tagsList || []}
                            seledtedTags={value}


                        />
                    </div>

                    <div className={classes.actionContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.actionBtn}
                            disabled={props.load || (props.pristine || props.submitting)}

                        >
                            {props.load ? (
                                <CircularProgress
                                    color="primary"
                                    style={{ width: 20, height: 20 }}
                                />
                            ) : (
                                    "ذخیره"
                                )}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.actionBtn}
                            onClick={handleClose}

                        >
                            انصراف
                    </Button>
                    </div>

                </DialogContent>

            </form>
        </Dialog>

    </>);

}

const mapStateToProps = (state) => {


    const user = state.user.adviser;
    let subCategories = [];
    if (user && user.clusteredTags) {
        user.clusteredTags.map((item) => (subCategories.push({ id: item.id, cert: item.cert, name: item.name })));
    }

    return {
        load: state.user.load,
        user: user,
        tagsList: state.filters.tagsList
    }
}

export default connect(
    mapStateToProps,
    { updateInfo, getTagsList }
)(reduxForm({ form: "updateTags", enableReinitialize: true })(EditTagsDialog));

