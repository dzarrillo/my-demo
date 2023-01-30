import { Component } from "react";
import CustomerList from "../../components/customerlist/CustomerList";
import SearchBox from "../../components/searchbox/SearchBox";

class Customer extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      searchField: "",
    };
    console.log("Contructor");
  }

  componentDidMount() {
    console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { customers: users };
          },
          () => console.log(this.state),
          console.log("state updated")
        )
      );
  }
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { onSearchChange } = this;
    const { customers, searchField } = this.state;

    const filteredCustomers = customers.filter((customer) => {
      return customer.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div>
        <h1>Customer</h1>
        {/* <input
          type="search"
          className="search-box"
          placeholder="search customers"
          onChange={onSearchChange}
        /> */}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder="Search Customers"
          className="search-box"
        />

        {/* {filteredCustomers.map((Customer) => {
          return (
            <div key={Customer.email}>
              <h2>
                Name: {Customer.name}, Email:
                {Customer.email}
              </h2>
            </div>
          );
        })} */}
        <CustomerList customers={filteredCustomers} />
      </div>
    );
  }
}

export default Customer;
