import React, { useState } from "react";

import Stack from '@mui/material/Stack'
import GoalItem from './GoalItem';

const GoalsList = props => {
    const [newGoalsList, setNewGoalsList] = useState(props.goalsList);

    const onDeleteGoalHandler = goalToDelete => {
        let newList = newGoalsList.filter((goal) => {
            return goalToDelete.id !== goal.id
        });
        setNewGoalsList(newList);
    }
    return (
        <Stack spacing={2}>
            {newGoalsList.map(goal =>
                <GoalItem key={goal.id} id={goal.id} content={goal.content} onDeleteGoal={onDeleteGoalHandler} />)}
        </Stack>
    )
}

export default GoalsList;