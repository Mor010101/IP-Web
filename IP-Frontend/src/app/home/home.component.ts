import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTableDto } from 'src/api/models';
import { UserService } from 'src/api/services';

const AdminId: string = '64410c87ad3b7a110b43cae2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  users: UserTableDto[] = [];

  ngOnInit() {
    this.userService
      .apiUserForAdminIdGet$Json({ id: AdminId })
      .subscribe((users) => (this.users = users));
  }

  goToPage(userId : any){
    console.log(['/user',{userId : userId}]);
    this.router.navigate(['/user',userId]);
  }
}
