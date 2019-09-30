import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
root: {
    display: 'flex',
    flexWrap: 'wrap',
},
formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
},
selectEmpty: {
    marginTop: theme.spacing(2),
},
}));

export default function NativeSelects(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
    age: '',
    name: 'hai',
});





const handleChange = name => event => {
    if(event.target.value > 20) {
        props.parentfun({drop: true})
    } if (event.target.value < 20){
        props.parentfun({drop: false})
    }

    setState({
    ...state,
    [name]: event.target.value,
    });
};

return (
<div className={classes.root}>
    <FormControl className={classes.formControl}>
    <InputLabel htmlFor="age-native-simple">Sound Quality</InputLabel>
        <Select
        native
        value={state.age}
        onChange={handleChange('age')}
        inputProps={{
        name: 'age',
        id: 'age-native-simple',
    }}
        >
            <option value="" />
            <option value={10}>Low</option>
            <option value={20}>Med</option>
            <option value={30}>High</option>
        </Select>
    </FormControl>
    </div>
    )}