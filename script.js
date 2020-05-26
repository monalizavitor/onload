function carregar() {
    var msg = document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var data = new Date()
    var minut = data.getMinutes()
        msg.innerHTML = `Agora são ${hora}h e ${minut}min.`
    if (hora >= 6 && hora < 12) {
        img.src = 'img/dia.jpg'
        msg.innerHTML += ' Bom dia!'
        document.body.style.background = '#f7d568'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/tarde.jpg'
        msg.innerHTML += ' Boa tarde!'
        document.body.style.background = '#ed745a'
    } else {
        img.src = 'img/noite.jpg'
        msg.innerHTML += ' Boa noite!'
        document.body.style.background = '#935c96'
    }

}


