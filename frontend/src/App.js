import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import Message from './components/layout/Message';

//pages
import Login from './components/pages/Auth/Login';
import Register from './components/pages/Auth/Register';
import Principal from './components/pages/Auth/Principal';
import Students from './components/pages/Students/AllStudents';
import CreateStudents from './components/pages/Auth/CreateStudent';
import EditStudents from './components/pages/Students/EditStudents';
import InfoStudents from './components/pages/Students/InfoStudents';
import Materials from './components/pages/Materials/AllMaterials';
import Teams from './components/pages/Teams/AllTeams';
import CreateTeams from './components/pages/Teams/CreateTeams';
import Financeiro from './components/pages/Financeiros/Dashboard';
import Mensalidades from './components/pages/Financeiros/ReportMensalidades';
import Materiais from './components/pages/Financeiros/ReportMaterials';

import Home from './components/pages/Auth/Home';


//context
import { UserProvider } from './context/UserContext';
import InfoTeams from './components/pages/Teams/InfoTeams';


function App() {
  return (
    <Router>
      <UserProvider>
        <Navbar />
        <Message />
        <Routes>
          <Route path='/' element={<Principal />}></Route>
          
          <Route path='/users/login' element={<Login />}></Route>
          <Route path='/users/create' element={<Register />}></Route>
        </Routes>
        <Container>
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/teams/all' element={<Teams/>}></Route>
            <Route path='/teams/create' element={<CreateTeams/>}></Route>
            <Route path='/teams/:id' element={<InfoTeams />}></Route>

            <Route path='/students/all' element={<Students />}></Route>
            <Route path='/students/create' element={<CreateStudents />}></Route>
            <Route path='/students/:id' element={<InfoStudents />}></Route>
            <Route path='/students/edit/:id' element={<EditStudents />}></Route>

  
            <Route path='/materials/all' element={<Materials />}></Route>
            <Route path='/materials/edit/:id' element={<EditStudents />}></Route>

            <Route path='/financeiros' element={<Financeiro />}></Route>
            <Route path='/financeiros/students/report' element={<Mensalidades />}></Route>
            <Route path='/financeiros/students/materials' element={<Materiais />}></Route>
          </Routes>
        </Container>
        <Footer />
      </UserProvider>
    </Router>
  );
}

export default App;
