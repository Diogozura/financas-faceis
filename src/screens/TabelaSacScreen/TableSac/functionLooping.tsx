import moment from "moment";

function CalculoJuros(saldoDevedor: number, taxaMesal: number) : number {
    const juros = saldoDevedor * taxaMesal;
    return juros;
  }

export function Looping({ setItems }, saldoDevedor, taxaMesal, Amotização, data, extra) {
   
  //   console.log('saldoDevedor', saldoDevedor)
  //   console.log('taxaMesal', taxaMesal)
  //   console.log('Amotização', Amotização)
  //   console.log('data', data)
  // console.log('extra', extra)


    var i = 0;
    var saldoDevedorAtual = saldoDevedor
    var array = [] 
   
   
      do {
        i += 1;

          if (i == 1) {
              // console.log('entrou no if')
          const obj = {
          N: 0,
          juros : 0,
          parcelas : 0,
          data: data.format("MM/YYYY"),
          extra: 0,
          amortizacao : 0,
          saldoDevedor : 0,
          };
          obj.N = i
          obj.juros = 0;
          obj.parcelas = 0;
          obj.amortizacao = 0;
          obj.extra = 0;
          obj.saldoDevedor = saldoDevedor;
          array.push(obj)
          }
          else {
        // console.log('entrou no else')
          var devedorAnterior = array[array.length - 1].saldoDevedor
          const newDate = moment( array[array.length - 1].data, 'MM/YYYY').add(1, 'months');
          const temp = {
            N: 0,
            juros: 0,
            data: newDate.format('MM/YYYY'),
            parcelas : 0,
            amortizacao: 0,
            extra: extra,
            saldoDevedor : 0
          }
          temp.N = i;
          temp.juros = Math.round( CalculoJuros(devedorAnterior, taxaMesal));
          temp.amortizacao = Amotização;
          temp.parcelas = temp.juros + temp.amortizacao + temp.extra;
          temp.saldoDevedor = (devedorAnterior - Amotização - temp.extra);
          array.push(temp)
          saldoDevedorAtual = temp.saldoDevedor
        }
     
       
    } while ((Amotização + extra) < saldoDevedorAtual);
    
  
      setItems(array)
    console.log(array)
   return array
}