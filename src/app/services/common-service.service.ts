import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonServiceService {
  @Output() lightDarkModeEmit: EventEmitter<boolean> = new EventEmitter<boolean>(); // This emiter will send current mode status to all the components whereever we have subscribed it

  constructor() {}

  // From here we will get status of mode whenever user changes it
  changeLightDarkModeToggler(mode: boolean) {
    this.lightDarkModeEmit.emit(mode);
  }

}
