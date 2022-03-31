async function loginFormHandler(event) {
    event.preventDefault();
 

    const email = document.getElementById('email-login').value.trim();
    console.log("blah 2", email);
    const password = document.getElementById('password-login').value.trim();
    console.log("blah 3", password);
    console.log(email);

    if (email && password) {
        console.log("blah if", email)
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log("test")
        if (response.ok) {
            const json = await response.json()
            console.log("zebra", json);

            const id = json.Player.id;
            console.log("lion");
            document.location.replace(`/dashboard?id=${id}`);
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
