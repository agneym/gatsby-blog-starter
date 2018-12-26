const React = require('react');

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">
      Sorry! This site requires JavaScript to be enabled.
    </noscript>,
  ]);
};
