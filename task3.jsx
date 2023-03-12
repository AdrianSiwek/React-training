const ValidationText = (props) => <p>{props.txt}</p>

class Task3 extends React.Component {
    state = {
        isConfirm: false,
        isFormSubmitted: false,
    }

    handleInputChange = () => {
        this.setState({
            isConfirm: !this.state.isConfirm,
            isFormSubmitted: false,
        })
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        if(!this.state.isFormSubmitted){
            this.setState({
                isFormSubmitted: true,
            })
        }
    }

    handleValidation(){
        if(this.state.isFormSubmitted){
            if(this.state.isConfirm){
                return <ValidationText txt="Możesz obejrzeć film. Zapraszamy!"/>
            } else {
                return <ValidationText txt="Nie możesz obejrzeć filmu. Musisz mieć ukończone 16 lat!"/>
            }
        } else {return null}

    }

    render(){
        return (
            <>
            <h1>Kup bilet na horror roku!!!</h1>
            <form onSubmit={this.handleFormSubmit}>
                <label htmlFor="age">Mam ukończone 16 lat
                <input onChange={this.handleInputChange} type="checkbox" />
                </label>
                <br />
                <button>Kup bilet</button>
            </form>
            {this.handleValidation()}
            </>
        )
    }
}

ReactDOM.render(<Task3 />, document.getElementById('root'));