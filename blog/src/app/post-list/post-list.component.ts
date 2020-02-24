import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [];

  constructor() { 
    this.posts = [
      {
        title:'Mon première post',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil error, aliquam ex beatae quam autem in qui inventore suscipit animi quia! Necessitatibus, suscipit earum? Soluta, porro possimus! Veritatis, repellendus rerum?",
        loveIts:1,
        creat_at: new Date()
      },
      {
        title:'Mon second post',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil error, aliquam ex beatae quam autem in qui inventore suscipit animi quia! Necessitatibus, suscipit earum? Soluta, porro possimus! Veritatis, repellendus rerum?",
        loveIts:-1,
        creat_at: new Date()
      },
      {
        title:'Mon troisième post',
        content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil error, aliquam ex beatae quam autem in qui inventore suscipit animi quia! Necessitatibus, suscipit earum? Soluta, porro possimus! Veritatis, repellendus rerum?",
        loveIts:0,
        creat_at: new Date()
      }
    ]
  }

  ngOnInit() {
  }

}
