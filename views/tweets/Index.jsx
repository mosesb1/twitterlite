const React = require('react');

class Index extends React.Component{
    render(){
        const {tweets} = this.props;
        return(
            <div>
                <nav>
                    <a href='/tweets/new'>Create a tweet</a>
                </nav>
                {
                    tweets.map((tweet) => (
                        <a href={`/tweets/${tweet._id}`}>{tweet.content}<br/></a>
                    ))
                }
                <a href='/user/logout'><button>Logout</button></a>

            </div>
        )
    }
}

module.exports = Index;