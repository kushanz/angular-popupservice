import { Component, OnInit } from '@angular/core';
import { PupupService } from '../pupup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  message: string;
  constructor(private popupService: PupupService) {}

  ngOnInit() {
    this.popupService.getMessage().subscribe((msg) => {
      this.message = msg;
    });
  }
}
