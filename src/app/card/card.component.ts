import { Component,Input } from '@angular/core';
import {BlogPostCard} from "../blog-post-card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  data!: BlogPostCard;

  constructor() {}
  ngOnInit(): void {}


}
