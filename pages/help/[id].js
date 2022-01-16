import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../../src/components/HomePage/Layout/Layout'
import axios from "axios";
import ArrowLeft from '../../src/assets/images/arrow-left.svg';
import Style from '../../src/assets/stylesheet/help.module.scss';
import Link from 'next/link';
import SearchHelp from '../../src/components/Search/Search_help';
import { wrapper } from '../../redux/store';
import { convertNumberToLetter } from '../../src/utilities/convertToArabicNum';

function FirstLevel({mainReqData, parentReqData}) {

    const [mainData, setMainData] = useState([]);
    const [parentData, setParentData] = useState({});
    const [whichMoreItems, setMoreItems] = useState([]);

    const goToOtherLevel = (level, idx) => {
        if(level == 0) window.location.assign('/help/')
        else if(idx == 0) window.location.assign(`/help/${level}`)
    }

    const seeMoreItems = (id) => {
        let index = whichMoreItems.findIndex((element) => element == id)
        if(index != -1) {
            let locArray = [...whichMoreItems];
            locArray.splice(index, 1);
            setMoreItems(locArray)
        }
        else {
            setMoreItems([...whichMoreItems, id])
        }
    }

    useEffect(() => {
        setMainData(mainReqData);
        setParentData(parentReqData);
    }, {})
    return (
        <Layout>
            <Head>
                <title>راهنما - چیستا</title>
            </Head>
            <div className={Style.firstLevelContainer}>
                <div className={Style.locationAndSearchView}>
                    <div className={Style.locationView}>
                        <span onClick={() => goToOtherLevel(0)}>راهنما</span>
                        {mainData.result && mainData.result[0] && mainData.result[0].parents.map(item => (
                            <React.Fragment>
                                <img src={ArrowLeft} alt={""} />
                                <span>{item.value}</span>
                            </React.Fragment>
                        ))}    
                    </div>
                    <SearchHelp/>
                </div>
                <div>
                    <h3>{parentData.title}</h3>
                    <p>{parentData.description}</p>
                </div>
                <div className={Style.firstLevelGridView} container xs={12}>
                    {mainData.result && mainData.result.map(item => (
                        <div className={Style.firstLevelMainDataItems}>
                            <p>
                                {item.title}
                            </p>
                            <div>
                                {item.child.slice(0, 4).map((data, index) => (
                                    <React.Fragment>
                                        <Link href={`/help/description/${data.id}`}>
                                            <p>{data.title}</p>
                                        </Link>
                                        {item.child.length > 4 && index == 3 ? item.child.slice(4).map(value => 
                                            <Link href={`/help/description/${value.id}`}>
                                                <p className={whichMoreItems.findIndex(element => element == item .id) != -1 ? Style.dropDownItemsOpened : Style.dropDownItemsClosed}>{value.title}</p>
                                            </Link>
                                        ) : null}
                                        {index == 3 && item.child.length > 4 ? <p onClick={() => seeMoreItems(item.id)} className={Style.firstLevelSeeMoreItems}>{whichMoreItems.findIndex(element => element == item.id) != -1 ? 'بستن' : `دیدن همه ${convertNumberToLetter(item.child.length)} عنوان`}</p> : null}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    ))}  
                </div>
            </div>
        </Layout>
    )
}


export default FirstLevel;


export const getServerSideProps = wrapper.getServerSideProps(
    async ({res, query}) => {
        const mainReqDataRes = await axios.get(`${process.env.REACT_APP_BASE_URL}/help/page?parentId=${query.id}&orders=214&sorts=true&child=true`, {
            headers: {
                'Accept-Encoding': 'gzip, deflate, br'
            },
        })

        if(mainReqDataRes.data.total == 0) {
            res.setHeader("location", "/404/");
            res.statusCode = 302;
            res.end();
            return;
        }

        const parentReqDataRes = await axios.get(`${process.env.REACT_APP_BASE_URL}/help/view?id=${query.id}`, {
            headers: {
                'Accept-Encoding': 'gzip, deflate, br'
            },
        })


        return {
            props: {
                mainReqData: mainReqDataRes.data,
                parentReqData: parentReqDataRes.data,
            }
        }
    }
) 