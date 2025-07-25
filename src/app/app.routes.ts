import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SmartlinkComponent } from './pages/projects/smartlink/smartlink.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'welcome',
    component: HomeComponent,
    data: { animation: 'welcome' }
  },
  {
    path: 'aboutus',
    component: AboutUsComponent,
    data: { animation: 'aboutus' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { animation: 'projects' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { animation: 'services' }
  },
  {
    path: 'smartlink',
    component: SmartlinkComponent,
    data: { animation: 'smartlink' }
  },



];
