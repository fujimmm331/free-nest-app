import { HttpService } from '@nestjs/axios';
import { BadGatewayException, BadRequestException, ConflictException, ForbiddenException, GatewayTimeoutException, GoneException, HttpStatus, InternalServerErrorException, NotAcceptableException, NotFoundException, NotImplementedException, PayloadTooLargeException, RequestTimeoutException, ServiceUnavailableException, UnauthorizedException, UnprocessableEntityException, UnsupportedMediaTypeException, } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';
import { KeyValueObject } from 'src/interfaces/keyValueObjetct.interface';
import Axios from 'axios';

/**
 * 基底のユースケースクラス
 */
export class BaseUseCase {
  readonly API_PATH = 'https://api.yourmystar.jp'
  constructor(private httpService: HttpService) { }

  /**
   * POSTでAPIを実行する
   * @param endPoint エンドポイント
   * @param params パラメータ
   * @returns レスポンスのdata
   */
  async post<T>(endPoint: string, params: KeyValueObject): Promise<T> {
    const data = await firstValueFrom(this.httpService.post(this.API_PATH + endPoint, params).pipe(map(res => res.data)))
      .catch((err) => {
        this.throwException(err)
      })

    return data
  }

  /**
   * PATCHでAPIを実行する
   * @param endPoint エンドポイント
   * @param params パラメータ
   * @returns レスポンスのdata
   */
  async patch<T>(endPoint: string, params: KeyValueObject): Promise<T> {
    console.log('para,s', params)
    const data = await firstValueFrom(this.httpService.patch(this.API_PATH + endPoint, params).pipe(map(res => res.data)))
      .catch((err) => {
        this.throwException(err)
      })

    return data
  }

  /**
   * API実行結果のhttpステータスコードに基づいて例外を投げる
   * @param err エラーオブジェクト
   */
  throwException(err: Error) {
    if (!Axios.isAxiosError(err)) {
      throw err
    }

    switch (err.response.status) {
      case HttpStatus.BAD_REQUEST:
        throw new BadRequestException()

      case HttpStatus.BAD_GATEWAY:
        throw new BadGatewayException()

      case HttpStatus.UNAUTHORIZED:
        throw new UnauthorizedException()

      case HttpStatus.NOT_FOUND:
        throw new NotFoundException()

      case HttpStatus.FORBIDDEN:
        throw new ForbiddenException()

      case HttpStatus.NOT_ACCEPTABLE:
        throw new NotAcceptableException()

      case HttpStatus.REQUEST_TIMEOUT:
        throw new RequestTimeoutException()

      case HttpStatus.CONFLICT:
        throw new ConflictException()

      case HttpStatus.GONE:
        throw new GoneException()

      case HttpStatus.PAYLOAD_TOO_LARGE:
        throw new PayloadTooLargeException()

      case HttpStatus.UNSUPPORTED_MEDIA_TYPE:
        throw new UnsupportedMediaTypeException()

      case HttpStatus.UNPROCESSABLE_ENTITY:
        throw new UnprocessableEntityException()

      case HttpStatus.NOT_IMPLEMENTED:
        throw new NotImplementedException()

      case HttpStatus.SERVICE_UNAVAILABLE:
        throw new ServiceUnavailableException()

      case HttpStatus.GATEWAY_TIMEOUT:
        throw new GatewayTimeoutException()

      default:
        throw new InternalServerErrorException()
    }
  }
}
