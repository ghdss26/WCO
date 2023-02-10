package com.example.wco.Wco.model;

import com.example.wco.Wco.dto.request.ConsultaRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Builder // Gerar um Objeto com a classe
@Data  // Fazer Get, Set e To String
@Entity // Para dizer uma Entidade
@AllArgsConstructor // Cria um construtor com todos os argumentos
@NoArgsConstructor // Cria um construtor sem nenhum argumento
@Table(name = "consulta") // Definir a Tabela
public class Consulta {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_consulta")
    private LocalDate data_consulta;

    @Column(name = "horario", length = 40)
    private String horario;

    @Column(name = "situacao", length = 40)
    private String situacao;

	@JsonIgnore
    @ManyToOne
    @JoinColumn(name="dentista_id", nullable=false)
    private Dentista dentista;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="paciente_id", nullable=false)
    private Paciente paciente;

    public Consulta (Integer id) {

        this.id = id;
    }

    public static Consulta of(ConsultaRequest request) {

        return Consulta.builder()
                .data_consulta(request.getData_consulta())
                .horario(request.getHorario())
                .situacao(request.getSituacao())
                .dentista(new Dentista(request.getDentistaId()))
                .paciente(new Paciente(request.getPacienteId()))
                .build();
    }
}
