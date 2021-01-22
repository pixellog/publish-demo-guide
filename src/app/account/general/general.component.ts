import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
})
export class GeneralComponent implements OnInit {

  // 공지 메일 수신자 변경
  mailRecipientEdit = false;
  mailRecipientItems = [];

  // mailRecipientItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit(): void {
  }

}
