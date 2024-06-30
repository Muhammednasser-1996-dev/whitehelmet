import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  @Output() search = new EventEmitter<string>();
  searchText: string = '';

  onSearch(): void {
    this.search.emit(this.searchText);
  }

}
