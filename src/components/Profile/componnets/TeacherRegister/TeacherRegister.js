import React, { useEffect, useState } from 'react';
import ModalLayoutWithHeader from '../../../Kit/Layouts/ModalLayoutWithHeader';
import Style from '../../../../assets/stylesheet/profile/teacherRegister.module.scss';
import KitStyle from '../../../Kit/Style/kits.module.scss';
import CloseModal from '../../../../assets/images/profile/registerOstad/closeModal.svg';
import ChistaButton from '../../../Kit/Buttons/ChistaButton';
import BasicDetails from './BasicDetails/BasicDetails';
import SpecializedDetails from './SpecializedDetails/SpecializedDetails';
import clsx from 'clsx';
import FurtherInformation from './FurtherInformation/FurtherInformation';
import VideosAndImgsDetails from './VideosAndImages/VideosAndImgsDetails';
import AcceptRegistration from './AcceptRegistration/AcceptRegisteration';
import { connect, useDispatch } from 'react-redux';
import { addTeacher } from '../../../../../redux/advisers/Actions';
import { isValidNationalCode } from '../../../../utilities';
import { categoryUpdateField, getAllCategory, getCategoryNoFilter } from '../../../../../redux/category';

function TeacherRegister(props) {

    const [registerState, setRegisterState] = useState('basicDetails')
    const [title, setTitle] = useState('اطلاعات پایه')
    const [profile, setProfile] = useState(props.user.imageProfile != undefined ? process.env.REACT_APP_IMAGE_URL + props.user.imageProfile : null);
    const [name, setName] = useState(props.user.firstName != undefined ? props.user.firstName : '');
    const [nameError, setNameError] = useState(false)
    const [familyName, setFamilyName] = useState(props.user.lastName != undefined ? props.user.lastName : '');
    const [familyNameError, setFamilyNameError] = useState(false)
    const [sheba, setSheba] = useState('');
    const [shebaError, setShebaError] = useState(false)
    const [countryCode, setCountryCode] = useState('');
    const [countryCodeError, setCountryCodeError] = useState(false);
    const [dispatchError, setDispatchError] = useState(false);
    const [teacherInfo, setTeacherInfo] = useState('');
    const [teacherInfoError, setTeacherInfoError] = useState(false);
    const [aboutMe, setAboutMe] = useState('');
    const [aboutMeError, setAboutMeError] = useState(false);
    const [privateTeaching, setPrivateTeaching] = useState(false);
    const [city, setCity] = useState([]);
    const [video, setVideo] = useState(null);
    const [imgsUploaded, setImgUploaded] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [selectedCoursesError,  setSelectedCoursesError] = useState(false)
    const [chistaLaws, setChistaLaws] = useState(false);
    const Dispatch = useDispatch();

    useEffect(() => {
        props.getCategoryNoFilter(10, 1)
    }, {})

    const handleState = () => {
        switch (registerState) {
            case 'basicDetails':
                return <BasicDetails
                        profile={profile}
                        setProfile={(value) => setProfile(value)}
                        name={name}
                        nameError={nameError}
                        setName={(value) => setName(value)}
                        familyName={familyName}
                        familyNameError={familyNameError}
                        setFamilyName={(value) => setFamilyName(value)}
                        sheba={sheba}
                        shebaError={shebaError}
                        setSheba={(value) => setSheba(value)}
                        countryCode={countryCode}
                        countryCodeError={countryCodeError}
                        setCountryCode={(value) => setCountryCode(value)}
                        inError={dispatchError}
                        />
            case 'specializedDetails':
                return <SpecializedDetails
                        selectedCourses={selectedCourses}
                        setSelectedCourses={(value) => setSelectedCourses(value)}
                        selectedCoursesError={selectedCoursesError}
                        courses={props.courses}
                />
            case 'furtherInformation':
                return <FurtherInformation
                        city={city}
                        setCity={(value) => setCity(value)}
                        teacherInfo={teacherInfo}
                        teacherInfoError={teacherInfoError}
                        setTeacherInfo={(value) => setTeacherInfo(value)}
                        aboutMe={aboutMe}
                        aboutMeError={aboutMeError}
                        setAboutMe={(value) => setAboutMe(value)}
                        privateTeaching={privateTeaching}
                        setPrivateTeaching={() => setPrivateTeaching(!privateTeaching)}
                        inError={dispatchError}
                        />
            case 'imagesAndVideos':
                return <VideosAndImgsDetails
                        imgsUploaded={imgsUploaded}
                        setImgUploaded={(value) => setImgUploaded(value)}
                        video={video}
                        setVideo={(value) => setVideo(value)}
                        />
            case 'acceptRegistration':
                return <AcceptRegistration
                        chistaLaws={chistaLaws}
                        setChistaLaws={() => setChistaLaws(!chistaLaws)}
                        />
            default: 
                break;
        }
    }

    const handleNextStep = () => {
        switch (registerState) {
            case 'basicDetails':
                if(name !== '' && name.length >= 2 && name.length <= 20 && familyName !== '' && familyName.length >= 2 && familyName.length <= 40 && sheba !== '' && countryCode !== '' && sheba.length == 24 && isValidNationalCode(countryCode) !== "کد ملی درست نیست") {
                    setTitle('اطلاعات تخصصی')
                    setRegisterState('specializedDetails')
                    setDispatchError(false)
                    setShebaError(false)
                    setCountryCodeError(false)
                    break;
                }
                else if(name == '' || familyName == '') {
                    setDispatchError(true)
                    break;
                }
                else if(name.length < 2 || name.length > 20) {
                    setDispatchError(false)
                    setNameError(true)
                    break;
                }
                else if(familyName.length < 2 || familyName.length > 40) {
                    setNameError(false)
                    setFamilyNameError(true)
                    break;
                }
                else if(countryCode == '') {
                    setFamilyNameError(false)
                    setDispatchError(true)
                    break;
                }
                else if(isValidNationalCode(countryCode) == "کد ملی درست نیست") {
                    setDispatchError(false)
                    setCountryCodeError(true)
                    break;
                }
                else if(sheba.length != 24) {
                    setCountryCodeError(false)
                    setShebaError(true)
                    break;
                }
                else {
                    setCountryCodeError(false)
                    setShebaError(false)
                    setDispatchError(true)
                    break;
                }
            case 'specializedDetails':
                if(selectedCourses.length == 0 || selectedCourses.length > 5) {
                    setSelectedCoursesError(true);
                    break;
                }
                else {
                    setSelectedCoursesError(false);
                    setTitle('اطلاعات تکمیلی');
                    setRegisterState('furtherInformation');
                    break;
                }
                
            case 'furtherInformation':
                if(aboutMe !== '' && teacherInfo !== '' && city.length == 2 && teacherInfo.length >= 5 && teacherInfo.length <= 30 && aboutMe.length >= 10 && aboutMe.length <= 500) {
                    setDispatchError(false)
                    setAboutMeError(false)
                    setTeacherInfoError(false)
                    setTitle('ویدیو و تصاویر')
                    setRegisterState('imagesAndVideos')
                    break;
                }
                else if(city.length == 0) {
                    setDispatchError(true);
                    break;
                }
                else if(teacherInfo.length < 5 || teacherInfo.length > 30) {
                    setDispatchError(false);
                    setTeacherInfoError(true);
                    break;
                }
                else if(aboutMe.length < 10 || aboutMe.length > 500) {
                    setTeacherInfoError(false)
                    setAboutMeError(true);
                    break;
                }
                else {
                    setDispatchError(true)
                    break;
                }
            case 'imagesAndVideos':
                setTitle('تایید ثبت نام')
                setRegisterState('acceptRegistration')
                break;
            case 'acceptRegistration':
                Dispatch(
                    addTeacher(
                        name, 
                        familyName, 
                        sheba, 
                        countryCode, 
                        teacherInfo, 
                        aboutMe, 
                        privateTeaching, 
                        city, 
                        video, 
                        imgsUploaded, 
                        selectedCourses,
                        props.user?.username,
                        closeAll
                    )
                )
                break;
            default: 
                break;
        }
    }

    const handleLastStep = () => {
        switch (registerState) {
            case 'specializedDetails':
                setRegisterState('basicDetails')
                setTitle('اطلاعات پایه')
                break;
            case 'furtherInformation':
                setRegisterState('specializedDetails')
                setTitle('اطلاعات تخصصی')
                break;
            case 'imagesAndVideos':
                setRegisterState('furtherInformation')
                setTitle('اطلاعات تکمیلی')
                break;
            case 'acceptRegistration':
                setRegisterState('imagesAndVideos')
                setTitle('ویدیو و تصاویر')
                break;    
            default: 
                break;
        }
    }

    const closeAll = () => {
        setRegisterState('basicDetails');
        setTitle('اطلاعات پایه');
        setProfile(props.user.imageProfile != undefined ? process.env.REACT_APP_IMAGE_URL + props.user.imageProfile : null);
        setName(props.user.firstName != undefined ? props.user.firstName : '');
        setNameError(false);
        setFamilyName(props.user.lastName != undefined ? props.user.lastName : '');
        setFamilyNameError(false);
        setSheba('');
        setShebaError(false);
        setCountryCode('');
        setCountryCodeError(false);
        setDispatchError(false);
        setTeacherInfo('');
        setAboutMe('');
        setAboutMeError(false);
        setTeacherInfoError(false);
        setPrivateTeaching(false);
        setCity([]);
        setVideo(null);
        setImgUploaded([]);
        setSelectedCourses([]);
        setChistaLaws(false);
        props.handleClose()
    }

    return (
        <ModalLayoutWithHeader
        openDialog={props.open}
        onClose={closeAll}
        >
            <div
            className={Style.teacherRegisterHeader}
            >
                <div>
                    <img src={CloseModal} alt={'close'} onClick={closeAll}/>
                    <span>{title}</span>
                </div>
                <div className={Style.handleStateModalContainerBtn}>
                    {registerState != 'basicDetails' ? 
                        <div>
                            <ChistaButton
                            withBgColor={false}
                            customClassName={Style.deleteBorder}
                            onClick={handleLastStep}
                            >
                            قبلی
                            </ChistaButton>
                        </div>
                    : null }
                    <div>
                        <ChistaButton
                        withBgColor={false}
                        customClassName={KitStyle.btn_height30}
                        onClick={handleNextStep}
                        disabled={registerState == 'acceptRegistration' && !chistaLaws}
                        >
                            {registerState == 'imagesAndVideos' || registerState == 'acceptRegistration'  ? 'تایید' : 'بعدی'}
                        </ChistaButton>
                    </div>
                </div>
            </div>
            {handleState()}
        </ModalLayoutWithHeader>
    )
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    courses: state.category.courses,
});


export default connect(mapStateToProps, {addTeacher, getAllCategory, getCategoryNoFilter, categoryUpdateField})(TeacherRegister);