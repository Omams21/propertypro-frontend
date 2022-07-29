import Homepage from "./pages/Homepage/Homepage";
// import Midsection from './components/Midsection/Midsection';
// import Signin from './pages/Signin/Signin';
// import Signup from './pages/Signup/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/Signin";
// import Uploadproperty   from './pages/Uploadproperty/Uploadproperty';
import Buy from "./pages/Buy/Buy";
import { Dashboard, PostProperty } from "./components/Dashboard/Dashboard";
import Rent from "./pages/Rent/Rent";
import Profile from "./pages/Profile/Profile";
import Myproperty from "./pages/Myproperty/Myproperty";
// import SignIn from './pages/Signin/Signin';
// import Signup from './pages/Signup/Signup';
import { ProtectedRoute } from "./protectedRoute";
import Uploadproperty from "./pages/Uploadproperty/Uploadproperty";
import AgentProperties from "./components/Agentprofile/AgentProperties/AgentProperties";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>

          <Route path="/hi" element={<ProtectedRoute />} />

          <Route path="/buy" element={<Buy />}></Route>

          <Route path="/rent" element={<Rent />}></Route>

          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
          <Route path="/post-property" element={<Uploadproperty />} />

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/properties" element={<Myproperty />}></Route>
          <Route path="/agent/properties" element={<AgentProperties />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;
