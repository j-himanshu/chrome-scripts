registerInterval = (func, message) => setInterval(() => {
    try {
        func();
        console.log(`${message}\n${document.getElementsByTagName('h1')[0].innerText}`);
    } catch(e){}
}, 1000);

registerInterval(
    () => document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click(), 
    'Skipped Youtube add! In your face Google!'
);
registerInterval(
    () => document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click(),
    'Removed Google pop-up ad!'
);
registerInterval(
    () => document.getElementsByClassName('style-scope ytd-companion-slot-renderer')[0].remove(),
    'Removed Google in-page ad!'
);
registerInterval(
    () => document.getElementsByTagName('ytd-merch-shelf-renderer')[0].remove(),
    'Removed Merchandise ad!'
);
registerInterval(
    () => document.getElementById('offer-module').remove(),
    'Removed movie purchase pop-up :P'
);
registerInterval(
    () => document.getElementsByClassName('branding-img-container')[0].remove(),
    'Removed in-video subscribe button.'
);
registerInterval(
    () => document.getElementsByClassName('ytp-ce-element')[0].remove(),
    'Removed recommendation in-video links (mini video)!'
);
registerInterval(
    () => [...document.getElementsByTagName('button')].filter(b => b.title == 'More info')[0].remove(),
    'Removed "More Info"'
);
registerInterval(
    () => document.getElementsByClassName('ytp-cards-teaser')[0].remove(),
    'Removed Teaser'
);
registerInterval(
    () => [...document.getElementsByClassName('style-scope ytd-button-renderer style-text size-default')]
    .filter(b => b.innerText === 'NO THANKS')[0].remove(),
    'Removed youtube-desktop popup!'
);
registerInterval(
    () => document.getElementsByTagName('paper-dialog')[0].children[0].children[2].children[3].children[0].click(),
    'Removed "Youtube Trial" popup'
);
registerInterval(
    () => [...document.getElementsByTagName('paper-button')].filter(a => a.innerText === 'SKIP TRIAL').forEach(b => b.click()),
    'Removed "Youtube Trial" popup'
);
