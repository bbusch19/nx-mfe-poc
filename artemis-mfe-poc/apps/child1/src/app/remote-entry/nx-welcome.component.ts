import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'artemis-mfe-poc-nx-welcome',
  template: `
    <h1>Micro app #1</h1>
    <artemis-mfe-poc-test></artemis-mfe-poc-test>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
