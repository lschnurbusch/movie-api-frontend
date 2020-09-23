import { LocalStorageService } from './../shared/services/local-storage.service';
import {Component, OnInit} from '@angular/core';
import {MovieService} from "../shared/services/movie.service";
import {Movie} from "../shared/models/movie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: Movie[] = []

  constructor(
    private movieService: MovieService,
    private storageService: LocalStorageService
  ) {
  }

  ngOnInit(): void {
    this.retrieveAllMovies()
    this.setMyEmailInStorage()
  }

  setMyEmailInStorage() {
    this.storageService.setItem('myEmail', 'landon@someemailaddress.com')
  }

  retrieveAllMovies() {
    this.movieService.getAllMovies().subscribe(movies => {
      if (movies) {

        this.movies = movies
      }
      debugger
    }, error => {
      if (error) {
        console.log(error)
      }
    })
  }
}
