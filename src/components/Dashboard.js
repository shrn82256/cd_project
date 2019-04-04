import React, { Component } from "react";
import axios from "axios";
import SchoolList from "./SchoolList";

// const api_url = "http://schoolhub-heroku.herokuapp.com/";
const api_url = "http://localhost:5000/";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.schools = this.fetchAllSchools();

    console.log(this.schools);

    this.state = {
      currentSchools: [],
      hasMoreSchools: true
    };
  }

  fetchAllSchools = async () => {
    const response = await fetch(api_url);
    const result = await response.json();
    return result;
  };

  loadSchools = page => {
    const multiplier = 20;
    const currentSchools = this.state.currentSchools.concat(
      this.schools.slice(page * multiplier, (page + 1) * multiplier)
    );
    console.log(this.schools.slice(page * multiplier, (page + 1) * multiplier));
    console.log(this.schools);
    this.setState({
      ...this.state,
      currentSchools
    });
  };

  componentWillMount() {}

  render() {
    const { currentSchools, page, hasMoreSchools } = this.state;

    return (
      <section className="section container">
        <SchoolList
          {...{
            schools: currentSchools,
            page,
            hasMore: hasMoreSchools,
            loadMore: this.loadSchools
          }}
        />
      </section>
    );
  }
}

export default Dashboard;
