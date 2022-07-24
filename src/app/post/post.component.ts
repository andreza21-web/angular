import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:5000/post').subscribe(
    //   posts => console.log(posts)
    // );

    // const lang = localStorage.getItem('lang') || 'pt';

    // const headers = new HttpHeaders({
    //   'Accept-language': lang
    // });
  }

}
