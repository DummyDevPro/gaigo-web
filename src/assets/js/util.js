import axios from "axios";

function sendMail(email, subject, body) {
    const formData = new FormData()
    formData.append('email', email)
    formData.append('subject', subject)
    formData.append('body', body)
    axios.post(
        'https://script.google.com/macros/s/AKfycbzZzCtN5_0mmQ3cIfoy0hdA9uXZOYKYMBECw4CZeRj3SwZmyuf8Q8Cbv4-39q75ar3PVA/exec',
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
    ).then((res) => {
        console.log(res);
    }).catch((error) => {
        console.log(error);
    })
}

export {
    sendMail
}