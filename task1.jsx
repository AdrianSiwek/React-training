class Task1 extends React.Component {
    state = {
        option: "",
        options: ['pierwsza wróżba', 'druga wróżba', 'trzecia wróżba'],
        value: "",
    }


    handleChangeValue = (event) => {
        this.setState({
            value: event.target.value
        })
    }
    

    handleChangeOmen = () =>
    this.setState({
        option: this.state.options[Math.floor(Math.random() * this.state.options.length)],
    })

    handlePushOmen = () => 
    this.setState({
        options: this.state.options.concat(this.state.value),
        value: "",
    })

    


    render(){
        
        return (
            <>
            <button onClick={this.handleChangeOmen}>Zobacz wróżbe</button>
            <br />
            <label>
                <input 
                    type="text"
                    value ={this.state.value}
                    onChange={this.handleChangeValue} 
                />
                </label>
            <button onClick ={this.handlePushOmen}>Dodaj wróżbe</button>
            <br />
            <h1>{this.state.option}</h1>
            </>
        )
    }
}

ReactDOM.render(<Task1/>, document.getElementById('root'));