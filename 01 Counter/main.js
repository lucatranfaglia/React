class Header extends React.Component{
    render(){
        // visualizzo le proprietà di Header
        console.log(this.props);

        // const section = this.props.section
        const {section} = this.props;
        const {titolo, subtitolo} = this.props;
        return <header>
                    <h1>    
                        {titolo}
                    </h1>
                    <h2>    
                        {subtitolo}
                    </h2>
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
    
    onReset(){
        console.log("Reset");
        return this.setState({
            counter: 0
        })
    }

    render(){
        const {counter} = this.state;
        return  (
                    <main>
                        <ButtonCounter counter={counter} onIncrement={ (e) => this.onIncrement()} onDecrement={ (e) => this.onDecrement()} ></ButtonCounter>
                        <SingleCounter counter={counter} onIncrement={ (e) => this.onIncrement()} onDecrement={ (e) => this.onDecrement()} ></SingleCounter>
                        <ButtonReset counter={counter} onReset={ (e) => this.onReset()}></ButtonReset>
                        {/* <button class="pure-button" onClick={ (e) => this.onIncrement()}>Incrementa</button>
                        <button class="pure-button" onClick={ (e) => this.onDecrement()}>Decrementa</button> */}
                        {/* <div>Contatore = {counter}</div> */}
                    </main>
                );
    }
}

class Footer extends React.Component{
    render(){
        return <footer>Footer</footer>;
    }
}


class App extends React.Component{
    render(){
        // titoloApp = this.props.titoloApp - TITOLO PRESO DA APP
        const {titoloApp} = this.props;
        return  <div id="app">
                    {/* section è una proprietà di props */}
                    <Header section="Sotto Sezione" titolo={titoloApp} subtitolo="Sottotitolo" />
                    <Main />
                    <Footer />
                </div>;
    }
}

ReactDOM.render(
    <App titoloApp="Titolo App"/>,
    document.getElementById('root')
);