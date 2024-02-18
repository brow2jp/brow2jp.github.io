class JokeTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentJoke: null
        };
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
                .then(result => response.json())
            this.setState({ currentJoke: result.joke });
        },
        60000)
        console.log(response)
        console.log(response.joke)
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
