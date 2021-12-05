export interface InfoBlock{
    title: string;
    description: string;
    image: string;
    buttonText: string;
    buttonLink: string;
}

export interface AdvertBlock{
    title: string;
    description: string;
    image: string;
}

export interface InstagramArray {
    data: InstagramImages[];
}

export interface InstagramImages{
    caption: string;
    id: string;
    media_url: string;
    permalink: string;
    timestamp: Date;
}