import moment from "moment";
function calculo_juros(saldoDevedor: number, taxaMesal: number): number {
  // console.log('taxaMesal', taxaMesal)
    const juros = saldoDevedor * taxaMesal;
    return juros;
  }
function arredondar(valor, n) {
  var resultado = valor
  if (typeof (valor) == 'string')
  {
    resultado = parseInt(valor)
    //resultado = resultado.toFixed(n)
  }
  if (typeof (resultado) == 'number')
  {
    resultado = resultado.toFixed(n)
    }
  
  
  return parseInt(valor)
}


function criaLinha(N,data,amortizacao,extra,saldo_devedor,taxa_mesal)
{
  var juros_pago = calculo_juros(saldo_devedor, taxa_mesal) 
  const obj = {
    N: N,
    juros: juros_pago,
    parcelas: juros_pago + amortizacao + extra,
    data: data.format("MM/YYYY"),
    extra: extra,
    amortizacao: amortizacao,
    saldoDevedor: saldo_devedor - (amortizacao + extra) 
  }
  return obj
}



 export function Looping({ setItems }, saldoDevedor, taxaMesal, Amotização, data, extra) {
  let i = 0;
  let saldo_devedor_atual = saldoDevedor;
   let array = [];

   while ((Amotização + parseInt(extra)) < saldo_devedor_atual) {
    

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
      //array.push(criaLinha);
    } else {
      // console.log('diferente' )
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
      temp.juros = arredondar(calculo_juros(devedor_anterior, taxaMesal),2);
      temp.amortizacao = Amotização;
      var parcelas = temp.juros + temp.amortizacao + temp.extra;
      
      //parcelas = parcelas.toFixed(2);
      temp.parcelas = arredondar(parcelas, 2);
      temp.saldoDevedor = devedor_anterior - temp.amortizacao - temp.extra;
     
      saldo_devedor_atual = arredondar(temp.saldoDevedor, 2);
     
      array.push(temp);
     
    }
   }
  //  console.log('temp.saldoDevedor', saldo_devedor_atual )
   if (parseInt(saldo_devedor_atual) > 0) {
   
     if ( Amotização > saldo_devedor_atual) {
     
       const newDate = moment( array[array.length - 1].data, 'MM/YYYY').add(1, 'months');
      const temp = {
        N: i + 1,
        juros: 0,
        data: newDate.format('MM/YYYY'),
        parcelas: 0,
        amortizacao: saldo_devedor_atual,
        extra: 0,
        saldoDevedor: 0
      };
      temp.juros = Math.round(calculo_juros(saldo_devedor_atual, taxaMesal));
      temp.parcelas = temp.juros + temp.amortizacao;
      array.push(temp);
     } else {
     
       const newDate = moment( array[array.length - 1].data, 'MM/YYYY').add(1, 'months');
      const temp = {
        N: i + 1,
        juros: 0,
        data: newDate.format('MM/YYYY'),
        parcelas: 0,
        amortizacao: Amotização,
        extra: extra  ,
        saldoDevedor: 0,
      };
      temp.juros = Math.round(calculo_juros(saldo_devedor_atual, taxaMesal));
      var parcelas = temp.juros + temp.amortizacao + temp.extra;
      
      //parcelas = parcelas.toFixed(2);
      temp.parcelas = arredondar(parcelas, 2);
      array.push(temp);
    }
   }

   setItems(array)
 
  return array;
}

