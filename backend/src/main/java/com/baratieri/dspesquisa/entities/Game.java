package com.baratieri.dspesquisa.entities;

import com.baratieri.dspesquisa.entities.enums.Platform;


import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "tb_game")
public class Game implements Serializable {
    private static final Long serialVersionUID = 1l;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Platform platform;

    @ManyToOne
    @JoinColumn(name = "genre_id")
    private Genre genre;

    @OneToMany(mappedBy = "game")
    private List<Record> records = new ArrayList<>();

    public Game(){

    }

    public Game(Long id, String title, Platform platform) {
        this.id = id;
        this.title = title;
        this.platform = platform;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Platform getPlatform() {
        return platform;
    }

    public void setPlatform(Platform platform) {
        this.platform = platform;
    }

    public Genre getGenre() {
        return genre;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public List<Record> getRecords() {
        return records;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Game game = (Game) o;
        return id.equals(game.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
