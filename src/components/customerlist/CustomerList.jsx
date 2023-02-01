import { Component } from "react";
import CustomerCard from "../customercard/CustomerCard";
import "./CustomerList.css";

class CustomerList extends Component {
  render() {
    const { customers } = this.props;

    return (
      <div className="customer-grid">
        {customers.map((customer) => {
          const { email } = customer;
          return (
            // <div className="card-container" key={email}>
            //   <img
            //     src={`https://robohash.org/${email}?set=set2&size=180x180`}
            //     alt="customer"
            //   />
            //   <h2>Name: {name}</h2>
            //   <p>{email}</p>{" "}
            // </div>
            <div key={email}>
              <CustomerCard customer={customer} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CustomerList;
