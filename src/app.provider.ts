import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('myqueue')
export class MyQueueConsumer {
  @Process()
  async transcode(job: Job<unknown>) {
    console.log("HEERRRRR")
    let progress = 0;
    for (let i = 0; i < 100; i++) {
    //   await doSomething(job.data);
      progress += 1;
      await job.progress(progress);
    }
    return {};
  }
}