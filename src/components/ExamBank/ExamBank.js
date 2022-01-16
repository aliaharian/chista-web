import React,{ useEffect, useState } from "react";
import _ from 'lodash';
import { useTheme, useMediaQuery, Divider } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { useDispatch, connect } from "react-redux";
import Layout from '../Layout/Layout';
import LayoutWithSidebar from "../Kit/Layouts/LayoutWithSidebar";
import CategoryFilters from '../CategoryFilters/CategoryFilters';
import classes from "../../assets/stylesheet/testBank.module.scss";
import ChistaSwitch from "../Kit/Switch/Switch";
import TestItem from "./TestItem";
import CourseItem from "./CourseItem";
import PublisherItem from "./PublisherItem";
import ChistaSearchInput from '../Kit/Inputs/ChistaSearchInput';
import KitStyle from '../Kit/Style/kits.module.scss';
import Close from '../../assets/images/profile/registerOstad/closeModal.svg';
import { getTestList } from '../../../redux/tests';
import ChistaButton from "../Kit/Buttons/ChistaButton";
import FramesLayout from "../Kit/Layouts/FramesLayout";
import {numberFormat} from "../../utilities";
import { testFilterList } from "../../../redux/tests";
import {
  authUpdateField,
  userLogout,
  userLogin,
  isAuth
} from "../../../redux/auth";
import SettingIcon from "../../assets/images/SettingIcon";
import ModalLayoutWithHeader from "../Kit/Layouts/ModalLayoutWithHeader";
import BackToTopScrollButton from "../Kit/Buttons/BackToTopScrollButton";
import SearchIcon from '../../assets/images/searchIcon.svg';
import BankAzmoon from "../../assets/images/BankAzmoon@3x.png";
import ExamBankCategory from "./ExamBankCategory";
import clsx from "clsx";
import noData from "../../assets/images/no_result_search.svg";
import CircularLoading from "../Kit/Loaders/CircularLoading";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ExamBank = (props) => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const [openSearchMobile, setOpenSearchMobile] = useState(false);
  const [courseFilter, setCourseFilter] = useState('همه');
  const [publisherSelected, setPublisherSelected] = useState([]);
  const [showTextPublisher, setShowTextPublisher] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  useEffect(() => {
    props.testFilterList({ name: null, courseId: props.tests.testFilters.courseId, answerType: props.tests.testFilters.answerType, qdrIds: props.tests.testFilters.qdrIds });
  }, []);

  const clearSearchHandler = () => {
    if(isMobile) {
      setOpenSearchMobile(false);
    }
    setSearchText('');
    props.testFilterList({ name: null, courseId: props.tests.testFilters.courseId, answerType: props.tests.testFilters.answerType, qdrIds: props.tests.testFilters.qdrIds });
  }
  const clearHandler = () => {
    setSearchText('');
    props.testFilterList({ name: null, courseId: props.tests.testFilters.courseId, answerType: props.tests.testFilters.answerType, qdrIds: props.tests.testFilters.qdrIds });
  }
  const filterSearchHandler = (e) => {
    const { value } = e.target;
    setSearchText(value);
    props.testFilterList({ name: value, courseId: props.tests.testFilters.courseId, answerType: props.tests.testFilters.answerType, qdrIds: props.tests.testFilters.qdrIds });
  }
  const hasAnswerSheetHandler = (e) => {
    const { checked } = e.target;
    
    if(checked && searchText.length > 0) {
      props.testFilterList({ name: searchText === '' ? props.tests.testFilters.name : searchText, courseId: props.tests.testFilters.courseId, answerType: true, qdrIds: props.tests.testFilters.qdrIds });
    }
    else if(checked) {
      props.testFilterList({ name: searchText === '' ? props.tests.testFilters.name : searchText, courseId: props.tests.testFilters.courseId, answerType: true, qdrIds: props.tests.testFilters.qdrIds });
    }
    else if(!checked && searchText.length > 0) {
      props.testFilterList({ name: searchText === '' ? props.tests.testFilters.name : searchText, courseId: props.tests.testFilters.courseId, answerType: false, qdrIds: props.tests.testFilters.qdrIds });
    }
    else if(!checked) {
      props.testFilterList({ name: searchText === '' ? props.tests.testFilters.name : searchText, courseId: props.tests.testFilters.courseId, answerType: false, qdrIds: props.tests.testFilters.qdrIds });
    }
  }
  const arroTopClick = () => {
    document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
  }
  const filterHandler = () => {
    setOpenCategoryDialog(!openCategoryDialog);
    props.testFilterList({ name: searchText, courseId: props.tests.testFilters.courseId, answerType: props.tests.testFilters.answerType, qdrIds: props.tests.testFilters.qdrIds });
  }
  const setCourseFilterHandler = (courseText) => {
    setCourseFilter(courseText);
  }
  const setPublisherSelectedHandler = (publisher) => {
    setPublisherSelected(publisher);
  }
  const setShowTextPublisherHandler = (showFilterPublisher) => {
    setShowTextPublisher(showFilterPublisher);
  }
  const onFocusHandler = () => {
    if(isMobile) {
      setOpenSearchMobile(true);
    }
  }

  return (
    <Layout>
      <LayoutWithSidebar>
        <div className={classes.sidebar}>
          <CategoryFilters url={'exambank'} />

          <Divider orientation="horizontal" />

          <CourseItem courseTextFilter={courseFilter} setCourseFilterCommand={setCourseFilterHandler} coursesList={props.categories.courses} testFilters={props.tests.testFilters} testFilterList={props.testFilterList} />

          <Divider orientation="horizontal" />

          <PublisherItem 
            publisherSelected={publisherSelected} 
            setPublisherSelectedHandler={setPublisherSelectedHandler} 
            publishersList={props.categories.publishers}
            showTextPublisher={showTextPublisher}
            setShowTextPublisherHandler={setShowTextPublisherHandler}
            
            testFilters={props.tests.testFilters} 
            testFilterList={props.testFilterList} 
          />

          <Divider orientation="horizontal" />

          <div className={classes.switcher}>
            <ChistaSwitch 
              label='پاسخنامه'
              onChange={hasAnswerSheetHandler}
            />
          </div>

          <Divider orientation="horizontal" />
        </div>
        <div className={classes.content}>
          <div className={clsx({[classes.searchBox]: !openSearchMobile, [classes.searchBoxMobile]: openSearchMobile})}>
            <div className={clsx({[classes.searchInputPadding]: !openSearchMobile, [classes.searchMobileInputPadding]: openSearchMobile})}>
              <ChistaSearchInput
                customClassContainer={KitStyle.searchInput_height40_gray_twoIcon}
                searchIcon={SearchIcon}
                lastIcon={Close}
                showLastIcon={searchText != ''}
                showSearchIcon={searchText === ''}
                inputValue={searchText}
                placeholder={'جستجو در نام یا مشخصات آزمون'}
                onChange={filterSearchHandler}
                onClickLastIcon={!openSearchMobile ? clearHandler : clearSearchHandler}
                onFocus={!openSearchMobile ? onFocusHandler : null}
              />
            </div>
            <div className={classes.counterCase}>
              {numberFormat.toPersianDigits(props.tests?.total)}<span className={classes.cases}>مورد</span>
            </div>
            <div className={classes.filterIcon}>
              <ChistaButton
                withBgColor={false}
                customClassName={classes.filterBtn}
                onClick={filterHandler}
              >
                <SettingIcon />
              </ChistaButton>
            </div>
          </div>
          <div className={classes.testBankBanner}>
            <img src={BankAzmoon} width='100%' />
            <div className={classes.textBanner}>
              <h1>بانک آزمون</h1>
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و یا استفاده از طراحان گرافیک است.</p>
            </div>
          </div>

          <FramesLayout>
            {(props.tests.list.length > 0 && props.tests) ? props.tests.list.map((item, index) => (
              <TestItem 
                item={item}
                authUpdateField={props.authUpdateField}
                openInitiable={props.openInitiable}
                userLogout={props.userLogout}
                userLogin={props.userLogin}
                isAuth={props.isAuth}
                key={index}
              />
            )) : isMobile ? <div className={classes.notestItems}><img src={noData} alt="no data" />
                        <p style={{ fontSize: 13, textAlign:'center', fontFamily:'chistaYekanM' }}>هیچ موردی یافت نشد!</p>
                        </div> : <p>{`هیچ نتیجه ای برای "${searchText}" یافت نشد`}</p>
            }
          </FramesLayout>

          <CircularLoading isLoading={props.tests.load} />

          <div className={classes.moreBox}>
            {(props.tests?.offset + 1) * props.tests?.max < props.tests?.total && 
              <ChistaButton
                withBgColor={true}
                customClassName={classes.moreBtn}
                onClick={() => {
                  dispatch(
                    getTestList(
                      props.tests?.offset + 1
                    )
                  )
                }}
              >
                <span>مشاهده بیشتر</span>
              </ChistaButton>
            }
          </div>
          <BackToTopScrollButton count={props.tests.list.length} customClass={classes.arrowTopImg} onClick={arroTopClick} />
        </div>

        <ModalLayoutWithHeader
          openDialog={openCategoryDialog}
          fullScreen
          TransitionComponent={Transition}
        >
          <div className={classes.headerContainer}>
            <div>
                <img src={Close} alt={'close'} onClick={filterHandler} className={classes.closeIcon}/>
                <span>فیلتر</span>
            </div>
            <div>
                <ChistaButton
                    withBgColor={false}
                    customClassName={classes.confirmBtn}
                    onClick={filterHandler}
                >
                    <span>تایید</span>
                </ChistaButton>
            </div>
          </div>

          <ExamBankCategory
            courseTextFilter={courseFilter} 
            setCourseFilterCommand={setCourseFilterHandler}
            courses={props.categories.courses} 

            showTextPublisher={showTextPublisher}
            setShowTextPublisherHandler={setShowTextPublisherHandler}
            publisherSelected={publisherSelected}
            setPublisherSelectedHandler={setPublisherSelectedHandler}
            publishers={props.categories.publishers}
            
            testFilters={props.tests.testFilters} 
            testFilterList={props.testFilterList}
           />

          <div className={classes.switcherMobile}>
            <ChistaSwitch
              label='پاسخنامه'
              onChange={hasAnswerSheetHandler}
            />
          </div>

        </ModalLayoutWithHeader>
      </LayoutWithSidebar>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  tests: state.tests,
  categories: state.category,
  user: state.user.user,
  authLoad: state.auth.load,
  userLoad: state.user.load,
  openInitiable: state.auth.openInitiable,
});

export default connect(mapStateToProps, {
  testFilterList, 
  authUpdateField,
  userLogout,
  userLogin,
  isAuth,
})(React.memo(ExamBank));
