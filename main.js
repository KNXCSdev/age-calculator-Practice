const dayInput = document.querySelector(".day--input");
const monthInput = document.querySelector(".month--input");
const yearInput = document.querySelector(".year--input");

const labels = document.querySelectorAll("label");

const calculatedMonths = document.querySelector(".calculated-months--result");
const calculatedDays = document.querySelector(".calculated-days--result");
const calculatedYears = document.querySelector(".calculated-years--result");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  // Ensure all inputs have values
  if (dayInput.value && monthInput.value && yearInput.value) {
    const birthDay = parseInt(dayInput.value);
    const birthMonth = parseInt(monthInput.value);
    const birthYear = parseInt(yearInput.value);

    // Get the current date
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    if (birthDay <= 31 && birthMonth <= 12 && birthYear <= currentYear) {
      let ageYears = currentYear - birthYear;

      let ageMonths = currentMonth - birthMonth;

      let ageDays = currentDay - birthDay;

      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }

      if (ageDays < 0) {
        ageMonths--;

        const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
        ageDays += daysInPreviousMonth;
      }

      calculatedYears.textContent = ageYears;
      calculatedMonths.textContent = ageMonths.toString().padStart(2, "0");
      calculatedDays.textContent = ageDays.toString().padStart(2, "0");
    } else {
      alert("Please enter a valid date of birth.");
      dayInput.style.outline = "1px solid red";
      monthInput.style.outline = "1px solid red";
      yearInput.style.outline = "1px solid red";
      labels.forEach((element) => {
        element.style.color = "red";
      });
    }
  } else {
    dayInput.style.outline = "1px solid red";
    monthInput.style.outline = "1px solid red";
    yearInput.style.outline = "1px solid red";
    labels.forEach((element) => {
      element.style.color = "red";
    });
    alert("Please fill in all fields.");
  }
});
