function sendAnalytics(id) {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', id);
};

sendAnalytics("G-RC1XFJKFC9");