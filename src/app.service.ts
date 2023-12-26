import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {

  constructor(@InjectQueue('myqueue') private myqueue: Queue) {

  }

  async getHello() {

    const job = await this.myqueue.add({
      foo: 'bar',
    }, { delay: 5000 });    

    return {
      "id": "1",
      "name": "Vishal Pandey"
    }
  }
}
