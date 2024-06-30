import { Component } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { AppRoutes } from '../../app.routes';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: Post[] = [];
  filteredPosts: Post[] = [];


  constructor(private ApiService: ApiService,private router: Router) { }

  ngOnInit(): void {
    this.ApiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  onSearch(searchValue: string): void {
    this.filteredPosts = this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.body.toLowerCase().includes(searchValue.toLowerCase())
    );
  }


  navigateToDesignTak(){
    this.router.navigate([AppRoutes.design]);
  }

}
