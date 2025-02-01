const buttonsData = [
    { name: "Abishna", description: "Loves Art, Craft, Football, Volleyball, Badminton, Throwball, Basketball, Reading And Writing, Swimming And Skating." },
    { name: "Anagha", description: "Loves Reading, Anime, Listening To Music." },
    { name: "Anvi", description: "Dancer, Badminton Player, Binger, Perfectionist, And Above All Spotify Listener. SLAAAAYYY!!!!!" },
    { name: "Arnav", description: "Great Singer, Started Keyboard, He Looks good, Very Handsome You know!" },
    { name: "Bhuvi", description: "Art, Hanging Out With Friends, Reading, Sports, Listening To Music, Travelling, Binge Watching Series And Shows." },
    { name: "Chitrang", description: "Call Me Lil' Picasso." },
    { name: "Dhruv", description: "Sigma, Loves Cricket, Rock n Roll, Maths, Science, Computers." },
    { name: "Dikshil", description: "Alpha Male, Basketball Player, Badminton School Team (Absolutely Of No Use Would NOT Recommend), PCMC (Best Stream), Computer Genius." },
    { name: "Gautham", description: "Anime, Sigma, Table Tennis, Gamer, Loves Computer." },
    { name: "Gia", description: "Netflix binge watching, Gamer, Basketball, Gymnastics, Dance." },
    { name: "Innila", description: "Loves Football, Plays Badminton But Does Not Love It, Likes Aesthetic Stuff And I Have A Hamster Named LUNA." },
    { name: "Joyce", description: "Diploma in Kathak, Dancing, Perfectionist, Aesthetic." },
    { name: "Adithi", description: "Dancing, Listening To Music, Badminton, Binge Watching Shows." },
    { name: "Lasya", description: "Badminton, Music." },
    { name: "Magathi", description: "Loves Playing Badminton, Listening To Music, Reading Books And Most Importantly Travelling And Exploring New Places Also Loves Organizing Things, Perfectionist." },
    { name: "Mahika", description: "Virgo, Love Music, Cynophile For Life. " },
    { name: "Manavi", description: "Likes To Play Football, Badminton Etc., Loves Reading Books, Likes Doing Sudoku ." },
    { name: "Kethan", description: "Anime, Basketball, Football, Gaming, Anime. " },
    { name: "Nitesh", description: "Sigma X999, Loves Football, Maths, Science, Loves Billiards, Computers, Gaming, Karate (Brown I)." },
    { name: "Bhavika", description: "Manga Artist (In Training)." },
    { name: "Praneetha", description: "Tall, Lady Sigma." },
    { name: "Preethi", description: "Description Incomplete." },
    { name: "Rithvik", description: "Sigma +, Loves Computers, Basketball, Badminton, Video Games, Adventure Mode ON, Science, Math, Science, Anime." },
    { name: "Sampreet", description: "Football, Crafting." },
    { name: "Shradha", description: "I LOVE CRICKET! VISA(Loves)BFF Shrad." },
    { name: "Shragvi", description: "Short :)." },
    { name: "Tanvi", description: "Football, Basketball, Gaming, Listening To Music, Biology." },
    { name: "Pranav", description: "Description Incomplete." },
    { name: "Vivaan", description: "Description Incomplete." },
    { name: "Subhiksha", description: "Badminton, Table Tennis, Science, Art." },
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
