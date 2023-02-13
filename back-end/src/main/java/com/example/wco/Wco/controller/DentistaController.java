package com.example.wco.Wco.controller;

import com.example.wco.Wco.dto.request.DentistaRequest;
import com.example.wco.Wco.dto.request.response.DentistaResponse;
import com.example.wco.Wco.model.Dentista;
import com.example.wco.Wco.repository.DentistaRepository;
import com.example.wco.Wco.service.DentistaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("dentista")
public class DentistaController {

    @Autowired
    private DentistaService service;
    @Autowired
    private DentistaRepository dentistaRepository;

    @PostMapping
    public void cadastrar(@RequestBody DentistaRequest request) {

        service.cadastrarDentista(request);
    }

    @GetMapping
    public List<DentistaResponse> listar() {

        return service.buscarDentistas();
    }

    @GetMapping("/{id}")
    Dentista getDentistaById(@PathVariable Integer id) {

        return service.buscarPorid(id);
    }

    @DeleteMapping("/{id}")
    public void deletarDentista(@PathVariable Integer id) {

        service.deletarDentista(id);
    }

    @PutMapping("/{id}")
    public DentistaResponse atualizarDentista(@RequestBody DentistaRequest request, @PathVariable Integer id) {

        return service.atualizarDentista(request, id);
    }
}
