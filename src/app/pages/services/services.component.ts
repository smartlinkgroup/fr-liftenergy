import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, OnDestroy{

  private router = inject(Router); 

  ngOnInit(): void {}

  goToRoutes(ruta:String):void{
    this.router.navigate([ruta]);
  }

  ngOnDestroy(): void {}
  

}
