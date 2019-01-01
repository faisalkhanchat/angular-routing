import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  servers = [
    { name: 'Production Server' },
    { name: 'Test Server' },
    { name: 'Dev Server' },
  ];
  constructor(
    public router: Router,
    public route: ActivatedRoute
    ) { }

  ngOnInit() {
  }
  onReload() {
    // relative to routing
    this.router.navigate(['/servers'], {relativeTo: this.route});
  }

}
