chrome.tabs.executeScript(null, {
    code: `
        var styleId = 'redis-io-stylesheet';
        if(!document.getElementById(styleId)){
            var styleSheet = document.createElement('link');
            styleSheet.id = styleId;
            styleSheet.type = 'text/css';
            styleSheet.rel = 'stylesheet';
            styleSheet.href = 'https://raw.githubusercontent.com/jittagornp/css-for-redis.io/master/redis.io.css';
            document.head.appendChild(styleSheet);
        }
    `
}); 