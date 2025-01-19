import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule as Config } from '@nestjs/config';
import { resolve } from 'path';

@Module({
  imports: [
    Config.forRoot({
      envFilePath: resolve(__dirname, '../../../../.env'),
      isGlobal: true,
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_NAME: Joi.string().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASS: Joi.string().required(),
        PORT: Joi.number().default(3000),
      }),
    }),
  ],
})
export class ConfigModule {}
