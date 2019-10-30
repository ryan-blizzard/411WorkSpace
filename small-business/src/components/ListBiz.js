import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@material-ui/core";
import AddBusiness from "../containers/AddBusiness";
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'



const ListBiz = props => {
    console.log(props.user.username)



  return (
    
    <div className="wrapper">
        <p>Grapple with the Natives</p>
        <h4>Atx Local Insiders</h4>
        {props.user.username && <AddBusiness  
        bizTotal={props.addBusiness}/> 
        }


    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Hours</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {props.business.map((business1, idx) =>( 
            <TableRow key={business1.id} >
            <TableCell component="th" scope="row">
            <Link to={`/business/${business1.id}`} > {business1['name']} </Link> 
                </TableCell>
                <TableCell> {business1['description']}</TableCell>
                <TableCell> {business1['address']}</TableCell>
                <TableCell> {business1['hours']}</TableCell>
                <TableCell>
                {props.user.username && <DeleteIcon 
                    onClick={() => props.removeBusiness(idx)}
                    className="icon"/>}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    
    </div>
    );
};

export default ListBiz;
