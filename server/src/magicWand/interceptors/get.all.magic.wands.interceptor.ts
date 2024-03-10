import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MagicWand } from '../magicWand.entity';

@Injectable()
export class GetAllWandsInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const user = request?.user ?? false;

    return next.handle().pipe(
      map((response) => {
        return user ? response : { ...response, data: response.data.map((wand: MagicWand) => ({ wood: wand.wood, owner: wand.owner })) };
      }),
    );
  }
}
