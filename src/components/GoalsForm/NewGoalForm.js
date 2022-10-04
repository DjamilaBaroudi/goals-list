import React from "react";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import './NewGoalForm.css';

const NewGoalForm = props => {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addNewGoal = (e) => {
        e.preventDefault();
        let goal = {
            id: Math.random(), 
            content : value,
        }
        console.log(goal);
        props.onAddNewGoal(goal);
        setValue('');
    }
    //console.log(value);
    
    return (
        <div className="goals-form">
            <form onSubmit={addNewGoal}>
                <Stack spacing={2} >
                    <TextField
                        id="outlined-multiline-flexible"
                        label="New goal"
                        multiline
                        maxRows={4}
                        value={value}
                        onChange={handleChange}
                        className='goals-form__items'
                    />
                    <button type="submit"> Add Goal </button>
                </Stack>
            </form >
        </div>

    )
}

export default NewGoalForm;