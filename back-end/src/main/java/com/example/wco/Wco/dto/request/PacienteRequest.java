package com.example.wco.Wco.dto.request;

import lombok.Data;

@Data
public class PacienteRequest {

    private String nome;
    private String email;
    private String cpf;
    private String senha;
}
