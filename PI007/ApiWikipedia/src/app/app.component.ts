import { Component } from '@angular/core';
import { WikiService } from '../app/wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consultando a Wiki API';
  term = '';
  results : any[] = [];

  constructor(private wikiService: WikiService) {}

  search() {
    this.wikiService.search(this.term).subscribe(data => {
      this.results = data.query.search;
    });
  }
}
