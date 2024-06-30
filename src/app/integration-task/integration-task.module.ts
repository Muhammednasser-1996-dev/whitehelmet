import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { IntegrationTaskRoutingModule } from './integration-task-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
@NgModule({
  declarations: [PostsComponent, PostDetailsComponent, PostCardComponent, SearchInputComponent],
  imports: [
    CommonModule,
    IntegrationTaskRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntegrationTaskModule { }
