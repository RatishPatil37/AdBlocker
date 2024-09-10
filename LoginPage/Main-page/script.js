 // JavaScript to block ads with animation and feedback
 document.getElementById('blockAdsButton').addEventListener('click', function() {
    // Find all ad elements and hide them with a fade-out animation
    let adElements = document.querySelectorAll('.fade-out');
    adElements.forEach(ad => {
        ad.classList.add('hide');
    });

    // Remove the Google Ads script dynamically
    let googleAdScript = document.querySelector('script[src*="pagead2.googlesyndication.com"]');
    if (googleAdScript) {
        googleAdScript.remove();
    }

    // Display success message
    document.getElementById('successMessage').style.display = 'block';

    // Change button text and disable it
    this.textContent = "Ads Blocked";
    this.disabled = true;
});