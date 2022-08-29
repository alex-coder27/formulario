const enviar = document.getElementById('botao')

enviar.addEventListener("click", function () {
    const dadosUsuario = document.querySelectorAll('.input')

    dadosUsuario.forEach(function (dado) {
        const div = dado.parentElement
        if (dado.value === '') {
            div.classList.remove('borda-sucesso')
            div.classList.add('borda-obrigatoria')
        } else {
            div.classList.remove('borda-obrigatoria')
            div.classList.add('borda-sucesso')
        }
    })
})