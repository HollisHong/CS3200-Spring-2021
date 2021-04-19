## CS3200 - Spring 2021 - P1 - Group 36
#### Name of the project
Fresh Tomato
####  Name of the team 
The best Group 36
#### Team members and the section they belong to
Jiahao Hong & Yan Chen form section 4
#### Link to the latest data model as a single UML class diagram
https://drive.google.com/file/d/1xhGkmUE8ELvlb40B6Mz3d5XRGSByMOPv/view?usp=sharing

#### Description of user data model
We have `Director` and `Reviewer` to represent a director of a movie, and reviewer of a review.

#### Description of the two domain object data models
We have `movie` and `Review` to represent a movie or a review.

#### Description of the user to domain object relationship
Since this is a movie review app, one `Director` can have many `movie`.
A `Reviewer` can also have many `Review`.
#### Description of the domain object to domain object relationship
A `movie` can have many `Review`.
#### Description of the portable enumeration(s)
We have a `Genre` enum to represent the genre of a movie.
#### Description of the user interface requirements
- Director List - displays a list of all Director
- Director Editor - displays a particular Director for editing or allows creating a new Director, and navigate to movies for that Director
- Reviewer List - displays a list of all Reviewer
- Reviewer Editor - displays a particular Reviewer for editing or allows creating a new Reviewer, and navigate to reviews for that Reviewer
- Movie List - displays a list of all Movie or the movies within a given director
- Movie Editor - displays a particular Movie for editing or allows creating a new Movie, and navigate to reviews for that Movie
- Review List - displays a list of all Reviews or the Reviews within a given movie
- Review Editor - displays a particular Review for editing or allows creating a new Review, and navigate to reviewers for that Review.
