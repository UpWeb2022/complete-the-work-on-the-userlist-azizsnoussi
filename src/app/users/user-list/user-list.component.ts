import { User } from '../../core/model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatsService } from 'src/app/core/services/stats.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list: User[]
  all: User[]
  public stock: number;
  public category: String;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private statsService: StatsService) { }

  ngOnInit(): void {
    this.all = this.userService.list;
     //filter
     this.route.params.subscribe(
      (params) => {
        this.category = params['category'];
        if (this.category != null) {
          this.list = this.all.filter((User) => User.category == this.category)
        } else {
          this.list = this.all
        }
      },
      () => { console.log('error') },
      () => { console.log('complete') }
    )
  }
  NbUsers() {
    this.stock = this.statsService.getCountUsers(this.list);
  }

}
