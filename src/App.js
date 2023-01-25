import './App.scss';
import { Component } from 'react';
import Sidebar from './pages/shared/Sidebar';
import Navbar from './pages/shared/Navbar';
import AppRoutes from './AppRoutes';
import Footer from './pages/shared/Footer';

class App extends Component {
render() {

  return(
    <div className = "container-scroller">
      {/* Side bar */}
      <Sidebar />
      <div className="container-fluid page-body-wrapper">
        {/* Navbar */}
        <Navbar />
        <div className="main-panel">
          <div className="content-wrapper">
            {/* All Page Routing */}
            <AppRoutes/>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  )
}
}

export default App;
