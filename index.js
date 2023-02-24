import {Nav, Header, Footer, Main} from './components';
import * as store from './store';
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from 'axios';
import dotenv from 'dotenv';


const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector('#root').innerHTML = `
    ${Header(state)}
    ${Nav(store.Links)}
    ${Main(state)}
    ${Footer()}
    `;
    router.updatePageLinks();
}

function afterRender() {
  // add menu toggle to bars icon in nav bar
document.querySelector(".fa-bars").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});
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
            `api link goes here`
          )
          .then(response => {


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
