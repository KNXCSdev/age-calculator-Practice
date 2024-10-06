const dayInput = document.querySelector(".day--input");
const monthInput = document.querySelector(".month--input");
const yearInput = document.querySelector(".year--input");

const labels = document.querySelectorAll("label");

const calculatedMonths = document.querySelector(".calculated-months--result");
const calculatedDays = document.querySelector(".calculated-days--result");
const calculatedYears = document.querySelector(".calculated-years--result");

const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  const birthDay = parseInt(dayInput.value);
  const birthMonth = parseInt(monthInput.value);
  const birthYear = parseInt(yearInput.value);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  let isValid = true;

  if (!birthDay || birthDay < 1 || birthDay > 31) {
    document.querySelector("#day-error").textContent = "Invalid input";
    dayInput.style.outline = "1px solid red";
    document.querySelector(".error1").style.color = "red";
    isValid = false;
  }

  if (!birthMonth || birthMonth < 1 || birthMonth > 12) {
    document.querySelector("#month-error").textContent = "Invalid input";
    monthInput.style.outline = "1px solid red";
    document.querySelector(".error2").style.color = "red";
    isValid = false;
  }

  if (!birthYear || birthYear < 1900 || birthYear > currentYear) {
    document.querySelector("#year-error").textContent = "Invalid input";
    yearInput.style.outline = "1px solid red";
    document.querySelector(".error3").style.color = "red";
    isValid = false;
  }

  if (isValid) {
    // Calculate the age
    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    // Adjust for month and day discrepancies
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    if (ageDays < 0) {
      ageMonths--;
      const daysInPreviousMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      ageDays += daysInPreviousMonth;
    }

    // Display the result
    calculatedYears.textContent = ageYears;
    calculatedMonths.textContent = ageMonths.toString().padStart(2, "0");
    calculatedDays.textContent = ageDays.toString().padStart(2, "0");
  }
});
