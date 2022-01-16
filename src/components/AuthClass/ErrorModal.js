import DialogLayout from "../Profile/componnets/Content/Contacts/dialog/DialogLayout";
import warning from "../../assets/images/warning.svg";
import React from "react";
import useStyles from "./styles";

function ErrorModal(props) {
    const classes = useStyles()
    return (
        <DialogLayout
            open={props.open}
            closeModal={() => {
            }}
            noHeader
            className={{root: classes.dialogRoot}}
        >
            <div className={classes.warningImageWrapper}>
                <img src={warning} alt=""/>
            </div>
            <p className={classes.warningText}>
               کلاس مورد نظر وجود ندارد
            </p>
        </DialogLayout>
    )
}

export default ErrorModal