capconst buttonsData = [
    { name: "Abishna", description: "Loves art, craft, football, volleyball, badminton, throwball, basketball, reading and writing, swimming and skating." },
    { name: "Anagha", description: "Loves reading, anime, listening to music." },
    { name: "Anvi", description: "Dancer, Badminton player, binger, perfectionist, and above all Spotify Listener. SLAAAAYYY!!!!!" },
    { name: "Arnav", description: "Great Singer, Started Keyboard, He Looks good, very handsome you know!" },
    { name: "Bhuvi", description: "Art, Hanging out with friends, reading, sports, listening to music, travelling, binge watching series and shows." },
    { name: "Chitrang", description: "Dtabase Not Done" },
    { name: "Dhruv", description: "Sigma, Loves cricket, Rock n Roll, Maths, Science, Computers" },
    { name: "Dikshil", description: "Description for Button 8" },
    { name: "Gautham", description: "Anime, Sigma, Table Tennis, Gamer, Loves Computer" },
    { name: "Gia", description: "Netflix binge watching, Gamer, Basketball, Gymnastics, Dance." },
    { name: "Innila", description: "Loves Football, Plays Badminton but does not love it, I like aesthetic stuff and I have a hamster named LUNA." },
    { name: "Joyce", description: "Diploma in Kathak, Dancing, Perfectionist, Aesthetic*" },
    { name: "Adithi", description: "Dancing, Listening to music, badminton, Binge watching shows." },
    { name: "Lasya", description: "Database Incomplete" },
    { name: "Magathi", description: "Loves playing badminton, listening to music, reading books and most importantly travelling & exploring new places also loves organizing things, Perfectionist." },
    { name: "Mahika", description: "Virgo, love music, Cynophile for life " },
    { name: "Manavi", description: "Description Incomplete" },
    { name: "Kethan", description: "Anime, Basketball, Football, Gaming, Anime. " },
    { name: "Nitesh", description: "Sigma X999, Loves Football, Maths, Science, Loves Billiards, Computers, Gaming, Karate (Brown I)" },
    { name: "Bhavika", description: "Description Incomplete" },
    { name: "Praneetha", description: "Description Incomplete" },
    { name: "Preethi", description: "Description Incomplete" },
    { name: "Rithvik", description: "Sigma -, Loves Computers, Basketball, Badminton, Video Games, Adventure Mode ON, Science, Math, Science, 🤓, Anime" },
    { name: "Sampreet", description: "Football, Crafting" },
    { name: "Shradha", description: "I LOVE CRICKET! VISA❤BFF Shrad" },
    { name: "Shragvi", description: "Description Incomplete" },
    { name: "Tanvi", description: "Football, Basketball, Gaming, Listening to music, Biology" },

    { name: "Pranav", description: "Description for Button 28" },
    { name: "Vivaan", description: "" },
    { name: "Subhiksha", description: "Badminton, TT, Science, Art" },
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
