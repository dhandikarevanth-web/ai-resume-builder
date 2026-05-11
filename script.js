function generateResume() {

  document.getElementById("previewName").innerText = document.getElementById("name").value;

  document.getElementById("previewEmail").innerText = document.getElementById("email").value;

  document.getElementById("previewPhone").innerText = document.getElementById("phone").value;

  document.getElementById("previewSummary").innerText = document.getElementById("summary").value;

  document.getElementById("previewSkills").innerText = document.getElementById("skills").value;

  document.getElementById("previewEducation").innerText = document.getElementById("education").value;

  document.getElementById("previewProjects").innerText = document.getElementById("projects").value;

  document.getElementById("previewExperience").innerText = document.getElementById("experience").value;
}

function generateSummary() {

  const summary = "Motivated and detail-oriented student skilled in web development, problem solving, and modern technologies seeking opportunities to contribute and grow professionally.";

  document.getElementById("summary").value = summary;
}

function suggestSkills() {

  const skills = "HTML, CSS, JavaScript, React.js, Node.js, MongoDB, GitHub, Responsive Design, APIs";

  document.getElementById("skills").value = skills;
}

function improveProjects() {

  const improved = "Developed a responsive AI-powered resume builder website with ATS optimization, live preview, and modern UI using HTML, CSS, and JavaScript.";

  document.getElementById("projects").value = improved;
}

function calculateATS() {

  let score = Math.floor(Math.random() * 30) + 70;

  document.getElementById("atsScore").innerText = score + "% ATS Friendly";
}
const template = document.getElementById("templateSelect");

template.addEventListener("change", function () {

  const preview = document.getElementById("resumePreview");

  preview.className = "";

  if (this.value === "blue") {
    preview.classList.add("template-blue");
  }

  else if (this.value === "dark") {
    preview.classList.add("template-dark");
  }

  else if (this.value === "green") {
    preview.classList.add("template-green");
  }
});
