chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            document.querySelectorAll('.videoplayer_media').forEach((el) => {
                const mirrored = el.style.transform.includes('scaleX(-1)');
                el.style.transform = mirrored ? '' : 'scaleX(-1)';
            });
        },
    });
});


