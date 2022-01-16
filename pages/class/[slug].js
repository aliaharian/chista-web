import React from "react";
import {useRouter} from "next/router";
import {wrapper} from "../../redux/store";
import {transform} from "../../src/utilities";
import Container from "@material-ui/core/Container";
import AuthClass from "../../src/components/AuthClass/AuthClass";
import AuthClassLayout from "../../src/components/AuthClass/Lauout/AuthClassLayout";
import {useTheme} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Dashboard({page, isMobile, json}) {
    const router = useRouter();
    const {slug} = router.query;
    const theme = useTheme();
    const isMobileQuery = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <AuthClassLayout>
            <Container
                style={{
                    position: "absolute",
                    top: -70,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isMobileQuery?'flex-end':'center',
                    flexDirection: 'column'
                }}>
                {slug && <AuthClass slug={slug}/>}
            </Container>
        </AuthClassLayout>
    );
}
export const getServerSideProps = wrapper.getServerSideProps(
    async ({store, req, query}) => {
        return {
            props: {
                isMobile: transform.isMobileSSR(req.headers["user-agent"]),
            }, // will be passed to the page component as props
        };
    }
);
