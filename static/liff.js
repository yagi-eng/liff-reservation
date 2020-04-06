$(document).ready(function () {
    var liffId = "（自分のLiffIdを入力）";
    initializeLiff(liffId);
})

function initializeLiff(liffId) {
    liff
        .init({
            liffId: liffId
        })
        .then(() => {
        })
        .catch((err) => {
            console.log('LIFF Initialization failed ', err);
        });
}

function sendMessage(text) {
    liff.sendMessages([{
        'type': 'text',
        'text': text
    }]).then(function () {
        liff.closeWindow()
    }).catch(function (error) {
        window.alert('Failed to send message ' + error);
    });
}