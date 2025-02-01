// Populate Day dropdown
const daySelect = document.getElementById("day");
for (let i = 1; i <= 31; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Populate Month dropdown
const monthSelect = document.getElementById("month");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
monthNames.forEach((month, index) => {
    monthSelect.innerHTML += `<option value="${index + 1}">${month}</option>`;
});

// Populate Year dropdown (From current year back to 100 years)
const yearSelect = document.getElementById("year");
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= currentYear - 100; i--) {
    yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
}

// Calculate Age
function calculateAge() {
    let day = parseInt(daySelect.value);
    let month = parseInt(monthSelect.value);
    let year = parseInt(yearSelect.value);

    let birthDate = new Date(year, month - 1, day);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    let dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    document.getElementById("result").innerText = `You are ${age} years old.`;
}