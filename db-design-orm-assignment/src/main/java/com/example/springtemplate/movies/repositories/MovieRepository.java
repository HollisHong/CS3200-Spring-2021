package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.Movie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieRepository
    extends CrudRepository<Movie, Integer> {
    @Query(value = "SELECT * FROM movies WHERE director_id=:did", nativeQuery = true)
    public List<Movie> findAllMoviesForDirector(@Param("did") Integer id);

}
