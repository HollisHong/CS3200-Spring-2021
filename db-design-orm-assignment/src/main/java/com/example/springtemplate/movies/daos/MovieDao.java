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
public class MovieDao {
    @Autowired
    MovieRepository repository;
    DirectorRepository Drepository;

    @PostMapping("/api/movies")
    public Movie createMovie(
            @RequestBody Integer id,
            @RequestBody Movie movie) {
        movie.setDirector(Drepository.findById(id));
        return repository.save(movie);
    }

    @GetMapping("/api/movies")
    public List<Movie> findAllMovie() {
        return (List<Movie>) repository.findAll();
    }

    @GetMapping("/api/movies/{mid}")
    public Movie findMovieById(
            @PathVariable("mid") Integer id) {
        return repository.findById(id).get();
    }

    @PutMapping("/api/movies/{mid}")
    public Movie updateMovie(
            @PathVariable("mid") Integer id,
            @RequestBody Movie newMovie) {
        Movie movie = repository.findById(id).get();
        movie.setTitle(newMovie.getTitle());
        movie.setGenre(newMovie.getGenre());
        movie.setPlot(newMovie.getPlot());
        return repository.save(movie);
    }

    @DeleteMapping("/api/movies/{mid}")
    public void deleteMovie(
            @PathVariable("mid") Integer id) {
        repository.deleteById(id);
    }
}
