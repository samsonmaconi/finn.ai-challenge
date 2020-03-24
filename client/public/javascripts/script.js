
window.addEventListener("load", async function () {
    try {

        let response = await fetch(`http://web_server:3000/user`, { method: 'POST' })
        console.log('response :', response);
        let { status } = response
        if (status == 201) {
            location.reload();
        }
    } catch (error) {
        console.log('error :', error);
    }
});