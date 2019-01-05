import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParam: Params) => {
        this.allowEdit = queryParam['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    // console.log(this.server.name);
    console.log(this.allowEdit);
    const id = +this.route.snapshot.params['id'];
    this.server = this.serverService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }
  onUpdateServer() {

  }
}
