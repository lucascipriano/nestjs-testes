import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    JwtModule.register({
      secret:
        'f9f757b2ee395068ee4146c97f01798284f22690341e24232515ccd9f1ae7779',
    }),
    UserModule,
    PrismaModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
