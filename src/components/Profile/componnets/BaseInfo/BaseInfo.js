import React from "react";
import useStyles from "./styles";
import {Typography, Grid} from "@material-ui/core";
import {connect} from "react-redux";
import {userLogout} from "../../../../../redux/auth";
import EditName from "./componnets/EditName/EditName";
import EditSex from "./componnets/EditSex/EditSex";
import EditNationalCode from "./componnets/EditNationalCode/EditNationalCode";
import {numberFormat} from "../../../../utilities";
import EditBirthDay from "./componnets/Edit‌BirthDay/EditBirthDay";
import jMoment from "moment-jalaali";
import EditShebaNumber from "./componnets/EditShebaNumber/EditShebaNumber";
import EditProvince from "./componnets/EditProvince/EditProvince";
import EditCity from "./componnets/EditCity/EditCity";
import EditIntro from "./componnets/EditIntro/EditIntro";
import EditNote from "./componnets/EditNote/EditNote";
import EditGroup from "./componnets/EditGroup/EditGroup";
import EditUpload from "./componnets/EditUpload/EditUpload";
import EditLastName from "./componnets/EditLastName/EditLastName";

function BaseInfo(props) {
    const classes = useStyles();
    return (
        <>
            {props.adviser ? (
                <Grid className={classes.root}>
                    <Typography className={classes.formTitle}>مشخصات فردی</Typography>
                    <Grid container>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                            <EditName
                                label="نام "
                                value={props.adviser && props.adviser.firstName}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditLastName
                            label="نام خانوادگی "
                            value={props.adviser && props.adviser.lastName}
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditSex
                            label="جنسیت"
                            value={props.adviser && props.adviser.male ? "مرد" : "زن"}
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditNationalCode
                            label="کد ملی"
                            value={
                                props.adviser &&
                                numberFormat.nationalCodeMask(props.adviser.nationalCode)
                            }
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditBirthDay
                            label="تاریخ تولد"
                            value={
                                props.adviser &&
                                numberFormat.toPersianDigits(
                                    jMoment
                                        .unix(props.adviser.birthTime)
                                        .format("jDD jMMMM jYYYY")
                                )
                            }
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditShebaNumber
                            label="شماره شبا"
                            value={
                                props.adviser &&
                                props.adviser.sheba &&
                                "IR" + numberFormat.shebaMask(props.adviser.sheba)
                            }
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditProvince
                            label="استان"
                            value={props.adviser && props.adviser.provinceName}
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                        <EditCity
                            label="شهر"
                            value={props.adviser && props.adviser.cityName}
                        />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                            <EditIntro
                                label="جمله معرفی"
                                value={props.adviser && props.adviser.intro}
                            />
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.editInfoGrid}>
                            <EditNote
                                label={"درباره من"}
                                value={props.adviser && props.adviser.note}
                            />
                        </Grid>
                    </Grid>
                    {props.adviser && (
                        <>
                            <Grid item md={12} xs={12} container style={{position: 'relative'}}>
                                <EditGroup/>
                            </Grid>
                            <Grid item md={12} xs={12} container className={classes.uploadWrapperContainer}>
                                <EditUpload adviser={props.adviser}/>
                            </Grid>
                        </>
                    )}
                </Grid>
            ) : null}
        </>
    );
}

BaseInfo.propTypes = {};

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        adviser: state.user.adviser,
        authLoad: state.auth.load,
        userLoad: state.user.load,
    }
};

export default connect(mapStateToProps, {userLogout})(BaseInfo);
