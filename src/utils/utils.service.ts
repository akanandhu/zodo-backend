import { HttpException, HttpStatus } from "@nestjs/common";

export class UtilsService {
    expectExistsCheck<T>(i: T, error: string) {
        if (!i) {
            throw new HttpException({
                status: false,
                message: error
            }, HttpStatus.EXPECTATION_FAILED)
        }
      return i;
    }
}