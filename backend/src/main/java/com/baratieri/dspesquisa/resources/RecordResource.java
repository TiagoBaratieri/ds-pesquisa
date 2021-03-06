package com.baratieri.dspesquisa.resources;

import com.baratieri.dspesquisa.dto.RecordDTO;
import com.baratieri.dspesquisa.dto.RecordInsertDTO;
import com.baratieri.dspesquisa.services.RecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Instant;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {

    @Autowired
    private RecordService service;

   @PostMapping
    public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO dto){
       RecordDTO newDto = service.insert(dto);
       return ResponseEntity.ok().body(newDto);
   }

    @GetMapping
    public ResponseEntity<Page<RecordDTO>> findAll(
            @RequestParam(value = "min", defaultValue = "") String min,
            @RequestParam(value = "max",defaultValue = "") String max,
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "0") Integer linesPerPage,
            @RequestParam(value = "orderBy", defaultValue = "moment") String orderBy) {

        Instant minDate = ("".equals(min)) ? null : Instant.parse(min);
        Instant maxDate = ("".equals(max)) ? null : Instant.parse(max);

        if( linesPerPage == 0){
            linesPerPage = Integer.MAX_VALUE;
        }

        PageRequest pageRequest = PageRequest.of(page,linesPerPage, Sort.Direction.DESC,orderBy);

        Page<RecordDTO> listDto = service.findByMoment(minDate,maxDate, pageRequest);
        return ResponseEntity.ok().body(listDto);
    }


}
