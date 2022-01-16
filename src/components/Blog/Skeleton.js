import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import Style from '../../assets/stylesheet/blog.module.scss'

export default function BlogSkeleton(){
    return(
        <Skeleton className={Style.skeleton}/>
    )
}