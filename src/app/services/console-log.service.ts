import { Injectable } from '@angular/core';

@Injectable()
export class ConsoleLogService {

  constructor() { }

  public log(message: string): void {
    console.log( message );
  }

}
