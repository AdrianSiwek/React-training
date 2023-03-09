
// const User = (props) => {
// return (
//         <li>
//             <span>{props.name}</span>
//             <button onClick={props.delete}>Usuń</button>
//         </li>
// )}




// class Task1 extends React.Component {

//     state = {
//         people: [{
//             id: 1,
//             name: 'John B.', 
//         },
//         {
//             id: 2,
//             name: 'Julia K.',
//         },
//         {
//             id: 3,
//             name: 'Mark C.',
//         },
//         {
//             id: 4,
//             name:'Katrina N.',
//         }],
//     }

//     handleDelete(id){
//        const people = [...this.state.people];
//      const index = people.findedIndex(person => person.id === id);
//      people.splice(index, 1);
//      this.setState({ people});
    
//     render() {
//         return(
//             <ul>
//                 {this.state.people.map(user => 
//                  <User 
//                  user={user.name} 
//                  key = {user.id} 
//                  delete={this.handleDelete.bind(this, user.id)}
//                  />)}
//             </ul>
//         )
//     }
// }

// ReactDOM.render(<Task1/>, document.getElementById('root'));


// const data = {
//     users: [
//         {
//             id: 1,
//             name: 'John B.', 
//         },
//         {
//             id: 2,
//             name: 'Julia K.',
//         },
//         {
//             id: 3,
//             name: 'Mark C.',
//         },
//         {
//             id: 4,
//             name:'Katrina N.',
//         }

//     ]
// }

// const User = ({user, onDelete}) => (
//     <ul>
//         <li>
//             <span>{user.name}</span>
//             <button onClick={() => onDelete(user.id)}>Usuń</button>
//         </li>
//     </ul>
// )

// class Task1 extends React.Component {

//     state = {
//         people: [],
//     }

//     componentDidMount() {
//         this.setState({ people: this.props.data.users });
//     }

//     deleteUserById = (id) => {
//         const updatedPeople = this.state.people.filter(user => user.id !== id);
//         this.setState({ people: updatedPeople });
//     }

//     render() {
//         return(
//             <div>
//                 {this.state.people.map(user => (
//                     <User 
//                         user={user} 
//                         key={user.id} 
//                         onDelete={this.deleteUserById}
//                     />
//                 ))}
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Task1 data={data} />, document.getElementById('root'));

const User =(props) => {
    return (
        <li>
            <span>{props.name}</span>
            <button onClick={props.delete}>Usuń</button>
        </li>
    )
}

class Task2 extends React.Component {
    state = {
        people: [{
            id: 1,
            name: 'John B.', 
            },
            {
            id: 2,
            name: 'Julia K.',
            },
            {
            id: 3,
            name: 'Mark C.',
            },
            {
            id: 4,
            name:'Katrina N.',
            }],
            }

            handleDelete(id){
                const people = [...this.state.people];
                const index = people.findIndex(person => person.id === id);
                people.splice(index, 1);
                this.setState({people});
            }

    render() {
        const updatedPeople = this.state.people.map(user => 
        <User 
        name={user.name} 
        key={user.id}
        delete={this.handleDelete.bind(this, user.id)} />);
        return(
            <ul>
                {updatedPeople}
            </ul>
        )
    }
}


ReactDOM.render(<Task2/>, document.getElementById('root'));
