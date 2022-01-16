import React, { memo } from "react"
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import AddQuestionsMultiFile from "./AddQuestionsMultiFile";
import AddQuestionsNonMultiFile from "./AddQuestionsNonMultiFile";

const AddQuestions = ({ handelStep, initialValues,updateData,error, ...props }) => {
    const classes = useStyles();
    return (
        <div
            className={classes.baseInfoMainContainer}
        >
            {
                initialValues.multiFile ?
                    <AddQuestionsMultiFile
                        handelStep={handelStep}
                        initialValues={initialValues}
                        updateData={updateData}
                        error={error}
                        sameMode={props.sameMode}
                    />
                    :
                    <AddQuestionsNonMultiFile
                        handelStep={handelStep}
                        initialValues={initialValues}
                        updateData={updateData}
                        sameMode={props.sameMode}
                    />
            }
        </div>
    );
};

export default memo(withSnackbar(AddQuestions));
