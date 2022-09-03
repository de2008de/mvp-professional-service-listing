import MyAppBar from "./containers/MyAppBar";
import { BrowserRouter } from "react-router-dom";
import MyRoute from './MyRoute';

import './App.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <MyAppBar />
                <MyRoute />
            </BrowserRouter>
        </div>
    );
}

export default App;
