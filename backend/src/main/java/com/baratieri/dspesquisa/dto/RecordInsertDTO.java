package com.baratieri.dspesquisa.dto;

import java.io.Serializable;


public class RecordInsertDTO implements Serializable {
    private static final Long serialVersionUID = 1l;

    private String name;
    private Integer age;
    private Long gameId;

    public RecordInsertDTO() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }
}