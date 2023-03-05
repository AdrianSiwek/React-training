class Shoop extends React.Component {
    state={
        magazinProduct: 9,
        shopingCart: 1,
    }

    handleShoopingCartRemove =()=>{
        this.setState({
            shopingCart: this.state.shopingCart -1,
        });
    }


    handleShoopingCartAdd =()=>{
        this.setState({
            shopingCart: this.state.shopingCart + 1,
        });
    }

    handleBuy =()=>{
        this.setState({
            magazinProduct: this.state.magazinProduct - this.state.shopingCart,
            shopingCart: 0,
        })
    }
    render() {
        return (
            <div>
            <button 
            disabled = {this.state.shopingCart === 0?false:true}
            onClick = {this.handleShoopingCartRemove}
            >-</button>
            <span style={this.state.shopingCart === 0 ?{opacity: 0.3} : {}}>{this.state.shopingCart}</span>
            <button 
            onClick={this.handleShoopingCartAdd}
            disabled = {this.state.shopingCart === this.state.magazinProduct?true:false}
            >+</button>
            {this.state.shopingCart > 0 && <button onClick ={this.handleBuy}>Kup</button>}
            </div>
        )
    }
}

ReactDOM.render(<Shoop />, document.getElementById('root'));