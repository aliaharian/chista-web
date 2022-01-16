import React, { memo } from "react";
import useStyles from "./Styles";
import { withSnackbar } from "notistack";
import AddMember from "../../../InsertActivity/Steps/AddMember";

const EditExaminees = ({ initialValues, classUsers, ...props }) => {
    const classes = useStyles();
    return (
        <div lassName={classes.baseInfoMainContainer}>
            <AddMember
                handelStep={(type, values) => {
                    console.log("values", values)
                    let ex = []
                    values.examinees.map((value) => {
                        ex.push({
                            "memberId": value.memberId||value.id
                        })
                    })
                    props.handleSubmit({
                        "examinees": [...ex]
                    }, true)
                }}
                initialValues={{
                    addContactList: classUsers.result,
                    examinees: initialValues?.examinees
                }}
            />
        </div>
    );
};

export default memo(withSnackbar(EditExaminees));
