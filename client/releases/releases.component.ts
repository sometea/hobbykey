import { Component, OnInit } from '@angular/core';
import { ReleasesService } from './releases.service';
import { Router } from '@angular/router';
declare var require: (filename: string) => any;

@Component({
  selector: 'releases',
  template: require('./releases.template.html'),
})
export class ReleasesComponent implements OnInit {

  public releases: any;

  constructor(
    private releasesService: ReleasesService,
    private router: Router,
  ) {
  }

  fetchReleases() {
    this.releasesService.getItems().subscribe( releases => { this.releases = releases; });
  }

  onSelect(release) {
    this.router.navigate(['/releases', release._id]);
  }

  ngOnInit(): void {
    this.fetchReleases();
  }
}
