import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouter} from "./app.router";
import {SeachBoxComponent} from './seach-box/seach-box.component';
import {ProfileBoxComponent} from './profile-box/profile-box.component';
import {LoginModalComponent} from './login-modal/login-modal.component';
import {RoutNotfoundComponent} from './rout-notfound/rout-notfound.component';
import {RoutAppdownloadComponent} from './rout-appdownload/rout-appdownload.component';
import {RoutRegisterComponent} from './rout-register/rout-register.component';
import {RoutResetpassComponent} from './rout-resetpass/rout-resetpass.component';
import {RoutHomeComponent} from './rout-home/rout-home.component';
import {RoutHomeIndexComponent} from "./rout-home/rout-home-index/rout-home-index.component";
import {RoutHomeAlbumComponent} from "./rout-home/rout-home-album/rout-home-album.component";
import {RoutPicViewerComponent} from './rout-pic-viewer/rout-pic-viewer.component';
import {PicViewerModalComponent} from './pic-viewer-modal/pic-viewer-modal.component';
import {ModalModule, AlertModule, CollapseModule, TabsModule, Ng2BootstrapModule} from "ng2-bootstrap";
import {RoutSeachComponent} from './rout-seach/rout-seach.component';
import {RoutIndexComponent} from './rout-index/rout-index.component';
import {LoginRegisterService} from "./service/login-register.service";

@NgModule({
  declarations: [
    AppComponent,
    SeachBoxComponent,
    ProfileBoxComponent,
    LoginModalComponent,

    PicViewerModalComponent,
    RoutSeachComponent,

//-----路由
    RoutHomeComponent,
    RoutHomeIndexComponent,
    RoutNotfoundComponent,
    RoutAppdownloadComponent,
    RoutRegisterComponent,
    RoutResetpassComponent,
    RoutHomeAlbumComponent,
    RoutPicViewerComponent,
    RoutSeachComponent,
    RoutIndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRouter,
    Ng2BootstrapModule.forRoot()
  ],
  providers: [
    LoginRegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
