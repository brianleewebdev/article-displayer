import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public userSearching = false;
  searchFilter = new FormControl('');
  
  checkSearchText() {
    
  }
  constructor(private searchData: ApiService) { }

  ngOnInit() {
    
  }

}
