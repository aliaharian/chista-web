import React from 'react';
import { Typography } from "@material-ui/core";
import useStyles from './Styles'
import notFound from '../../assets/images/notFound.png'

function D404() {
  const classes = useStyles();
  return (
    <div className={classes.notFound}>
      <Typography>صفحه مورد نظر شما یافت نشد</Typography>
      <Typography>به نظر میرسد صفحه مورد نظر شما وجود ندارد یا به دلیل دیگری در حال حاضر در دسترس نیست !
      </Typography>
      <img src={notFound} />
    </div>
  );
}

export default D404