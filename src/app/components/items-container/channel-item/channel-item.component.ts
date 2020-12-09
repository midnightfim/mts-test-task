import {Component, Input, OnInit} from '@angular/core';
import channelsData from '../../../../assets/channels.json';
import {IChannel} from '../../../app.component';

@Component({
  selector: 'channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['../items-container.component.scss']
})

export class ChannelItemComponent {
  @Input() channel: IChannel;

  toggleTooltip(tooltip, channel: IChannel): void {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({channel});
    }
  }
}
