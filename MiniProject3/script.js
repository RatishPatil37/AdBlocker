document.getElementById('downloadButton').addEventListener('click', function () {
  // Create a new instance of JSZip
  let zip = new JSZip();

  // Add JSON files to the zip
  zip.folder('AD_SHIELD').file('manifest.json', `
 {
    "name": "AD SHIELD",
    "version": "1.0.0",
    "description": "A simple and lightweight extension that blocks annoying ads on websites, enhancing your browsing experience by removing unwanted content.",
    "manifest_version": 3,
    "permissions": [
        "declarativeNetRequest",
        "declarativeContent"
    ],
    "declarative_net_request": {
        "rule_resources": [
            {
                "id": "ruleset_1",
                "enabled": true,
                "path": "rules.json"
            }
        ]
    }
}`
);  // Replace this with actual content of manifest.json

  zip.folder('AD_SHIELD').file('rules.json', `
 [
    {
        "id": 1,
        "priority": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "*://*doubleclick.net/*"
        }
    },
    {
        "id": 2,
        "priority": 1,
        "action": {
            "type": "block"
        },
        "condition": {
            "urlFilter": "*://*googleadservices.com/*"
        }
    }
  ]`);  // Replace with actual content of rules.json

  // Generate the zip file and trigger the download
  zip.generateAsync({ type: "blob" }).then(function (content) {
      // Use FileSaver.js to save the file
      const element = document.createElement("a");
      element.href = URL.createObjectURL(content);
      element.download = "AD_SHIELD.zip";  // Name of the zip file
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  });
});
