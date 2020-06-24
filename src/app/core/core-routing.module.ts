import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
    {
        path: '', 
        component: IndexComponent,
        children: [
            { path: 'gallery', component: GalleryComponent },
            { path: 'settings', component: SettingsComponent },
            { path: 'about', component: AboutComponent },
        ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
