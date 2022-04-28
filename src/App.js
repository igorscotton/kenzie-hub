
import './App.css';
import Routes from './Routes'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {

  
 

  return (
    <div className="App">
      <ToastContainer autoClose={2000}/>
      <Routes/>
    </div>
  );
}

export default App;
