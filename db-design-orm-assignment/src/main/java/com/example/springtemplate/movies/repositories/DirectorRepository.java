package com.example.springtemplate.movies.repositories;

import com.example.springtemplate.movies.models.Director;
import org.springframework.data.repository.CrudRepository;


public interface DirectorRepository
        extends CrudRepository<Director, Integer> {
}
