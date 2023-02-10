package com.example.wco.Wco.repository;

import com.example.wco.Wco.model.Dentista;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DentistaRepository extends JpaRepository<Dentista, Integer> {
}
