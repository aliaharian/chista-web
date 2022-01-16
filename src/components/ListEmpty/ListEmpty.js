import React from 'react';
import useStyles from './styles';
import {Typography} from '@material-ui/core'
import  listEmptyImg from '../../assets/images/list-empy-img.png';

function ListEmpty(props)
{
  const classes = useStyles();

  return (
      <div className={classes.root}>
        <img src={listEmptyImg} alt="چیستا" className={classes.emptyImg}/>
          <Typography className={classes.emptyListText}>{props.text}</Typography>
      </div>
  );
}

ListEmpty.propTypes = {
};

export default ListEmpty;