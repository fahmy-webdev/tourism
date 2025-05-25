let reviewCount = 334; // Starting from your initial count

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const rating = document.querySelector('input[name="rating"]:checked');
  const reviewText = document.getElementById("reviewText").value.trim();

  if (!rating || !reviewText) {
    alert("Please select a star rating and write your review.");
    return;
  }

  // Create stars string with filled and empty stars
  const stars = "★".repeat(rating.value) + "☆".repeat(5 - rating.value);

  // Create a new review card element
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");
  reviewCard.innerHTML = `
    <div class="review-stars">${stars}</div>
    <p class="review-text">${reviewText}</p>
  `;

  // Append the new review to the review list
  document.getElementById("reviewList").appendChild(reviewCard);

  // Increase and update the review count
  reviewCount++;
  document.getElementById("reviewCount").textContent = `${reviewCount} reviews`;

  // Clear the form
  this.reset();

  // Make sure the reviews container is visible
  document.getElementById("reviewsContainer").classList.remove("hidden");
});

document.getElementById("reviewBadge").addEventListener("click", function () {
  document.getElementById("reviewsContainer").classList.toggle("hidden");
});
