import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  id: string
  posts: any[] = []

  constructor(private postService: PostService,private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.postService.getOne(this.id)
        .subscribe((res: any) => this.posts = res)
  }

}
