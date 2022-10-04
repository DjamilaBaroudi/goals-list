import React from "react";

import Stack from '@mui/material/Stack'
import GoalItem from './GoalItem';

const GoalsList = props => {
    return (
        <Stack spacing={2}>
            {props.goalsList.map(goal =>
                <GoalItem key={goal.id} content={goal.content} />)}
        </Stack>
    )
}

export default GoalsList;