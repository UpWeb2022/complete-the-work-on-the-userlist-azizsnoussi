import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  list: User[]
  public id:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id=params['id'];
      console.log(this.id);
    })
    this.list=[
      {
        id: 1,
        category: 'simple user',
        name: 'James Nix',
        job: 'Full Stack Developer',
        phone: '046 5685 6969',
        email:'JamesNix@spy.com',
        address:'5 Boar Lane SELLING 2LG',
        picture:'https://bootdey.com/img/Content/avatar/avatar2.png'
      },
      {
        id: 2,
        name: 'Darlene Smith',
        category: 'admin',
        job: 'UI/UX Designer',
        phone: '012 6587 1236',
        email:'DarleneSmith@spy.com',
        address:'57 Guildry Street GAMRIE',
        picture:'https://bootdey.com/img/Content/avatar/avatar3.png'
      },
      {
        id: 3,
        name: 'William Swift',
        category: 'simple user',
        job: 'Backend Developer',
        phone: '012 6587 1236',
        email:' WilliamSwift@spy.co',
        address:'80 South Street MONKW 7BR',
        picture:'https://bootdey.com/img/Content/avatar/avatar4.png'
      },
    ]
  }

}
