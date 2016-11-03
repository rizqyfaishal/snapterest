var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./Header.react'),
    Tweet = require('./Tweet.react');


var StreamTweet = React.createClass({
    getInitialState: function () {
        console.log('[Snapterest] StreamTweet: Running getInitalState()');
        return {
            headerText: null,
            numberOfCharactersIsIncreasing: null
        }
    },
    componentWillMount: function () {
        console.log('[Snapterest] StreamTweet: Running componentWillMount()');
        this.setState({
            headerText: 'Latest public photso from twitter',
            numberOfCharactersIsIncreasing: true
        });

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },
    componentDidMount: function () {
        console.log('[Snapterest] StreamTweet: Running componentDidMount()');
        
    },
    render: function () {
        console.log('[Snapterest] StreamTweet: Running Remder()');
        return  <section>
                    <Header text={this.state.headerText}/>
                    <Tweet tweet={this.props.tweet}
                            onImageClick={this.props.onAddTweetToCollection}/>
                </section>;
    }
});

module.exports = StreamTweet;