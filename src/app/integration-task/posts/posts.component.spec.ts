import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsComponent } from './posts.component';
import { IntegrationTaskModule } from '../integration-task.module';
import { AppRoutes } from '../../app.routes'; // Assuming AppRoutes defines your routes

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports: [IntegrationTaskModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize posts and filteredPosts arrays on ngOnInit', () => {
    expect(component.posts).toBeDefined();
    expect(component.filteredPosts).toBeDefined();
    expect(component.posts.length).toBe(0);
    expect(component.filteredPosts.length).toBe(0);
  });


  it('should filter posts correctly', () => {
    // Setup: Populate the posts array with some test data
    component.posts = [
      { id: 1, title: 'Post 1', body: 'body 1' },
      { id: 2, title: 'Post 2', body: 'body 2' },
      { id: 3, title: 'Post 3', body: 'body 1' }
    ];

    // Action: Call the method that filters posts, assuming it's called filterPosts and filters by body
    component.onSearch('body 1');

    // Assert: Check that the filteredPosts array contains the correct posts
    expect(component.filteredPosts.length).toBe(2);
    expect(component.filteredPosts).toEqual([
      { id: 1, title: 'Post 1', body: 'body 1' },
      { id: 3, title: 'Post 3', body: 'body 1' }
    ]);
  });

  it('should show no posts when none match the search criteria', () => {
    // Setup: Populate the posts array with some test data
    component.posts = [
      { id: 1, title: 'Post 1', body: 'body 1' },
      { id: 2, title: 'Post 2', body: 'body 2' },
      { id: 3, title: 'Post 3', body: 'body 3' }
    ];

    // Action: Call the method that filters posts with a search term that matches no posts
    component.onSearch('body 4');

    // Assert: Check that the filteredPosts array is empty
    expect(component.filteredPosts.length).toBe(0);
  });

  it('should show all posts when the search term is empty', () => {
    // Setup: Populate the posts array with some test data
    component.posts = [
      { id: 1, title: 'Post 1', body: 'body 1' },
      { id: 2, title: 'Post 2', body: 'body 2' },
      { id: 3, title: 'Post 3', body: 'body 3' }
    ];

    // Action: Call the method that filters posts with an empty search term
    component.onSearch('');

    // Assert: Check that the filteredPosts array contains all posts
    expect(component.filteredPosts.length).toBe(3);
    expect(component.filteredPosts).toEqual([
      { id: 1, title: 'Post 1', body: 'body 1' },
      { id: 2, title: 'Post 2', body: 'body 2' },
      { id: 3, title: 'Post 3', body: 'body 3' }
    ]);
  });

});
