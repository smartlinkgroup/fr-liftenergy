import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CatalogComponent } from './pages/catalog/catalog.component';


export const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  { path: 'productos', component: CatalogComponent },
  {
    path: 'welcome',
    component: HomeComponent,
    data: { animation: 'welcome' }
  },

  // --- Rutas con Lazy Loading ---
  {
    path: 'aboutus',
    // Se cambia 'component' por 'loadComponent' usando import() dinámico
    loadComponent: () => import('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
    data: { animation: 'aboutus' }
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    data: { animation: 'contact' }
  },
 {
    path: 'careers',
   loadComponent: () => import('./pages/careers/careers').then(m => m.CareersComponent),
    data: { animation: 'careers' }
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    data: { animation: 'projects' }
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    data: { animation: 'services' }
  },
  {
    path: 'smartlink',
    loadComponent: () => import('./pages/projects/smartlink/smartlink.component').then(m => m.SmartlinkComponent),
    data: { animation: 'smartlink' }
  },
];