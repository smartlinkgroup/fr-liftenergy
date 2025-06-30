import { NgClass } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {

  public menu:boolean = false;

  private router = inject(Router);

  ngOnInit(): void {

  }

  goRoutes(ruta:string){
    this.router.navigate([ruta]);
  }

  public showMenu() {
    this.menu = !this.menu;
  }

  ngOnDestroy(): void {

  }


}
