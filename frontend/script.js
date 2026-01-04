const form = document.getElementById("contactForm");
const API_URL = "https://uh-tech-backend.onrender.com/api/enquiry";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: form.name.value,
    phone: form.phone.value,
    course: form.course.value,
    message: form.message.value,
  };

  try {
    const response = await fetch(
      "https://uh-tech-backend.onrender.com/api/enquiry",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert("✅ Enquiry submitted successfully!");
      form.reset();
    } else {
      alert("❌ " + result.message);
    }
  } catch (error) {
    alert("❌ Server error");
    console.error(error);
  }
});


