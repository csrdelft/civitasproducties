import './ticketverkoop.scss'

import 'bootstrap'


let form = document.querySelector('#bestel-form');
let errorContainer = form.querySelector('.errors');
form.addEventListener('input', () => errorContainer.classList.add('d-none'));

form.addEventListener('submit', (event) => {
    event.preventDefault();

    form.submitButton.disabled = true;

    console.log(form.action)
    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    })
        .then(response => {
            if (response.ok) {
                form.reset();
                errorContainer.classList.remove('d-none', 'alert-danger');
                errorContainer.classList.add('alert-success');
            } else {
                errorContainer.classList.remove('d-none', 'alert-success');
                errorContainer.classList.add('alert-danger');
            }
            return response
        })
        .then(response => response.text())
        .then(body => {
            errorContainer.textContent = body
        })
        .then(() => {
            form.submitButton.disabled = false;
        })
});
