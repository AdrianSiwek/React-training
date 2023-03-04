const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;

const NegativeMessage = () => <p>Nie możesz obejrzeć filmu. Musisz mieć ukończone 16 lat!</p>



class TicketShop extends React.Component {

    state = {
        isConfirmed: false,
        isFormSubmitted: false,
    }

    handleCheckboxChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isFormSubmitted:false,
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (!this.state.isFormSubmitted) {
        this.setState({
            isFormSubmitted: true});
    }
    }

    displayMessage = ()=>{
        if(this.state.isFormSubmitted){
        if(this.state.isConfirmed){
            return <PositiveMessage />
        } else {
            return <NegativeMessage />
        }
    }else {return null}
    }

    render() {
        return (
            <>
            <h1>Kup bilet na horror roku!!!</h1>
            <form onSubmit={this.handleFormSubmit}>
            <input 
            type="checkbox" 
            id='age' 
            onChange = {this.handleCheckboxChange} 
            checked ={this.isConfirmed}
            />
            <label htmlFor="age">Mam conajmniej 16 lat</label>
            <br />
            <button>Kup bilet</button>
            </form>
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('rooot'));