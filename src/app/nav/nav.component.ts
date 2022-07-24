import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  language: any;
  lang: any;
  navBar: any;
  themes: any;

  constructor() {
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'pt';
  }

  changeLang(lang: any) {

    this.language = lang.target.value;

    localStorage.setItem('lang', this.language);
    window.location.reload();

  }

  menuBtn(menu: any) {
    this.navBar = document.querySelector('.navbar')?.classList.toggle('active');
    if (this.navBar == true) {
      document.querySelector('#menu-btn')?.classList.toggle('active');
    }
  }

  formBtn(form: any) {
    this.navBar = document.querySelector('.login-form')?.classList.toggle('active');
    if (this.navBar == true) {
      document.querySelector('#login-btn')?.classList.toggle('active');
    }
  }

  themeBtn(theme: any) {
    this.themes = document.querySelector('#theme-btn')?.classList.toggle('fa-sun');

    if (this.themes == true) {
      document.body.classList.add('active')
    } else {
      document.body.classList.remove('active')

    }
  }

  searchBtn(search: any) {
    this.navBar = document.querySelector('.search-form')?.classList.toggle('active');
    if (this.navBar == true) {
      document.querySelector('#search-btn')?.classList.toggle('active');
    }
    console.log(this.navBar)
  }

}
