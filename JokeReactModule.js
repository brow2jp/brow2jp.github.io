class JokeTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    async fetchJoke () {
        const jokeResponse = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        const jokeResult = await jokeResponse.json();
        this.setState({ currentJoke: jokeResult.joke });
    }

    async componentDidMount() {
        this.fetchJoke()
        this.interval = setInterval( () => {
            this.fetchJoke()
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
