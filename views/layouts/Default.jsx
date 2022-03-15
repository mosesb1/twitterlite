const React = require('react');

class Default extends React.Component{
    render(){
        return(
            <html lang='en'>
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel='stylesheet' href='css/styles.css'/>
                    <title>Twitter App</title>
                </head>
                <body>
                    <nav className='nav'>
                        <ul>
                            <a href='/tweets/home'>Home</a>
                            <a href='/tweets/mytweets'>My Tweets</a>
                            <a href='/tweets/liked'>Liked Tweets</a>
                            <a href='/tweets'>All Tweets</a>
                            <a href='/tweets/new'>Create Tweet</a>
                            <a href='/user/session/logout'>Logout</a>
                        </ul>
                    </nav>
                    <div className='tweets'>
                        {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Default;