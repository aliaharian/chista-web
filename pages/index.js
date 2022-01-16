import React from 'react';
import { Container, Grid } from '@material-ui/core'
import Layout from "../src/components/HomePage/Layout/Layout";
import Style from "./../src/assets/stylesheet/index.module.scss";
import Intro from "../src/components/HomePage/components/Intro";
import Why from "../src/components/HomePage/components/Why";
import EtcFeatures from "../src/components/HomePage/components/EtcFeatures";
import QuestionAndAnswers from '../src/components/HomePage/components/questionAndAnswers';
import MoreIntro from '../src/components/HomePage/components/moreIntro';
import TrustUs from '../src/components/HomePage/components/trustUs';
import InsertClassInGiftMode from '../src/components/InsertClass/InsertClassInGiftMode';

function Index() {
    return (
        <Layout>
            <InsertClassInGiftMode/>
            <Container className={Style.indexContainer}>
                <Grid container>
                    <Grid container item md={12} sm={12} xs={12} style={{ height: 'min-content' }}>
                        <Grid item container>
                            <Intro />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Why/>
            <EtcFeatures/>
            <MoreIntro/>
            <QuestionAndAnswers/>
            <TrustUs/>
        </Layout>
    );
}

export default Index
