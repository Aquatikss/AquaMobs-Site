let stringText = 'play.aquamobs.com';

async function copyBtn() {

    let stringText = 'play.aquamobs.com';

    navigator.clipboard.writeText(stringText)
        .then(() => {
            console.log('Copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });

    document.getElementById("copyip").innerText = "Copied!";

    await wait(2000);

    document.getElementById("copyip").innerText = "Copy IP";

}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}