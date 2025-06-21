document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mobileMessage = document.getElementById('mobile-message');

    if (urlParams.has('m') && urlParams.get('m') === '1') {
        // ?m=1 parameter detected. Apply changes for mobile view.
        document.body.classList.add('mobile-version');
        if (mobileMessage) {
            mobileMessage.style.display = 'block'; // Show the mobile specific message
        }
        console.log("?m=1 parameter detected. Applying mobile-specific styles/content.");
    } else {
        // No ?m=1 parameter. Load standard view.
        console.log("No ?m=1 parameter, loading standard view.");
        if (mobileMessage) {
            mobileMessage.style.display = 'none'; // Ensure it's hidden
        }
    }
});
