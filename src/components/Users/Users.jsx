import React from 'react'
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.users.map((m) => <div key={m.id}>
                    <span>
                        <div>{m.name}</div>
                        <div>{"m.location"}</div>
                        <button>Follow</button>
                    </span>
                </div>)
            }
        </div>
    }
}
export default Users;