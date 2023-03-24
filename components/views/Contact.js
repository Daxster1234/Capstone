import html from "html-literal";

export default () => html`
<h1>Contact Us</h1>
<div class="form">
<form
  action="https://formspree.io/f/xeqwzwbe"
  method="POST"
  id="contactForm"
  >
  <div id='formContainer'>
    <div id='formName'>
    <label>
      Name:
      <input type='name' name="name" placeholder="Your Name">
    </label>
    </div>
  <label>
    Email:
    <input type="email" name="email" placeholder="youremail@email.com">
  </label>
  Message:
  <label>
    <textarea name="message" placeholder="Your message here"></textarea>
  </label>
<div id='formContact'>
  <label>
    Reason for contact:
    <select>
      <option>---</option>
      <option>Booking</option>
      <option>Merchandise</option>
      <option>Business Inquiry</option>
      <option>Other</option>
    </select>
  </label>
</div>
  <button id='formButton' type="submit">Send</button>
  </div>
</form>
</div>
`
