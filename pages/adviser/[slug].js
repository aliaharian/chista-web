import React from "react";
import Container from "@material-ui/core/Container";
import Layout from "../../src/components/Layout/Layout";
import { useRouter } from "next/router";
import AdviserSingle from "../../src/components/Advisers/componnets/AdviserSingle/AdviserSingle";
import { wrapper } from "../../redux/store";
import { transform } from "../../src/utilities";

export default function Adviser() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <Container maxWidth="lg" style={{ padding: "auto 24px" }}>
        {router.query.slug && <AdviserSingle slug={router.query.slug} />}
      </Container>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store, req, query }) => {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/advisor/view?id=${query.slug}`, {
      
      withCredentials: true,
      headers: { cookie: req.headers.cookie },
    });
    const data = await res.json();

    //   store.dispatch(getAdvisementList(true, data));

    return {
      props: {
        isMobile: transform.isMobileSSR(req.headers["user-agent"]),
      }, // will be passed to the page component as props
    };
  }
);
