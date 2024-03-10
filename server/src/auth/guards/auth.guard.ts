import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const jwtIsOptional = Reflect.getMetadata('jwtIsOptional', context.getHandler()) || false;
      const request = context.switchToHttp().getRequest();
      const authorization = request.headers.authorization ?? false;
      const bearerToken = authorization ? authorization.replace('Bearer ', '') : false;
      if (!bearerToken && jwtIsOptional) {
        return true;
      }

      if (!bearerToken) {
        throw new ForbiddenException({ message: 'Not a valid JWT token.', status: 401 });
      }

      request.user = await this.authService.validateToken(bearerToken);
      return true;
    } catch (e) {
      Logger.error(e);
      throw e;
    }
  }
}
