import TableHead from "@material-ui/core/TableHead";
import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import ChistaTableCell from "./TableCell";

export default function ChistaTableHead(props) {

    const StyledTableRowHead = withStyles((theme) => ({
        head: {
            backgroundColor: theme.textColor.threePercent,
            color: '#0c0b31',
            '&>th': {
                padding:'6px 26px',
                height: 37,
                fontSize:13,
                fontFamily:theme.font.medium,
                color:theme.textColor.primary,
                [theme.breakpoints.down(1800)]: {
                    height: 27,
                    fontSize:11,
                    padding:'5px 13px',
                    lineHeight:'16px',
                },
                [theme.breakpoints.down(480)]: {
                    height: 50,
                    fontSize:13,
                    padding:'16px 18px',
                    lineHeight:'18px',
                },
            }
        },
    }))(TableRow);

    return (
        <TableHead>
            <StyledTableRowHead>
                {props.cells.map((cell) => (
                    <ChistaTableCell cell={cell} component={props.component} scope={props.scope}/>
                ))}
            </StyledTableRowHead>
        </TableHead>)
}