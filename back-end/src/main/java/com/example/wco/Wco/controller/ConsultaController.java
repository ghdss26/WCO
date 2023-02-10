package com.example.wco.Wco.controller;

import com.example.wco.Wco.dto.request.ConsultaRequest;
import com.example.wco.Wco.dto.request.response.ConsultaResponse;
import com.example.wco.Wco.service.ConsultaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("consulta")
public class ConsultaController {

    @Autowired
    private ConsultaService service;

    @PostMapping
    public void cadastrar(@RequestBody ConsultaRequest request) {

        service.cadastrarConsulta(request);
    }

    @GetMapping
    public List<ConsultaResponse> listar() {

        return service.buscarConsultas();
    }

    @DeleteMapping
    public void deletarConsulta(Integer id) {

        service.deletarConsulta(id);
    }

    @PutMapping
    public ConsultaResponse atualizarConsulta(@RequestBody ConsultaRequest request, Integer id) {

        return service.atualizarConsulta(request, id);
    }

}


