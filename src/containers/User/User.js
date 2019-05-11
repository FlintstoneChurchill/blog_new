import React, {Component} from 'react';
import axios from "../../axios-blog";
import Spinner from "../../components/UI/Spinner/Spinner";

class User extends Component {
    state = {
        user: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`/users/${id}`).then(response => {
            const user = response.data;
            this.setState({user});
        });
    }

    render() {
        const user = this.state.user;
        if (!user) {
            return <Spinner/>;
        }
        return (
            <div className="user">
                <h1 className="main_title">{user.name}</h1>
                <ul className="user__info">
                    <li className="user__info_item"><b>Username</b>: {user.username}</li>
                    <li className="user__info_item"><b>Email</b>: {user.email}</li>
                    <li className="user__info_item">
                        <b>Address</b>:
                        <ul className="user__info">
                            <li className="user__info_item">City: {user.address.city}</li>
                            <li className="user__info_item">Street: {user.address.street}</li>
                            <li className="user__info_item">Suite: {user.address.suite}</li>
                        </ul>
                    </li>
                    <li className="user__info">
                        <b>Company</b>
                        <ul className="user__info_item">
                            <li className="user__info_item">"{user.company.name}" - {user.company.catchPhrase}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default User;
