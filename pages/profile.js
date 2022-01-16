import React from 'react';
import Container from '@material-ui/core/Container';
import Layout from "../src/components/Layout/Layout";
import {Profile as ProfileC} from "../src/components"

export default function Profile() {
  return (
      <Layout>
          <Container maxWidth="lg" style={{padding:"auto 24px"}}>
                <ProfileC/>
          </Container>
      </Layout>
  );
}

