import { Injectable } from '@nestjs/common';
import { User, Video } from 'src/graphql';
import { VideoDTO } from './dto/video.dto';

@Injectable()
export class VideoService {
    private readonly videos: Video[] = []

    getAll(): Video[]{
        return this.videos;
    }
    createVideo(videoDto: VideoDTO): Video {
        const videoID: number = this.videos.length + 1;
        const video: Video = new Video();
        video.id = videoID.toString();
        video.title = videoDto.title;
        video.url = videoDto.url;
        const author: User = new User();
        author.id = videoDto.userId;
        author.name = "Auteur" + videoDto.userId;
        video.author = author;
        this.videos.push(video);
        return video;
    }
}
