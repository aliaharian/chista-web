import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery, Divider } from "@material-ui/core";
import classes from "../../assets/stylesheet/testBank.module.scss";
import ModalLayoutWithHeader from '../Kit/Layouts/ModalLayoutWithHeader'
import Close from '../../assets/images/profile/registerOstad/closeModal.svg';
import ChistaSearchInput from '../Kit/Inputs/ChistaSearchInput';
import bookmarkAlt from "../../assets/images/bookmarkAlt.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import noData from "../../assets/images/no_result_search.svg";
import SearchIcon from '../../assets/images/searchIcon.svg';

export function CourseItem(props) {
    const [showModal, setShowModal] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [courseSelected, setCourseSelected] = useState([]);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));

    useEffect(() => {
        setCourseSelected(props.coursesList);
    }, [showModal])

    const clickHandler = () => {
        setShowModal(prevState => !prevState);
    }
    const filterSearchHandler = (e) => {
        const { value } = e.target;
        setSearchText(value);
    
        if(value === '') {
            setCourseSelected(props.coursesList);
        }
        if(value.length > 1) {
            let selectedCourse = [];
            (props.coursesList || []).map((item, index) => {
                if(item.name.includes(value)) {
                    selectedCourse.push(item)
                }
                setCourseSelected(selectedCourse);
            })
        }
    }
    const courseSelectedHandler = (course) => {
        props.testFilterList({ name: props.testFilters.name, courseId: course.id, answerType: props.testFilters.answerType, qdrIds: props.testFilters.qdrIds });
        props.setCourseFilterCommand(course.name);
        setSearchText('');
        clickHandler();
    }
    const lastIconHandler = () => {
        setSearchText('');
        setCourseSelected(props.coursesList);
    }
    const allCourseClickHandler = () => {
        props.setCourseFilterCommand('همه');
        clickHandler();
        props.testFilterList({ name: props.testFilters.name, courseId: null, answerType: props.testFilters.answerType, qdrIds: props.testFilters.qdrIds });
    }

    return (
      <>
        <div>
            {props.coursesList.length > 0 ? <div onClick={clickHandler} className={classes.filterTest}>
                    <div className={classes.courseBox}>
                        <div>
                            {!isMobile && <img src={bookmarkAlt} className={classes.courseImg} />}
                            <span>ماده درسی</span>
                        </div>
                        <div>
                            <img src={arrowLeft} className={classes.arrowLeftCourseImg} />
                        </div>
                    </div>
                    <div className={classes.courseItem}>
                        <small>{props.courseTextFilter}</small>
                    </div>
                </div> : null
            }
        </div>
         <ModalLayoutWithHeader
            customClass={classes.modalLayoutCustomPadding}
            openDialog={showModal}
         >
            <div className={classes.headerCourseContainer}>
                <img src={Close} alt={'close'} onClick={clickHandler}/>
                <span>ماده درسی</span>
            </div>

            <ChistaSearchInput
              customClassContainer={classes.searchBar}
              searchIcon={SearchIcon}
              showSearchIcon={searchText === ''}
              lastIcon={Close}
              showLastIcon={searchText != ''}
              inputValue={searchText}
              placeholder={'جستجوی ماده درسی'}
              onChange={filterSearchHandler}
              onClickLastIcon={lastIconHandler}
            />
            {courseSelected.length > 0 && <div className={classes.allCourse} onClick={allCourseClickHandler}>
                <span>همه ماده درسی ها</span>
            </div>}
            <ul className={classes.ulBox}>
                {courseSelected.length > 0 ? courseSelected.map((item, index) => (
                    <li className={classes.courseItems} onClick={() => courseSelectedHandler(item)} key={index}>
                        <span>
                            {item.name}
                        </span>
                    </li>
                )):
                <div className={classes.noItems}>
                    <img src={noData} alt="no data" />
                    <p style={{ fontSize: 18, textAlign:'center' }}>هیچ موردی یافت نشد!</p>
                </div>
                }
            </ul>
        </ModalLayoutWithHeader>
        {props.coursesList.length > 0 && <Divider orientation="horizontal" />}
    </>
  )
};

export default React.memo(CourseItem);
