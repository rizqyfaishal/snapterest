var React = require('react');
var ReactDOM = require('react-dom');

var ReactClass = React.createClass({
  getInitialState: function () {
      return {
          isHidden: true,
      }
  },
  handleClick: function () {
     this.setState({
         isHidden: !this.state.isHidden
     })
  } ,
  render: function () {
        var title = 'This is React component!';
        var headerElemenet = React.createElement('h1',{ className: 'header', key: 'header'}, title);
        var buttonElement = React.createElement('button',{ className: 'btn btn-primary', onClick: this.handleClick , key: 'button'},'Click!');
        if(this.state.isHidden){
            return React.createElement('div',{ className: 'container', key: 'container'}, [buttonElement]);
        }
      return React.createElement('div',{ className: 'container', key: 'container'},[buttonElement, headerElemenet]);
  }
});

var ReactComponentElement = React.createElement(ReactClass);
var ReactComponennt = ReactDOM.render(ReactComponentElement,document.getElementById('react-application'));
