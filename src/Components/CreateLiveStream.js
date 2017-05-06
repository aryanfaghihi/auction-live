import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const containerStyle = {
    textAlign: 'center'
};

const buttonStyle = {
    margin: 12
};

const handleNewAuction = () => {
    window.createButtonClickHandler();
};


const CreateLiveStream = () => (
    <div style={containerStyle}>
        <TextField
            hintText="Name of your product"
            floatingLabelText="What do you want to sell?"
            style={{width: 400, fontSize: 20, height: 80}}
        />
        <RaisedButton label="Go live" onClick={handleNewAuction} primary={true} style={buttonStyle}/>
    </div>
);

export default CreateLiveStream;