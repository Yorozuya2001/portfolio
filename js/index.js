import apiJson from "./api.js";
import apiStack from "./stack-api.js";
import contactFormValidations from "./form-validations.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  apiJson("js/json/projects.json");
  apiStack("js/json/mi-stack.json", "#services .stacks");
  contactFormValidations();
});
