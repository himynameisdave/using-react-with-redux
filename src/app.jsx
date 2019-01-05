import React, { Fragment } from 'react';
import Controls from './components/controls/controls.jsx';
import Notepad from './components/notepad/notepad.jsx';
import Notelist from './components/notelist/notelist.jsx';


const App = () => (
    <Fragment>
        <div className="main__controls">
            <Controls />
        </div>
        <div className="main__body">
            <Notelist />
            <Notepad />
        </div>
    </Fragment>
);

export default App;
