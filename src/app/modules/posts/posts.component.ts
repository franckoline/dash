import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Users } from '../users.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  users$: Users[];


  constructor(private apiService: ApiService) { }
  ngOnInit() {
      this.apiService.getUsers().subscribe((data:any[]) => {
        
      })
  //   return this.apiService.getUsers()
  //     .subscribe(data => this.users$ = data);
  }

}
