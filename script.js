
    document.getElementById('downloadButton').addEventListener('click', function() {
        const extensionUrl = './extension.zip'; // Corrected spelling of 'extension'
        const anchor = document.createElement('a');
        anchor.href = extensionUrl;
        anchor.download = 'AD_Shield_Extension.zip';  // Name of downloaded file
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    });
