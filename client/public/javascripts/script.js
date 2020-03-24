
window.addEventListener("load", async function () {
    try {

        let response = await fetch(`http://${location.hostname}:3000/user`, { method: 'POST' })
        console.log('response :', response);
        let { status } = response
        if (status == 201) {
            location.reload();
        }
    } catch (error) {
        console.log('error :', error);
    }
});