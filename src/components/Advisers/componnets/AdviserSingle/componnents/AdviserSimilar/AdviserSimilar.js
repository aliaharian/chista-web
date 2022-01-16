import React, { useEffect } from "react";
import useStyles from "./styles";
import {
  Typography,
  Avatar,
} from "@material-ui/core";
import anotherAdvIcon from "../../../../../../assets/images/another-advisers-icon.svg";
import { connect } from "react-redux";
import { getSimilaresList } from "../../../../../../../redux/advisers";
import { numberFormat, transform } from "../../../../../../utilities";
import Link from "../../../../../Link/Link";

function AdviserSimilar(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getSimilaresList(props.adviser.id, props.adviser.categoryId);
  }, []);

    return (
        <>
            <div className={classes.titleRoot}>
                <div className={classes.titleWrapper}>
                    <img src={anotherAdvIcon}/>
                    <Typography component="h2" className={classes.commentsTitle}>سایر اساتید</Typography>
                </div>
            </div>
            <div className={classes.root}>
                {props.similars && props.similars.length>0 &&props.similars.map((item)=>(
                    <Link href='/adviser/[id]' as={'/adviser/'+item.id} className={classes.itemLink}>
                        <div className={classes.itemRoot}>
                            <div className={classes.avatarContainer}>
                                <Avatar className={classes.avatar} src={transform.getImage(item.imageProfile)}>
                                {transform.getLetters(item.fullName).trim()}
                                </Avatar>
                                <span className={classes.status + " " + transform.parseStatus(item.state)}></span>
                            </div>
                            <div className={classes.titleContainer}>
                                <Typography
                                    className={classes.itemTitle}>{item.fullName}</Typography>
                                <Typography className={classes.desc}>{item.intro}</Typography>
                            </div>
                            <div className={classes.itemPriceContainer}>
                                <Typography
                                    className={classes.itemPrice}>{numberFormat.toPersianDigits(numberFormat.putCommas(item.price))} تومان 
                                    <span className={classes.itemPriceUnit}>(در هر دقیقه)</span>
                                </Typography>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    );
}

AdviserSimilar.propTypes = {};

const mapStateToProps = (state) => ({
  similars: state.advisers.similars,
  adviser: state.advisers.adviser,
});

export default connect(mapStateToProps, { getSimilaresList })(AdviserSimilar);
