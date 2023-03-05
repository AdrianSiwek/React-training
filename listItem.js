const data = {
    users: [
        {
            id: 1,
            age: 25,
            name: 'John',
            sex: 'male'
        },
        {
            id: 2,
            age: 37,
            name: 'Julia',
            sex: 'female'
        },
        {
            id: 3,
            age: 43,
            name: 'Mark',
            sex:'male'
        },
        {
            id: 4,
            age: 49,
            name:'Katrina',
            sex:'female',
        }

    ]
}


const User = ({user}) => (
    <div className ="userInfo">
        <h1>{user.name}</h1>
        <p>Information of user</p>
        <p>User's age: <strong>{user.age}</strong></p>
        <p>User's gender: {user.sex}</p>
    </div>
)


class ListItem extends React.Component {
    state={
        select: "all",
    }

    handleUsersFilter = (option)=>{
        this.setState({
            select: option
        })
    }

    userList=()=>{
        let users = this.props.data.users;
        switch(this.state.select) {
            case "all":
                return users.map(user => <User user={user} key = {user.id} />);
            case "female":
            users = users.filter(user => user.sex === 'female');
            return users.map(user => <User user={user} key = {user.id}/>);
            case "male":
            users = users.filter(user => user.sex === 'male');
            return users.map(user => <User user={user} key = {user.id}/>);
        }
    }

    render(){
        

        return(
            <div>
                <button onClick={this.handleUsersFilter.bind(this, "all")}>All Users</button>
                <button onClick={this.handleUsersFilter.bind(this, "female")}>Female</button>
                <button onClick={this.handleUsersFilter.bind(this, "male")}>Male</button>
                {this.userList()}
            </div>
        )
    }
}

ReactDOM.render(<ListItem data ={data}/>, document.getElementById('root'));