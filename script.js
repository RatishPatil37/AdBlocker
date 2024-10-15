document.getElementById('downloadButton').addEventListener('click', () => {
    let zip = new JSZip();
    let jsonFolder = zip.folder('AD_SHIELD');
    
    jsonFolder.file('manifest.json', `{
        "manifest_version": 3, "name": "AD_SHIELD", "version": "1.0.0" 
    }`);
    jsonFolder.file('rules.json', `{
        "rule1": "some rule", "rule2": "another rule"
    }`);

    zip.generateAsync({ type: "blob" }).then(content => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(content);
        link.download = "AD_SHIELD.zip";
        link.click();
    });
});
