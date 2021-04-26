package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.Director;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface DirectorRepository
        extends CrudRepository<Director, Integer> {

    @Query(value = "SELECT * FROM director WHERE id=:did", nativeQuery = true)
    public Director findDirectorById(@Param("did") Integer id);
}
