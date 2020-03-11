
window.addEventListener("load", async function () {
    let response = await fetch(`http://localhost:3000/user`, { method: 'POST' })
    console.log('response :', response);
    let {status} = response
    if (status == 201) {
        location.reload();
    }
});