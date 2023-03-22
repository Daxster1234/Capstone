import html from "html-literal";

export default () => html`
<h1>Contact Us</h1>
<div class="form">
<form
  action="https://formspree.io/f/xeqwzwbe"
  method="POST"
  id="contactForm"
>
  <label>
    Email:
    <input type="email" name="email">
  </label>
  <label>
    Message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
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
  <button type="submit">Send</button>
</form>
</div>
`
