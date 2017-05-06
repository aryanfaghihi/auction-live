import React from 'react';
import AppBar from 'material-ui/AppBar';
import Example from './test';
import CreateLiveStream from './Components/CreateLiveStream';

var title = "Auction Live";

const App = () => (
    <div>

        <AppBar
            title={title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <CreateLiveStream />
        <Example />
    </div>
);

export default App;
