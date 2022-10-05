import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';
import './NewGoalForm.css';

const NewGoalForm = props => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const addNewGoal = (e) => {
        e.preventDefault();
        let goal = {
            id: Math.random(),
            content: value,
        }
        if (goal.content.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddNewGoal(goal);
        setIsValid(true);
        setValue('');
    }

    //console.log(value);
    return (
        <div className="goals-form">
            <form onSubmit={addNewGoal}>
                <Stack spacing={2} >
                    {isValid &&
                        < TextField
                            id="outlined-multiline-flexible"
                            label="New goal"
                            multiline
                            maxRows={4}
                            value={value}
                            onChange={handleChange}
                            className='goals-form__items'
                        />
                    }
                    {!isValid &&
                        < TextField
                            id="outlined-error-helper-text"
                            label="New goal"
                            error
                            value={value}
                            onChange={handleChange}
                            className='goals-form__items'
                            helperText="Incorrect entry."
                        />
                    }

                    <button type="submit"> Add Goal </button>
                </Stack>
            </form >
        </div>

    )
}

export default NewGoalForm;