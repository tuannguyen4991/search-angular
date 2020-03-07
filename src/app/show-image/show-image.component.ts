import { Component, OnInit, Input } from '@angular/core';
import { Item, FlickrPhoto } from './../image';
import { ImagesService } from './../images.service';

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {
  constructor(private imageService: ImagesService) { }
  @Input() images: Item[];
  ngOnInit(): void {
  }
  getImages() {
    return this.images;
  }
}
