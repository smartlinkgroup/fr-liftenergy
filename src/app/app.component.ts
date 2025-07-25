import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { slideInAnimation } from './slideInRoute';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [slideInAnimation]
})
export class AppComponent {
  context = inject(ChildrenOutletContexts);
  title = 'frLiftEnergy';

  getRouteAnimationData(){
    return this.context.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
