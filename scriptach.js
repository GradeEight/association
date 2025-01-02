const buttonsData = [
    { name: "Name 1", description: "Description for Button 1" },
    { name: "Name 2", description: "Description for Button 2" },
    { name: "Name 3", description: "Description for Button 3" },
    { name: "Name 4", description: "Description for Button 4" },
    { name: "Name 5", description: "Description for Button 5" },
    { name: "Name 6", description: "Description for Button 6" },
    { name: "Name 7", description: "Description for Button 7" },
    { name: "Name 8", description: "Description for Button 8" },
    { name: "Name 9", description: "Description for Button 9" },
    { name: "Name 10", description: "Description for Button 10" },
    { name: "Name 11", description: "Description for Button 11" },
    { name: "Name 12", description: "Description for Button 12" },
    { name: "Name 13", description: "Description for Button 13" },
    { name: "Name 14", description: "Description for Button 14" },
    { name: "Name 15", description: "Description for Button 15" },
    { name: "Name 16", description: "Description for Button 16" },
    { name: "Name 17", description: "Description for Button 17" },
    { name: "Name 18", description: "Description for Button 18 " },
    { name: "Name 19", description: "Description for Button 19" },
    { name: "Name 20", description: "Description for Button 20" },
    { name: "Name 21", description: "Description for Button 21" },
    { name: "Name 22", description: "Description for Button 22" },
    { name: "Name 23", description: "Description for Button 23" },
    { name: "Name 24", description: "Description for Button 24" },
    { name: "Name 25", description: "Description for Button 25" },
    { name: "Name 26", description: "Description for Button 26" },
    { name: "Name 27", description: "Description for Button 27" },
    { name: "Name 28", description: "Description for Button 28" },
    { name: "Name 29", description: "Description for Button 29" },
    { name: "Name 30", description: "Description for Button 30" },
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