package com.example.wco.Wco.service;

import com.example.wco.Wco.dto.request.ConsultaRequest;
import com.example.wco.Wco.dto.request.response.ConsultaResponse;
import com.example.wco.Wco.model.Consulta;
import com.example.wco.Wco.repository.ConsultaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ConsultaService {

    @Autowired
    private ConsultaRepository repository;

    public void cadastrarConsulta(ConsultaRequest request) {

        repository.save(Consulta.of(request));
    }

    public List<ConsultaResponse> buscarConsultas() {

        return ConsultaResponse.of(repository.findAll());
    }
    public Consulta buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public ConsultaResponse atualizarConsulta(ConsultaRequest request, Integer id) {

        var consulta = buscarPorid(id);
        //BeanUtils.copyProperties(Consulta.of(request), consulta, "id");

        consulta.setData_consulta(request.getData_consulta());
        consulta.setHorario(request.getHorario());
        consulta.setSituacao(request.getSituacao());

        return ConsultaResponse.of(repository.save(consulta));
    }

    public void deletarConsulta(Integer id) {

        var consulta = buscarPorid(id);
        repository.delete(consulta);
    }
}
