import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const TableExampleSimple = (props) => (
  <Table>
  
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Non-Malignant Percentage</TableHeaderColumn>
        <TableHeaderColumn>Malignant Percentage</TableHeaderColumn>
        
      </TableRow>
    </TableHeader>
    <TableBody>
    	
      <TableRow>
        
        <TableRowColumn>

	        {(props.classification) ? 
	         props.classification[1].prediction[0]

	        : ""}

        </TableRowColumn>
        <TableRowColumn>
	        {(props.classification) ? 
	         props.classification[1].prediction[1]

	        : ""}
        </TableRowColumn>
      </TableRow>
      
    </TableBody>
  </Table>
);

export default TableExampleSimple;