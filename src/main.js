import React from 'react';
import ReactDom from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  ReactDom.render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
