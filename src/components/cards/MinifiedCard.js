import React, { Component } from "react";
import ReactImageFallback from "react-image-fallback";
import "./cards.css";

const facilityIcons = {
  Library: "fas fa-book",
  Cafeteria: "fas fa-mug-hot",
  Hostel: "fas fa-hotel",
  "Sports Complex": "fas fa-table-tennis",
  Gym: "fas fa-dumbbell",
  "Hospital / Medical Facilities": "fas fa-stethoscope",
  "Shuttle Service": "fas fa-shuttle-van",
  Auditorium: "fas fa-american-sign-language-interpreting",
  "Convenience Store": "fas fa-store-alt",
  Labs: "fas fa-flask"
};

const defaultFacilityText = "Facilities";

class MinifiedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facility: defaultFacilityText
    };
  }

  changeFacilityText = e => {
    this.setState({
      ...this.state,
      facility: e.currentTarget.dataset.facility
    });
  };

  resetFacilityText = () => {
    this.setState({
      ...this.state,
      facility: defaultFacilityText
    });
  };

  render() {
    const school = this.props;

    const facilities = school.facilities.map(facility => (
      <span
        className="facility-fab btn-floating btn indigo lighten-2 waves-effect waves-light"
        key={facility}
        data-facility={facility}
        onMouseEnter={this.changeFacilityText}
        onMouseLeave={this.resetFacilityText}
      >
        <i className={facilityIcons[facility]} />
      </span>
    ));

    return (
      <div className="card hoverable">
        <div className="card-image">
          {/* <img src={school.thumb} className="" /> */}
          <ReactImageFallback
            src={school.thumb}
            fallbackImage="my-backup.png"
            initialImage="loader.gif"
          />
          <span className="card-title indigo lighten-2">{school.name}</span>
          <a className="card-info-button btn-floating halfway-fab waves-effect waves-light indigo">
            <i className="fas fa-info" />
          </a>
        </div>
        {/* <div className="card-content">
        <h6 class="truncate">{school.about}</h6>
      </div> */}
        <div className="card-tabs indigo lighten-1">
          <br />
          <ul className="tabs indigo lighten-1 white-text tabs-fixed-width">
            <li className="tab">
              <i className="fas fa-university" />
              &ensp;
              {school.board}
            </li>
            <li className="tab">
              <i className="fas fa-language" />
              &ensp;
              {school.medium}
            </li>
            <li className="tab">
              <i className="fas fa-venus-mars" />
              &ensp;
              {school.gender}
            </li>
          </ul>
        </div>
        <div className="card-content center-align">
          <h6 class="truncate">{this.state.facility}</h6>
          {facilities}
        </div>
      </div>
    );
  }
}

export default MinifiedCard;
