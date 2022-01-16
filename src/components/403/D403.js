import React from 'react';
import { Typography, Link } from "@material-ui/core";
import useStyles from './Styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function D403() {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <Typography>شما اجازه دسترسی به این صفحه را ندارید</Typography>
      <Typography>
        کاربر عزیز،امکان دسترسی شما به این صفحه وجود ندارد
      </Typography>
      <Typography>
        لطفا از طریق لینک زیر به صفحه اصلی مراجعه کرده یا آدرس مورد نظر را در مرورگر وارد کنید
      </Typography>
      <Link href="/">صفحه اصلی
        <ArrowBackIcon />
      </Link>
    </div>
  );
}

export default D403