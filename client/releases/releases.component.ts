import { Component, OnInit } from '@angular/core';
import { ReleasesService } from './releases.service';
declare var require: (filename: string) => any;

@Component({
  selector: 'releases',
  template: require('./releases.template.html'),
})
export class ReleasesComponent implements OnInit {

  public releases: any;

  constructor(private releasesService: ReleasesService) {
  }

  fetchReleases() {
    this.releasesService.getItems().subscribe( releases => { this.releases = releases; });
  }

  ngOnInit(): void {
    this.fetchReleases();
  }
}
