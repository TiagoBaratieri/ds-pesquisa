package com.baratieri.dspesquisa.repositories;

import com.baratieri.dspesquisa.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRepository extends JpaRepository<Genre,Long> {
}
