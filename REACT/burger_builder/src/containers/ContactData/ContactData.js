import React, { Component } from "react";
import Button from "../../components/UI/Button/Button";
import Classes from "./ContactData.module.css";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    //   alert("you continue");
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "max",
        address: {
          street: "test123",
          zipcode: "214609",
          country: "india",
        },
        email: "test@test.com",
        deliveryMethod: "fastest",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        // console.log(response);
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={Classes.Input}
          type="text"
          name="name"
          placeholder="your name"
        />
        <input
          className={Classes.Input}
          type="email"
          name="email"
          placeholder="your email"
        />
        <input
          className={Classes.Input}
          type="text"
          name="street"
          placeholder="your street"
        />
        <input
          className={Classes.Input}
          type="text"
          name="postalCode"
          placeholder="your postalCode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={Classes.ContactData}>
        <h4>Enter Your Contact Details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
