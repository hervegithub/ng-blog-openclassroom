import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() Content : string;
  @Input() LoveIts : number;
  @Input() CreatAt : Date; 


  constructor() { }

  ngOnInit() {
  }

  onLike(){
    this.LoveIts +=1;
  }

  onDislike(){
    this.LoveIts -=1;
  }

}
