import html from "html-literal";
import shirt from '../photos/shirt.png';
import sticker from '../photos/stickers.png';

export default () => html`
<h1>Available Merchandise</h1>
<div id="merchContainer">
  <div class="merch">
    <img id="shirt" src=${shirt} width='380' height='500'>
    <p>Machete T-shirt (All Sizes)</p>
    <p>Designed by Seb Elbourne</p>
    <p>[ $25 ]</p>
  </div>
  <div class="merch">
    <img id="sticker" src=${sticker} width='380' height='500'>
    <p>Machete stickers</p>
    <p>Designed by Seb Elbourne</p>
    <p>[ $1 ]</p>
  </div>
</div>
<p class='disclaimer'>*Machete merch is currently only available to be sold in person*</p>
`
