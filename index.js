const goalForm = document.getElementById("goal-form");
const goalInput = document.getElementById("goal-input");
const goalsContainer = document.getElementById("goals-container");
const completedCount = document.getElementById("completed-count");
const totalGoals = document.getElementById("total-goals");

let data = JSON.parse(localStorage.getItem('data')) || []; // Load from localStorage

// Load today's date
document.getElementById('date').innerText = new Date().toLocaleDateString();

function updateGoalList() {
    goalsContainer.innerHTML = '';
    let completedGoals = 0;

    goals.forEach((goal, index) => {
        const goalItem = document.createElement("div");
        goalItem.classList.add("goal-item");
        goalItem.innerHTML = `
            <span class="${goal.completed ? 'completed' : ''}">${goal.text}</span>
            <button onclick="toggleComplete(${index})">${goal.completed ? 'Undo' : 'Complete'}</button>
        `;
        goalsContainer.appendChild(goalItem);
        if (goal.completed) completedGoals++;
    });

    completedCount.innerText = completedGoals;
    totalGoals.innerText = goals.length;
    localStorage.setItem('goals', JSON.stringify(goals)); // Save to localStorage
}

function toggleComplete(index) {
    goals[index].completed = !goals[index].completed;
}