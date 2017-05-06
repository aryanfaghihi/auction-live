import React from 'react';
import AppBar from 'material-ui/AppBar';
import Example from './test';
import ModalBox from './modald';

var title = "Auction Live";

const App = () => (
	<div>
	  <AppBar
	    title={title} 
	    iconClassNameRight="muidocs-icon-navigation-expand-more"
	  />
	  <Example />
	 
  </div>
);

export default App;
