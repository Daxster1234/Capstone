import html from "html-literal";

export default (links) => html`
<nav>
<i class=""></i>
<ul class="hidden--mobile nav-links">
  ${links.map((link) => `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`).join("")}
</ul>
</nav>`;




// <nav>
// <ul>
//   <li><a href="">Events</a></li>
//   <li><a href="">Merch</a></li>
//   <li><a href="">Home</a></li>
//   <li><a href="">Contact</a></li>
//   <li><a href="">About Us</a></li>
// </ul>
// </nav>`;



