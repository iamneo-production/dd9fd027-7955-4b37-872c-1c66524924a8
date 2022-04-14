import './App.css';

import Login from "./components/user/Login";

import ALogin from "./components/admin/Login";

import Signup from "./components/user/Signup";

import Dashboard from './components/admin/Dashboard';

import Loan from './components/admin/Loan';

import AddLoan from "./components/user/AddLoan";

import ViewLoan from './components/user/ViewLoan';

import ViewProfile from './components/user/ViewProfile';

import ApplySuccess from './components/user/ApplySuccess';

import UserLoandetails from './components/user/UserLoandetails';

import ViewuserDetails from './components/admin/ViewuserDetails';

import UserDetails from './components/admin/UserDetails';

import Review from './components/user/Review';

import MainPage from './components/MainPage';

import {

  BrowserRouter as Router,

  Routes,

  Route

} from "react-router-dom";



function App() {

  return (

<Router>

      <div className="App">

        <Routes>

          <Route exact path='/' element={<MainPage />}></Route>

          <Route path='user/signup' element={< Signup />}></Route>

          <Route path='user/login' element={< Login />}></Route>

          <Route path='admin/login' element={< ALogin />}></Route>

          <Route path='user/addLoan' element={< AddLoan />}></Route>

          <Route path='user/viewLoan' element={< ViewLoan />}></Route>

          <Route path='user/getProfile' element={< ViewProfile />}></Route>

          <Route path='user/success' element={< ApplySuccess />}></Route>

          <Route path='user/UserLoandetails' element={< UserLoandetails />}></Route>

          <Route path='admin/getAllLoans' element={< Dashboard />}></Route>

          <Route path='admin/ViewuserDetails' element={< ViewuserDetails />}></Route>

          <Route path='admin/UserDetails' element={< UserDetails />}></Route>

          <Route path='admin/generateSchedule' element={< Loan />}></Route>

          <Route path='Component/Review' element={< Review />}></Route>



        </Routes>

      </div>

    </Router>

);

}



export default App;





