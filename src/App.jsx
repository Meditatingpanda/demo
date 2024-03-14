import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
