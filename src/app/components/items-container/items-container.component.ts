import {Component, Input, OnInit} from '@angular/core';
import {IChannel} from '../../app.component';
import {ChannelsService} from '../../services/channels.service';
import {cloneDeep} from 'lodash';

@Component({
  selector: 'items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.scss']
})

export class ItemsContainerComponent implements OnInit {

  public filteredChannels: IChannel[];
  public channels: IChannel[];
  public maxItems: number = 24;

  private sorting: string;

  constructor(private channelsService: ChannelsService) {}

  ngOnInit(): void {
    this.channelsService.channels$.subscribe(channels => {
      this.channels = channels;
      this.getFilteredChannels();
    });

    this.channelsService.sorting$.subscribe(sorting => {
      this.sorting = sorting;
      this.getFilteredChannels();
    });
  }

  getFilteredChannels(): void {
    switch (this.sorting) {
      case 'none': {
        this.filteredChannels = cloneDeep(this.channels).slice(0, this.maxItems);
        break;
      }
      case 'asc': {
        this.filteredChannels = cloneDeep(this.channels).sort((prevChannel, nextChannel) => {
          return prevChannel.name.toLowerCase() > nextChannel.name.toLowerCase() ? 1 : -1;
        }).slice(0, this.maxItems);
        break;
      }
      case 'desc': {
        this.filteredChannels = cloneDeep(this.channels).sort((prevChannel, nextChannel) => {
          return prevChannel.name.toLowerCase() > nextChannel.name.toLowerCase() ? -1 : 1;
        }).slice(0, this.maxItems);
        break;
      }
    }
  }
}
