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