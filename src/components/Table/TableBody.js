import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import ChistaTableCell from "./TableCell";

export default function ChistaTableBody(props) {

    const StyledTableRow = withStyles((theme) => ({
        root: {
           
            '&>td': props.bordered && {
                borderBottom: 'solid 1px #dadae0',
                '&:nth-of-type(odd)': {
                    borderRight: 'solid 1px #dadae0',
                    fontFamily:theme.font.medium,
                    color:theme.textColor.primary,
                },
            },
            '&:nth-of-type(odd)': props.stripped && {
                backgroundColor: theme.textColor.threePercent,
            },
            '&:nth-last-of-type(1)': {
                '&>td': {
                    borderBottom: 'none'
                },
            },
        },
    }))(TableRow);

    return (
        <TableBody>
            {props.cells.map((row) => (
                <StyledTableRow key={1}>
                    {row.map((cell) => (
                        <ChistaTableCell cell={cell} component={props.component} scope={props.scope}/>
                    ))}
                </StyledTableRow>
            ))}
        </TableBody>
    )
}