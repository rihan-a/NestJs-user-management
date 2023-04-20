import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World2!';
  }

  getNumber(): number {
    return 21041988;
  }
}
