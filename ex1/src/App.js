import './Assests/Styles/App.css';
import Parageraph from './Components/Parageraph';
import Table from './Components/Table';
import Timer from './Components/Timer';

const table = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

function App() {
  return (
    <div className="App">
      <Timer />
      <table>
        <Table matrix={table}/>
      </table>
      <Parageraph />
    </div>
  );
}

export default App;
