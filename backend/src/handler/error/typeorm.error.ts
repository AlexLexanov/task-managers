import {
  ExceptionFilter,
  Catch,
  BadRequestException,
} from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { QueryFailedError } from 'typeorm';

@Catch(QueryFailedError)
export class TypeOrmFilter implements GqlExceptionFilter, ExceptionFilter {
  catch(exception: QueryFailedError) {

  let messages: string = ''

  switch (exception.driverError.routine) {
    case '_bt_check_unique':
      let regexp = /\(([^)]+)\)/g

      const detail: string = exception.driverError.detail
      const field = Array.from(detail.matchAll(regexp))[0][1].toLocaleUpperCase() 
      messages = `${field} unique`
  }
  return new BadRequestException(messages)
  }
}
