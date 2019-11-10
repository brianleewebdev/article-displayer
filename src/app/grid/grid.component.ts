import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }

    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  articles;
  
  constructor(private articlesData: ApiService) { }

  ngOnInit() {
    this.articlesData.getData().subscribe((data) => {
      console.log(data);
      this.articles = data;
      
    })
  }

}
