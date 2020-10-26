class ButtonCounter extends React.Component{
    render(){
        console.log(this.props);
        const {counter} = this.props;
        return  <div>
                    <button class="pure-button" onClick={ this.props.onIncrement}>Incrementa</button>
                    <button class="pure-button" onClick={ this.props.onDecrement}>Decrementa</button>
                    <div>Contatore = {counter}</div>
                </div>
        return "";
    }
}

class SingleCounter extends React.Component{
    constructor(){
        super();

        this.state = {
            counter :0
        };
    }

    incrementLocal(){
        this.setState({
            counter: this.state.counter +1
        })
    }

    render(){
        const {counter} = this.state;
        return (
            <div>
                <button onClick={(e)=>{this.incrementLocal()}}>Incrementa</button>
                <div>
                    <span>CONTATORE: </span>
                    <span>{counter}</span>
                </div>
            </div>
        )
    }
}


class ButtonReset extends React.Component{
    
    constructor(){
        super();

        this.state = {
            counter :0
        };
    }
    
    render(){
        console.log("Reset", this.props);
        const {counter} = this.state;
        return (
            <div>
                <button onClick={this.props.onReset}>Reset</button>
                <div>
                    <span>RESET: </span>
                    <span>{counter}</span>
                </div>
            </div>
        )
    }
}