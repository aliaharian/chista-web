import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../../src/components/Layout/Layout";
import { useRouter } from 'next/router'
import Payment from "../../src/components/payment/payment";

export default function Adviser() {
    const router = useRouter();
    const { slug } = router.query;
  return (
      <Layout>
          <Container maxWidth="lg" style={{padding:"auto 24px"}}>
                <Payment slug={slug}/>
          </Container>
      </Layout>
  );
}
