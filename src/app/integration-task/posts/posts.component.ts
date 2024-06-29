import { Component } from '@angular/core';
import { Post } from '../../core/models/post.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchText: string = '';

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.filteredPosts = data;
    });
  }

  onSearch(): void {
    this.filteredPosts = this.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
        post.body.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
