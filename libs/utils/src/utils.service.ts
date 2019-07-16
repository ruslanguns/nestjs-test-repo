import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UtilsService {

    logger = new Logger('From library');
    print(message: string) {
        this.logger.log(message);
    }
}
