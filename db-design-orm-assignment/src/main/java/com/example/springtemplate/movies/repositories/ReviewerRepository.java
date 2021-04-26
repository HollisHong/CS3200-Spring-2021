package com.example.springtemplate.movies.repositories;


import com.example.springtemplate.movies.models.Reviewer;
import org.springframework.data.repository.CrudRepository;


public interface ReviewerRepository
        extends CrudRepository<Reviewer, Integer> {

}