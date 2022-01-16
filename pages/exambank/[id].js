import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../../src/components/HomePage/Layout/Layout'
import axios from "axios";
import { wrapper } from '../../redux/store';
import { useRouter } from 'next/router';
import TestBank from '../../src/components/ExamBank/ExamBank';

function FirstTestBank(props) {
    //const [mainData, setMainData] = useState([]);
    const router = useRouter();
    console.log("ID<......................>");
    const refreshData = () => {
        router.replace(router.asPath);
    }
    debugger;
    useEffect(() => {
        debugger;
        //setMainData(mainReqData);
    }, [])
    return (
        <TestBank />
    )
}


export default FirstTestBank;


export const getServerSideProps = wrapper.getServerSideProps(
    async ({ store, req, res, query }) => {
        //let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_FETCH_NODES_CHILDREN_WITH_PARENTID.replace('PARENTID', query.id);
        
        //let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_FETCH_TEST_BANKS;
        let url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_FETCH_NODES_CHILDREN_WITH_PARENTID.replace('PARENTID', query.id);
        debugger;
        console.log("QUERY<......................>", query);
        // const mainReqDataRes = await axios.get(`${url}/help/page?parentId=${query.id}&orders=214&sorts=true&child=true`, {
        //     headers: {
        //         'Accept-Encoding': 'gzip, deflate, br'
        //     },
        // })

        //const url = process.env.REACT_APP_NODE_CONTROLLER_BASE_URL + process.env.REACT_APP_FETCH_NODES_CHILDREN_WITH_PARENTID.replace('PARENTID', parentId);
        const response = await axios.get(url, {
            headers: {
                Cookie: req.headers.cookie,
            },
            //withCredentials: true
        });
        console.log("RESPONSE______________DATA<......................>", response.data);


        if(response.data.total == 0) {
            res.setHeader("location", "/404/");
            res.statusCode = 302;
            res.end();
            return;
        }

        return {
            props: {
                currentCategoryData: response.data,
                //parentReqData: parentReqDataRes.data,
            }
        }
    }
) 