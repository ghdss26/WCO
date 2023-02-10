package com.example.wco.Wco.model;

import com.example.wco.Wco.dto.request.DentistaRequest;
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
@Table(name = "dentista")

public class Dentista {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "nome", length = 45)
    private String nome;

    @Column(name = "especialidade", length = 45)
    private String especialidade;

    @Column(name = "cpf", length = 13)
    private String cpf;

    @Column(name = "crm", length = 20)
    private String crm;

    @Column(name = "senha", length = 13)
    private String senha;

	@OneToMany(mappedBy = "dentista")
    private List<Consulta> consultas;

    public Dentista (Integer id) {

        this.id = id;
    }

    public static Dentista of(DentistaRequest request) {

        var dentista = new Dentista();
        BeanUtils.copyProperties(request, dentista);

        return dentista;
    }
}
