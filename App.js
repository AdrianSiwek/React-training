class ShopingList extends React.Component {
    state={
        list1: "tomato",
        list2: "cherry",
        list3: "cola",
        list4: "juice"
    }

    render(){
        return (
        <>
        <h1>List Shoping</h1>
        <ul>
            <ItemList name={this.state.list1} example={2+2} />
            <ItemList name={this.state.list2} example={2+2}/>
            <ItemList name={this.state.list3} example={2+2}/>
            <ItemList name={this.state.list4} example={2+2}/>
        </ul>
        </>
        )
    }
}

class ItemList extends React.Component {
    render(){
    return (
        <li>{this.props.name} {this.props.example}</li>
    )
}
}



ReactDOM.render(<ShopingList />, document.getElementById('root'));