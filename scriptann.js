function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    const popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        if (event.target === popups[i]) {
            popups[i].style.display = "none";
        }
    }
}