function calculo_juros(saldoDevedor, taxaMesal):number {
    const juros = saldoDevedor * taxaMesal;
    return juros;
  }

 export function looping(saldo_devedor, taxa_mensal, n_parcelas, extra) {
  let i = 0;
  let saldo_devedor_atual = saldo_devedor;
  let array = [];
  let parcela = saldo_devedor*(((1+taxa_mensal)**n_parcelas*taxa_mensal)/((1+taxa_mensal)**n_parcelas-1))
  var  amortizacao = 0
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
      temp.parcelas = parcela // temp.juros + temp.amortizacao + temp.extra;
      amortizacao = temp.parcelas - temp.juros;
      temp.amortizacao = amortizacao 
      temp.saldoDevedor = Math.round(devedor_anterior - amortizacao - temp.extra);
      array.push(temp);
      saldo_devedor_atual = temp.saldoDevedor;
    }
  }
  console.log(array);
  return array;
}
