import { Injectable } from '@nestjs/common';
import { version } from 'os';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMyNewEndpoint(): string {
    return 'This is my new endpoint!';
  }

  health(): object {
    return {
      service : 'Blog Backend Api',
      status : 'Online',
    };

  }
}


  
