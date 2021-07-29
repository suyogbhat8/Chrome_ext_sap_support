function injectTheScript() {
    var newURL = "https://support.sap.com/en/my-support.html";
        chrome.tabs.create({ url: newURL,active:true }, function(tab){
        //and inject the script in it
        chrome.tabs.executeScript(tab.id, {file: "content_script.js"});
    });
    
}

document.getElementById('clickactivity').addEventListener('click', injectTheScript);