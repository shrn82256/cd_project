import React,{Component} from "react";

class Schools extends Component{
    state = {
        data :[],
    }
    componentDidMount(){
        fetch("http://schoolhub-heroku.herokuapp.com/").then(res => res.json()).then( data=>
        this.setState({
                data,
            })
        )
    }
    render(){
        const schoolList = this.state.data.map(res => {
            return(
                <div className="data" id={res.pid}>
                    <ul className="collections">
                        <li className="collections-item">
                            <div className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <p>{res.name}</p>
                                    </div>
                                    <div className="card-content">
                                        <img src={res.thumb} alt=""/>
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
        return(
            <div className="schools">
                {schoolList}
            </div>
        )
    }
}
export default Schools;
