import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../../../src/components/Layout/Layout";
import RegisterAdviser from "../../../src/components/Advisers/componnets/RegisterAdviser/RegisterAdviser"

export default function Dashboard() {

  return (
      <Layout>
          <Container maxWidth="lg" style={{padding:"auto 24px"}}>
            <RegisterAdviser/>
          </Container>
      </Layout>
  );
}
