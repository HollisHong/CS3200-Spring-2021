package com.example.springtemplate.movies.repositories;


import com.example.springtemplate.movies.models.Review;
import org.springframework.data.repository.CrudRepository;


public interface ReviewRepository
    extends CrudRepository<Review, Integer> {

}
