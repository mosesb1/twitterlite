const React = require('react');

class Index extends React.Component{
    render(){
        const {tweets} = this.props;
        return(
            <div>
                {
                    tweets.map((tweet) => (
                        <p>{tweet.content}</p>
                    ))
                }
            </div>
        )
    }
}

module.exports = Index;