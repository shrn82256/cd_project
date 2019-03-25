import React, { Component } from "react";

class SchoolDetails extends Component {
    state = {
        school: [],
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        console.log(id);
        fetch("http://schoolhub-heroku.herokuapp.com/" + id).then(res => res.json()).then(
            data =>
                this.setState({
                    school: data,
                })
        ).catch(error => {
            console.log(error.message);
        })
    }
    render() {
        const List = this.state.school.map(res => {
            return (
                <div className="container" key={res.pid}>
                    <div className="card">
                    <div className="row">
                        <div className="col s3">
                        <img src={res.thumb} alt="" className="activator" />
                        </div>
                        <div className="col s4">
                            <p>{res.name}</p>
                            <p>{res.board}</p>
                            <p>{res.medium}</p>
                            <p>{res.gender}</p>
                        </div>
                        <div className="col s5">
                            <li>{res.contact[0]}</li>
                            <li>{res.contact[1]}</li>
                            <li>{res.contact[2]}</li>
                        </div>
                        <div className="col">
                            <p>{res.about}</p>
                        </div>
                    </div>  
                    </div>
                    
                    {/* <div className="card">
                        <div className="card-image waves-effect waves-block waves-light">
                            <img src={res.banner} alt="" className="activator" />
                        </div>
                        <div className="card-content">
                            <h5 className="card-title">{res.name}</h5>
                            <p>{res.board}</p>
                            <p>{res.medium}</p>
                            <p>{res.gender}</p>
                            <p>{res.about}</p>
                        </div>
                    </div> */}
                </div>
            )
        }
        )
        return (
            <div>
                {List}
            </div>
        )
    }
}

export default SchoolDetails;