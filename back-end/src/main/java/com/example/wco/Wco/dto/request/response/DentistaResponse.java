package com.example.wco.Wco.dto.request.response;

import com.example.wco.Wco.model.Dentista;
import lombok.Builder;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Builder
@Data
public class DentistaResponse {

    private Integer id;
    private String nome;
    private String especialidade;
    private String cpf;
    private String crm;
    private String senha;

    public static DentistaResponse of(Dentista dentista) {

        return DentistaResponse.builder()
                .id(dentista.getId())
                .nome(dentista.getNome())
                .especialidade(dentista.getEspecialidade())
                .cpf(dentista.getCpf())
                .crm(dentista.getCrm())
                .senha(dentista.getSenha())
                .build();
    }

    public static List<DentistaResponse> of(List<Dentista> dentistas) {

        if (dentistas == null) {

            return null;
        }

        List<DentistaResponse> list = new ArrayList<>(dentistas.size());

        for (Dentista dentista : dentistas) {

            list.add(of(dentista));
        }

        return list;
    }
}
