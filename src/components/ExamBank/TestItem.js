import React, { useState } from 'react';
import clsx from 'clsx';
import { Divider, useTheme } from '@material-ui/core';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Slide from '@material-ui/core/Slide';
import classes from "../../assets/stylesheet/testBank.module.scss";
import ChistaButton from '../Kit/Buttons/ChistaButton';
import { numberFormat } from "../../utilities";
import Close from '../../assets/images/profile/registerOstad/closeModal.svg';
import { Initiable, Verify, Complete } from "../Auth";
import Arrow from '../../assets/images/Arrow';
import ModalLayoutWithHeader from '../Kit/Layouts/ModalLayoutWithHeader';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export function TestItem(props) {
  const [hoveredItem, setHoveredItem] = useState([]);
  const [ishoverItem, setIsHoverItem] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const [openDownloadDialog, setOpenDownloadDialog] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  const hoverHandler = (e, item) => {
      let itemArr = [];
      itemArr.push(item.id);
      setHoveredItem(prevState => {
        prevState = itemArr
        return prevState;
      });
  }
  const disHoverHandler = (e, item) => {
      let disHoverSelected = [];
      disHoverSelected = hoveredItem.filter(a => a != item.id);
      setHoveredItem(disHoverSelected);
  }
  const hoverDownloadHandler = () => {
    setIsHoverItem(true);
  }
  const disHoverDownloadHandler = () => {
    setIsHoverItem(false);
  }
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleClose = (e) => {
    setIsOpen(!isOpen);
    disHoverHandler(e, props.item);
  }
  const downloadHandler = (e) => {
    props.isAuth().then(isAuth => {
      if(typeof isAuth === 'undefined' || isAuth === null || isAuth === '') {
        e.preventDefault();
        props.authUpdateField({ prop: "openInitiable", value: true });
      }
    });
  }
  const handleArrowLeftClick = () => {
    setOpenDownloadDialog(!openDownloadDialog);
  }

  return (
    <>
      <Initiable />
      <Verify />
      <Complete gift={false} />
      <div 
        className={classes.box} 
        onMouseEnter={(e) => {
          if(!isMobile) {
            hoverHandler(e, props.item)
          }
          else {
            e.preventDefault();
          }
        }}
        onMouseLeave={(e) => {
          if(!isMobile) {
            disHoverHandler(e, props.item)
          }
          else {
            e.preventDefault();
          }
        }}
        >
        <div>
          <img src="/blog/images/history_of_online_education/smart_school_on_monitor.png" width={32} height={32} />
        </div>
        <div className={classes.item}>
          <small className={classes.title}>{props.item.name}</small>
          <br />
          <small className={classes.subTitle}>{props.item.qdrNote}</small>
        </div>
        <div class={classes.flexBetween}></div>
        <div className={classes.ArrowBack}>
          <ChistaButton
              withBgColor={false}
              customClassName={classes.detailBtn}
              onClick={handleArrowLeftClick}
            >
              <Arrow />
          </ChistaButton>
        </div>

        <div className={clsx({ [classes.hideDetailBox]: hoveredItem.findIndex(item => item === props.item.id) == -1, [classes.showDetailBox]: hoveredItem.findIndex(item => item === props.item.id) > -1 })}>
          <div>
            <ChistaButton
              withBgColor={false}
              customClassName={classes.detailBtn}
              onClick={handleClick}
            >
              جزئیات
            </ChistaButton>
          </div>
          <div>
            <ChistaButton
              withBgColor={true}
              customClassName={classes.downloadBtn}
              onClick={downloadHandler}
              onMouseEnter={hoverDownloadHandler}
              onMouseLeave={disHoverDownloadHandler}
            >
              {ishoverItem ? 
                <a 
                  className={classes.txtDownloadBtn} 
                  href={process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_ATTACHMENT_WITH_UUID.replace('UUID', props.item.attachment.uuid)} 
                  target='_blank'
                >
                  {props.item.attachment.size > 1000000 ? numberFormat.toPersianDigits(props.item.attachment.size / 1000000) + 'مگابایت' : props.item.attachment.size > 1000 ? numberFormat.toPersianDigits((props.item.attachment.size / 1000).toFixed()) + 'کیلوبایت' : numberFormat.toPersianDigits(props.item.attachment.size) + 'بایت'}
                </a> :  
                <span>دانلود</span>}
            </ChistaButton>
          </div>
        </div>

        <div className={clsx({[classes.closeMenu]: !isOpen, [classes.openMenu]: isOpen})}>
          <div className={classes.downloadDetailHeader}>
            <div>
              {props.item.qdrName}
            </div>
            <div class={classes.flexBetween}></div>
            <div className={classes.closeBox}>
              <img src={Close} alt={'close'} onClick={handleClose} />
            </div>
          </div>
          <Divider />
            
          <div className={classes.testMenuItem}>
            <div>طراح</div>
            <div class={classes.flexBetween}></div>
            <div className={classes.extraText}>{props.item.qdrNote}</div>
          </div>

          <div className={classes.testMenuItem}>
            <div>مقطع</div>
            <div class={classes.flexBetween}></div>
            <div>{props.item.gradeName}</div>
          </div>

          <div className={classes.testMenuItem}>
            <div>تاریخ برگزاری</div>
            <div class={classes.flexBetween}></div>
            <div>{props.item.termText}</div>
          </div>

          <div className={classes.testMenuItem}>
            <div>نوع سوالات</div>
            <div class={classes.flexBetween}></div>
            <div>{props.item.questionType === process.env.REACT_APP_DESCRIPTIVE_TEST_TYPE ? 'تشریحی'
              : props.item.questionType === process.env.REACT_APP_MULTIPLE_CHOICE_TEST_TYPE ? 'تستی' : 'تستی-تشریحی'}</div>
          </div>

          <div className={classes.testMenuItem}>
            <div>پاسخنامه</div>
            <div class={classes.flexBetween}></div>
            <div>{typeof props.item.answerType !== 'undefined' ? 'کلیدی' : 'ندارد'}</div>
          </div>

          <div className={classes.downloadBtnBox}>
            <ChistaButton
              withBgColor={true}
              customClassName={classes.downloadBtn}
              onClick={downloadHandler}
            >
              <a 
                href={process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_ATTACHMENT_WITH_UUID.replace('UUID', props.item.attachment.uuid)} 
                target='_blank'
                className={classes.downloadBtn}
              >
                دانلود
              </a>
            </ChistaButton>
          </div>
        </div>
      </div>
      <ModalLayoutWithHeader
          openDialog={openDownloadDialog}
          fullScreen
          TransitionComponent={Transition}
        >
          <div className={classes.downloadDetailHeader}>
            <div className={classes.headerTitle}>
              {props.item.qdrName}
            </div>
            <div className={classes.flexBetween}></div>
            <div className={classes.closeBox}>
              <img src={Close} alt={'close'} onClick={handleArrowLeftClick} />
            </div>
          </div>

          <div>    
            <div className={classes.testMenuItem}>
              <div>طراح</div>
              <div class={classes.flexBetween}></div>
              <div className={classes.extraText}>{props.item.qdrNote}</div>
            </div>

            <div className={classes.testMenuItem}>
              <div>مقطع</div>
              <div class={classes.flexBetween}></div>
              <div>{props.item.gradeName}</div>
            </div>

            <div className={classes.testMenuItem}>
              <div>تاریخ برگزاری</div>
              <div class={classes.flexBetween}></div>
              <div>{props.item.termText}</div>
            </div>

            <div className={classes.testMenuItem}>
              <div>نوع سوالات</div>
              <div class={classes.flexBetween}></div>
              <div>{props.item.questionType === process.env.REACT_APP_DESCRIPTIVE_TEST_TYPE ? 'تشریحی'
                : props.item.questionType === process.env.REACT_APP_MULTIPLE_CHOICE_TEST_TYPE ? 'تستی' : 'تستی-تشریحی'}</div>
            </div>

            <div className={classes.testMenuItem}>
              <div>پاسخنامه</div>
              <div class={classes.flexBetween}></div>
              <div>{typeof props.item.answerType !== 'undefined' ? 'کلیدی' : 'ندارد'}</div>
            </div>

            <div className={classes.downloadBtnBox}>
              <ChistaButton
                withBgColor={true}
                customClassName={classes.downloadBtn}
                onClick={downloadHandler}
              >
                <a 
                  href={process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_ATTACHMENT_WITH_UUID.replace('UUID', props.item.attachment.uuid)} 
                  target='_blank'
                  className={classes.downloadBtn}
                >
                  دانلود
                </a>
              </ChistaButton>
            </div>
          </div>
        </ModalLayoutWithHeader>
    </>
  )
}

export default React.memo(TestItem);