package com.example.wco.Wco.dto.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class ConsultaRequest {

    private LocalDate data_consulta;
    private String horario;
    private String situacao;
	private Integer dentistaId; 
	private Integer pacienteId;
}
