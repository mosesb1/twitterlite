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
                        <a href='/tweets/home'>Home</a>
                        <a href='/tweets/mytweets'>My Tweets</a>
                        <a href='/tweets/liked'>Liked Tweets</a>
                        <a href='/tweets'>All Tweets</a>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Default;