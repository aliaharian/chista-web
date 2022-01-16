import Head from 'next/head'
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../../src/components/HomePage/Layout/Layout'
import axios from "axios";
import ArrowLeft from '../../../src/assets/images/arrow-left.svg';
import Style from '../../../src/assets/stylesheet/help.module.scss';
import SearchHelp from '../../../src/components/Search/Search_help';
import ArrowBottom from '../../../src/assets/images/arrow-bottom.svg';
import ArrowTop from '../../../src/assets/images/arrow-top.svg';
import Llamasoft from '../../../src/assets/images/llamasoft.png';
import { wrapper } from '../../../redux/store';
import Link from 'next/link';

function SecondLevel({mainDataRes, OtherChildRes}) {

    const [mainData, setMainData] = useState([]);
    const [otherChild, setOtherChild] = useState([]); 
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const [dropDownMenuHeight, setDropDownMenuHeight] = useState(0);
    const dropDownMenuRef = useRef(null);

    const goToOtherLevel = (level, idx) => {
        if(level == 0) window.location.assign('/help/')
        else if(idx == 0) window.location.assign(`/help/${level}`)
    }

    const handleDropDownMenu = () => {
        setDropDownMenu(!dropDownMenu)
    }

    useEffect(() => {
        setMainData(mainDataRes);
        setOtherChild(OtherChildRes);
        const childHeightRaw = dropDownMenuRef.current?.clientHeight;
        const childHeight = `${childHeightRaw / 16}rem`;
        setDropDownMenuHeight(childHeight)
    })

    return (
        <Layout>
            <Head>
                <title>راهنما - چیستا</title>
            </Head>
            <div className={Style.firstLevelContainer + " " + Style.secondLevelContainer}>
                <div className={Style.locationAndSearchView}>
                    <div className={Style.locationView}>
                        <span onClick={() => goToOtherLevel(0)}>راهنما</span>
                        {mainData.parents && mainData.parents.map((item, index) => (
                            <React.Fragment>
                                <img src={ArrowLeft} alt={""} />
                                <span onClick={() => goToOtherLevel(item.key, index)}>{item.value}</span>
                            </React.Fragment>
                        ))}    
                    </div>
                    <SearchHelp/>
                </div>
                <div className={Style.descContainer}>
                    <div className={Style.menuContainer}>{otherChild && otherChild.map(item => (
                        <Link href={`/help/description/${item.id}`}>
                            <span className={item.id == mainData.id ? Style.activeSpan : null}>
                                {item.title}
                            </span>
                        </Link>
                    ))}
                    </div>
                    <div className={Style.dropDownMenuContainer}>
                        <div className={Style.dropdownMenuHeader} onClick={handleDropDownMenu}>
                            <span>{mainData.parents && mainData.parents[1].value}</span>
                            <img src={dropDownMenu ?  ArrowTop : ArrowBottom} alt={"arrow"}/>
                        </div>
                        <div 
                        style={{maxHeight: dropDownMenu ? dropDownMenuHeight : 0}} 
                        className={Style.dropDownMenuItems}>
                            <div ref={dropDownMenuRef}>
                                {otherChild && otherChild.map(item => (
                                    <Link href={`/help/description/${item.id}`}>
                                        <span className={item.id == mainData.id ? Style.activeSpan : null}>
                                            {item.title}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div> 
                    </div>
                    {mainData.content == undefined || mainData.content == '' ?
                    <div className={Style.noDataForDesc}>
                        <img src={Llamasoft} alt={"noData"}/>
                        <p>
                            این سرویس در حال راه اندازیست
                        </p>
                    </div>
                    :
                    <div className={Style.descHtmlDataFromServer} dangerouslySetInnerHTML={{__html: mainData.content}} />
                    }
                    
                </div>
            </div>
        </Layout>
    )
}


export const getServerSideProps = wrapper.getServerSideProps(
    async ({ res, query}) => {
        try {
            const mainDataReq = await axios.get(`${process.env.REACT_APP_BASE_URL}/help/view?id=${query.id}`, {
                headers: {
                    'Accept-Encoding': 'gzip, deflate, br'
                },
            })
            const OtherChildReq = await axios.get(`${process.env.REACT_APP_BASE_URL}/help/page?orders=214&sorts=true&parentId=${mainDataReq.data.parents[1].key}&child=true`, {
                headers: {
                    'Accept-Encoding': 'gzip, deflate, br'
                },
            })
            
            
            return {
                props: {
                    mainDataRes: mainDataReq.data,
                    OtherChildRes: OtherChildReq.data.result,
                }
            }
        }
        catch (e) {
            res.setHeader("location", "/404/");
            res.statusCode = 302;
            res.end();
            return;
        }
    }
) 

export default SecondLevel;
