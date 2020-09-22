import React from 'react';
import { Link } from 'react-router-dom';

export default class Users extends React.Component {
    render() {
        const { params: { userId } } = this.props.match;
        return(
            <>
                <p>
                    <strong>Match Props: </strong>
                    <code>{JSON.stringify(this.props.match, null, 2)}</code>
                </p>
                <p>
                    <strong>Location Props: </strong>
                    <code>{JSON.stringify(this.props.location, null, 2)}</code>
                </p>
                <p>
                    <strong>
                        User ID: {userId}
                    </strong>
                </p>
            </>
        );
    }
}