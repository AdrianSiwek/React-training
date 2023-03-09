// const Dollars =(props)=> (
//     <div>Wartość w dolarach: {props.cash<=0?"":(props.cash / props.ratio).toFixed(2)}</div>
// )

// const Euro =(props)=> (
//     <div>Wartość w euro: {props.cash<=0?"":(props.cash / props.ratio).toFixed(2)}</div>
// )

const Cash =(props)=> {
    const value = props.cash<=0?"":(props.cash / props.ratio * props.prices).toFixed(2);
    return(
    <div>{props.title} {value}</div>
)
}


class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        // ratioDollar: 3.7,
        // ratioEuro: 4.4,
        product: "",
}

static defaultProps = {
    currencies:[
        {
            id: 1,
            name: "zloty",
            ratio: 1,
            title: "Wartość w złotych:",
        },
        {
            id: 2,
            name: "dollar",
            ratio: 3.7,
            title: "Wartość w dolarach:",
        },
        {
            id: 3,
            name: "dollar",
            ratio: 4.4,
            title: "Wartość w euro:",
        },
        {
            id: 4,
            name: "pound",
            ratio: 4.6,
            title: "Wartość w funtach:",
        },
    ],
    prices:{
        electricty:.59,
        gas: 7.29,
        orange: 4.79,
    }
};

selectPrice(select){
    const price = this.props.prices[select];
    return price;
}



handleChange = (event) => {
    this.setState({
        amount: event.target.value
    })
}

handleProductChange = (event) => {
    this.setState({
        product: event.target.value,
        amount: "",
    })
}

inserSuffix(select){
    if(select==="electricty") return <em>kWh</em>
    else if(select==="gas") return <em>litry</em>
    else if(select==="orange") return <em>kg</em>
    else return null
}

render(){
    const {amount, product} = this.state;
    const price = this.selectPrice(product);
    const calculators = this.props.currencies.map(currency => (
        <Cash 
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        prices={price}
        />
    ))
    return(
        <div>
            <label>Wybierz produkt:
                <select 
                value ={product}
                onChange={this.handleProductChange}>
                    <option value="electricty">prąd</option>
                    <option value="gas">benzyna</option>
                    <option value="orange">pomarańcze</option>
                </select>
            </label>
            <br />
            <label>
                <input 
                type="number"
                value={amount}
                onChange={this.handleChange} />
                {this.inserSuffix(this.state.product)}
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