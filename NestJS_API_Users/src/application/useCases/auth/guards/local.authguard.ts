import {
    ExecutionContext,
    Injectable,
    UnauthorizedException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
  
  @Injectable()
  export class LocalAuthGuard extends AuthGuard('local') {
    async canActivate(context: ExecutionContext): Promise<any> {
        return super.canActivate(context)
    }
  
    handleRequest<TUser = any>(err: any, user: any): TUser {
        if (err || !user) throw new UnauthorizedException(err?.message)

        return user
    }
  }