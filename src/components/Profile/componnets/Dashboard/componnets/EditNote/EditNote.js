import React, {useEffect, useRef, useState} from 'react';
import useStyles from './styles';
import {
    Typography,
    Grid,
    TextField,
    IconButton,
    Button,
    DialogContent,
    CircularProgress,
    Dialog, Slide
} from "@material-ui/core";
import BorderColorIcon from '../../../../../../assets/images/pen-edit.svg';
import profileIntroIcon from '../../../../../../assets/images/intro-icon.png'
import profileIntroIconActive from '../../../../../../assets/images/intro-icon.png'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import EditNoteDialog from "./EditNoteDialog";
import Icon from "../../../../../Icon/Icon";




function EditNote(props) {
  const classes = useStyles();
    const [active,setActive]=useState(false)
    const [showEdit,setShowEdit]=useState(false);

    function editToggle() {
        setShowEdit(!showEdit);
    }
    function closeEdit() {
        setShowEdit(false);
    }
  return (

            <>
            <EditNoteDialog show={showEdit} handleClose={closeEdit}/>
            <Grid container md={12} spacing={1} justify='space-between' alignItems="flex-start" style={{margin:'8px 0',width:"100%"}} >
                <Grid item container xs={11}  className={classes.profileFieldWrapper}>
                <Grid item>
                    <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                </Grid>
                <Grid item>
                    <div className={classes.profileField}>
                        <Typography className={classes.profileFieldValue}>{props.value}</Typography>
                    </div>
                </Grid>
                </Grid>
                <Grid item xs={1}>
                <IconButton aria-label="edit" onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} style={{borderRadius:"25%",width:"37px",height:"37px"}} onClick={editToggle}>
                <Icon src={BorderColorIcon} style={{width: 20, height: 20}} />
                </IconButton>
                </Grid>
            </Grid>
            </>
  );
}

EditNote.propTypes = {

};
const mapStateToProps = (state) => {



    return{
        user:state.user.user
    }
}

export default connect(
    mapStateToProps,
    {  }
)(EditNote);

