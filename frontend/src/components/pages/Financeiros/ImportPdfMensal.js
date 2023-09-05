import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

function studentsPdf(students){
	pdfMake.vfs = pdfFonts.pdfMake.vfs;
	
	const reportTitle = [
		{
			text: 'Alunos',
			fontSize: 15,
			bold: true,
			margin: [15, 20, 0, 45] //left, top, right, bottom
		}
	];

    
    const dados = students.map((student) => {
		return [
			{text: student.nome, fontSize: 9, margin: [0, 2, 0, 2]},
			{text: student.valor_mensalidade, fontSize: 9, margin: [0, 2, 0, 2]},
		]
	})
	
	const details = [
		{
			table:{
				headerRows: 1,
				widths: ['*', '*', '*', '*'], //largura automatica
				body: [
					[
						{text: 'Nome', style: 'tableHeader', fontSize: 10},
						{text: 'Mensalidade', style: 'tableHeader', fontSize: 10}
					],
                    ...dados
				],           
			},
			layout: 'headerLineOnly'
		}
	];
	
	function Rodape(currentPage, pageCounf){
		return [
			{
                text: currentPage + ' / ' + pageCounf,
                alignment: 'right',
                fontSize: 9,
                margin: [0, 10, 10, 0] //left, top, right, bottom
		    }
		]
	};
	
	//definições do relatorio
	const docDefinitions = {
		pageSize: 'A4',
		pageMargins: [15, 50, 15, 40],
		
		header: [reportTitle],
		content: [details],
		footer: [Rodape],
		
	}
	
	pdfMake.createPdf(docDefinitions).download();
}

export default studentsPdf;