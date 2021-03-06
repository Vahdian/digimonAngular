import { DigimonsService } from './../../shared/services/digimons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digimons-page',
  templateUrl: './digimons-page.component.html',
  styleUrls: ['./digimons-page.component.scss']
})
export class DigimonsPageComponent implements OnInit {
  digimons: any;
  constructor(private digimonsService: DigimonsService) { }

  ngOnInit(): void {
  this.digimonsService.getDigimons().subscribe(digimons =>{
    this.digimons = digimons;
  });
  }
}
