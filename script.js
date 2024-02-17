 let tickets = [];

function buyTicket() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;

    if (validateInputs()) {
        const ticket = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phone: phone,
            quantity: quantity
        };

        tickets.push(ticket);
        displayTickets();
        clearInputs();
    }
}

function validateInputs() {
    let isValid = true;

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const quantity = document.getElementById('quantity').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d[10]$/; // /^\d+$/

    if (firstname === '') {
        document.getElementById('firstnameError').innerText = 'må skrive noe inn i fornavn';
        isValid = false;
    } else {
        document.getElementById('firstnameError').innerText = "";
    }

    if (lastname === '') {
        document.getElementById('lastnameError').innerText = 'må skrive noe inn i etternavn';
        isValid = false;
    } else {
        document.getElementById('lastnameError').innerText = "";
    }

    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').innerText = 'må skrive noe inn i epost';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = "";
    }

    if (phone === '' || !phonePattern.test(phone)) {
        document.getElementById('phoneError').innerText = 'må skrive noe inn i telefonnr';
        isValid = false;
    } else {
        document.getElementById('phoneError').innerText = "";
    }

    if (quantity === '') {
        document.getElementById('quantityError').innerText = 'må skrive inn antall';
        isValid = false;
    } else {
        document.getElementById('quantityError').innerText = "";
    }

    return isValid;
}

function clearTickets() {
    tickets = [];
    displayTickets();
}

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';

    tickets.forEach(ticket => {
        const ticketInfo = document.createElement('div');
        ticketInfo.textContent = `Navn: ${ticket.firstname} ${ticket.lastname}, E-post: ${ticket.email}, Telefon: ${ticket.phone}, Antall: ${ticket.quantity}`;
        ticketList.appendChild(ticketInfo);
    });
}

function clearInputs() {
    document.getElementById('firstname').value = '';
    document.getElementById('lastname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('quantity').value = '';

    // fjerne feilmeldinger
    document.getElementById('firstnameError').innerText = '';
    document.getElementById('lastnameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('quantityError').innerText= '';
}