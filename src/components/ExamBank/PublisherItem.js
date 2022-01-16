import React, { useState, useEffect } from 'react';
import { useTheme, useMediaQuery, Divider } from "@material-ui/core";
import classes from "../../assets/stylesheet/testBank.module.scss";
import ChistaButton from '../Kit/Buttons/ChistaButton';
import ModalLayoutWithHeader from '../Kit/Layouts/ModalLayoutWithHeader';
import Close from '../../assets/images/profile/registerOstad/closeModal.svg';
import bookmarkAlt from "../../assets/images/bookmarkAlt.svg";
import arrowLeft from "../../assets/images/arrow-left.svg";
import RectangleCheckbox from '../Kit/Checkbox/RectangleCheckbox';

export function PublisherItem(props) {
    const [showModal, setShowModal] = useState(false);
    //const [publisherSelected, setPublisherSelectedHandler] = useState([]);
    const [publisherList, setPublisherList] = useState([]);
    //const [showText, setShowText] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(800));

    useEffect(() => {
        setPublisherList(props.publishersList);
    }, [showModal])

    const clickHandler = () => {
        setShowModal(prevState => !prevState);
    }
    const publisherSelectedHandler = (publisher) => {
        //props.setShowTextPublisherHandler(false);

        let publisherArr = [];
        let selectedIndex = props.publisherSelected.indexOf(publisher);

        if(selectedIndex > -1) {
            publisherArr = props.publisherSelected.filter(item => item.id !== publisher.id);
            props.setPublisherSelectedHandler(prevState => {
                prevState = publisherArr;
                return prevState;
            });
        }
        else {
            publisherArr.push(publisher);
            props.setPublisherSelectedHandler(prevState => [...prevState, ...publisherArr]);
        }
    }
    const confirmClickHandler = () => {
        //props.setShowTextPublisherHandler(true);
        let params = '', counter = 0;
        if(props.publisherSelected.length > 0) {
            props.publisherSelected.reverse().map((item, index) => {
                params +=`${item.qdrId}`;
                counter++;
                if(counter > 0 && index + 1 !== props.publisherSelected.length) {
                    params += ',';
                }
            })
            props.testFilterList({ name: props.testFilters.name, courseId: props.testFilters.courseId, answerType: props.testFilters.answerType, qdrIds: params === '' ? props.testFilters.qdrIds : params });
        }
        else {
            props.testFilterList({ name: props.testFilters.name, courseId: props.testFilters.courseId, answerType: props.testFilters.answerType, qdrIds: ''});
        }
        clickHandler();
    }
    const allPublisherClickHandler = () => {
        setPublisherList(prevState => {
            prevState = props.publishersList;
            return prevState;
        });
        props.setPublisherSelectedHandler(prevState => {
            prevState = props.publishersList;
            return prevState;
        });
        clickHandler();
        let params = '', counter = 0;
        props.publishersList.reverse().map((item, index) => {
            params +=`${item.qdrId}`;
            counter++;
            if(counter > 0 && index + 1 !== props.publishersList.length) {
                params += ',';
            }
        })
        props.testFilterList({ name: props.testFilters.name, courseId: props.testFilters.courseId, answerType: props.testFilters.answerType, qdrIds: params});
    }

    return (
      <>
        <div>
            {props.publishersList.length > 0 ? <div onClick={clickHandler} className={classes.filterTest}>
                <div className={classes.courseBox}>
                    <div>
                        {!isMobile && <img src={bookmarkAlt} className={classes.courseImg} />}
                        <span>طراح</span>
                    </div>
                    <div>
                        <img src={arrowLeft} className={classes.arrowLeftCourseImg} />
                    </div>
                </div>
                <div className={classes.courseItem}>
                    <small>
                        {(props.publisherSelected.length > 0 && props.publisherSelected.length !== props.publishersList.length) ?
                            props.publisherSelected.map((item, index) => (
                                <p>{item.qdrName} +"و" + "{index + 1}" + "مورد دیگر"</p>
                            ))
                        :  <p>همه</p>}
                    </small>
                </div>
                </div> : null
            }
        </div>
         <ModalLayoutWithHeader
            customClass={classes.modalLayoutCustomPadding}
            openDialog={showModal}
         >
            <div className={classes.headerContainer}>
                <div>
                    <img src={Close} alt={'close'} onClick={clickHandler} className={classes.closeIcon}/>
                    <span>طراح</span>
                </div>
                <div>
                    <ChistaButton
                        withBgColor={false}
                        customClassName={classes.confirmBtn}
                        onClick={confirmClickHandler}
                    >
                        <span>تایید</span>
                    </ChistaButton>
                </div>
            </div>
            <div className={classes.allPublisher} onClick={allPublisherClickHandler}>
                <span>همه طراح ها</span>
            </div>
            <ul className={classes.ulPublisherBox}>
                {(publisherList || []).map((item, index) => (
                    <li className={classes.courseItems} onClick={() => publisherSelectedHandler(item)} key={item.qdrId}>
                        <RectangleCheckbox isChecked={props.publisherSelected.indexOf(item) > -1} customClass={classes.checkbox} />
                        <span>
                            {item.qdrName}
                        </span>
                    </li>
                ))}
            </ul>
        </ModalLayoutWithHeader>
        {props.publishersList.length > 0 && <Divider orientation="horizontal" />}
    </>
  )
};

export default React.memo(PublisherItem);

