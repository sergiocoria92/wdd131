document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.querySelector("#lastModified");

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
    } else {
        console.log('Could not find the element with the id "lastModified"');
    }

    function createBanner() {
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            const mobileBanner = document.createElement('div');
            mobileBanner.classList.add('banner', 'mobile');
            mobileBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
            document.body.appendChild(mobileBanner);
        } else {
            const leftBanner = document.createElement('div');
            leftBanner.classList.add('banner', 'left');
            leftBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
            document.body.appendChild(leftBanner);

            const rightBanner = document.createElement('div');
            rightBanner.classList.add('banner', 'right');
            rightBanner.innerHTML = '<span>Offer today only 15% discount code: 1234</span>';
            document.body.appendChild(rightBanner);
        }
    }

    createBanner();
});
