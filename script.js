const stars = document.querySelectorAll(".stars span");
const ratingInput = document.getElementById("ratingValue");
const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");

const modal = document.getElementById("reviewModal");
const openBtn = document.getElementById("openReviewsBtn");
const closeBtn = document.querySelector(".close-btn");

stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    resetStars();
    highlightStars(star.dataset.value);
  });

  star.addEventListener("mouseout", resetStars);

  star.addEventListener("click", () => {
    ratingInput.value = star.dataset.value;
    selectStars(star.dataset.value);
  });
});

function highlightStars(rating) {
  stars.forEach((star) => {
    if (star.dataset.value <= rating) {
      star.classList.add("hovered");
    }
  });
}

function resetStars() {
  stars.forEach((star) => star.classList.remove("hovered"));
}

function selectStars(rating) {
  stars.forEach((star) => {
    star.classList.remove("selected");
    if (star.dataset.value <= rating) {
      star.classList.add("selected");
    }
  });
}

// Open modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Submit new review
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const rating = ratingInput.value;
  const text = document.getElementById("reviewText").value;

  if (rating && text) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div>Rating: ${"★".repeat(rating)}${"☆".repeat(
      5 - rating
    )}</div><p>${text}</p>`;
    reviewList.prepend(card);

    form.reset();
    selectStars(0);
  }
});
