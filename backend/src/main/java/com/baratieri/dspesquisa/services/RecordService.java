package com.baratieri.dspesquisa.services;

import com.baratieri.dspesquisa.dto.RecordDTO;
import com.baratieri.dspesquisa.dto.RecordInsertDTO;
import com.baratieri.dspesquisa.entities.Game;
import com.baratieri.dspesquisa.entities.Record;
import com.baratieri.dspesquisa.repositories.GameRepository;
import com.baratieri.dspesquisa.repositories.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
public class RecordService {

    @Autowired
    RecordRepository repository;

    @Autowired
    private GameRepository gameRepository;

    @Transactional
    public RecordDTO insert(RecordInsertDTO dto){
        Record entity = new Record();
        entity.setName(dto.getName());
        entity.setAge(dto.getAge());
        entity.setMoment(Instant.now());

        Game game = gameRepository.getOne(dto.getGameId());
        entity.setGame(game);

        entity = repository.save(entity);
        return new RecordDTO(entity);
    }


    @Transactional(readOnly = true)
    public Page<RecordDTO> findByMoment(Instant minDate, Instant maxDate,
                                         PageRequest pageRequest) {
        return repository.findByMoments(minDate,maxDate,pageRequest)
                .map(x -> new RecordDTO(x));
    }
}
