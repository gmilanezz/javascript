function calcular() {
    km = parseFloat(document.getElementById("km").value);

    horaMadrugada = document.getElementById("horaMadrugada");
    horaPico = document.getElementById("horaPico");
    horaDomingo = document.getElementById("horaDomingo");
    
    tipoComum = document.getElementById("tipoComum");
    tipoPremium = document.getElementById("tipoPremium");
    tipoVip = document.getElementById("tipoVip");
  

    comum= 2.50 * km
    premium= 4.50 * km
    vip= 7.50 * km
    total = 0

    if(horaMadrugada.checked && tipoComum.checked){
        total = comum + (comum * 0.20)
    }
    else if(horaMadrugada.checked && tipoPremium.checked){
        total = premium + (premium * 0.15)
    }
    else if(horaMadrugada.checked && tipoVip.checked){
        total = vip + (vip * 0.15)
    }
    else if(horaPico.checked && tipoComum.checked){
        total = comum + (comum * 0.20)
    }
    else if(horaPico.checked && tipoPremium.checked){
        total = premium + (premium * 0.15)
    }
    else if(horaPico.checked && tipoVip.checked){
        total = vip + (vip * 0.15)
    } else if(horaDomingo.checked && tipoComum.checked){
        total = comum - (comum * 0.10)
    }
    else if(horaDomingo.checked && tipoPremium.checked){
        total = premium - (premium * 0.10)
    }
    else if(horaDomingo.checked && tipoVip.checked){
        total = vip - (vip * 0.10)
    }
    if(km > 100)
        total = total + 50

    document.getElementById("resposta").innerHTML='Total da viagem: R$'+total;
}
