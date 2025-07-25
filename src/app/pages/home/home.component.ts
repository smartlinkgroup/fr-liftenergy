import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private router=inject(Router);

  ngOnInit(): void {}
  
  navigateTo(ruta:string){
      this.router.navigate([ruta]);
  }

  ngOnDestroy(): void {}

}
