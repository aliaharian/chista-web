import React, { useEffect, useState } from 'react';
import SearchHelp from '../../../src/components/Search/Search_help';
import ArrowLeft from '../../../src/assets/images/arrow-left.svg';
import Layout from '../../../src/components/HomePage/Layout/Layout';
import Head from 'next/head';
import Style from '../../../src/assets/stylesheet/help.module.scss';
import { useRouter } from 'next/router';
import axios from 'axios';
import HelpSearchResults from '../../../src/utilities/helpSearchResults';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core';
import { convertNumberToLetter } from '../../../src/utilities/convertToArabicNum';

const useStyles = makeStyles((theme) => ({
    ul: {

      "& .MuiPaginationItem-root": {
          margin: '0px 20px',
          width: 24,
          height: 24,
          minWidth: 'auto',
          [theme.breakpoints.down(1800)]: {
              width: 20,
              height: 20
          },
          [theme.breakpoints.down(480)]: {
            width: 24,
            height: 24
        }
      },
      "& .MuiSvgIcon-root": {
        width: 24,
        height: 24,
        fill: '#0b0c31cc',
        [theme.breakpoints.down(1800)]: {
            width: 20,
            height: 20
        },
        [theme.breakpoints.down(480)]: {
            width: 24,
            height: 24
        }
      },
      "& .Mui-disabled": {
          border: 'none!important'
      }
    }
}));

function SearchResults() {

    const [results, setResults] = useState([]);
    const router = useRouter();
    const classes = useStyles();

    const callSearchApi = async (offset) => {
        await axios.get(`${process.env.REACT_APP_BASE_URL}/help/search/${router.query.keyword}?offset=${router.query.page - 1}&max=10`).then(value => {
            setResults(value.data)
        })
    }

    const goToOtherLevel = (level, idx) => {
        if(level == 0) window.location.assign('/help/')
        else if(idx == 0) window.location.assign(`/help/${level}`)
    }

    const handleChangePage = (event, value) => {
        if(value != router.query.page) window.location.assign(`/help/search/${router.query.keyword}?page=${value}`)
    }

    useEffect(() => {
        callSearchApi(0)
    }, {})

    const itemRender = (item) => {
        if (item.type === 'page') {
          return (
            <div 
            onClick={() => handleChangePage(null, item.page)} 
            className={item.selected ? Style.selectedPage : Style.notSelectedPage}>
                {convertNumberToLetter(item.page)}
            </div>
          )
        }
        return <PaginationItem {...item}/>;
    }

    return(
        <Layout>
            <Head>
                <title>راهنما - چیستا</title>
            </Head>
            <div className={Style.firstLevelContainer}>
                <div className={Style.locationAndSearchView}>
                    <div className={Style.locationView}>
                        <span onClick={() => goToOtherLevel(0)}>راهنما</span>
                        <img src={ArrowLeft} alt={""} />
                        <span>نتایج جستجو</span>
                    </div>
                    <SearchHelp placeHolder={router.query.keyword}/>
                </div>
                <h3>نتایج جستجو</h3>
               {results.total > 0 ? 
                <React.Fragment>
                    <p>{`${results && convertNumberToLetter(results.total)} نتیجه برای "${router.query.keyword}"`}</p>
                    {results.result.map((item, index) => (
                        <HelpSearchResults item={item} index={index}/>
                    ))}
                    <div className={Style.paginationView}>
                        <Pagination 
                        page={parseInt(router.query.page)} 
                        onChange={handleChangePage} 
                        classes={{ ul: classes.ul }} 
                        renderItem={itemRender}
                        count={results.total % 10 > 0 ? parseInt(results.total / 10) + 1 :  parseInt(results.total / 10)}/>
                    </div>
                </React.Fragment>
                : 
                    <p className={Style.noResult}>{`هیچ نتیجه ای برای "${router.query.keyword}" یافت نشد`}</p>
                }
            </div>
        </Layout>
    )
}

export default SearchResults;