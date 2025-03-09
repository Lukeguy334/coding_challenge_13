// Task 2: Adding Employee Cards Dynamically
function addEmployeeCard(name, position) {
    const container = document.getElementById('employeeContainer');
    const card = document.createElement('div');
    card.className = 'employee-card';

    const heading = document.createElement('h2');
    heading.textContent = name;
    
    const para = document.createElement('p');
    para.textContent = position;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => container.removeChild(card);

    card.appendChild(heading);
    card.appendChild(para);
    card.appendChild(removeButton);
    container.appendChild(card);
}

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightAllCards() {
    const cards = Array.from(document.querySelectorAll('.employee-card'));
    cards.forEach(card => card.classList.add('highlight'));
}