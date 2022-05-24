const date3 = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
document.write(date3);

    function verificar() {
    var confirmar = window.document.getElementById('nacionalidade')
    var res = window.document.querySelector('div#res')
    var valor = String(nacionalidade.value) // tratar dados que forem inseridos no campo nacionalidade

      if (valor === 'Brasileiro' ) {
        res.innerHTML = `Você é Nativo(a) do país de origem`
      } else if (valor !== 'Brasileiro' && valor != ''){
        res.innerHTML = `Você é ${valor}, portanto é Estrangeiro(a).`
        res.style.color = "yellow"
      } else if (valor === '') {
        res.innerHTML = `[ERROR] o campo está vazio!`
        res.style.color = "red"
      }
    }

    function confirmar() {
      var res = document.getElementById('agendado')
      var n = document.getElementById('nome')
        n = String(nome.value)
      if (rad[0].checked) {
        res.innerHTML = `<p> Sr. ${n}, Agendado para Domingo. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      } else if (rad[1].checked) {
      var res = document.getElementById('agendado')
        res.innerHTML = `<p> Sr. ${n}, Agendado para Segunda-feira. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      } else if (rad[2].checked) {
      var res = document.getElementById('agendado')
        res.innerHTML = `<p>Agendado para Terça-feira. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      } else if (rad[3].checked) {
        var res = document.getElementById('agendado')
          res.innerHTML = `<p>Sr. ${n}, Agendado para Quarta-feira. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      } else if (rad[4].checked) {
        var res = document.getElementById('agendado')
          res.innerHTML = `<p>Sr. ${n}, Agendado para Quinta-feira. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      } else if (rad[5].checked) {
        var res = document.getElementById('agendado')
          res.innerHTML = `<p>Agendado para Sexta-feira. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      } else if (rad[6].checked) {
        var res = document.getElementById('agendado')
          res.innerHTML = `<p>Sr. ${n}, Agendado para Sábado. <p> Compareça portando documento de identificação (RG) ou similar.</p></p>`
      }
  }