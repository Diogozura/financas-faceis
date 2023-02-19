function calculo_juros(saldoDevedor, taxaMesal) {
    const juros = saldoDevedor * taxaMesal;
    return juros;
  }

 function looping(saldo_devedor, taxa_mensal, amortizacao, extra) {
  let i = 0;
  let saldo_devedor_atual = saldo_devedor;
  let array = [];

  while (amortizacao + extra < saldo_devedor_atual) {
    i++;
    if (i === 1) {
      const obj = {
        N: 0,
        juros: 0,
        parcelas: 0,
        extra: 0,
        amortizacao: 0,
        saldoDevedor: 0
      };
      obj.N = i;
      obj.juros = 0;
      obj.parcelas = 0;
      obj.amortizacao = 0;
      obj.extra = 0;
      obj.saldoDevedor = saldo_devedor;
      array.push(obj);
    } else {
      const devedor_anterior = array[array.length - 1].saldoDevedor;
      const temp = {
        N: 0,
        juros: 0,
        parcelas: 0,
        amortizacao: 0,
        extra: extra,
        saldoDevedor: 0
      };
      temp.N = i;
      temp.juros = Math.round(calculo_juros(devedor_anterior, taxa_mensal));
      temp.amortizacao = amortizacao;
      temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
      temp.saldoDevedor = Math.round(devedor_anterior - amortizacao - temp.extra);
      array.push(temp);
      saldo_devedor_atual = temp.saldoDevedor;
    }
  }
  if (saldo_devedor_atual > 0) {
    if (saldo_devedor_atual < amortizacao) {
      const temp = {
        N: i + 1,
        juros: 0,
        parcelas: 0,
        amortizacao: saldo_devedor_atual,
        extra: 0,
        saldoDevedor: 0
      };
      temp.juros = Math.round(calculo_juros(saldo_devedor_atual, taxa_mensal));
      temp.parcelas = temp.juros + temp.amortizacao;
      array.push(temp);
    } else {
      const temp = {
        N: i + 1,
        juros: 0,
        parcelas: 0,
        amortizacao: amortizacao,
        extra: saldo_devedor_atual - amortizacao ,
        saldoDevedor: 0
      };
      temp.juros = Math.round(calculo_juros(saldo_devedor_atual, taxa_mensal));
      temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
      array.push(temp);
    }
  }
  console.log(array);
  return array;
}
