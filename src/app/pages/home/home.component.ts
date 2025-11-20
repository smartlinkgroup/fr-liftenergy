import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {IParticlesProps, NgParticlesModule} from 'ng-particles';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, NgParticlesModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  private router=inject(Router);

  ngOnInit(): void {
    const isOpen: string | null =  sessionStorage.getItem('isOpenVideo');
    if(!isOpen) {
      this.openVideo()
    }

  }

  navigateTo(ruta:string){
      this.router.navigate([ruta]);
  }

  public readonly snowConfig:IParticlesProps = {
    background: {
      color:'transparent',
    },
    interactivity:{
      detectsOn:'window',
      eventsOn:'window',
      events:{
        onClick:{enable:false}
      }
    },
    particles: {
      number: {
        value: 250,
        density: {
          enable: true,
          area: 800,
        }
      },
      color: {value: '#FF0000'},
      shape: {type: 'circle'},
      opacity: {value: 0.8, random: true},
      size: {value: 5, random: true},
      move: {
        enable: true,
        speed: 3,
        direction: 'bottom',
        random: true,
        outModes: "out",
      },
      zIndex:{value:1000},

    }
  }

  rutaVideo():string{
     var num = Math.floor(Math.random() * (2 + 1));
     if(num == 0){
       return 'video/christmas/IMG_7966.MP4';
     }
     else if(num == 1){
       return 'video/christmas/IMG_7965.MP4';
     }
     else{
       return 'video/christmas/IMG_7967.MP4';
     }
  }

  public videoHtml = `
        <video
            id="alerta-video"
            width="100%"
            controls
            autoplay
            muted
            playsinline
            style="max-width: 100%; margin-top: 20px; border-radius: 8px;"
        >
            <source src="${this.rutaVideo()}" type="video/mp4">
            Tu navegador no soporta el tag de video.
        </video>
    `;

  async openVideo(){
    const { default: Swal } = await import('sweetalert2');
    Swal.fire({
      html:this.videoHtml,
      allowOutsideClick: false,
      showCloseButton:true,
      showConfirmButton:false,
      width: 500,
    }).then(result => {
      sessionStorage.setItem("isOpenVideo","true");
    })
  }

  ngOnDestroy(): void {}

}
