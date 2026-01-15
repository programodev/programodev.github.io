---
layout: default  # This FORCES Cayman's full layout (header + footer)
title: ProgramoDev
---

This website is my digital home where I share everything I'm learning in coding, tech, and creativity. I'm still a student, so I explain things in the simplest way possible — just like how I would teach a friend. You’ll find notes, mini-projects, experiments, and honest experiences from my journey. If you're new to programming or just exploring, this place is for you. Let’s learn and grow together!

• [C](/c)\
• [Python](/python)
<br><br>

<form class="contact-form"
      action="https://api.web3forms.com/submit"
      method="POST" id="form">
  <!-- Web3Forms Access Key -->  
  <input type="hidden" name="access_key" value="87b97c41-5288-4932-aa11-4d7a2aacbec7">
  <!-- Spam protection -->
  <input type="checkbox" name="botcheck" style="display:none;">
  <h2>Feedback form</h2>
  <h4>Suggestions or feedback? Let me know below!</h4>
  <label for="name">Name</label>
  <input type="text" id="name" name="name" placeholder="Your name" required>
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Your email" required>
  <label for="message">Message</label>
  <textarea id="message" name="message" placeholder="Your message" required></textarea>
  <div class="h-captcha" data-captcha="true"></div>
  <button type="submit">Send Message</button>
  <div id="result"></div>
</form>

<style>
      #result {
  display: none;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 4px;
  font-size: 14px;
  font-family: Arial, sans-serif;
}

#result.error {
  color: #d32f2f;
  background-color: #fdecea;
  border: 1px solid #f5c2c7;
}

#result.success {
  color: #2e7d32;
  background-color: #edf7ed;
  border: 1px solid #a5d6a7;
}

      </style>

<script>
const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // hCaptcha check
  const hCaptchaResponse = form.querySelector(
    'textarea[name="h-captcha-response"]'
  )?.value;

  if (!hCaptchaResponse) {
    result.className = "error";
    result.innerHTML = "Please complete the captcha.";
    result.style.display = "block";
    return;
  }

  // Preparing
  result.className = "";
  result.innerHTML = "Please wait...";
  result.style.display = "block";

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      const jsonResponse = await response.json();

      if (response.status === 200) {
        result.className = "success";
        result.innerHTML = jsonResponse.message || "Message sent successfully!";
      } else {
        result.className = "error";
        result.innerHTML = jsonResponse.message || "Something went wrong.";
      }
    })
    .catch(() => {
      result.className = "error";
      result.innerHTML = "Something went wrong!";
    })
    .finally(() => {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 3000);
    });
});

</script>
