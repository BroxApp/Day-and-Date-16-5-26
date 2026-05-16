const dateDisplay = document.getElementById('dateDisplay');
const showDateBtn = document.getElementById('showDateBtn');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

showDateBtn.addEventListener('click',()=>{
    const now = new Date();

    const dayName = daysOfWeek[now.getDay()];
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Ensures 2 digits
    const date = String(now.getDate()).padStart(2, '0');       // Ensures 2 digits
  
    dateDisplay.textContent = `Today is ${dayName}, ${year}/${month}/${date}`;
});