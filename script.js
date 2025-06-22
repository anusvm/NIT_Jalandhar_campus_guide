// // Wait for DOM content to load
// document.addEventListener("DOMContentLoaded", () => {

//     // *** Responsive Navbar Toggle ***
//     const menuToggle = document.getElementById("menu-toggle");
//     const navLinks = document.getElementById("nav-links");

//     if (menuToggle) {
//         menuToggle.addEventListener("click", () => {
//             navLinks.classList.toggle("active"); // Toggle menu
//         });
//     }

//     // *** Smooth Scrolling for Navigation Links ***
//     const scrollLinks = document.querySelectorAll("nav ul li a");
//     scrollLinks.forEach(link => {
//         link.addEventListener("click", (e) => {
//             e.preventDefault();
//             const targetId = link.getAttribute("href").substring(1);
//             document.getElementById(targetId).scrollIntoView({
//                 behavior: "smooth"
//             });
//         });
//     });

//     // *** FAQ Toggle Functionality ***
//     const faqItems = document.querySelectorAll(".faq-item");

//     faqItems.forEach(item => {
//         const question = item.querySelector(".faq-question");
//         const answer = item.querySelector(".faq-answer");

//         question.addEventListener("click", () => {
//             answer.style.display = answer.style.display === "block" ? "none" : "block";
//         });
//     });

//     // *** Chatbot Functionality ***
//     const chatbotWindow = document.getElementById("chatbot-window");
//     const chatbotInput = document.getElementById("chatbot-input");
//     const chatbotSend = document.getElementById("chatbot-send");

//     if (chatbotSend) {
//         chatbotSend.addEventListener("click", () => {
//             let userMessage = chatbotInput.value.trim();
//             if (userMessage !== "") {
//                 appendChatMessage("User", userMessage);
//                 chatbotInput.value = "";
//                 generateChatbotResponse(userMessage);
//             }
//         });
//     }

//     // Function to Append Chat Messages
//     function appendChatMessage(sender, message) {
//         let messageDiv = document.createElement("div");
//         messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
//         chatbotWindow.appendChild(messageDiv);
//         chatbotWindow.scrollTop = chatbotWindow.scrollHeight;
//     }

//     // Simple AI Chatbot Responses
//     function generateChatbotResponse(userMessage) {
//         let botReply;
//         if (userMessage.toLowerCase().includes("hello")) {
//             botReply = "Hi there! How can I assist you about NIT Jalandhar?";
//         } else if (userMessage.toLowerCase().includes("admission")) {
//             botReply = "You can check the admission details on the official website.";
//         } else if (userMessage.toLowerCase().includes("courses")) {
//             botReply = "We offer B.Tech, M.Tech, and PhD programs in various disciplines.";
//         } else {
//             botReply = "I'm still learning! Please visit our website for detailed information.";
//         }
//         setTimeout(() => {
//             appendChatMessage("Bot", botReply);
//         }, 1000);
//     }

//     // *** Back to Top Button Functionality ***
//     const backToTopButton = document.createElement("button");
//     backToTopButton.innerText = "↑";
//     backToTopButton.id = "back-to-top";
//     backToTopButton.style.cssText = "position: fixed; bottom: 20px; right: 20px; display: none; padding: 10px; background: #0080ff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 20px;";
//     document.body.appendChild(backToTopButton);

//     window.addEventListener("scroll", () => {
//         if (window.scrollY > 300) {
//             backToTopButton.style.display = "block";
//         } else {
//             backToTopButton.style.display = "none";
//         }
//     });

//     backToTopButton.addEventListener("click", () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });

//     // *** Image Lightbox for Gallery ***
//     const galleryImages = document.querySelectorAll(".place img");

//     galleryImages.forEach(img => {
//         img.addEventListener("click", () => {
//             const lightbox = document.createElement("div");
//             lightbox.className = "lightbox";
//             lightbox.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;";

//             const imgElement = document.createElement("img");
//             imgElement.src = img.src;
//             imgElement.style.cssText = "max-width: 90%; max-height: 90%; border-radius: 10px;";

//             lightbox.appendChild(imgElement);
//             document.body.appendChild(lightbox);

//             lightbox.addEventListener("click", () => {
//                 lightbox.remove();
//             });
//         });
//     });

//     // *** Google Maps API for Campus Navigation ***
//     function initMap() {
//         const nitJalandhar = { lat: 31.3959, lng: 75.5350 };
//         const map = new google.maps.Map(document.getElementById("map"), {
//             zoom: 15,
//             center: nitJalandhar
//         });

//         const marker = new google.maps.Marker({
//             position: nitJalandhar,
//             map: map,
//             title: "NIT Jalandhar"
//         });
//     }

//     // Load Google Maps Script Dynamically
//     const googleScript = document.createElement("script");
//     googleScript.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap";
//     googleScript.async = true;
//     googleScript.defer = true;
//     document.body.appendChild(googleScript);

// });
// Wait for DOM content to load
document.addEventListener("DOMContentLoaded", () => {

    // *** Responsive Navbar Toggle ***
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // *** Smooth Scrolling for Navigation Links ***
    const scrollLinks = document.querySelectorAll("nav ul li a");
    scrollLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // *** FAQ Toggle Functionality ***
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        question.addEventListener("click", () => {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // *** Chatbot Functionality with JSON FAQ Matching ***
    const chatbotWindow = document.getElementById("chatbot-window");
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotSend = document.getElementById("chatbot-send");

    let faqData = [];

    // Load FAQ JSON data
    fetch("nit_faq_data.json")
        .then(response => response.json())
        .then(data => {
            faqData = data;
        })
        .catch(error => {
            console.error("Error loading FAQ data:", error);
        });

    if (chatbotSend) {
        chatbotSend.addEventListener("click", () => {
            let userMessage = chatbotInput.value.trim();
            if (userMessage !== "") {
                appendChatMessage("User", userMessage);
                chatbotInput.value = "";
                generateChatbotResponse(userMessage);
            }
        });
    }

    function appendChatMessage(sender, message) {
        let messageDiv = document.createElement("div");
        messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
        chatbotWindow.appendChild(messageDiv);
        chatbotWindow.scrollTop = chatbotWindow.scrollHeight;
    }

    function generateChatbotResponse(userMessage) {
    const userText = userMessage.toLowerCase();
    let bestMatch = null;
    let highestScore = 0;

    for (let faq of faqData) {
        const question = faq.question.toLowerCase();
        let score = 0;

        // Tokenize both user and FAQ question
        const questionWords = question.split(/\s+/);
        const userWords = userText.split(/\s+/);

        // Count how many words match
        userWords.forEach(word => {
            if (question.includes(word)) {
                score++;
            }
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = faq.answer;
        }
    }

    const botReply = (highestScore > 0) ? bestMatch : "I'm still learning! Please visit our website for detailed information.";
    setTimeout(() => {
        appendChatMessage("Bot", botReply);
    }, 500);
}


    // *** Back to Top Button Functionality ***
    const backToTopButton = document.createElement("button");
    backToTopButton.innerText = "↑";
    backToTopButton.id = "back-to-top";
    backToTopButton.style.cssText = "position: fixed; bottom: 20px; right: 20px; display: none; padding: 10px; background: #0080ff; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 20px;";
    document.body.appendChild(backToTopButton);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // *** Image Lightbox for Gallery ***
    const galleryImages = document.querySelectorAll(".place img");
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const lightbox = document.createElement("div");
            lightbox.className = "lightbox";
            lightbox.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100vh; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center;";

            const imgElement = document.createElement("img");
            imgElement.src = img.src;
            imgElement.style.cssText = "max-width: 90%; max-height: 90%; border-radius: 10px;";

            lightbox.appendChild(imgElement);
            document.body.appendChild(lightbox);

            lightbox.addEventListener("click", () => {
                lightbox.remove();
            });
        });
    });

    // *** Google Maps API for Campus Navigation ***
    function initMap() {
        const nitJalandhar = { lat: 31.3959, lng: 75.5350 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: nitJalandhar
        });

        const marker = new google.maps.Marker({
            position: nitJalandhar,
            map: map,
            title: "NIT Jalandhar"
        });
    }

    const googleScript = document.createElement("script");
    googleScript.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap";
    googleScript.async = true;
    googleScript.defer = true;
    document.body.appendChild(googleScript);


});
 function addEvent() {
  const name = document.getElementById('eventName').value.trim();
  const location = document.getElementById('eventLocation').value.trim();
  const date = document.getElementById('eventDate').value;

  if (!name || !location || !date) {
    alert("Please fill in all fields!");
    return;
  }

  const eventList = document.getElementById('eventList');
  const eventHTML = `
    <div class="event">
      <h4>• ${name} <span class="new-badge">✨ NEW</span></h4>
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Event Date:</strong> 📅 ${new Date(date).toDateString()}</p>
    </div>
  `;

  eventList.innerHTML += eventHTML;

  // Reset form
  document.getElementById('eventName').value = '';
  document.getElementById('eventLocation').value = '';
  document.getElementById('eventDate').value = '';
}

