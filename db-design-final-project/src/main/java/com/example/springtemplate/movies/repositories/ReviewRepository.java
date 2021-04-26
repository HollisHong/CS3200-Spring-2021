package com.example.springtemplate.movies.repositories;


import com.example.springtemplate.movies.models.Movie;
import com.example.springtemplate.movies.models.Review;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface ReviewRepository
    extends CrudRepository<Review, Integer> {


    @Query(value = "SELECT * FROM reviews WHERE movie_id=:mid", nativeQuery = true)
    List<Review> findAllReviewsForMovie(Integer mid);
}
