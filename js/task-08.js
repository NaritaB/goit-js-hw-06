const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formData = {};

  for (const field of event.currentTarget.elements) {
    if (field.name) {
      formData[field.name] = field.value;
      if (!field.value) {
        alert("Всі поля повинні бути заповнені");
        return;
      }
    }
  }

  console.log(formData);

  event.currentTarget.reset();
}
