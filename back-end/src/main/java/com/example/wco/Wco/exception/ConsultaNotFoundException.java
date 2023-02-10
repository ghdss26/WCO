package com.example.wco.Wco.exception;

public class ConsultaNotFoundException extends RuntimeException{
	
	public ConsultaNotFoundException(Long id) {

		super("Não foi possível encontrar a consulta com id " + id);
	}
}
