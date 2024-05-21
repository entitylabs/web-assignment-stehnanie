function onSubmit() {


    const nameElement = document.getElementById('name');

    const isNameFieldvalid = validateField(nameElement);

    const phoneElement = document.getElementById('phone');

    const isPhoneFieldvalid = validateField(phoneElement);

    const messageElement = document.getElementById('message');

    const isMesssageFieldvalid = validateField(messageElement);

    const isFormValid = isNameFieldvalid && isPhoneFieldvalid && isMesssageFieldvalid;

    onvalidFormSubmission(isFormValid, nameElement, phoneElement, messageElement);

}


// use of rest operator
function onvalidFormSubmission(isFormValid, ...fields) {


    if (isFormValid) {

        //clear fields
        fields.forEach(field=> {
            fields.value = '';
        })

        // set success label
        const infoField = document.getElementById('info_label');

        infoField.textContent = "Message sent successfully!";

        infoField.setAttribute('class', 'success');

        // unset success label after 2 seconds
        setInterval(function () {

            infoField.removeAttribute('class', 'success');

            infoField.textContent = '';

        }, 2 * 1000);
    }
}



function validateField(field) {

    if (field.value == '') {

        field.setAttribute('class', 'error-input')

        setInterval(function () {

            field.removeAttribute('class', 'error-input')

        }, 2 * 1000);

        return false;

    }

    return true;

}