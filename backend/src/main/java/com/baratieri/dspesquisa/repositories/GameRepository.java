package com.baratieri.dspesquisa.repositories;

import com.baratieri.dspesquisa.entities.Game;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GameRepository extends JpaRepository<Game,Long> {
}
