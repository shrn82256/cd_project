import React, { Component } from "react";
import {NavLink} from 'react-router-dom';

class Schools extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        fetch("http://schoolhub-heroku.herokuapp.com/").then(res => res.json()).then(data =>
            this.setState({
                data,
            })
        )
    }
    render() {
        const schoolList = this.state.data.map(res => {
            return (
                <div className="data" id={res.pid}>
                    <ul className="collections">
                        <li className="collections-item">
                            <div className="card horizontal">
                                <div className="card-image">
                                    <img src={res.thumb} alt="" />
                                </div>
                                <div className="card-stacked card-body">
                                    <div className="card-content">
                                        <div className="card-title">
                                           <NavLink to={'/SchoolDetails/'+res.pid} >{res.name}</NavLink>
                                        </div>
                                        <p>{res.board}</p>
                                        <p>{res.medium}</p>
                                        <p>{res.gender}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            )
        })
        return (
            <div className="schools">
                {schoolList}
            </div>
        )
    }
}
export default Schools;
