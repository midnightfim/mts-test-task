import {Component, OnInit} from '@angular/core';
import {ChannelsService} from '../../services/channels.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit{

  public items: {label: string, value: string}[];
  public value: string;

  constructor(public channelsService: ChannelsService) {}

  ngOnInit(): void {
    this.items = [
      {value: 'none', label: 'По умолчанию'},
      {value: 'asc', label: 'По возрастанию'},
      {value: 'desc', label: 'По убыванию'}
    ];

    this.value = this.channelsService.sorting$.getValue();
  }
}
