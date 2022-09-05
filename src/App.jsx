import HeaderComponent from "./components/container/HeaderComponent";
import SidebarComponent from "./components/container/SidebarComponent";
import "./App.css";
import FeedComponent from "./components/container/FeedComponent";

function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <HeaderComponent />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-4 col-4">
                    <SidebarComponent/>
                </div>
                <div className="col-md-8 col-sm-8 col-8">
                    <FeedComponent />
                </div>
            </div>
        {/* <div>
          <SidebarComponent/>
        </div> */}
        </div>
    );
}

export default App;
