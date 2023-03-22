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
  axios
      .get(`${process.env.API_URL}/events`, requestData)
      .then(response => {
        store.Event.events.push(response.data);
        router.navigate("/Event");
      })
      .catch(error => {
        console.log("It puked", error);
      });
};
// let navEl = document.getElementById('navLinks');
// navEl.addEventListener('click', () => {
//   location.reload();
// });

// if (state.view === 'Home') {
window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById('embed-iframe');
  let options = {
      width: '60%',
      height: '200',
      uri: 'spotify:episode:66jnO3vrl8Aji20pkl1Y7w'
    };
  let callback = (EmbedController) => {
    document.querySelectorAll('ul#episodes > li > button').forEach(
      episode => {
        episode.addEventListener('click', () => {
            EmbedController.loadUri(episode.dataset.spotifyId)
        });
      })
  };
  IFrameAPI.createController(element, options, callback);
};
};
// };

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Events"; // Add a switch case statement to handle multiple routes
    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Events":
        axios
          .get(
            `${process.env.API_URL}/events`
          )
          .then(response => {
              store.Events.events = {};
              store.Events.events = response.data;
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
