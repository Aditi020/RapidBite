// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.css";
// import './styles/remixicon-local.css'; 
// Adding Remixicon via CDN instead of local files
const link = document.createElement("link");
link.href = "https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css";
link.rel = "stylesheet";

import { Provider } from "react-redux";
import store from "./store";
document.head.appendChild(link);



import { BrowserRouter} from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>,
)
