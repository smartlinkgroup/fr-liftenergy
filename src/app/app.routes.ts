import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SmartlinkComponent } from './pages/projects/smartlink/smartlink.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'welcome',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'services',
    component: HomeComponent
  },
  {
    path: 'smartlink',
    component: SmartlinkComponent
  },



];
