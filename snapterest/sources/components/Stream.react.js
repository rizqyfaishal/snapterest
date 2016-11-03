/**
 * Created by Rizqy Faishal on 10/31/2016.
 */
var React = require('react'),
    ReactDOM = require('react-dom'),
    SnapkiteStreamClient = require('snapkite-stream-client'),
    Header = require('./Header.react'),
    StreamTweet = require('./StreamTweet.react');


var Stream = React.createClass({
    getInitialState: function () {
        return {
            tweet: null
        }
    },
    componentDidMount: function () {
        SnapkiteStreamClient.initialiseStream(this.handleTweet);
    },
    handleTweet: function (tweet) {
        this.setState({
            tweet: tweet
        })
    },
    componentWillUnmount: function () {
        SnapkiteStreamClient.destroyStream();
    },
    handleNewTweet: function (newTweet) {
        this.setState({
            tweet: newTweet
        })
    },
    render: function () {
        var tweet = this.state.tweet;

        if(tweet){
            return <StreamTweet tweet={tweet} onAddTweetToCollection={this.props.onAddTweetToCollection}/>
        }
        return <Header text="Waiting for public photos from tweater"/>;
    }
});

module.exports = Stream;