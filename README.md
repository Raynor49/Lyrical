# Lyrical

Lyrical is a clone of Rap Genius, a web application for posting lyrics to your favourite songs, as well as annotations on particular segments of those lyrics theorizing and discussing them, and comments on either the tracks themselves or the annotations of those tracks.

Check it out at https://lyrical-genius.herokuapp.com/

## Home Page
![alt text](https://github.com/Raynor49/Lyrical/blob/master/app/assets/images/Screen%20Shot%202018-03-18%20at%205.27.56%20PM.png)

This application was made using a Ruby on Rails backend with a Javascript frontend.

## Track Show Page example
![alt text](https://github.com/Raynor49/Lyrical/blob/master/app/assets/images/Screen%20Shot%202018-03-18%20at%205.42.07%20PM.png)

Much of the app takes place in the track show pages, where users are able to comment on and annotate lyrics. Most of the difficulty of this app came from trying to allow users to be able to highlight text on the track show pages, write and submit an annotation, and have their highlighted text change into a link which links to that annotation they submitted. I needed to write a method which checked the beginning and ending indices of each annotation and rendered sections of the lyrics as either a plaintext 'Lyrics' component or a linking 'Highlight' component depending on those indices.

### Todos
I plan on implementing a 'likes' feature for users to be able to vote on annotations and comments from other users.
