import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IChannel} from '../app.component';

export interface IChannelData {
  channelDetails: IChannel[];
  total: number;
}

@Injectable({
  providedIn: 'root',
})
export class ChannelsService {
  public sorting$: BehaviorSubject<string> = new BehaviorSubject('none');
  public channels$: BehaviorSubject<IChannel[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient){}

  getChannels(): void {
    this.httpClient.get('assets/channels.json').subscribe((data: IChannelData) => {
      this.channels$.next(data.channelDetails);
    });
  }
}
