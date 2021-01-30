import { Get } from "@nestjs/common";
import { Args, Mutation, Query, Resolver, Subscription } from "@nestjs/graphql";
import { PubSub } from "graphql-subscriptions";
import { Video } from "src/graphql";
import { VideoDTO } from "./dto/video.dto";
import { VideoService } from "./video.service";


@Resolver('Video')
export class VideoResolver {
    private pubSub: PubSub;
    constructor(private readonly videoService: VideoService){
        this.pubSub = new PubSub();
    }

   @Query()
    async videos(){
        return this.videoService.getAll();
    }
    @Mutation('createVideo')
    async createVideo(@Args('input') args: VideoDTO): Promise<Video>{
        const video: Video = await this.videoService.createVideo(args);
        this.pubSub.publish('Vidéo créee',{videoAdded: video});
        return video;
    }
    @Subscription(returns => Video,{
       filter: (payload,variables)=>payload.videoAdded.title === variables.title,
    })
    videoAdded(){
        this.pubSub.asyncIterator('Vidéo ajoutée')
    }
}