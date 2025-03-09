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

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
const container = document.getElementById('employeeContainer');
container.addEventListener('click', (event) => {
    console.log('Employee card clicked!');
});

function addRemoveFunctionality(button, card) {
    button.addEventListener('click', (event) => {
        event.stopPropagation();
        container.removeChild(card);
    });
}

// Task 5: Inline Editing of Employee Details
function enableInlineEditing(card) {
    card.addEventListener('dblclick', () => {
        const nameElement = card.querySelector('h2');
        const positionElement = card.querySelector('p');

        // Create input fields pre-filled with current values
        const nameInput = document.createElement('input');
        nameInput.value = nameElement.textContent;

        const positionInput = document.createElement('input');
        positionInput.value = positionElement.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        // Save updated values and revert to static text
        saveButton.onclick = () => {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;
            
            card.replaceChild(nameElement, nameInput);
            card.replaceChild(positionElement, positionInput);
            card.removeChild(saveButton);
        };

        // Replace elements with input fields
        card.replaceChild(nameInput, nameElement);
        card.replaceChild(positionInput, positionElement);
        card.appendChild(saveButton);
    });
}

// Attach inline editing to each card
window.onload = () => {
    const employees = [
        { name: 'John Doe', position: 'Software Engineer' },
        { name: 'Jane Smith', position: 'Project Manager' },
        { name: 'Alice Johnson', position: 'UI/UX Designer' },
        { name: 'Bob Brown', position: 'Data Analyst' }
    ];

    employees.forEach(emp => {
        addEmployeeCard(emp.name, emp.position);
    });

    const cards = document.querySelectorAll('.employee-card');
    cards.forEach(card => enableInlineEditing(card));
};
