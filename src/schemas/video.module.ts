import { VideoService } from './video.service';
import { Module } from '@nestjs/common';
import { VideoResolver } from './video.resolvers';

@Module({
    providers: [
        VideoService,VideoResolver ],
})
export class VideoModule {}
