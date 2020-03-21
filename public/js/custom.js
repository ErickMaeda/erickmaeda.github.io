function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('button-send').disabled = true;

    const params = {
        "emailTemplateCode": "x35U5bXvJAdhXZWndvtf",
        "email": email,
        "name": name,
        "reason": subject,
        "notes": message
    };
    $.post("https://us-central1-erick-maeda.cloudfunctions.net/email", params)
        .done(function () {
            document.getElementById('status').innerHTML = "Email sent successfully!";
            document.getElementById('button-send').disabled = true;
            setTimeout(function () {
                document.getElementById('status').innerHTML = "";
                document.getElementById('button-send').disabled = false;
            }, 3000);
        })
}