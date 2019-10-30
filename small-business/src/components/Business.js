import React from 'react'
import { Container, Paper, } from '@material-ui/core'
import Map from './Map'
const Business = (props) => {

    const id = props.match.params.id
    const business = props.business.find(c => c.id == id)
    return(
        <Container maxWidth="sm" className="container">
    
        <Paper className={'box'}>
        <h2>{business.name}</h2>
        <h3>{business.address}</h3>
        <h4>{business.hours}</h4>
        <h5>{business.description}</h5>
        <Map/>
        </Paper>
    </Container>
    )
}


export default Business;

// {
//     Object.keys(business).map((key, idx) => {
//         return <Chip label={`${key}: ${business[key]}`}></Chip>
//     })
// }