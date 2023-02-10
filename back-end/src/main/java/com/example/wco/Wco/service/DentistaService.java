package com.example.wco.Wco.service;

import com.example.wco.Wco.dto.request.DentistaRequest;
import com.example.wco.Wco.dto.request.response.DentistaResponse;
import com.example.wco.Wco.model.Dentista;
import com.example.wco.Wco.repository.DentistaRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class DentistaService {

    @Autowired
    private DentistaRepository repository;

    public void cadastrarDentista(DentistaRequest request) {

        repository.save(Dentista.of(request));
    }

    public List<DentistaResponse> buscarDentistas() {

        return DentistaResponse.of(repository.findAll());
    }

    public Dentista buscarPorid(Integer id) {

        return repository.findById(id).get();
    }

    @Transactional
    public DentistaResponse atualizarDentista(DentistaRequest request, Integer id) {

        var dentista = buscarPorid(id);
        BeanUtils.copyProperties(Dentista.of(request), dentista, "id");

        return DentistaResponse.of(repository.save(dentista));
    }

    public void deletarDentista(Integer id) {

        var dentista = buscarPorid(id);
        repository.delete(dentista);
    }
}
