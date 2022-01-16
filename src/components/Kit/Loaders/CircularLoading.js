import * as React from 'react';
import { makeStyles, useMediaQuery, useTheme, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0px 0px 0px',
  }
}))
export default function CircularLoading(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(800));

  return (
    props.isLoading ? <div className={classes.box}>
      <CircularProgress size={isMobile ? 24 : 48} />
    </div> : null
  );
}
