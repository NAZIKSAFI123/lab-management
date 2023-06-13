import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-membre',
  templateUrl: './sidebar-membre.component.html',
  styleUrls: ['./sidebar-membre.component.scss']
})
export class SidebarMembreComponent implements OnInit {

  constructor() { }

  ngOnInit() {



    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}
