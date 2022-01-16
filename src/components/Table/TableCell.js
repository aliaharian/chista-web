
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";

export default function ChistaTableCell(props) {
    const StyledTableCell = withStyles((theme) => ({

        body: {
            fontSize: 13,
            borderBottom: 'none',
            padding:'6px 26px',
            height:37,
            color:theme.textColor.primary,
            [theme.breakpoints.down(1800)]: {
                fontSize: 11,
                borderBottom: 'none',
                padding:'5px 13px',
                lineHeight:'16px',
                height:27,
                color:theme.textColor.secondary,

            },
            [theme.breakpoints.down(480)]: {
                height: 50,
                fontSize:13,
                padding:'16px 18px',
                lineHeight:'18px',
                maxWidth:155,
            },
        },
    }))(TableCell);

    return (
        <StyledTableCell component={props.component} scope={props.scope}>{props.cell}</StyledTableCell>
    )
}