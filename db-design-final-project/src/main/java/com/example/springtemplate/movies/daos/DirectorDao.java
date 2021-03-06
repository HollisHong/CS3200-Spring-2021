package com.example.springtemplate.movies.daos;

import com.example.springtemplate.movies.models.Director;
import com.example.springtemplate.movies.models.Movie;
import com.example.springtemplate.movies.repositories.DirectorRepository;
import com.example.springtemplate.movies.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class DirectorDao {
    @Autowired
    DirectorRepository repository;

    @PostMapping("/api/directors")
    public Director createDirecctor(@RequestBody Director director) {
        return repository.save(director);
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


    @PutMapping("/api/directors/{did}")
    public Director updateDirector(
            @PathVariable("did") Integer id,
            @RequestBody Director newDirector) {
        Director director = repository.findById(id).get();
        director.setFirstName(newDirector.getFirstName());
        director.setLastName(newDirector.getLastName());
        director.setUsername(newDirector.getUsername());
        director.setPassword(newDirector.getPassword());
        director.setDateOfBirth(newDirector.getDateOfBirth());
        director.setEmail(newDirector.getEmail());
        director.setAge(newDirector.getAge());
        director.setCountry((newDirector.getCountry()));
        return repository.save(director);
    }

    @DeleteMapping("/api/directors/{did}")
    public void deleteDirector(
            @PathVariable("did") Integer id) {
        repository.deleteById(id);
    }
}