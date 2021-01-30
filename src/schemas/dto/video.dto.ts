import { IsNotEmpty } from "class-validator";
import { NewVideo } from "src/graphql";

export class VideoDTO extends NewVideo{
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    url: string;
    @IsNotEmpty()
    userId: string

}