import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpModule } from '@angular/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { CallNumber } from '@ionic-native/call-number/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProvidersService } from './providers.service';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorService } from './proveedor/proveedor.service';
import { InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { VideoPlayer } from '@ionic-native/video-player/ngx'; 
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera/ngx';
import { PostProvider } from '../providers/post-provider';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    PostProvider,
    //CallNumber,
    SplashScreen,
    Geolocation,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ProvidersService,
    ProveedorService,
    InAppBrowser,
    VideoPlayer,
    NativeStorage,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
