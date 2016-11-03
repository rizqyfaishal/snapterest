/**
 * Created by Rizqy Faishal on 10/30/2016.
 */
var React = require('react'),
    ReactDOM  = require('react-dom'),
    Collection = require('./Collection.react');

var Application = React.createClass({
    getInitialState: function () {
        return {
            CollectionTweets: {}
        }
    },
    addTweetToCollection: function (tweet) {
        var collectionTweets = this.state.CollectionTweets;
        collectionTweets[tweet.id] = tweet;
        this.setState({
            CollectionTweets: collectionTweets
        });
    },
    removeTweetFromCollection: function (tweet) {
        var collectionTweets = this.state.CollectionTweets;
        delete  collectionTweets[teet.id];
        this.setState({
            CollectionTweets: collectionTweets
        });
    },
    removeAllTweetsFromCollection: function () {
        this.setState({
            CollectionTweets: {}
        })
    },
    render: function () {
        return  <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <Stream onAddTweetToCollection={this.state.addTweetToCollection}/>
                        </div>
                        <div className="col-md-8 text-center">
                            <Collection
                                onAddTweetToCollection={this.state.addTweetToCollection}
                                onDeleteTweetFromCollection={this.state.removeTweetFromCollection}
                                onDeleteAllTweetsFromCollection={this.state.removeAllTweetsFromCollection}
                                tweets={ this.state.CollectionTweets }/>
                        </div>
                    </div>
                </div>;
    }
});

module.exports = Application;