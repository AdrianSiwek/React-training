class Form extends React.Component {
    state={
        city:"",
        text:"",
        isLoved:false,
        number: "0",
    }


    handleChange = (event) => {
        if(event.target.name === "isLoved"){
            this.setState({
                [event.target.name]:event.target.checked
            }); 
        }
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // handleCityChange = (event) => {
    //     this.setState({
    //         city: event.target.value
    //     });
    // }

    // handleTextChange = (event) => {
    //     this.setState({
    //         text: event.target.value
    //     });
    // }

    // handleIsLovedChange = (event) => {
    //     this.setState({
    //         isLoved: event.target.checked
    //     });
    // }

    // handleVisitNumberChange = (event) => {
    //     this.setState({
    //         number: event.target.value
    //     });
    // }

    render() {
        return(
            <div>
                <label>
                    Podaj miasto
                    <input
                    name="city"
                    value={this.state.city}
                     onChange={this.handleChange}
                      type="text" 
                    />
                </label>
                <br />
                <label>
                    Napisz coś o tym mieście
                    <textarea
                    name="text"
                    value={this.state.text}
                    onChange={this.handleChange}>
                    </textarea>
                </label>
                <br />
                <label>
                    Czy kochasz to miasto?
                    <input
                    name="isLoved"
                    type="checkbox"
                    checked={this.state.isLoved}
                    onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Ile razy odwiedziłeś to miasto?
                    <select
                    name="number"
                    value={this.state.number}
                    onChange={this.handleChange}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">więcej</option>
                    </select>
                </label>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById('root'));