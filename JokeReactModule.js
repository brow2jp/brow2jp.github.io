class JokeTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    useEffect(() => {
        const interval = setInterval( () => {
            const jokeResponse = fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
                .then(jokeResult => jokeResponse.json());
            console.log(jokeResponse);
            console.log(jokeResult);
            this.setState({ currentJoke: jokeResult.joke });
        },
        60000);

        return () => clearInterval(interval);
    }, [] );

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
