import html from "html-literal";
import cornelMachete from '../photos/M3.jpg';
import shane from '../photos/shane.jpg';
import elias from '../photos/elias.jpg';
import dax from '../photos/dax.jpg';

export default () => html`
<h1 id="aboutH">About Machete</h1>
<p id="aboutP">Machete is a hardcore punk band hailing from Harrisonburg, VA.
  Formed in 2020 by Cornel Toyloy(vocals), Dax Meredith(drums) and Elias Wickline(guitar), Machete garnered local attention with their aggressive and frantic sound.
  After a year-long hiatus due to the COVID-19 pandemic, Machete returned to playing shows in late 2021 and was joined by Shane Cheek(bass) and began playing shows
  semi-regularly around the Harrisonburg area, garnering a small following. Machete is currently active in the Harrisonburg and larger Virginia DIY music scene, continuing
  to grow and develop their sound.</p>
<div id='row'>
  <div id='column'>
    <img class='aboutImg' src=${cornelMachete}/>
    <img class='aboutImg' src=${shane}/>
  </div>
  <div id='column'>
    <img class='aboutImg' src=${elias}/>
    <img class='aboutImg' src=${dax}/>
  </div>
</div>
`
