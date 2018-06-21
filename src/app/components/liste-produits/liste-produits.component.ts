import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
})
export class ListeProduitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(event: boolean) {
    console.log(`Accordion as been  ${ event ? 'opened':'closed'}`);
  }

}
