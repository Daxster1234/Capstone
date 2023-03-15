import html from "html-literal";
// import macheteVideo from '../photos/Machete.mp4';

export default () => html`
<div>
<video src='../photos/Machete.mp4' id="mainVid" height="490" width="750" controls>
  <source src='../photos/Machete.mp4' type="video">
</video>
</div>`
