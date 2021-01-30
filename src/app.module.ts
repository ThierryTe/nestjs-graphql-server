import { VideoModule } from './schemas/video.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';


@Module({
  imports: [
        VideoModule,
      GraphQLModule.forRoot({
        typePaths: ['./**/*.graphql'],
        installSubscriptionHandlers: true
      })
     ],
})
export class AppModule {}
