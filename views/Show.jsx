const React = require('react');

class Show extends React.Component{
    render(){
        const {tweet} = this.props;
        return(
            <div>
                <p>{tweet.content}</p>
                <a href={`/home/${tweet._id}/edit`}>Edit tweet</a>
            </div>
        )
    }
}

module.exports = Show;