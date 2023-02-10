package com.example.wco.Wco.service;

import com.example.wco.Wco.dto.request.PacienteRequest;
import com.example.wco.Wco.dto.request.response.PacienteResponse;
import com.example.wco.Wco.model.Paciente;
import com.example.wco.Wco.repository.PacienteRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PacienteService {

    @Autowired
    private PacienteRepository repository;

    public void cadastrarPaciente(PacienteRequest request) {

        repository.save(Paciente.of(request));
    }

    public List<PacienteResponse> buscarPacientes() {

        return PacienteResponse.of(repository.findAll());
    }

    public Paciente buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public PacienteResponse atualizarPaciente(PacienteRequest request, Integer id) {

        var paciente = buscarPorid(id);
        BeanUtils.copyProperties(Paciente.of(request), paciente, "id");

        return PacienteResponse.of(repository.save(paciente));
    }

    public void deletarPaciente(Integer id) {

        var paciente = buscarPorid(id);
        repository.delete(paciente);
    }
}
