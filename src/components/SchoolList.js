import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import MinifiedCard from "./cards/MinifiedCard";

class SchoolList extends Component {
  render() {
    const { schools, loadMore, hasMore } = this.props;

    const schoolList = schools.map(school => (
      <div className="col s12 m6 l4" key={school.pid}>
        <MinifiedCard {...school} />
      </div>
    ));

    return (
      <div className="row">
        <InfiniteScroll
          pageStart={-1}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          {...{ loadMore, hasMore }}
        >
          {schoolList}
        </InfiniteScroll>
      </div>
    );
  }
}

export default SchoolList;
