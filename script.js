const toggleButton = document.getElementById('theme-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode')
      ? 'Light Mode' : 'Dark Mode';
  });
}

const clickworkerBtn = document.getElementById("clickworkerBtn");
if (clickworkerBtn) {
  clickworkerBtn.addEventListener("click", function () {
    window.open("https://www.clickworker.com", "_blank");
  });
}

const premiseBtn = document.getElementById("premiseBtn");
if (premiseBtn) {
  premiseBtn.addEventListener("click", function () {
    window.open("https://www.premise.com", "_blank");
  });
}

const remotasksBtn = document.getElementById("remotasksBtn");
if (remotasksBtn) {
  remotasksBtn.addEventListener("click", function () {
    window.open("https://www.remotasks.com", "_blank");
  });
}

const mturkBtn = document.getElementById("mturkBtn");
if (mturkBtn) {
  mturkBtn.addEventListener("click", function () {
    window.open("https://www.mturk.com", "_blank");
  });
}

const somewhereBtn = document.getElementById("somewhereBtn");
if (somewhereBtn) {
  somewhereBtn.addEventListener("click", function () {
    window.open("https://somewhere.com", "_blank");
  });
}

const upworkBtn = document.getElementById("upworkBtn");
if (upworkBtn) {
  upworkBtn.addEventListener("click", function () {
    window.open("https://www.upwork.com", "_blank");
  });
}

const fiverrBtn = document.getElementById("fiverrBtn");
if (fiverrBtn) {
  fiverrBtn.addEventListener("click", function () {
    window.open("https://www.fiverr.com", "_blank");
  });
}

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you within 2 business days.');
    contactForm.reset();
  });
}
