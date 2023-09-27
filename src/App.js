import logo from './logo.svg';
import './App.css';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserAuthContextProvider } from './Context/UserAuth';
import Protected from './Pages/Protected';
import Home from './Pages/Home';
import InnerRoutes from './Pages/InnerRoutes';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (

    <div>
      <section>
        <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/log-in" element={<SignIn />} />
            <Route path="/Dasboard" element={<Protected><InnerRoutes/></Protected>} />
          </Routes>
        </UserAuthContextProvider>
      </section>
      
    </div>

  );
}
export default App;
