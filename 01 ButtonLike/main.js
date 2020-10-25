class Header extends React.Component{
    render(){
        // visualizzo le proprietà di Header
        console.log(this.props);

        // const section = this.props.section
        const {section} = this.props;
        return <header>
                    <h1>    
                        Titolo Pagina
                    </h1>
                    <h3>
                        {section}
                    </h3>
                </header>;
    }
}

class Main extends React.Component{
    constructor(){
        // devo sempre richiamare super (in React)
        super();
        this.state = {
            counter :0
        }
    }

    onIncrement(){
        console.log("Counter");
        return this.setState({
            counter: this.state.counter+1
        })
    }

    onDecrement(){
        console.log("Counter");
        return this.setState({
            counter: this.state.counter-1
        })
    }

    render(){
        const {counter} = this.state;
        return <main>
                    <button class="pure-button" onClick={ (e) => this.onIncrement()}>Incrementa</button>
                    <button class="pure-button" onClick={ (e) => this.onDecrement()}>Decrementa</button>
                    <div>Contatore = {counter}</div>
                </main>;
    }
}

class Footer extends React.Component{
    render(){
        return <footer>Footer</footer>;
    }
}

class App extends React.Component{
    render(){
        return  <div id="app">
                    {/* section è una proprietà di props */}
                    <Header section="Nome Sezione" />
                    <Main />
                    <Footer />
                </div>;
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);