import html from "html-literal";

export default st => html`
<h1>Upcoming Events</h1>
<div id='eventDiv'>
<table id="eventTable">
  <tr id="eventHeader">
    <th>Bands</th>
    <th>Date</th>
    <th>Location</th>
  </tr>
  ${st.events.map(event => {
    return `<tr><td>${event.bands.join(', ')}</td><td>${event.date}</td>
    <td>${event.location}</td>`
  }).join('')}
</table>
</div>
<p class="disclaimer">*More events TBA soon*</p>
`;
