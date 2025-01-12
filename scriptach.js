const buttonsData = [
    { name: "Abishna", description: "Description for Button 1" },
    { name: "Anagha", description: "Description for Button 2" },
    { name: "Anvi", description: "Description for Button 3" },
    { name: "Arnav", description: "Description for Button 4" },
    { name: "Bhuvi", description: "Description for Button 5" },
    { name: "Chitrang", description: "Description for Button 6" },
    { name: "Dhruv", description: "Description for Button 7" },
    { name: "Dikshil", description: "Description for Button 8" },
    { name: "Guatham", description: "Description for Button 9" },
    { name: "Gia", description: "Description for Button 10" },
    { name: "Innila", description: "Description for Button 11" },
    { name: "Joyce", description: "Description for Button 12" },
    { name: "Adithi", description: "Description for Button 13" },
    { name: "Lasya", description: "Description for Button 14" },
    { name: "Magathi", description: "Description for Button 15" },
    { name: "Mahika", description: "Description for Button 16" },
    { name: "Manavi", description: "Description for Button 17" },
    { name: "Kethan", description: "Description for Button 18 " },
    { name: "Nitesh", description: "Description for Button 19" },
    { name: "Bhavika", description: "Description for Button 20" },
    { name: "Praneetha", description: "Description for Button 21" },
    { name: "Preethi", description: "Description for Button 22" },
    { name: "Rithvik", description: "Description for Button 23" },
    { name: "Sampreet", description: "Description for Button 24" },
    { name: "Shradha", description: "Description for Button 25" },
    { name: "Shragvi", description: "Description for Button 26" },
    { name: "Tanvi", description: "Description for Button 27" },
    { name: "Pranav", description: "Description for Button 28" },
    { name: "Vivaan", description: "Description for Button 29" },
    { name: "Subhiksha", description: "Description for Button 30" },
];

const buttonContainer = document.querySelector('.button-container');
const modal = document.getElementById('descriptionModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

buttonsData.forEach((buttonData, index) => {
    const button = document.createElement('button');
    button.className = 'button';
    button.innerText = buttonData.name;
    button.onclick = () => openModal(buttonData.name, buttonData.description);
    buttonContainer.appendChild(button);
});

function openModal(title, description) {
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modal.style.display = 'block';
}

closeModal.onclick = () => {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
