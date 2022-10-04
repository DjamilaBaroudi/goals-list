import GoalsList from "./components/Goals/GoalsList";
import NewGoalForm from "./components/GoalsForm/NewGoalForm";
import './App.css'

function App() {
  const itemsList = [
    {
      id: 'g1',
      content: 'Finish the react course'
    },
    {
      id: 'g2',
      content: 'Finish the react course'
    }
  ]
  return (
    <div className="wrapper">
      <NewGoalForm />
      <GoalsList goalsList={ itemsList } />
    </div>
  );
}

export default App;
