import { Component } from '@angular/core';
import { ChuckNorrisJoke } from '../../interfaces/ChuckNorrisJoke';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  chuckNorrisJoke!: ChuckNorrisJoke;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getAllJoke();
  }

  getAllJoke(): void {
    this.apiService.getAll().subscribe((data: ChuckNorrisJoke) => {
      this.chuckNorrisJoke = data;
    });
  }

  getNewJoke(): void {
    this.apiService.getAll().subscribe((data: ChuckNorrisJoke) => {
      this.chuckNorrisJoke = data;
    });
  }
}
