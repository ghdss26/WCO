package com.example.wco.Wco.dto.request;

import lombok.Data;

@Data
public class DentistaRequest {

    private String nome;
    private String especialidade;
    private String cpf;
    private String crm;
    private String senha;
}
