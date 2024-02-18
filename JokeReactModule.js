class JokeTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
                .then(jokeResult => jokeResponse.json())
            this.setState({ currentJoke: jokeResult.joke });
        },
        60000)
        console.log(jokeResult.joke)
        console.log(this.state.currentJoke)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            this.state.currentJoke
        );
    }
}

ReactDOM.render(
    React.createElement(JokeTimer),
    document.getElementById('joke-timer')
);
