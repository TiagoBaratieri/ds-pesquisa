package com.baratieri.dspesquisa.repositories;

import com.baratieri.dspesquisa.entities.Record;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecordRepository extends JpaRepository<Record,Long> {
}
