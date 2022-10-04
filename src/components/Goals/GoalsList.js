import React from "react";

import Stack from '@mui/material/Stack'
import GoalItem from './GoalItem';

const GoalsList = props => {

    const onDeleteGoalHandler = goalToDelete => {
        props.onDelete(goalToDelete);
    }
    return (
        <Stack spacing={2}>
            {props.goalsList.map(goal =>
                <GoalItem
                    key={goal.id}
                    id={goal.id}
                    content={goal.content}
                    onDeleteGoal={onDeleteGoalHandler}
                />)}
        </Stack>
    )
}

export default GoalsList;