package com.example.wco.Wco.dto.request.response;

import com.example.wco.Wco.model.Paciente;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class PacienteResponse {

    private String nome;
    private String email;
    private String cpf;
    private String senha;


    public static PacienteResponse of(Paciente paciente) {

        return PacienteResponse.builder()
                .nome(paciente.getNome())
                .email(paciente.getEmail())
                .cpf(paciente.getCpf())
                .senha(paciente.getSenha())
                .build();
    }

    public static List<PacienteResponse> of(List<Paciente> pacientes) {

        if (pacientes == null) {

            return null;
        }

        List<PacienteResponse> list = new ArrayList<>(pacientes.size());
        for(Paciente paciente : pacientes) {

            list.add(of(paciente)) ;
        }

        return list;
    }

}
