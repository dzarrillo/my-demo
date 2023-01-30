import { Component } from "react";
import "./CustomerCard.css";

class CustomerCard extends Component {
  render() {
    const { name, email } = this.props;
    return (
      <div className="card">
        <img
          src={`https://robohash.org/${email}?set=set2&size=100x100`}
          alt="customer"
        />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    );
  }
}

export default CustomerCard;
