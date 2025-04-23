// 1. Select the button and the Fun Stuff section
const button = document.getElementById("funButton");
const funSection = document.getElementById("fun-stuff");

// 2. Create a surprise message element (but don't add it yet)
const surprise = document.createElement("p");
surprise.textContent = "🎉 Surprise! You're awesome!";
surprise.style.color = "green";
surprise.style.fontWeight = "bold";

let added = false; // Tracks if the surprise is currently shown

// 3. Button click event
button.addEventListener("click", () => {
  // Change button text
  button.textContent = added ? "Press Me for a Surprise!" : "Remove Surprise";

  // Change background color of section
  funSection.style.backgroundColor = added ? "" : "#f0f8ff";

  // Add or remove the surprise message
  if (!added) {
    funSection.appendChild(surprise);
  } else {
    surprise.remove();
  }

  // Toggle state
  added = !added;
});
