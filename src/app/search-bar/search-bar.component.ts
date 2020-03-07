import { Component, OnInit, Input } from '@angular/core';
import { Item, FlickrPhoto } from './../image';
import { ImagesService } from './../images.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  images: Item[];
  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
  }
  searchImagesByTags(tag: string) {
    return this.imageService.searchImagesByTags(tag).subscribe((data: FlickrPhoto) => this.images = data.items);
  }


}
