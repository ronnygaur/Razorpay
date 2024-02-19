import React from 'react';
import  ReactDOM  from "react-dom/client";
import App from './App';
import {chakraProvider} from "@chakra-ui/react"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <chakraProvider>
       <App />
    </chakraProvider>
    
  </React.StrictMode>
);


