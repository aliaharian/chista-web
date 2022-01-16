import React, { useState } from 'react';
import { Slide, Divider } from '@material-ui/core';
import classes from "../../assets/stylesheet/testBank.module.scss";
import ModalLayoutWithHeader from '../Kit/Layouts/ModalLayoutWithHeader';
import ArrowLeft from "../../assets/images/ArrowTop.js";
import SelectCategory from '../Common/SelectCategory';
import CourseItem from './CourseItem';
import PublisherItem from './PublisherItem';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function ExamBankCategory(props) {
    const [openSelectCategoryDialog, setOpenSelectCategoryDialog] = useState(false);

    const openSelectCategoryHandler = () => {
        setOpenSelectCategoryDialog(!openSelectCategoryDialog);
    }

    return (
        <React.Fragment>
            <div className={classes.testBankCategory}>
                <div className={classes.testCategory} onClick={openSelectCategoryHandler}>
                    <div>
                        <span>دسته بندی</span>
                    </div>
                    <div>
                        <ArrowLeft />
                    </div>
                </div>
                <div className={classes.selectTypeCategory}><span>همه</span></div>
            </div>
            {(props.publishers.length > 0 || props.courses.length > 0) && <Divider orientation="horizontal" />}

            <CourseItem 
                courseTextFilter={props.courseTextFilter} 
                setCourseFilterCommand={props.setCourseFilterCommand} 
                coursesList={props.courses} 
                testFilters={props.testFilters} 
                testFilterList={props.testFilterList} 
            />

            <PublisherItem 
                publisherSelected={props.publisherSelected} 
                setPublisherSelectedHandler={props.setPublisherSelectedHandler}  
                publishersList={props.publishers} 
                showTextPublisher={props.showTextPublisher}
                setShowTextPublisherHandler={props.setShowTextPublisherHandler}
                
                testFilters={props.testFilters} 
                testFilterList={props.testFilterList}
            />

            <ModalLayoutWithHeader
                openDialog={openSelectCategoryDialog}
                fullScreen
                TransitionComponent={Transition}
            >
                <SelectCategory onClose={() => setOpenSelectCategoryDialog(false)}  />
            </ModalLayoutWithHeader>
        </React.Fragment>
    )
};

export default React.memo(ExamBankCategory);

