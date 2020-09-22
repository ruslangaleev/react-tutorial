import React from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
    render() {
        const users = [
            {
              name: `Param`,
            },
            {
              name: `Vennila`,
            },
            {
              name: `Afrin`,
            },
          ];
        return(
            <>
                <h3>Users Page</h3>
                Title: {this.props.title}
                {users.map((user, index) => (
                    <h5 key={index}>
                        <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
                    </h5>
                ))}
            </>
        )
    }
}