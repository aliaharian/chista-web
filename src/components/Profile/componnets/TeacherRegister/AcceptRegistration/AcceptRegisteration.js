import React from 'react';
import Style from '../../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import TeacherFinalRegister from '../../../../../assets/images/profile/registerOstad/teacherFinalRegister.png';
import RectangleCheckbox from '../../../../Kit/Checkbox/RectangleCheckbox';
import { connect } from 'react-redux';
import Link from "next/link";

function AcceptRegistration(props) {
    return (
        <div className={Style.acceptRegistrationContainer}>
            <img src={TeacherFinalRegister} alt={'final'}/>
            <p className={Style.teacherName}>
                {props.user.fullName}
            </p>
            <p className={Style.acceptRegistrationDesc}>
                با پذیرش قوانین چیستا و زدن دکمه ثبت، پروفایل شما به صورت خودکار در صفحه ی اساتید قرار گرفته و برای عموم قابل مشاهده خواهد بود
            </p>
            <div className={Style.lowsContainer}>
                <RectangleCheckbox onClick={props.setChistaLaws} isChecked={props.chistaLaws}/>
                <p>
                    شرایط <a href={'/terms'} target={'_blank'}>قوانین و مقررات</a> و <a href={'/privacy-policy'} target={'_blank'}>حریم شخصی</a> را قبول دارم
                </p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});


export default connect(mapStateToProps, {})(AcceptRegistration);