import moment from "moment";
function calculo_juros(saldoDevedor: number, taxaMesal: number): number {
  console.log('taxaMesal', taxaMesal)
    const juros = saldoDevedor * taxaMesal;
    return juros;
  }

 export function Looping({ setItems }, saldoDevedor, taxaMesal, Amotização, data, extra) {
  let i = 0;
  let saldo_devedor_atual = saldoDevedor;
  let array = [];

  while ((Amotização + extra) < saldo_devedor_atual) {
    i++;
    if (i === 1) {
      const obj = {
        N: 0,
        juros: 0,
        parcelas: 0,
        data: data.format("MM/YYYY"),
        extra: 0,
        amortizacao: 0,
        saldoDevedor: 0
      };
      obj.N = i;
      obj.juros = 0;
      obj.parcelas = 0;
      obj.amortizacao = 0;
      obj.extra = 0;
      obj.saldoDevedor = saldoDevedor;
      array.push(obj);
    } else {
      const devedor_anterior = array[array.length - 1].saldoDevedor;
      const newDate = moment( array[array.length - 1].data, 'MM/YYYY').add(1, 'months');
      const temp = {
        N: 0,
        juros: 0,
        data: newDate.format('MM/YYYY'),
        parcelas: 0,
        amortizacao: 0,
        extra: extra,
        saldoDevedor: 0
      };
      temp.N = i;
      temp.juros = calculo_juros(devedor_anterior, taxaMesal);
      temp.amortizacao = Amotização;
      var parcelas = temp.juros + temp.amortizacao + temp.extra
      console.log(typeof(parcelas))
      //parcelas = parcelas.toFixed(2);
      temp.parcelas = parseFloat(parcelas);
      temp.saldoDevedor = devedor_anterior - temp.amortizacao - temp.extra;
      array.push(temp);
      saldo_devedor_atual = temp.saldoDevedor;
    }
  }
   if (saldo_devedor_atual > 0) {
    console.log('entramos aqui > 0')
     if (saldo_devedor_atual < Amotização) {
      console.log('entramos aqui < Amotização')
      const temp = {
        N: i + 1,
        juros: 0,
        parcelas: 0,
        amortizacao: saldo_devedor_atual,
        extra: 0,
        saldoDevedor: 0
      };
      temp.juros = Math.round(calculo_juros(saldo_devedor_atual, taxaMesal));
      temp.parcelas = temp.juros + temp.amortizacao;
      array.push(temp);
     } else {
      console.log('entramos aqui > Amotização')
      const temp = {
        N: i + 1,
        juros: 0,
        parcelas: 0,
        amortizacao: Amotização,
        extra: Amotização + extra - saldo_devedor_atual,
        saldoDevedor: 0
      };
      temp.juros = Math.round(calculo_juros(saldo_devedor_atual, taxaMesal));
      temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
      array.push(temp);
    }
   }
   setItems(array)
  // console.log(array);
  return array;
}
