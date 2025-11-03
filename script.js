const form = document.getElementById("contactForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  
  // 🚀 Replace this with your actual n8n webhook URL
  const webhookURL = "http://localhost:5678/webhook-test/007256c4-1494-42fb-87a5-08b3845d6dfb";

  const data = { name, phone };

  try {
    responseMessage.textContent = "Submitting...";
    const res = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      responseMessage.style.color = "green";
      responseMessage.textContent = "✅ Form submitted successfully!";
      form.reset();
    } else {
      responseMessage.style.color = "red";
      responseMessage.textContent = "❌ Submission failed. Please try again.";
    }
  } catch (error) {
    console.error(error);
    responseMessage.style.color = "red";
    responseMessage.textContent = "⚠️ Network error. Please check your connection.";
  }
});
