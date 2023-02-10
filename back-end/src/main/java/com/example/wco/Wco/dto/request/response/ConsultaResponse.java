package com.example.wco.Wco.dto.request.response;

import com.example.wco.Wco.model.Consulta;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
public class ConsultaResponse {

    private LocalDate data_consulta;
    private String horario;
    private String situacao;
    private String dentista;
    private String paciente;


    public static ConsultaResponse of(Consulta consulta) {

        return ConsultaResponse.builder()
                .data_consulta(consulta.getData_consulta())
                .horario(consulta.getHorario()) 
                .situacao(consulta.getSituacao())
                .dentista(consulta.getDentista().getNome())
                .paciente(consulta.getPaciente().getNome())
                .build();
    }
    
    public static List<ConsultaResponse> of(List<Consulta> consultas) {
        
        if(consultas == null) {
            
            return null; 
        }

       List<ConsultaResponse> list = new ArrayList<>(consultas.size());
        
        for (Consulta consulta : consultas) {
            
            list.add(of (consulta)); 
        }
        
        return list;
    }

}
