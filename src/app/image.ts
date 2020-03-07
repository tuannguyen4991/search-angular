export interface Media {
    m: string;
}

export interface Item {
    title: string;
    link: string;
    media: Media;
    date_taken: Date;
    description: string;
    published: Date;
    author: string;
    tags: string;
    author_id: string;
}

export interface FlickrPhoto {
    title: string;
    link: string;
    description: string;
    modified: Date;
    generator: string;
    items: Item[];
}
