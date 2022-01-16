import React from 'react';
import useStyles from './styles';
import { Grid, Divider, CircularProgress } from "@material-ui/core";
import AdviserItem from "./componnets/AdviserItem/AdviserItem";
import { connect } from "react-redux";
import { getList as getAdvisersList, hasMore, getMore } from "../../../redux/advisers";
import SkeletonLoading from "./componnets/SkeletonLoading/SkeletonLoading";
import ListEmpty from "../ListEmpty/ListEmpty";
import InfiniteScroll from "react-infinite-scroll-component";

function Advisers(props) {
    const classes = useStyles();
    
    React.useEffect(() => {
        props.getAdvisersList();
    }, []);

    if (props.load) 
        return <SkeletonLoading />

    if (props.list && props.list.length <= 0) 
        return <ListEmpty text="در حال حاضر استادی در این دسته بندی وجود ندارد" />

    return (<>
        <div className={classes.advisersWrapper}>
            {props.list ? (
                <InfiniteScroll
                    dataLength={props.list.length}
                    next={props.getMore}
                    hasMore={props.hasMore()}
                    loader={<p style={{ textAlign: "center" }}><CircularProgress
                        color="primary"
                        style={{ width: 20, height: 20 }} /></p>}
                >
                    <Grid container>
                        {props.list && props.list.length > 0 ? (props.list.map((item, i) => (
                            <Grid item sm={6} xs={12} md={5} lg={4} justify="space-between" className={classes.advItem} key={'advg' + i} >
                                <AdviserItem item={item} key={'adv' + i} />
                                <Divider orientation="horizontal" className={classes.divider} />
                            </Grid>))) : (<></>)
                        }
                    </Grid>

                </InfiniteScroll>
            ) : (
                    <SkeletonLoading />
                )}
        </div>
    </>
    );
}

Advisers.propTypes = {};

const mapStateToProps = (state) => ({
    list: state.advisers.list,
    load: state.advisers.load,
    loadMore: state.advisers.loadMore
});

export default connect(mapStateToProps, { getAdvisersList, hasMore, getMore })(Advisers);
