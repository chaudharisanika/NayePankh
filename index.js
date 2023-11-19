const headerElement = document.createElement("template");

headerElement.innerHTML = `
  <a href="#">About Us</a>
  <a href="#">Contact Us</a>
  <a href="#">Notice</a>
  <a href="#">Privacy</a>
`;
document.body.appendChild(headerElement.content);
