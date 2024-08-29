document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const name4 = document.getElementById("name4").value;
    const message = document.getElementById("message").value;


    const data = {
        names: [name1, name2, name3, name4],
        message: message
    };

    fetch("https://fsdt-contact.onrender.com/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => { })
        .catch(error => {
            console.error("Erro ao enviar a mensagem:", error);
            alert("Erro ao enviar a mensagem.");
        });
});