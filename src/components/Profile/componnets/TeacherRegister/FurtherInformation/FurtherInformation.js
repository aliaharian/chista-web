import React, { useState } from 'react';
import Style from '../../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import KitStyle from '../../../../Kit/Style/kits.module.scss';
import Pin from '../../../../../assets/images/profile/registerOstad/Pin.svg';
import ChistaButtonWithLabel from '../../../../Kit/Buttons/ChistaButtonWithLabel';
import ArrowLeft from '../../../../../assets/images/profile/registerOstad/ChevronLeft.svg';
import ChistaTextarea from '../../../../Kit/Inputs/ChistaTextarea';
import ChistaSwitch from '../../../../Kit/Switch/Switch';
import Attach from '../../../../../assets/images/profile/registerOstad/attach.svg';
import ModalLayoutWithHeader from '../../../../Kit/Layouts/ModalLayoutWithHeader';
import SelectCityDialog from './SelectCityDialog';
import clsx from 'clsx';

function FurtherInformation({
    city,
    setCity,
    teacherInfo,
    teacherInfoError,
    setTeacherInfo,
    aboutMe,
    aboutMeError,
    setAboutMe,
    privateTeaching,
    setPrivateTeaching,
    inError
}) {

    const [selectCity, setSelectCity] = useState(false)
    return (
        <div
        className={Style.furtherInfoContainer}
        >
            <ModalLayoutWithHeader
            openDialog={selectCity}
            closeModal={() => setSelectCity(false)}
            hideBackdrop={true}
            >
                <SelectCityDialog
                closeModal={() => setSelectCity(false)}
                onSelectCity={(value) => setCity(value)}
                city={city}
                />
            </ModalLayoutWithHeader>
            <div>
                <ChistaButtonWithLabel
                customClassName={clsx(KitStyle.btn_height56, Style.borderGray)}
                isRequired={true}
                title={'شهر'}
                onClick={() => setSelectCity(true)}
                errorText={'وارد کردن این فیلد الزامی است.'}
                inError={inError && city.length < 2}
                >
                    <div className={Style.selectCityBtnContainer}>
                        <div>
                            <img src={Pin} alt={'location'}/>
                            <span className={city.length == 2 ? Style.isActiveCity : null}>
                                {city.length == 2 ? `${city[0].name} - ${city[1].name}` : 'انتخاب کنید'}
                            </span>
                        </div>
                        <img src={ArrowLeft} alt={'arrowLeft'}/>
                    </div>
                </ChistaButtonWithLabel>
            </div>
            <ChistaTextarea
            rows={5}
            placeholder={'خود را معرفی کنید'}
            errorText={teacherInfoError ? 'این فیلد باید بین ۵ تا ۳۰ کاراکتر باشد' : 'وارد کردن این فیلد الزامی است.'}
            inputValue={teacherInfo}
            onChange={(e) => setTeacherInfo(e.target.value)}
            title={'جمله معرفی'}
            inError={false}
            isRequired={true}
            inError={(inError && teacherInfo == '') || (teacherInfoError && (teacherInfo.length < 5 || teacherInfo.length > 30))}
            hintText={'حداکثر ۳۰ کاراکتر'}
            />
            <ChistaTextarea
            rows={5}
            placeholder={'درباره خود بنویسید'}
            errorText={aboutMeError ? 'این فیلد باید بین ۱۰ تا ۵۰۰ کاراکتر باشد' : 'وارد کردن این فیلد الزامی است.'}
            inputValue={aboutMe}
            onChange={(e) => setAboutMe(e.target.value)}
            title={'درباره من'}
            inError={false}
            isRequired={true}
            inError={(inError && aboutMe == '') || (aboutMeError && (aboutMe.length < 10 || aboutMe.length > 500))}
            hintText={'حداکثر ۵۰۰ کاراکتر'}
            />
            <div className={Style.privateTeachingContainer}>
                <div>
                    <img src={Attach} alt={'attach'}/>
                    <span>
                        امکان تدریس خصوصی
                    </span>
                </div>
                <ChistaSwitch
                disabled={false}
                checked={privateTeaching}
                onChange={() => setPrivateTeaching(!privateTeaching)}
                />
            </div>
        </div>
    )
}

export default FurtherInformation;