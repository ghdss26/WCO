package com.example.wco.Wco.controller;

import com.example.wco.Wco.dto.request.PacienteRequest;
import com.example.wco.Wco.dto.request.response.PacienteResponse;
import com.example.wco.Wco.model.Dentista;
import com.example.wco.Wco.model.Paciente;
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

    @GetMapping("/{id}")
    Paciente getPacienteById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarPaciente(@PathVariable Integer id) {

        service.deletarPaciente(id);
    }

    @PutMapping("/{id}")
    public PacienteResponse atualizarPaciente(@RequestBody PacienteRequest request, @PathVariable Integer id) {

        return service.atualizarPaciente(request, id);
    }
}
