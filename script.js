const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function(e) {
  e.preventDefault();
  if (navLinks.classList.contains('hidden')) {
    navLinks.classList.remove('hidden');
  } else {
    navLinks.classList.add('hidden');
  }
});

const date = new Date();
const todayDate = date.toDateString();
document.getElementById("date").innerHTML = todayDate;

const updateTime = () => {
  const now = new Date();
  const currentTime = 
    now.getHours().toString().padStart(2, '0') + ":" + 
    now.getMinutes().toString().padStart(2, '0') + ":" + 
    now.getSeconds().toString().padStart(2, '0');
  
  document.getElementById("time").innerHTML = currentTime;
};

// update every second
setInterval(updateTime, 1000);
updateTime();
