import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper, Grid, Button,
} from "@material-ui/core";
import Style from '../../../../../assets/stylesheet/profile/myClass/myClasses.module.scss';
import noData from "../../../../../assets/images/no_result_found.webp";
import AddWhite from '../../../../../assets/images/white_add.webp'
import MyClassTableCell from "./MyClassTableCell";

import useStyles from "./Styles";
import ClassItem from "../Contacts/contactDetail/tabs/CommonGroups/ClassItem";
import clsx from "clsx";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import InsertClassDialog from "./InsertClass/Dialog";
import MyClassCheckOwner from "./MyClassCheckOwner";
import { convertNumberToLetter } from "../../../../../utilities/convertToArabicNum";

const MyClassDesktop = ({ myClass, checkOwner }) => {
  console.log("myClass:", myClass);
  const classes = useStyles();
  const [showModalCheck, setShowModalCheck] = useState(false);
  const [openInsertClass, setOpenInsertClass] = useState(false)

  const handleInsertClass = () => {
    console.log(checkOwner)
    if (checkOwner.responseCode !== 200) {
      setShowModalCheck(true);
      return;
    } else {
      setOpenInsertClass(true)
    }
    // router.push("/profile/dashboard/myClass/insertClass");
  };
  return (
    <div className={Style.myClassDesktopContainer}>
      {
        myClass.filterQuery.title && myClass.filterQuery.title != "" ?
          <React.Fragment>
            {myClass.result.length == 0 &&
              <>
                <p className={Style.allResultForSearch}>نتایج جستجو</p>
                <p className={Style.numOfResultForSearch}>{myClass.result.length == 0 ? `هیچ نتیجه ای برای "${myClass.filterQuery.title}" یافت نشد` : `${convertNumberToLetter(myClass.result.length)} نتیجه برای جستجو "${myClass.filterQuery.title}"`}</p>
              </>
            }
          </React.Fragment>
          :
          null
      }
      {myClass.result.length !== 0 ? (
        // <TableBody>
        <div className={Style.myClassesGridView}>
          {myClass.result.map((row) => (
            /* <MyClassTableCell row={row} key={row.id} /> */
            <ClassItem data={row} key={row.id} />
          ))}
        </div>
        // </TableBody>
      ) : (myClass.filterQuery !== "" && (myClass.filterQuery.title !== "" || myClass.filterQuery.active !== "") || myClass.filter) ? (
        <div className={Style.noClassFoundContainer}>
          {(myClass.filterQuery.query != "" && myClass.filterQuery.title == "") ? <img src={noData} alt="no data" className={Style.noClassFoundImg} /> : null}
          {(myClass.filterQuery.query != "" && myClass.filterQuery.title == "") ?
            <p>هیچ موردی یافت نشد</p>
            :
            null
          }
        </div>
      ) :
        <div className={Style.noClassFoundContainer}>
          <img src={noData} alt="no data" className={Style.noClassFoundImg} />
          <p>در حال حاضر عضو هیچ کلاسی نیستید</p>
          <p>در صورتی که میخواهید میزبان کلاس باشید بر روی دکمه ایجاد کلاس کلیک نمایید</p>
          <InsertClassDialog resetFilter={() => {
          }} open={openInsertClass} toggleOpen={() => setOpenInsertClass(!openInsertClass)} />
          <button
            // href="/profile/dashboard/myClass/insertClass"
            onClick={handleInsertClass}
          >
            {/*<AddCircleOutlineIcon/>*/}
            <img src={AddWhite} alt={'add'} />
            <span>کلاس جدید</span>
          </button>
        </div>
      }
      {showModalCheck && (
        <MyClassCheckOwner
          checkOwner={checkOwner}
          closeModal={() => setShowModalCheck(false)}
          open={showModalCheck}

        />
      )}
    </div>
  );
};

export default MyClassDesktop;
