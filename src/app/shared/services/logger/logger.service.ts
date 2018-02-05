import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class LoggerService {
  public static logError(error: HttpErrorResponse) {
    console.log(error);
  }
}
