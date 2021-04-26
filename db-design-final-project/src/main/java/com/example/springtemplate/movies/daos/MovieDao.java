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

    @Autowired
    DirectorRepository Drepository;


    @PostMapping("/api/movies")
    public Movie createMovie(
            @RequestBody Movie movie) {
        return repository.save(movie);
    }

    @PostMapping("/api/directors/{did}/movies")
    public Movie createMovieForDirector(
            @PathVariable("did") Integer did,
            @RequestBody Movie movie) {
        Director director = Drepository.findDirectorById(did);
        movie.setDirector(director);
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

    @GetMapping("/api/directors/{did}/movies")
    public List<Movie> findAllMoviesForDirector(
            @PathVariable("did") Integer did) {
        return repository.findAllMoviesForDirector(did);

    }
}
