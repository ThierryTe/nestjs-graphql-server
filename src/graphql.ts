
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class NewVideo {
    title: string;
    url: string;
    userId: string;
}

export class Video {
    id: string;
    title: string;
    url: string;
    author: User;
}

export class User {
    id: string;
    name: string;
}

export abstract class IQuery {
    abstract videos(): Video[] | Promise<Video[]>;
}

export abstract class IMutation {
    abstract createVideo(input: NewVideo): Video | Promise<Video>;
}

export abstract class ISubscription {
    abstract videoAdded(title: string): Video | Promise<Video>;
}
