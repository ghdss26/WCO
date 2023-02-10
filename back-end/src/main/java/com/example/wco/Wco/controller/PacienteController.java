package com.example.wco.Wco.controller;

import com.example.wco.Wco.dto.request.PacienteRequest;
import com.example.wco.Wco.dto.request.response.PacienteResponse;
import com.example.wco.Wco.service.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("paciente")
public class PacienteController {

    @Autowired
    private PacienteService service;

    @PostMapping
    public void cadastrar(@RequestBody PacienteRequest request) {

        service.cadastrarPaciente(request);
    }

    @GetMapping
    public List<PacienteResponse> listar() {

        return service.buscarPacientes();
    }

    @DeleteMapping
    public void deletarPaciente(Integer id) {

        service.deletarPaciente(id);
    }

    @PutMapping
    public PacienteResponse atualizarPaciente(@RequestBody PacienteRequest request, Integer id) {

        return service.atualizarPaciente(request, id);
    }
}
