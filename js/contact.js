const inputs = document.querySelectorAll(".form-group input");
const textArea = document.querySelector(".form-group textarea");
const form = document.querySelector("form");

inputs.forEach((element) => {
  element.addEventListener("mouseenter", (e) => {
    e.target.style.border = "2px solid darkorange";
  });

  element.addEventListener("mouseleave", (e) => {
    e.target.style.border = "2px solid rgba(0, 0, 0, 0.8)";
  });
});

textArea.addEventListener("mouseenter", (e) => {
  e.target.style.border = "2px solid darkorange";
});

textArea.addEventListener("mouseleave", (e) => {
  e.target.style.border = "2px solid rgba(0, 0, 0, 0.8)";
});

const formSuccess = (data) => {
  const btn = document.querySelector(".submit-btn");
  const loader = document.querySelector(".loader-container");
  btn.style.display = "block";
  loader.style.display = "none";

  if (data.status === "Sent") {
    let status = document.querySelector(".status-sent");
    status.style.display = "flex";
    window.gtag("event", "Contacted", {
      event_name: "Contacted",
    });
  } else {
    let status = document.querySelector(".status-fail");
    status.style.display = "flex";
  }
};

const parseForm = () => {
  let inputs = document.getElementsByTagName("input");
  const data = {};
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].name === "name") {
      data.name = inputs[i].value;
    } else if (inputs[i].name === "email") {
      data.email = inputs[i].value;
    } else if (inputs[i].name === "subject") {
      data.subject = inputs[i].value;
    }
  }

  let text = document.getElementById("textarea1");
  data.body = text.value;
  return data;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = parseForm();

  const btn = document.querySelector(".submit-btn");
  const loader = document.querySelector(".loader-container");
  btn.style.display = "none";
  loader.style.display = "flex";

  $.ajax({
    type: "POST",
    url: "https://www.ryankane.io/api/james/contact",
    data: formData,
    success: formSuccess,
    error: formSuccess,
  });
});
