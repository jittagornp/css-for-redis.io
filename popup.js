chrome.tabs.executeScript(null, {
    code: `
        var styleId = 'redis-io-stylesheet';
        if(!document.getElementById(styleId)){
            var styleSheet = document.createElement('link');
            styleSheet.id = styleId;
            styleSheet.type = 'text/css';
            styleSheet.rel = 'stylesheet';
            styleSheet.href = 'test';
            document.head.appendChild(styleSheet);
        }
    `
}); 