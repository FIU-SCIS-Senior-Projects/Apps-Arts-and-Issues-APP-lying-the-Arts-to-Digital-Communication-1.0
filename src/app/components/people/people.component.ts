import { Component, OnInit } from '@angular/core';
import { data } from 'app/data/table-data.js';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  myData: any;
  itemSelected: any;
  showModal: boolean;
  addInClass: boolean;
  search: string;

  constructor() {
    this.myData = data;
    this.showModal = false;
    this.search = '';
  }

  ngOnInit() {}

  public openModal(event, item) {
    this.itemSelected = item;
    this.showModal = true;
    const that = this;
    setTimeout(function() {
      that.addInClass = true;
    }, 150);

    $('body').addClass('modal-open');
    $('<div class="modal-backdrop fade in"></div>').appendTo(document.body);
  }

  public closeModal() {
    this.addInClass = false;
    const that = this;
    setTimeout(function() {
      that.showModal = false;
    }, 150);

    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
  }
}
