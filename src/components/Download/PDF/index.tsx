import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generatePDF = (items) => {
  // Defina as configurações do documento
  console.log('itemsss', items)
  const documentDefinition = {
    content: [
      {
        // layout: 'lightHorizontalLines', // optional
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],

          body: [
            ['Data', 'Parcelas', 'Juros', 'Amortização', 'Amortização extra', 'Saldo'],
            ...items.map(({ data, parcelas, juros, amortizacao, extra, saldoDevedor }) => [data,`${parcelas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`, `${juros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`, `${amortizacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`, `${extra.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`, `${saldoDevedor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`])


          ]
        },
        layout: {
          fillColor: function (rowIndex, node, columnIndex) {
            return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
          }
        }
      }
    ]
  };

  // Gere o PDF e abra-o em uma nova janela
  pdfMake.createPdf(documentDefinition).open();

};
