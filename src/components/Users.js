import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
    constructor(props) {
      super(props);
      this.redirectToAbout = this.redirectToAbout.bind(this);
    }

    redirectToAbout() {
      this.props.history.push('/about');
    }

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
            <div>
                <h3>Users Page</h3>
                Title: {this.props.title}
                {users.map((user, index) => (
                    <h5 key={index}>
                        <Link to={`/user/${index + 1}`}>{user.name}'s Page</Link>
                    </h5>
                ))}
                <button onClick={this.redirectToAbout}>
                  Переход на About
                </button>
            </div>
        )
    }
}