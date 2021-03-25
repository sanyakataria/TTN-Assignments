import React, { Component } from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import { Route, Redirect } from "react-router-dom";
import ContactData from "../ContactData/ContactData";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Checkout extends Component {
  //   componentWillMount() {
  //     const query = new URLSearchParams(this.props.location.search);
  //     console.log(this.props);
  //     console.log(query.entries());
  //     const ingredients = {};
  //     let price = 0;
  //     for (let param of query.entries()) {
  //       console.log(param);
  //       //   ['salad','1']
  //       if (param[0] === "price") {
  //         price = param[1];
  //       } else {
  //         ingredients[param[0]] = +param[1];
  //       }
  //       console.log(ingredients);
  //     }
  //     this.setState({ ingredients: ingredients, totalPrice:price });
  //     console.log(this.state.ingredients);
  //   }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      summary = (
        <div>
          {purchasedRedirect}
          <CheckoutSummary
            ingredients={this.props.ings}
            onCheckoutCancelled={this.checkoutCancelledHandler}
            onCheckoutContinued={this.checkoutContinueHandler}
          />
          <Route
            path={this.props.match.path + "/contact-data"}
            component={ContactData}
          />
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
    // price: state.burgerBuilder.totalPrice,
  };
};

export default connect(mapStateToProps)(Checkout);
