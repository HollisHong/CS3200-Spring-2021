package com.example.springtemplate.movies.daos;


import com.example.springtemplate.movies.models.Reviewer;
import com.example.springtemplate.movies.repositories.ReviewerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ReviewerDao {
    @Autowired
    ReviewerRepository repository;


    @PostMapping("/api/reviewers/new")
    public Reviewer createReviewer(@RequestBody Reviewer reviewer) {
        return repository.save(reviewer);
    }


    @GetMapping("/api/reviewers")
    public List<Reviewer> findAllReviewers() {
        return (List<Reviewer>) repository.findAll();
    }

    @GetMapping("/api/reviewers/{rerid}")
    public Reviewer findReviewerById(
            @PathVariable("rerid") Integer id) {
        return repository.findById(id).get();
    }


    @PutMapping("/api/reviewers/{rerid}")
    public Reviewer updateReviewer(
            @PathVariable("rerid") Integer id,
            @RequestBody Reviewer newReviewer) {
        Reviewer reviewer = repository.findById(id).get();
        reviewer.setFirstName(newReviewer.getFirstName());
        reviewer.setLastName(newReviewer.getLastName());
        reviewer.setUsername(newReviewer.getUsername());
        reviewer.setPassword(newReviewer.getPassword());
        reviewer.setDateOfBirth(newReviewer.getDateOfBirth());
        reviewer.setEmail(newReviewer.getEmail());
        reviewer.setLevel(newReviewer.getLevel());
        return repository.save(reviewer);
    }


    @DeleteMapping("/api/reviewers/{rerid}")
    public void deleteReviewer(
            @PathVariable("rerid") Integer id) {
        repository.deleteById(id);
    }

}
