import React, { useEffect, useState } from 'react';
import Layout from '../../src/components/HomePage/Layout/Layout';
import Head from 'next/head';
import NextLink from 'next/link';
import { Grid, makeStyles } from '@material-ui/core';
import Style from '../../src/assets/stylesheet/help.module.scss';
import Close from '../../src/assets/images/close_search.svg';
import SearchIcon from '../../src/assets/images/searchIcon.svg';
import axios from "axios";
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
    imgSkeleton: {
        height: '130px',
        display: 'block',
        margin: 'auto',
        [theme.breakpoints.down(1800)]: {
            height: 108
        },
        [theme.breakpoints.down(480)]: {
            height: 114
        },
    }
}))

function HelpCard({id, img, header, txt}) {

    const classes = useStyles();
    const [loaded, setLoaded] = useState(false);
    return(
        <NextLink href={`/help/${id}`}>
            <div className={Style.helpCardContainer}>
                {!loaded &&
                    <Skeleton className={classes.imgSkeleton} variant="rect" style={{
                        backgroundColor: 'white',
                    }}
                    />
                }
                <div style={!loaded ? {display: 'none'} : null}>
                    <img onLoad={() => setLoaded(true)} src={img} alt={""}/>
                </div>
                <h4>{header}</h4>
                <p>{txt}</p>
            </div>
        </NextLink>
    )
}

function Help() {

    const [searchRes, setSearchRes] = useState([])
    const [helpData, setHelpData] = useState()
    const [keyword, setKeyword] = useState('');

    const onChangeSearchKeyword = async (e) => {
        setKeyword(e.target.value)
        if(e.target.value != '')  {
            await axios.get(`${process.env.REACT_APP_BASE_URL}/help/suggest/${e.target.value}?max=4`).then((value) => {
                setSearchRes(value.data)
            })
        }
        else if(e.target.value == '') setSearchRes([])
    }

    const goSearchPage = () => {
        if(keyword != '' && keyword != null) window.location.assign(`/help/search/${keyword}?page=1`)
    }

    const goSearchPageWithEnter = (e) => {
        if(keyword != '' && keyword != null && e.key === 'Enter') window.location.assign(`/help/search/${keyword}?page=1`)
    }

    const getMainData = async () => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/help/page?firstlevel=true&orders=214&sorts=true`).then(value => setHelpData(value.data))
    }
    
    const deleteSearchText = () => {
        setKeyword('')
        setSearchRes([])
    }

    useEffect(() => {
        getMainData();
    }, {})

    return (
        <Layout>
            <Head>
                <title>راهنما - چیستا</title>
            </Head>
            <Grid container>
                <div className={Style.howToHelp}>
                    <p>چطوری میتونم کمکت کنم؟</p>
                    <div className={Style.searchView}>
                        <div className={Style.searchInput}>
                            <input
                            placeholder={"جستجو"}
                            value={keyword}
                            onChange={(e) => onChangeSearchKeyword(e)}
                            onKeyDown={e => goSearchPageWithEnter(e)}
                            />
                            {keyword && keyword != '' ? <img src={Close} alt={'cancel'} className={Style.clearSearchText} onClick={deleteSearchText}/> : null}
                            {keyword && keyword != '' ? <div className={Style.dividerMain}/> : null}
                            <img src={SearchIcon} alt={'search'} onClick={goSearchPage}/>
                        </div>
                        {searchRes.length > 0 ? 
                            <div className={Style.suggestView}>
                                {searchRes.map((item) => (
                                    <a href={`/help/description/${item.id}`}>
                                        <div>
                                            <p>{`${item.title} - `}</p>
                                            <span>{`${item.parents && item.parents[0].value}  (${item.parents && item.parents[1].value})`}</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        :
                        null}
                        
                    </div>
                </div>
                <div className={Style.helpFeaturesContainer}>
                    <div className={Style.helpFeaturesGrid}>
                        {helpData && helpData.result.map((item) => (
                            <div>
                                <HelpCard id={item.id} key={item.id} img={item.icon} header={item.title} txt={item.description}/>
                            </div>
                        ))}
                    </div>
                </div>
            </Grid>
        </Layout>
    )
}

export default Help