export function Amortizacao({ valorInicial, valorEntrada, parcelaMes }:any) {
    // console.log("valorEntrada", valorEntrada)
    // console.log("valorInicial", valorInicial)
    // console.log("parcelaMes", parcelaMes)

    const Amotização = (valorInicial - valorEntrada) / parcelaMes		
    
    console.log("amortização", Amotização)
    return Amotização
}