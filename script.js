var styleId = 'redis-io-stylesheet';
if (!document.getElementById(styleId)) {
    var styleSheet = document.createElement('link');
    styleSheet.id = styleId;
    styleSheet.type = 'text/css';
    styleSheet.rel = 'stylesheet';
    styleSheet.href = 'https://jittagornp.github.io/css-for-redis.io/redis.io.css?v=' + new Date().getTime();
    document.head.appendChild(styleSheet);
}