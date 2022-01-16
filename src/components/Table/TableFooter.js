import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import ChistaTableCell from "./TableCell";

export default function ChistaTableFooter(props) {

    const StyledTableRow = withStyles((theme) => ({
        root: {
            backgroundColor: 'rgba(66, 100, 251, 0.1)',
            height: 45,
            [theme.breakpoints.down(1800)]: {
                height: 30,
            },
            '&>td': {
                borderTop: '1px solid #dadae0',
                color: theme.buttonColor.normal,
                fontFamily: theme.font.regular,
                fontSize: 17,
                borderBottom: 'none',
                [theme.breakpoints.down(1800)]: {
                    fontFamily: theme.font.regular,
                    fontSize: 12,
                    lineHeight: '16px'
                },
                [theme.breakpoints.down(480)]: {
                    height: 50,
                    fontSize: 13,
                    padding: '16px 18px',
                    lineHeight: '18px',
                    fontFamily: theme.font.bold,
                    '& span': {
                        fontSize: '13px !important',
                        lineHeight: '18px',
                    }
                },
                '&:nth-of-type(odd)': {
                    borderRight: 'none',
                    fontFamily: theme.font.bold,
                    fontSize: 13,
                    [theme.breakpoints.down(1800)]: {
                        fontFamily: theme.font.bold,
                        fontSize: 11,
                        lineHeight: '16px'
                    },
                    [theme.breakpoints.down(480)]: {
                        height: 50,
                        fontSize: 13,
                        padding: '16px 18px',
                        lineHeight: '18px',
                        fontFamily: theme.font.bold,
                    },
                }
            }
        },
    }))(TableRow);

    return (
        <TableBody>
            <StyledTableRow key={1}>
                {props.cells.map((cell) => (
                    <ChistaTableCell cell={cell} component={props.component} scope={props.scope} />
                ))}
            </StyledTableRow>
        </TableBody>
    )
}