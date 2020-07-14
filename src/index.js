import React from 'react';
import ReactDom from 'react-dom';
import "../styles/styles.scss"


import Wireframe from "./Wireframe/Wireframe";
import { Provider } from "react-redux";

import store from "../lib/redux/store";

ReactDom.render(<Provider store={store}><Wireframe/></Provider>, document.getElementById('root'))