const stepperForm = document.querySelector("#step-form");
const formPages = stepperForm.querySelectorAll("#form-step-page");
const forms = stepperForm.querySelectorAll("div > form");

const steps = stepperForm.querySelectorAll("div#plan-step");

const inputs = stepperForm.querySelectorAll("div.form-group > input");
const selects = stepperForm.querySelectorAll("div.form-group > select");

const formData = {};

const pageFields = Array.from(forms).map(form => {
  let inputs = Array.from(form.querySelectorAll("div.form-group > input"));
  let names = inputs.map(input => {
    formData[input.name] = undefined;
    return input.name;
  });

  return names;
});

const totalSteps = Number(stepperForm.dataset.steps);
let formStep = 0;

inputs.forEach(input => input.addEventListener("input", getValueFromField));
selects.forEach(input => input.addEventListener("input", getValueFromField));

forms.forEach(form => form.addEventListener("submit", e => submitStep(e)));

function submitStep(e) {
  e.preventDefault();

  let valid = validateForm(formData, pageFields[formStep]);

  if (!valid) {
    console.log("Some fields contain invalid information"); 
    return;
  }

  formPages[formStep].classList.remove("current");

  formStep += 1;

  formPages[formStep].classList.add("current");
  steps[formStep].classList.add("complete");

  if (formStep == totalSteps - 1) {
    console.log("Sending form data...");
    return;
  }

  console.log("Step complete", formStep + "/" + totalSteps);
}

function validateForm(formData, fields) {

  // Check form for empty fields
  for (field of fields) {
    let included = Object.keys(formData).includes(field);
    let empty = included && (typeof(formData[field]) == "undefined" || formData[field] == "");
    console.log(field, "Empty: " + empty);
    if (empty) return false;
  }

  return true;
}

function getValueFromField(e) {
  formData[e.target.name] = e.target.value;
}