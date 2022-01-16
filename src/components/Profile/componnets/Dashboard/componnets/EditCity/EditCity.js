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
import userCityIcon from '../../../../../../assets/images/pin-city-icon.png'
import userCityIconActive from '../../../../../../assets/images/pin-city-icon.png'
import numberFormat from "../../../../../../utilities/numberFormat";
import {Field, reduxForm} from "redux-form";

import {connect} from "react-redux";
import EditProvinceDialog from "../EditProvince/EditProvinceDialog";
import Icon from "../../../../../Icon/Icon";




function EditCity(props) {
  const classes = useStyles();
    const [active,setActive]=useState(false)
    const [showEdit,setShowEdit]=useState(false);

    function editToggle() {
        setShowEdit(!showEdit);
    }
  return (

            <>
            <EditProvinceDialog show={showEdit} handleClose={editToggle}/>
            <Grid container spacing={1} alignItems="flex-start" justify='space-between' style={{margin:'8px 0',width:"100%"}} >
                <Grid item container md={9} xs={11} className={classes.profileFieldWrapper}>
                    <Grid item>
                        <img   src={active?userCityIconActive:userCityIcon}  style={{width:24}}/>
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

EditCity.propTypes = {

};
const mapStateToProps = (state) => {



    return{
        user:state.user.user
    }
}

export default connect(
    mapStateToProps,
    {  }
)(EditCity);

