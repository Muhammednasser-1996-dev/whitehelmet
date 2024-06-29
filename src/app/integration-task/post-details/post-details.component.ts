import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../core/models/post.model';
import { User } from '../../core/models/user.model';
import { ApiService } from '../../core/services/api.service';
import { Comment } from '../../core/models/comment.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  post: Post | undefined;
  comments: Comment[] = [];
  users: User[] = [];
  postId: number | undefined;

  constructor(private route: ActivatedRoute, private ApiService: ApiService) {}

  ngOnInit(): void {
    this.postId = +this.route.snapshot.paramMap.get('id')!;
    this.loadPostDetails();
  }

  loadPostDetails(): void {
    this.ApiService.getPosts().subscribe((posts: Post[]) => {
      this.post = posts.find((p) => p.id === this.postId);
    });

    this.ApiService.getComments().subscribe((comments: any[]) => {
      this.comments = comments.filter((c) => c.postId === this.postId);
    });

    this.ApiService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  getUserName(userId: number): string {
    const user = this.users.find((u) => u.id === userId);
    return user ? user.name : 'Unknown';
  }
}
