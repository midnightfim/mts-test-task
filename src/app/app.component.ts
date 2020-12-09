import {Component, OnInit} from '@angular/core';
import {ChannelsService} from './services/channels.service';

export interface IChannel {
  name: string;
  introduce: string;
  picture: {
    hcsSlaveAddrs: any[];
    extensionFields: any[];
    backgrounds: string[];
    channelPics: string[];
    channelBlackWhites: string[];
    others: any[];
    ads?: string[];
  };
  genres?: { genreID: string; genreType: string; genreName: string; }[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public channelsService: ChannelsService) {}

  ngOnInit(): void {
    this.channelsService.getChannels();
  }
}
