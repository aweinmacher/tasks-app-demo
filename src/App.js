import './App.css';
import StatusColumn from './StatusColumn.js';

function App() {
  const statusColumns = ["Candidates", "In Progress", "QA / Code review", "Completed"];
  const statusList = statusColumns.map((status) => <StatusColumn title={status} />)

  return (
    <div className="App">
{
  <div>
    <h1>Sales</h1>
    <ul className="board">
      {statusList}
    </ul>
  </div>
}
    </div>
  );
}

export default App;
