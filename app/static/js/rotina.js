// Configurações Routine
//Checklist Diário
// Copiar Solicitante
function CopyR1(){
	$("#R1").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL1(){
	$("#L1").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT1(){
	$("#T1").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker Checklist
$("#DT1").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O1").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO1").hide();
		} else {
			$("#DO1").show();
		}
	});
});
// Gerar Descrição Checklist
function GenerateDE1(){
	var data = document.getElementById("D1").value;
	var hora = document.getElementById("H1").value;
	var ocorrencia = document.getElementById("O1").value;
	var descricao = document.getElementById("DOT1").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog de Realização de Checklist Diário\nDescrição: Checklist Diário\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog de Realização de Checklist Diário\nDescrição: Checklist Diário\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET1").value = script;
}
// Copiar Descrição Checklist
function CopyDE1(){
	$("#DET1").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS1(){
	$("#S1").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG1(){
	$("#DG1").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN1(){
	$("#N1").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN1(){
	var note = "Realizado Checlist Diário\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT1").value = note;
}
// Copiar Nota de Fechamento
function CopyCN1(){
	$("#CNT1").select();
	document.execCommand("copy");
}
//Acompanhamento do Jornal BDPE
// Copiar Solicitante
function CopyR2(){
	$("#R2").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL2(){
	$("#L2").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT2(){
	$("#T2").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker BDPE
$("#DT2").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O2").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO2").hide();
		} else {
			$("#DO2").show();
		}
	});
});
// Gerar Descrição Acompanhamento do Jornal BDPE
function GenerateDE2(){
	var data = document.getElementById("D2").value;
	var hora = document.getElementById("H2").value;
	var ocorrencia = document.getElementById("O2").value;
	var descricao = document.getElementById("DOT2").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal BDPE\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal BDPE\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET2").value = script;
}
// Copiar Descrição Acompanhamento Jornal BDPE
function CopyDE2(){
	$("#DET2").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS2(){
	$("#S2").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG2(){
	$("#DG2").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN2(){
	$("#N2").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN2(){
	var note = "Realizado Acompanhamento\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT2").value = note;
}
// Copiar Nota de Fechamento
function CopyCN2(){
	$("#CNT2").select();
	document.execCommand("copy");
}
//Acompanhamento do Jornal NE1
// Copiar Solicitante
function CopyR3(){
	$("#R3").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL3(){
	$("#L3").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT3(){
	$("#T3").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker NE1
$("#DT3").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O3").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO3").hide();
		} else {
			$("#DO3").show();
		}
	});
});
// Gerar Descrição Acompanhamento do Jornal NE1
function GenerateDE3(){
	var data = document.getElementById("D3").value;
	var hora = document.getElementById("H3").value;
	var ocorrencia = document.getElementById("O3").value;
	var descricao = document.getElementById("DOT3").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal NE1\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal NE1\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET3").value = script;
}
// Copiar Descrição Acompanhamento Jornal NE1
function CopyDE3(){
	$("#DET3").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS3(){
	$("#S3").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG3(){
	$("#DG3").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN3(){
	$("#N3").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN3(){
	var note = "Realizado Acompanhamento\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT3").value = note;
}
// Copiar Nota de Fechamento
function CopyCN3(){
	$("#CNT3").select();
	document.execCommand("copy");
}
//Acompanhamento do Jornal GE
// Copiar Solicitante
function CopyR4(){
	$("#R4").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL4(){
	$("#L4").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT4(){
	$("#T4").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker GE
$("#DT4").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O4").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO4").hide();
		} else {
			$("#DO4").show();
		}
	});
});
// Gerar Descrição Acompanhamento do Jornal GE
function GenerateDE4(){
	var data = document.getElementById("D4").value;
	var hora = document.getElementById("H4").value;
	var ocorrencia = document.getElementById("O4").value;
	var descricao = document.getElementById("DOT4").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal GE\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal GE\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET4").value = script;
}
// Copiar Descrição Acompanhamento Jornal GE
function CopyDE4(){
	$("#DET4").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS4(){
	$("#S4").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG4(){
	$("#DG4").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN4(){
	$("#N4").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN4(){
	var note = "Realizado Acompanhamento\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT4").value = note;
}
// Copiar Nota de Fechamento
function CopyCN4(){
	$("#CNT4").select();
	document.execCommand("copy");
}
//Acompanhamento do Jornal NE2
// Copiar Solicitante
function CopyR5(){
	$("#R5").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL5(){
	$("#L5").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT5(){
	$("#T5").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker NE2
$("#DT5").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O5").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO5").hide();
		} else {
			$("#DO5").show();
		}
	});
});
// Gerar Descrição Acompanhamento do Jornal NE2
function GenerateDE5(){
	var data = document.getElementById("D5").value;
	var hora = document.getElementById("H5").value;
	var ocorrencia = document.getElementById("O5").value;
	var descricao = document.getElementById("DOT5").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal NE2\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog de Realização do Acompanhamento do Jornal\nDescrição: Acompanhamento do Jornal NE2\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET5").value = script;
}
// Copiar Descrição Acompanhamento do Jornal NE2
function CopyDE5(){
	$("#DET5").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS5(){
	$("#S5").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG5(){
	$("#DG5").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN5(){
	$("#N5").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN5(){
	var note = "Realizado Acompanhamento\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT5").value = note;
}
// Copiar Nota de Fechamento
function CopyCN5(){
	$("#CNT5").select();
	document.execCommand("copy");
}
//Backup do iNews
// Copiar Solicitante
function CopyR6(){
	$("#R6").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL6(){
	$("#L6").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT6(){
	$("#T6").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker Backup do iNews
$("#DT6").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O6").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO6").hide();
		} else {
			$("#DO6").show();
		}
	});
});
// Gerar Descrição Backup do iNews
function GenerateDE6(){
	var data = document.getElementById("D6").value;
	var hora = document.getElementById("H6").value;
	var ocorrencia = document.getElementById("O6").value;
	var descricao = document.getElementById("DOT6").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog de Realização do Backup do iNews\nDescrição: Backup do iNews\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog de Realização do Backup do iNews\nDescrição: Backup do iNews\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET6").value = script;
}
// Copiar Descrição Backup do iNews
function CopyDE6(){
	$("#DET6").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS6(){
	$("#S6").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG6(){
	$("#DG6").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN6(){
	$("#N6").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN6(){
	var note = "Realizado Backup\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT6").value = note;
}
// Copiar Nota de Fechamento
function CopyCN6(){
	$("#CNT6").select();
	document.execCommand("copy");
}
//Acompanhamento do Scout
// Copiar Solicitante
function CopyR7(){
	$("#R7").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL7(){
	$("#L7").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT7(){
	$("#T7").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker Scout
$("#DT7").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Ocultar e Mostrar a DIV (Descrição da Ocorrência)
$(document).ready(function(){
	$("#O7").on("change",function(){
		var SelectValue = $(this).val();
		if (SelectValue == "Não"){
			$("#DO7").hide();
		} else {
			$("#DO7").show();
		}
	});
});
// Gerar Descrição Acompanhamento do Scout
function GenerateDE7(){
	var data = document.getElementById("D7").value;
	var hora = document.getElementById("H7").value;
	var ocorrencia = document.getElementById("O7").value;
	var descricao = document.getElementById("DOT7").value;
	if (ocorrencia == "Não"){
		var msg = "Chamado Póslog para Verificação dos Equipamentos do Scout e Acompanhamento de Transmissão do Futebol\nDescrição: Acompanhamento do Scout\nData: "+data+"\nHora: "+hora+"\nOcorrências: Sem Ocorrências";
	} else {
		var msg = "Chamado Póslog para Verificação dos Equipamentos do Scout e Acompanhamento de Transmissão do Futebol\nDescrição: Acompanhamento do Scout\nData: "+data+"\nHora: "+hora+"\nOcorrências: "+descricao+"";
	}
	var script = msg;
	document.getElementById("DET7").value = script;
}
// Copiar Descrição Acompanhamento do Scout
function CopyDE7(){
	$("#DET7").select();
	document.execCommand("copy");
}
// Copiar Sistema/Aplicação
function CopyS7(){
	$("#S7").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG7(){
	$("#DG7").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN7(){
	$("#N7").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN7(){
	var note = "Realizado Acompanhamento\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT7").value = note;
}
// Copiar Nota de Fechamento
function CopyCN7(){
	$("#CNT7").select();
	document.execCommand("copy");
}
//Ambientação
// Copiar Solicitante
function CopyR8(){
	$("#R8").select();
	document.execCommand("copy");
}
// Copiar Detalhes do Local do Atendimento
function CopyL8(){
	$("#L8").select();
	document.execCommand("copy");
}
// Copiar Título
function CopyT8(){
	$("#T8").select();
	document.execCommand("copy");
}
// Configuração Datetimepicker Ambientação
$("#DT8").datetimepicker({
	format: "dd/mm/yyyy",
	language: "pt-BR",
	todayHighlight: true,
	minView: 2,
	maxView: 3,
	forceParse: true,
	todayBtn: true,
	keyboardNavigation: true,
	autoclose: true
});
// Gerar Descrição Ambientação
function GenerateDE8(){
    var usuario = document.getElementById("R8").value;
    var departamento = document.getElementById("DP8").value;
	var data = document.getElementById("D8").value;
	var hora = document.getElementById("H8").value;
	var msg = "Chamado Póslog de Ambientação de Usuário\nUsuário: "+usuario+"\nDepartamento: "+departamento+"\nData: "+data+"\nHora: "+hora+"";
	var script = msg;
	document.getElementById("DET8").value = script;
}
// Copiar Descrição Ambientação
function CopyDE8(){
	$("#DET8").select();
	document.execCommand("copy");
}
// Copiar Grupo Designado
function CopyDG8(){
	$("#DG8").select();
	document.execCommand("copy");
}
// Copiar Nota
function CopyN8(){
	$("#N8").select();
	document.execCommand("copy");
}
// Gerar Nota de Fechamento
function GenerateCN8(){
	var note = "Realizado Ambientação\n\nFavor responda a nossa pesquisa de satisfação que se encontra ao final desse e-mail.\nSua opinião é muito importante para a melhoria do nosso trabalho\nObrigado";
	document.getElementById("CNT8").value = note;
}
// Copiar Nota de Fechamento
function CopyCN8(){
	$("#CNT8").select();
	document.execCommand("copy");
}
