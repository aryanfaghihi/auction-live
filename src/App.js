import React from 'react';
import AppBar from 'material-ui/AppBar';
import CreateLiveStream from './Components/CreateLiveStream';
import LiveStreamViewer from './Components/LiveStreamViewer';


var title = "Auction Live";

const App = () => (
    <div>

        <AppBar
            title={title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />

        <CreateLiveStream />
        <LiveStreamViewer/>
    </div>
);

export default App;
