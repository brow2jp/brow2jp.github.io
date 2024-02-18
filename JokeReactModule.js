class JokeTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    componentDidMount() {
        const jokeResponse = fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const jokeResult = jokeResponse.json();
        console.log(jokeResponse)
        console.log(jokeResult)
        this.setState({ currentJoke: jokeResult.joke });

        this.interval = setInterval( () => {
            const jokeResponse = fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
            const jokeResult = jokeResponse.json();
            this.setState({ currentJoke: jokeResult.joke });
        },
        60000)
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
