// Toggle mobile nav menu
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// Smooth scroll to section and close mobile menu
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  document.getElementById('mobileMenu').classList.remove('active');
}

// Copy address to clipboard with confirmation
function copyAddress(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const address = "1265 W 500 North, Salt Lake City, UT 84116";

  navigator.clipboard.writeText(address).then(() => {
    const link = document.getElementById("copyLink");
    link.textContent = "Copied!";
    setTimeout(() => {
      link.textContent = "Copy Address";
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

function toggleDetails(button) {
  const detailBox = button.nextElementSibling;
  detailBox.classList.toggle('open');
  const isOpen = detailBox.classList.contains('open');
  button.textContent = isOpen ? 'Hide Detail' : 'More Detail';
}

function toggleQuestions(button) {
  const detailBox = button.nextElementSibling;
  detailBox.classList.toggle('open');
}

const locationDiv = document.getElementById('faq');
const images = [
  'files/deskone.jpg',
  'files/desktwo.jpg',
  'files/deskclass.jpg',
  'files/awards.jpg'
];
let index = 0;

function changeBackground() {
  locationDiv.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

changeBackground(); // initial image
setInterval(changeBackground, 5000); // change every 5 seconds

const reviews = [
  {
    name: "Jared Sorensen",
    stars: "★★★★★",
    description: "I came in here needing to take a driver's test without an appointment, and they had me in the driver's seat and taking the test in 30 minutes! They are so friendly, and it's affordable, too. I'm so grateful for their help! If you need to take a class or a driver's test, do it here!",
    link: "https://share.google/aos6ivbXOGorA5JLz"
  },
  {
    name: "Mohamed Yussuf",
    stars: "★★★★★",
    description: "My brother had great experience at C & T driving. They were kind from start to finish. I plan on bringing all my siblings to take their road test here!",
    link: "https://share.google/7txeQGDx9wSVakVZC"
  },
  {
    name: "Angelica Malmaceda",
    stars: "★★★★★",
    description: "Thanh Pham is so amazing she is so lovely and amazing she made me feel so calm when doing my test! I passed! She made this whole experience wonderful!! I recommend it here!! 💕💕",
    link: "https://share.google/wqBWQYkcCajH4AK9S"
  },
  {
    name: "Chelsey Nielson",
    stars: "★★★★★",
    description: "Super helpful on my son’s driving test. They were clear with what they wanted a d what he should expect. He felt comfortable and confident going in and was able to pass! They left us with very clear next steps in getting his license.",
    link: "https://share.google/AuulZrMNmoWZUY0tE"
  },
  {
    name: "Grey G",
    stars: "★★★★★",
    description: "They called me to make sure i would make it on time! They are so kind and fantastic, she gave me pointers on what would be on the test. Went over the paperwork and what was expected. Welcoming atmosphere and open whenever you need them! Absolutely wonderful! Thank you!",
    link: "https://share.google/qp2LCcgf1nbHFohyT"
  },
  {
    name: "Larissa Jimenez",
    stars: "★★★★★",
    description: "C&T driving school is amazing. I went in to take my road test today and was super nervous but she made me feel so comfortable and confident. Super laid back and helpful. I would definitely recommend C&T driving school to everyone.",
    link: "https://share.google/jNpKiUntiYE7wliz5"
  },
  {
    name: "Gustavo Domaredzky",
    stars: "★★★★★",
    description: "My experience with the C and T Driving School was excellent. Thanh Pham was very helpful and very clear on the instructions. She helped me a lot with my road test. Would definitely recommend to everybody needing to take the road test and classes for their driving license!",
    link: "https://share.google/YpKc3F34kR9pIkShw"
  },
  {
    name: "Paul Michael",
    stars: "★★★★★",
    description: "They scheduled me in very quickly for my state road test. They are very professional and courteous. Cuong reviewed my previous test and made sure I was aware of what needed to be done. I passed my test!",
    link: "https://share.google/un65NLvXNIMnfSist"
  },
  {
    name: "George R",
    stars: "★★★★★",
    description: "A good driving school. I’m amazed by the instructors professionalism and very helpful. I would recommend them 100% to everybody who’s getting a driver license for the first time or taking the road test. If you are looking for a good driving school for your teenagers or yourself, this is the place to go. Thank you C and T driving school.",
    link: "https://share.google/4vnz1UqXYeMhMgCEi"
  },
  {
    name: "Ramansh Sharma",
    stars: "★★★★★",
    description: "I just gave my driving license today! The establishment is so very kind and helpful. I gained several tips that not even my friends knew beforehand. Totally worth the experience! Fully recommend this place.",
    link: "https://share.google/9Od6VowGzkZTbpD4N"
  },
];

function getRandomColor() {
  const colors = [
  "rgba(255, 0, 0, 0.3)",     // Red
  "rgba(255, 127, 0, 0.3)",   // Orange
  "rgba(255, 255, 0, 0.3)",   // Yellow
  "rgba(0, 255, 0, 0.3)",     // Green
  "rgba(0, 255, 255, 0.3)",   // Cyan / Aqua
  "rgba(0, 127, 255, 0.3)",   // Sky Blue
  "rgba(0, 0, 255, 0.3)",     // Blue
  "rgba(139, 0, 255, 0.3)",   // Indigo
  "rgba(186, 85, 211, 0.3)",  // Violet
  "rgba(255, 20, 147, 0.3)"   // Pink (for style!)
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

const wrapper = document.getElementById("reviews-wrapper");

reviews.forEach(review => {
  const card = document.createElement("div");
  card.classList.add("card", "swiper-slide");

  const avatarColor = getRandomColor(); // generate random color

  card.innerHTML = `
    <div class="card-content">
      <div class="review-header">
        <div class="avatar" style="background-color:${avatarColor}; color:white;">
          ${review.name.charAt(0)}
        </div>
        <div class="reviewer-info">
          <h3 class="name">${review.name}</h3>
          <div class="stars">${review.stars}</div>
        </div>
      </div>
      <p class="description">${review.description}</p>
      <a class="button" href="${review.link}" target="_blank">Read More</a>
    </div>
  `;
  wrapper.appendChild(card);
});

// Initialize Swiper
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    520: { slidesPerView: 2 },
    950: { slidesPerView: 3 },
    1100: { slidesPerView: 4 },
  },
});