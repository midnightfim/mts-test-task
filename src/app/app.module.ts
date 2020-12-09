import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ItemsContainerComponent} from './components/items-container/items-container.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChannelItemComponent} from './components/items-container/channel-item/channel-item.component';
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {ChannelsService} from './services/channels.service';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ItemsContainerComponent,
    ChannelItemComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ChannelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
