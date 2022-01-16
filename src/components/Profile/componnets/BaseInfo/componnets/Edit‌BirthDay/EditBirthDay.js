import React, {useState} from 'react';
import useStyles from './../styles';
import {
    Typography,
    Grid,
} from "@material-ui/core";
import profileBirthDayIcon from '../../../../../../assets/images/profile/registerOstad/calendarAlt.svg'
import {connect} from "react-redux";
import EditBirthDayDialog from "./EditBirthDayDialog";

function EditBirthDay(props) {
    const classes = useStyles();
    const [active,setActive]=useState(false)
    const [showEdit,setShowEdit]=useState(false);

    function editToggle(response) {
        setShowEdit(!showEdit);
    }
    return (
        <>
            <EditBirthDayDialog show={showEdit} handleClose={editToggle}/>
            <Grid container spacing={1} justify='space-between' alignItems="flex-end" style={{margin:'8px 0',width:"100%"}}
                    className={classes.profileFieldContainer}
            >
                <Grid item container md={9} xs={11} className={classes.profileFieldWrapper}>
                <Grid item>
                    <img   src={active?profileBirthDayIcon:profileBirthDayIcon}  style={{width: 24 , marginTop:16}}/>
                </Grid>
                <Grid item>
                    <div className={classes.profileField}>
                        <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                        <Typography className={classes.profileFieldValue}>{props.value}</Typography>
                    </div>
                </Grid>
                </Grid>
            </Grid>
        </>
  );
}

EditBirthDay.propTypes = {
};
const mapStateToProps = (state) => {
    return{
        adviser:state.user.adviser
    }
}

export default connect(
    mapStateToProps,
    {  }
)(EditBirthDay);

