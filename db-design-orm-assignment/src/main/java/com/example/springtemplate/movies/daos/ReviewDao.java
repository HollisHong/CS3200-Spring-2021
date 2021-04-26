package com.example.springtemplate.movies.daos;


import com.example.springtemplate.movies.models.Review;
import com.example.springtemplate.movies.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReviewDao {
    @Autowired
    ReviewRepository repository;

    @PostMapping("/api/reviews")
    public Review createReview(@RequestBody Review review) {
        return repository.save(review);
    }

    @GetMapping("/api/reviews")
    public List<Review> findAllReview() {
        return (List<Review>) repository.findAll();
    }

    @GetMapping("/api/reviews/{rid}")
    public Review findReviewById(
            @PathVariable("rid") Integer id) {
        return repository.findById(id).get();
    }


    @PutMapping("/api/reviews/{rid}")
    public Review updateReview(
            @PathVariable("rid") Integer id,
            @RequestBody Review newReview) {
        Review review = repository.findById(id).get();
        review.setPost(newReview.getPost());
        review.setRating(newReview.getRating());
        return repository.save(review);
    }

    @DeleteMapping("/api/reviews/{rid}")
    public void deleteReview(
            @PathVariable("rid") Integer id) {
        repository.deleteById(id);
    }
}
