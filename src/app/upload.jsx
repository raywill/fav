import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Upload from './components/upload'; // Our custom react component

injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<Upload />, document.getElementById('app'));
