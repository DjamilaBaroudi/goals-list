import GoalsList from "./components/Goals/GoalsList";
import NewGoalForm from "./components/GoalsForm/NewGoalForm";
import './App.css'
import { useState } from "react";

const itemsList = [
  {
    id: 'g1',
    content: 'Finish the react course'
  },
  {
    id: 'g2',
    content: 'Finish the react course or else'
  }
]
function App() {

  const [newGoalsList, setNewGoalsList] = useState(itemsList);

  const addNewGoalHandler = newGoal => {
    setNewGoalsList((prev) => [newGoal, ...prev])
  }

  return (
    <div className="wrapper">
      <NewGoalForm onAddNewGoal={addNewGoalHandler} />
      <GoalsList goalsList={newGoalsList} />
    </div>
  );
}

export default App;
