async function copy() {
    try {
        await navigator.clipboard.writeText('play.aquamobs.com');
        console.log('Copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const copyBtn = document.querySelector('.copy-ip button');
const span = copyBtn.querySelector('span');

copyBtn.addEventListener('click', async () => {
    await copy();

    // Step 1: Wipe-in animation (cover the text with white)
    copyBtn.classList.add('wipe-in');

    // Step 2: After wipe-in, change text to "Copied!" after wipe finishes
    setTimeout(() => {
        copyBtn.classList.remove('wipe-in');  // Remove wipe-in
        span.textContent = 'Copied!';          // Change text to "Copied!"
        copyBtn.classList.add('wipe-out');     // Trigger wipe-out
    }, 500); // After 500ms wipe-in completes

    // Step 3: Wipe out after revealing "Copied!"
    setTimeout(() => {
        copyBtn.classList.remove('wipe-out'); // Remove wipe-out
        copyBtn.classList.add('wipe-in');     // Trigger wipe-in again
    }, 1000); // After 1 second (for the "Copied!" text to be visible)

    // Step 4: Change text back to "Copy IP" and wipe-out again
    setTimeout(() => {
        span.textContent = 'Copy IP';        // Change text to "Copy IP"
        copyBtn.classList.remove('wipe-in'); // Remove wipe-in
        copyBtn.classList.add('wipe-out');   // Trigger wipe-out to hide text
    }, 1500); // After 500ms wipe-in

    // Step 5: Reset everything after the wipe-out
    setTimeout(() => {
        copyBtn.classList.remove('wipe-out'); // Remove wipe-out
    }, 2000); // After 2 seconds, reset the button state
});
