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
        const name = card.querySelector('h2');
        const position = card.querySelector('p');

        const nameInput = document.createElement('input');
        nameInput.value = name.textContent;

        const positionInput = document.createElement('input');
        positionInput.value = position.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.onclick = () => {
            name.textContent = nameInput.value;
            position.textContent = positionInput.value;
            card.replaceChild(name, nameInput);
            card.replaceChild(position, positionInput);
            card.removeChild(saveButton);
        };

        card.replaceChild(nameInput, name);
        card.replaceChild(positionInput, position);
        card.appendChild(saveButton);
    });
}
