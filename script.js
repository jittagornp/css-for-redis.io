const styleId = 'redis-io-stylesheet';
const styleText = `
article pre code {
    min-width           : 100%;
    box-sizing      : border-box;
    background-color: #292929 !important;
    color           : #fff;
    border-radius   : 5px;
    border-color    : #000 !important;
}

article a {
    color: #0084dc;
}

article p {
    line-height: 30px;
}

article ul,
article ol {
    padding-top     : 1rem;
    padding-left    : 2rem;
    padding-right   : 1rem;
    padding-bottom  : 1rem;
    border-radius   : 5px;
    background-color: #fff3e5;
}

article p code {
    background-color: #ffdcdc;
    padding         : 3px 5px;
    border-radius   : 5px;
}

article h2 {
    margin-top: 2.5rem;
    color     : #0084dc;
}

article h1 {
    border-bottom : solid 2px #dae2e4;
    padding-bottom: 1rem;
    margin-bottom : 2rem;
}

p+p {
    margin-top: 1rem !important;
}

.text em {
    color: #ff6e19;
}
`;

if (!document.getElementById(styleId)) {
    var styleSheet = document.createElement('style');
    styleSheet.id = styleId;
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = styleText;
    document.head.appendChild(styleSheet);
}