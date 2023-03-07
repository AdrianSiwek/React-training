
//Addition and subtraction


class Counter extends React.Component {

    state={
        count:0,
        result:this.props.result
    }


    handleMathClick=(type, number)=> {
        // debugger
        if(type === 'decrement'){
            this.setState(prevState => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if(type === 'increment'){
            this.setState(prevState =>({
                count: prevState.count +1,
                result: prevState.result + number
            }))
        } else if (type === 'reset'){
            this.setState(prevState =>({
                count: prevState.count +1,
                result: 0
            }))
        }
    }


    render(){
        return(
            <React.Fragment>
            <MathButton 
            name="-1" 
            number = "1" 
            type="decrement"
            click={this.handleMathClick}
            />
            <MathButton 
            name="Reset" 
            type="reset"
            click={this.handleMathClick}
            />
            <MathButton 
            name="+1" 
            number = "1" 
            type="increment"
            click={this.handleMathClick}
            />
            <ResultPanel count={this.state.count} result = {this.state.result}/>
            </React.Fragment>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return(
        <button onClick = {() => props.click(props.type, number)}>{props.name}</button>
    )
}

const ResultPanel = (props) => {
    return(
        <>
        <h1>Liczba kliknięć :{props.count}{props.count>10?<span>Przeciążenie procesora</span>:null}</h1>
            <h1>Wynik :{props.result}</h1>
        </>
    )
}

const StartValue = 0
ReactDOM.render(<Counter result = {StartValue} />, document.getElementById('root'));


{/* <button onClick ={() => this.handleMathClick('decrement', 1)}>+1</button>
            <button onClick ={this.handleMathClick.bind(this, 'increment', 1)}>-1</button>
            <button onClick={this.handleMathClick.bind(this, 'reset')}>Reset</button> */}


//Show/hide button


// class Message extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             messageIsActive: false
//         }
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(){
//         this.setState({
//             messageIsActive: !this.state.messageIsActive});
//     }


//     render() {
//         console.log(this.state.messageIsActive)
//         const text = "Lorem ipsum dolor sit am"
//         return (
//             <React.Fragment>
//             <button onClick={this.handleClick}>
//                 {this.state.messageIsActive ? 'Hidden' : 'Show'}
//                 </button>
//             {this.state.messageIsActive && <p>{text}</p>}
//             </React.Fragment>
//         )
//     }
// }

// ReactDOM.render(<Message />, document.getElementById('root'));



//Adding text and displaying in h1 and reset button

// class App extends React.Component {
//     state = {
//         value: ""
//     }


//     handleInputChange =(event)=>{
//         console.log(event.target.value)
//         this.setState({ value: event.target.value})
//     }

//     handleResetClick = ()=>{
//         this.setState({ value: ""})
//     }


//     render () {
//         return (
//             <React.Fragment>
//                 <input value = {this.state.value} placeholder = "wpisz..." onChange = {this.handleInputChange} type='text'/>
//                 <button onClick = {this.handleResetClick}>Reset</button>
//                 <h1 className = "title">{this.state.value}</h1>
//             </React.Fragment>
//         )
//     }
// }


// ReactDOM.render(<App />, document.getElementById('root'));




//Adding a number or number

// class Application extends React.Component {
//     state = {
//         text: ""
//     };


//     handleClick = ()=> {
//         const number = Math.floor(Math.random() * 10) + 1;
//         // this.setState({ text: this.state.text + letter });

//         this.setState(() => ({
//             text: this.state.text + number})
//         )
//     }



//     render() {
//         return(
//             <React.Fragment>
//                 <button onClick={this.handleClick}>{this.props.btnNumber}</button>
//                 <PanelResult text = {this.state.text}/>
//                 </React.Fragment>
//         )
//     }
// }

// const PanelResult = (props) => {
//     return (
//         <h1>{props.text}</h1>
//     )
// }

// ReactDOM.render(<Application btnNumber = "Dodaj Cyfrę"/>, document.getElementById('root'));





//ShopingList

// class ShopingList extends React.Component {
//     state={
//         list1: "tomato",
//         list2: "cherry",
//         list3: "cola",
//         list4: "juice"
//     }

//     render(){
//         return (
//         <>
//         <h1>List Shoping</h1>
//         <ul>
//             <ItemList name={this.state.list1} example={2+2} />
//             <ItemList name={this.state.list2} example={2+2}/>
//             <ItemList name={this.state.list3} example={2+2}/>
//             <ItemList name={this.state.list4} example={2+2}/>
//         </ul>
//         </>
//         )
//     }
// }

// class ItemList extends React.Component {
//     render(){
//     return (
//         <li>{this.props.name} {this.props.example}</li>
//     )
// }
// }



// ReactDOM.render(<ShopingList />, document.getElementById('root'));