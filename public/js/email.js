
window.addEventListener('submit', event => {
    event.preventDefault()
    const email = document.querySelector('#inputEmail').value;
    const name = document.querySelector('#inputName').value;
    const message = document.querySelector('#inputMessage').value;
    const phone = document.querySelector('#inputPhone').value;
    const load = document.querySelector('#loadEmail');


    if (email.trim() == '' || name.trim() == '' || phone.trim() == '' || message.trim() == '') {
        load.classList.add("loader");

        $.toast({
            heading: 'Campos Vazios',
            text: 'Todos os Campos devem ser preenchidos',
            showHideTransition: 'fade',
            icon: 'error',
            position: 'top-right'

        })
        load.classList.remove("loader");


    } else {

        load.classList.add("loader");

        fetch('/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',

            },
            mode: 'no-cors',
            body: `name=${name}&phone=${phone}&email=${email}&message=${message}`
        }).then(response => {
            if (response.status == 200) {
                $.toast({
                    heading: 'Sucesso',
                    text: 'Email enviado com sucesso',
                    showHideTransition: 'slide',
                    icon: 'success',
                    position: 'top-right'

                })
                document.querySelector('#inputEmail').value = ''
                document.querySelector('#inputName').value = ''
                document.querySelector('#inputMessage').value = ''
                document.querySelector('#inputPhone').value = ''
                load.classList.remove("loader");

            } else {
                $.toast({
                    heading: 'Erro',
                    text: 'Email não enviado',
                    showHideTransition: 'fade',
                    icon: 'error',
                    position: 'top-right'
                })
                load.classList.remove("loader");

            }

        }).catch(error => {
            $.toast({
                heading: 'Erro',
                text: 'Email não enviado',
                showHideTransition: 'fade',
                icon: 'error',
                position: 'top-right'
            })

        })


    }

})