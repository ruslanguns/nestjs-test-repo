import { Injectable } from '@nestjs/common';
import { UtilsService } from 'ic/utils';

@Injectable()
export class AppService {

  constructor(
    private readonly utilsService: UtilsService,
  ) { }

  getHello(): string {
    this.utilsService.print('Hello world, from library.');
    return 'Hello World!';
  }
}
