import { Component, Input } from '@angular/core';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {

  @Input() post: Post | undefined;

}
