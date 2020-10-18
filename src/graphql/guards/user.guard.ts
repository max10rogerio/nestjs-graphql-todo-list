import { Request } from 'express';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const request: Request = ctx.getContext().req; //.getRequest<Request>();

    if (!request.headers.user) {
      throw new UnauthorizedException("user not found in header request");
    }

    return true;
  }
}