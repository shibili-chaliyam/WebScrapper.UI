import { Component } from '@angular/core';
import { ToScrapData } from '../app/interfaces/to-scrap-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  scrapData:ToScrapData={
    url:'',
    keepInUrl:'',
    pageLimit:0
  }

  onStart() {
    alert("hello");
  }

  title = 'WebScrapper.UI';
}
