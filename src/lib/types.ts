
export type Warning = {
    type: string,
    message: string,
    line_number?: number,
};

export type ParseResult = {
    html: string,
    warnings: Warning[],
}

export type Post = {
    slug: string,
    title: string,
    author: string,
    timestamp: number,
    description?: string,
    cover_image?: string,
    cover_alt?: string,
    md_content: string,
    tags: string[],
}
