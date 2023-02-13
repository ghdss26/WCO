package com.example.wco.Wco.model;

import com.example.wco.Wco.dto.request.ConsultaRequest;
import com.example.wco.Wco.dto.request.PacienteRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import java.util.List;

import javax.persistence.*;

@Builder // Gerar um Objeto com a classe
@Data  // Fazer Get, Set e To String
@Entity // Para dizer uma Entidade
@AllArgsConstructor // Cria um construtor com todos os argumentos
@NoArgsConstructor // Cria um construtor sem nenhum argumento
@Table(name = "paciente")

public class Paciente {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "nome", length = 45)
    private String nome;

    @Column(name = "email", length = 45)
    private String email;

    @Column(name = "cpf", length = 13)
    private String cpf;

    @Column(name = "senha", length = 15)
    private String senha;

	@OneToMany(mappedBy = "paciente")
    private List<Consulta> consultas;

    public Paciente (Integer id) {

        this.id = id;
    }

    public static Paciente of(PacienteRequest request) {

        var paciente = new Paciente();
        BeanUtils.copyProperties(request, paciente);

        return paciente;
    }

}
