import html from "html-literal";
// import macheteVideo from '../photos/Machete.mp4';

export default () => html`
<div>
<iframe id="mainVid"width="896" height="504" src="https://www.youtube.com/embed/Lj1yQsHWjyk?start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>
<div id='spotify'>
  <p>Thank you for coming to check out Machete! We'd love to see you at a show some day. We don't have any music to share right now, but we'd
    like to recommend this podcast on the history of punk music.
  </p>
</div>

<ul id="episodes">
<li>
    <button class='spotifyButton' data-spotify-id="spotify:episode:66jnO3vrl8Aji20pkl1Y7w">
      Setting the Scene
    </button>
  </li>
  <li>
    <button class='spotifyButton' data-spotify-id="spotify:episode:0rlEOf34urFJrkhMyLRGRk">
      MC5 and The Stooges
    </button>
  </li>
  <li>
    <button class='spotifyButton' data-spotify-id="spotify:episode:2O10nZiLleihrnj9GLXKmy">
      The Ramones
    </button>
  </li>
  <li>
    <button class='spotifyButton' data-spotify-id="spotify:episode:7kXncSVpIoYtMtkbQlg5eE">
      The Talking Heads
    </button>
  </li>
</ul>
<div id="embed-iframe"></div>
`
