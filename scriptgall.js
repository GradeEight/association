document.querySelectorAll('.gallery img').forEach(image => {
    image.addEventListener('click', () => {
        // Create a lightbox div
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');

        // Create an image element for the lightbox
        const lightboxImage = document.createElement('img');
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;

        // Create a close button
        const closeButton = document.createElement('span');
        closeButton.classList.add('close');
        closeButton.innerHTML = '&times;'; // Close icon

        // Append the image and close button to the lightbox
        lightbox.appendChild(lightboxImage);
        lightbox.appendChild(closeButton);
        
        // Append the lightbox to the body
        document.body.appendChild(lightbox);

        // Add event listener to close the lightbox when the close button is clicked
        closeButton.addEventListener('click', () => {
            lightbox.remove();
        });

        // Add event listener to close the lightbox when clicking outside the image
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});