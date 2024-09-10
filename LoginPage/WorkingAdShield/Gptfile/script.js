document.getElementById('install-extension').addEventListener('click', () => {
    // Replace with your extension installation logic
    alert('Extension installed!');
});

// Whitelist functionality
document.getElementById('add-whitelist').addEventListener('click', () => {
    const whitelistInput = document.getElementById('whitelist-input').value;
    // Replace with your whitelist logic
    alert(`Added ${whitelistInput} to whitelist!`);
});

// Ad blocking stats
document.getElementById('ads-blocked').innerHTML = '100'; // Replace with actual ad blocking stats
