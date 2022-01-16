import React, { useState } from 'react';
import Style from '../../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import Camera from '../../../../../assets/images/profile/registerOstad/camera.svg';
import Edit from '../../../../../assets/images/profile/registerOstad/edit.svg';
import Delete from '../../../../../assets/images/profile/registerOstad/delete.svg';
import ChistaTextField from '../../../../Kit/Inputs/ChistaTextField';
import User from '../../../../../assets/images/profile/registerOstad/User.svg';
import Bank from '../../../../../assets/images/profile/registerOstad/Bank.svg';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { connect } from 'react-redux';
import { checkEnglishNumbersRegex, checkPersianNumbersRegex, convertNumberToLetter, toEnglishDigits } from '../../../../Kit/Utils';
import { isValidNationalCode } from '../../../../../utilities';

function BasicDetails({
    profile, 
    name, 
    nameError,
    familyName,
    familyNameError, 
    sheba, 
    countryCode, 
    setProfile, 
    setName,
    setFamilyName,
    setSheba,
    setCountryCode,
    inError,
    ...props
}) {

    const theme = useTheme();
    const [deleteProfile, setDeleteProfile] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down(480));

    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0] && (e.target.files[0].size/(1024*1024)) <= 1) {
            setProfile(URL.createObjectURL(e.target.files[0]))
        }
    }

    const handleShebaNumberInput = (e) => {
        if(checkEnglishNumbersRegex(e.target.value) || e.target.value === '' || checkPersianNumbersRegex(e.target.value)) {
            setSheba(e.target.value)
        }
    }

    const handleCountryCodeNumberInput = (e) => {
        if(checkEnglishNumbersRegex(e.target.value) || e.target.value === '' || checkPersianNumbersRegex(e.target.value)) {
            setCountryCode(e.target.value)
        }
    }
    
    return (
        <div className={Style.basicDetailsContainer}>
            {profile != null ?
            <div className={Style.profileContainerForEdit} onMouseEnter={() => setDeleteProfile(true)} onMouseLeave={() => setDeleteProfile(false)}>
                <img src={profile} alt={'profile'}/>
                <input onChange={onImageChange} 
                type="file" 
                name="editFile" 
                id="editFile"
                accept="image/*"
                />
                <label for={!isMobile ? "editFile" : null}>
                    <div onClick={() => setOpenEdit(!openEdit)}>
                        <img src={Edit} alt={'edit'}/>
                    </div>
                </label>
                {openEdit ? 
                    <div className={Style.openEdit}>
                        <p onClick={() => {setProfile(null); setOpenEdit(false)}}>
                            حذف
                        </p>
                        {isMobile ? 
                        <label for={"editFile"}>
                            <p>
                                ویرایش
                            </p> 
                        </label>
                        : null}
                    </div>
                : null}
                
                {deleteProfile && !isMobile ? 
                    <div className={Style.deleteProfileView} onClick={() => setProfile(null)}>
                        <img src={Delete} alt={'delete'}/>
                    </div>
                : null}
            </div>
            : 
            <>
                <input onChange={onImageChange} type="file" name="file" id="file" accept="image/*"/>
                <label for="file">
                    <div>
                        <img src={Camera} alt={'camera'}/>
                    </div>
                </label>
            </>
            }
            <span>
                {convertNumberToLetter(props.user?.username)}
            </span>
            <div className={Style.gridFormContainer}>
                <ChistaTextField
                title={'نام'}
                placeholder={'مثال: اصغر'}
                isRequired={true}
                icon={User}
                errorIcon={User}
                inputValue={name}
                onChange={(e) => setName(e.target.value)}
                errorText={nameError ? 'مقدار این فیلد نا معتبر است': 'این فیلد اجباری است'}
                inError={(inError && name == '') || (nameError && (name.length < 2 || name.length > 20))}
                />
                <ChistaTextField
                title={'نام خانوادگی'}
                placeholder={'مثال: اصغری'}
                isRequired={true}
                icon={User}
                errorIcon={User}
                inputValue={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                errorText={familyNameError ? 'مقدار این فیلد نا معتبر است': 'این فیلد اجباری است'}
                inError={(inError && familyName == '') || (familyNameError && (familyName.length < 2 || familyName.length > 40))}
                />
                <ChistaTextField
                title={'کد ملی'}
                isRequired={true}
                icon={User}
                errorIcon={User}
                placeholder={'مثال:‌ ۰۰۲۲۳۱۳۳۵۶'}
                inputValue={convertNumberToLetter(toEnglishDigits(countryCode))}
                onChange={(e) => handleCountryCodeNumberInput(e)}
                errorText={props.countryCodeError ? isValidNationalCode(countryCode) : 'این فیلد اجباری است'}
                inError={(inError && countryCode == '') || (props.countryCodeError && isValidNationalCode(countryCode) == "کد ملی درست نیست")}
                />
                <ChistaTextField
                title={'شماره شبا'}
                isRequired={true}
                icon={Bank}
                errorIcon={Bank}
                placeholder={'۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰۰'}
                inputValue={convertNumberToLetter(toEnglishDigits(sheba))}
                onChange={(e) => handleShebaNumberInput(e)}
                inputClassName={Style.shebaInput}
                lastLabel={'IR - '}
                errorText={props.shebaError ? 'شماره شبا باید ۲۴ کاراکتر باشد' :'این فیلد اجباری است'}
                inError={(inError && sheba == '') || (props.shebaError && sheba.length != 24)}
                />
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user,
});


export default connect(mapStateToProps, {})(BasicDetails);