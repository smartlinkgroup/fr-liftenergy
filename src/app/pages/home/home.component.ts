import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
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
