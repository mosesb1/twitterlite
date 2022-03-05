const React = require('react');

class Index extends React.Component{
    render(){
        const {tweets} = this.props;
        return(
            <div>
                <nav>
                    <a href='/new'>Create a tweet</a>
                </nav>
                {
                    tweets.map((tweet) => (
                        <a href={`/home/${tweet._id}`}>{tweet.content}<br/></a>
                    ))
                }
            </div>
        )
    }
}

module.exports = Index;