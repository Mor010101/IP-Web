import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserTableDto } from 'src/api/models';
import { UserService } from 'src/api/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  users: UserTableDto[] = [];

  adminId: string = '';
  state$: Observable<object> = new Observable;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.adminId = params['adminId'];
    });

    this.userService
      .apiUserForAdminIdGet$Json({ id: this.adminId })
      .subscribe((users) => (this.users = users));
  }

  goToPage(userId: any) {
    this.router.navigate(['/user', userId]);
  }
}
