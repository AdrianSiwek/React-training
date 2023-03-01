const header = <h1 className='title'>Witaj na mojej stronie!</h1>

const classBig = "big"
const handleClick = ()=>alert("Click");
const main = (
<div>
    <h1 onClick={handleClick} className="red">Pierwszy artykuł</h1>
    <p>Lorem ipsum</p>
</div>
)

const footer = (
<footer>
    <p className={classBig}>Stopka</p>
</footer>
)

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById('root'));




// const element5 = (<div>
//   <section></section>
//   <section></section>
// </div>)


// class App extends React.Component {
//   state = {
//     counter: 0
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello!</h1>
//       </div>
//     );
//   }
// }


// ReactDOM.render(<App />, document.getElementById('root'))