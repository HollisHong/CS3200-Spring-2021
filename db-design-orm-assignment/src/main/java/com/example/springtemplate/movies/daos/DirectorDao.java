package com.example.springtemplate.movies.daos;

import com.example.springtemplate.movies.models.Director;
import com.example.springtemplate.movies.repositories.DirectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class DirectorDao {
    @Autowired
    DirectorRepository repository;

    public Director createDirector(Director director) {
        return null;
    }

    @GetMapping("/api/directors")
    public List<Director> findAllDirector() {
        return (List<Director>) repository.findAll();
    }

    @GetMapping("/api/directors/{did}")
    public Director findDirectorById(
            @PathVariable("did") Integer id) {
        return repository.findById(id).get();
    }

    @GetMapping("/api/directors/{did}/name/{name}")
    public Director updateDirectorName(
            @PathVariable("did") Integer id,
            @PathVariable("name") String newDirectorName) {
        Director director = repository.findById(id).get();
        director.setUsername(newDirectorName);
        return repository.save(director);
    }

    public Integer updateDirector(
            @PathVariable("did") Integer id,
            Director newDirector) {
        return null;
    }

    public Integer deleteDirector(Integer id) {
        return null;
    }
}