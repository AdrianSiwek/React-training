// const PositiveMessage = () => <p>Możesz obejrzeć film. Zapraszamy!</p>;

// const NegativeMessage = () => <p>Nie możesz obejrzeć filmu. Musisz mieć ukończone 16 lat!</p>
const ValidationMessage = (props) => <p>{props.txt}</p>

const OrderForm = (props) => (
    <form onSubmit={props.submit}>
            <input 
            type="checkbox" 
            id='age' 
            onChange = {props.change} 
            checked ={props.checked}
            />
            <label htmlFor="age">Mam conajmniej 16 lat</label>
            <br />
            <button>Kup bilet</button>
    </form>
)


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
            return <ValidationMessage txt="Możesz obejrzeć film. Zapraszamy!"/>
        } else {
            return <ValidationMessage txt="Nie możesz obejrzeć filmu. Musisz mieć ukończone 16 lat!"/>
        }
    }else {return null}
    }

    render() {
        return (
            <>
            <h1>Kup bilet na horror roku!!!</h1>
            <OrderForm 
                change ={this.handleCheckboxChange}
                submit = {this.handleFormSubmit}
                checked ={this.isConfirmed}
            />
            {this.displayMessage()}
            </>
        )
    }
}

ReactDOM.render(<TicketShop />, document.getElementById('rooot'));