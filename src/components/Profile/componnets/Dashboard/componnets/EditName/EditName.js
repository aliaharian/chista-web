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
import userProfileIcon from '../../../../../../assets/images/user-profile-icon.png'
import userProfileIconActive from '../../../../../../assets/images/menu-user-icon-svg.svg'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import EditNameDialog from "./EditNameDialog";
import Icon from "../../../../../Icon/Icon";




function EditName(props) {
  const classes = useStyles();
    const [active,setActive]=useState(false)
    const [showEdit,setShowEdit]=useState(false);

    function editToggle(response) {
        setShowEdit(!showEdit);
    }
    function closeEdit() {
        setShowEdit(false);
    }
  return (

            <>
            <EditNameDialog show={showEdit} handleClose={closeEdit}/>
            <Grid container spacing={1} alignItems="flex-start" justify='space-between' style={{margin:'8px 0',width:"100%"}} >
                <Grid item container md={9} xs={11} className={classes.profileFieldWrapper}>
                    <Grid item>
                        <img   src={active?userProfileIconActive:userProfileIcon}  style={{width:24}}/>
                    </Grid>
                    <Grid item>
                        <div className={classes.profileField}>
                            <Typography className={classes.profileFieldLabel}>{props.label}</Typography>
                            <Typography className={classes.profileFieldValue}>{props.value}</Typography>
                        </div>
                    </Grid>
                </Grid>
                <Grid item md={3} xs={1}>
                <IconButton aria-label="edit" onMouseEnter={()=>{setActive(true)}} onMouseLeave={()=>{setActive(false)}} style={{borderRadius:"25%",width:"37px",height:"37px"}} onClick={editToggle}>
                  <Icon src={BorderColorIcon} style={{width: 20, height: 20}} />
                </IconButton>
                </Grid>
            </Grid>
            </>
  );
}

EditName.propTypes = {

};
const mapStateToProps = (state) => {



    return{
        user:state.user.user
    }
}

export default connect(
    mapStateToProps,
    {  }
)(EditName);

