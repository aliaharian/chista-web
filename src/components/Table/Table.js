import Table from "@material-ui/core/Table";
import React from "react";
import ChistaTableHead from "./TableHead";
import ChistaTableBody from "./TableBody";
import ChistaTableFooter from "./TableFooter";

export default function ChistaTable(props) {
    return (
        <Table className={props.className?.table || ''} aria-label="customized table">
            {
                props.head &&
                <ChistaTableHead
                    cells={props.head.cells}
                    component={props.head.component || 'th'}
                    scope={props.head.scope || 'col'}
                />
            }
            {
                props.body &&
                <ChistaTableBody
                    bordered={props.bordered || false}
                    stripped={props.stripped || false}
                    cells={props.body.cells} component={props.body.component || 'th'}
                    scope={props.body.scope || 'col'}
                />
            }
            {
                props.footer &&
                <ChistaTableFooter
                    cells={props.footer.cells}
                    component={props.footer.component || 'th'}
                    scope={props.footer.scope || 'col'}
                />
            }
        </Table>
    )
}