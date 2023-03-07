// const Dollars =(props)=> (
//     <div>Wartość w dolarach: {props.cash<=0?"":(props.cash / props.ratio).toFixed(2)}</div>
// )

// const Euro =(props)=> (
//     <div>Wartość w euro: {props.cash<=0?"":(props.cash / props.ratio).toFixed(2)}</div>
// )

const Cash =(props)=> {
    const value = props.cash<=0?"":(props.cash / props.ratio).toFixed(2);
    return(
    <div>{props.title} {value}</div>
)
}


class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        // ratioDollar: 3.7,
        // ratioEuro: 4.4,
}

currencies=[
    {
        id: 1,
        name: "dollar",
        ratio: 3.7,
        title: "Wartość w dolarach:",
    },
    {
        id: 1,
        name: "dollar",
        ratio: 4.4,
        title: "Wartość w euro:",
    },
    {
        id: 1,
        name: "pound",
        ratio: 4.6,
        title: "Wartość w funtach:",
    },
]

handleChange = (event) => {
    this.setState({
        amount: event.target.value
    })
}

render(){
    const {amount} = this.state;
    const calculators = this.currencies.map(currency => (
        <Cash 
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        />
    ))
    return(
        <div>
            <label>
                <input 
                type="number"
                value={amount}
                onChange={this.handleChange} />
            </label>
            {/* <Dollars 
            cash={amount}
            ratio={ratioDollar}/>
            <Euro 
            cash={amount}
            ratio={ratioEuro}/> */}
            {/* <Cash
            text="Wartość w dolarach:"
                cash={amount}
                ratio={ratioDollar}
            />
            <Cash
            text="Wartość w euro:"
            cash={amount}
            ratio={ratioEuro}
            /> */}
            {calculators}
        </div>
    )
}
}

ReactDOM.render(<ExchangeCounter />, document.getElementById('root'));