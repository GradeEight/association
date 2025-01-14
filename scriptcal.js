const calendar = document.getElementById('calendar');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date(2025, 0); // Start from January 2025

// Sample events (coders can add events here)
const events = [
    { title: "Soft Board Decoration", description: "Soft Board Decoration For Pongal", date: "2025-01-06" },
    { title: "PTM-2", description: "The Second PTM", date: "2025-01-11" },
    { title: "Republic Day", description: "India's Republic Day", date: "2025-01-26" },
    { title: "Class Assembly 2", description: "Our Second Assembly Done By The Class?", date: "2025-02-5" },
    { title: "Inter House Fest 4", description: "The Fourth Inter House Fest", date: "2025-02-14" },
    { title: "National Science Day", description: "NATIONAL not World", date: "2025-02-28" },
    { title: "Term 2 Starts", description: "Exam Starts?", date: "2025-03-17" },
    { title: "Term 2 Ends & Class Party", description: "Pain Has Ended And Now We Rise To Glory", date: "2025-03-28" },
    { title: "Class Starts Again?", description: "Why, Just Why?", date: "2025-04-2" },
    { title: "Class Ends For Real", description: "The Real Last Day", date: "2025-04-13" },
];

// Function to render the calendar
function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    currentMonthYear.innerText = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
    calendar.innerHTML = '';

    // Create empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('day');
        calendar.appendChild(emptyDiv);
    }

    // Create cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.classList.add('day');
        dayDiv.innerText = day;

        // Check for events on this day
        const eventOnThisDay = events.filter(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === day && eventDate.getMonth() === month && eventDate.getFullYear() === year;
        });

        // Create dropdown for events
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');

        if (eventOnThisDay.length > 0) {
            eventOnThisDay.forEach(event => {
                const eventDiv = document.createElement('div');
                eventDiv.classList.add('event');
                eventDiv.innerText = `${event.title}: ${event.description}`; // Show title and description
                dropdown.appendChild(eventDiv);
            });
        } else {
            dropdown.innerText = "No event"; // Show "No event" if there are no events
        }

        dayDiv.appendChild(dropdown);
        dayDiv.onclick = function() {
            dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
        };

        calendar.appendChild(dayDiv);
    }
}

// Navigation functions
prevMonthButton.onclick = function() {
    if (currentDate.getMonth() > 0) {
        currentDate.setMonth(currentDate.getMonth() - 1);
    }
    renderCalendar();
};

nextMonthButton.onclick = function() {
    if (currentDate.getMonth() < 11) {
        currentDate.setMonth(currentDate.getMonth() + 1);
    }
    renderCalendar();
};

// Initial render
renderCalendar();
