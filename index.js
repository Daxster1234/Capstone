import {Nav, Header, Footer, Main} from './components';
import * as store from './store';
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from 'axios';


const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector('#root').innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
    afterRender(state);
    router.updatePageLinks();
}

function afterRender(state) {
  // add menu toggle to bars icon in nav bar
// document.querySelector(".fa-bars").addEventListener("click", () => {
//   document.querySelector("nav > ul").classList.toggle("hidden--mobile");
// });



if (state.view === "Events") {
  // document.querySelector("form").addEventListener("submit", event => {
  //   event.preventDefault();

    // const inputList = event.target.elements;
    // console.log("Input Element List", inputList);

    // const toppings = [];
    // // Interate over the toppings input group elements
    // for (let input of inputList.toppings) {
    //   // If the value of the checked attribute is true then add the value to the toppings array
    //   if (input.checked) {
    //     toppings.push(input.value);
    //   }
    // }

    // const requestData = {
    //   customer: inputList.customer.value,
    //   crust: inputList.crust.value,
    //   cheese: inputList.cheese.value,
    //   sauce: inputList.sauce.value,
    //   toppings: toppings
    // };
    // console.log("request Body", requestData);

    axios
      .get(`${process.env.API_URL}/events`, requestData)
      .then(response => {
        store.Event.events.push(response.data);
        router.navigate("/Event");
      })
      .catch(error => {
        console.log("It puked", error);
      });
}
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home"; // Add a switch case statement to handle multiple routes
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `${process.env.API_URL}`
          )
          .then(response => {
              console.log(response.data);
            done();
          });
        break;
      default:
        done();
    }

  },
  already: params => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    render(store[view]);
  }
});

router
  .on({
    "/": () => render(),
    ":view": (params) => {
      let view = capitalize(params.data.view);
      render(store[view]);
    },
  })
  .resolve();
