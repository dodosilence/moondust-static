/**
 * Created by tc949 on 2017/1/17.
 */
import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutNotfoundComponent} from "./rout-notfound/rout-notfound.component";
import {RoutAppdownloadComponent} from "./rout-appdownload/rout-appdownload.component";
import {RoutRegisterComponent} from "./rout-register/rout-register.component";
import {RoutResetpassComponent} from "./rout-resetpass/rout-resetpass.component";
import {RoutHomeComponent} from "./rout-home/rout-home.component";
import {RoutHomeIndexComponent} from "./rout-home/rout-home-index/rout-home-index.component";
import {RoutHomeAlbumComponent} from "./rout-home/rout-home-album/rout-home-album.component";
import {RoutPicViewerComponent} from "./rout-pic-viewer/rout-pic-viewer.component";
import {RoutSeachComponent} from "./rout-seach/rout-seach.component";
import {RoutIndexComponent} from "./rout-index/rout-index.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: 'index.html', component: RoutIndexComponent},
  {
    path: 'home', component: RoutHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'index.html', pathMatch: 'full'
      },
      {
        path: 'index.html',
        component: RoutHomeIndexComponent
      },
      {
        path: 'album.html',
        component: RoutHomeAlbumComponent
      }
    ]
  },
  {path: 'search.html', component: RoutSeachComponent},
  {path: 'downloadapp.html', component: RoutAppdownloadComponent},
  {path: 'register.html', component: RoutRegisterComponent},
  {path: 'resetpass.html', component: RoutResetpassComponent},
  {path: 'picViewer/:id', component: RoutPicViewerComponent},
  {path: "**", component: RoutNotfoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouter {
}
