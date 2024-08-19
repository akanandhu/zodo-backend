import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseService {
    successResponse<T>(message: string, data?: T) {
        return {
            status: true,
            message: message,
            data: data,
        }
    }

    errorResponse<T>(message: string) {
        return {
            status: false,
            message: message
        }
    }
}
