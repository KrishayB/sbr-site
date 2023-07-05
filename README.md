# South Bay Robotics Website
This is the website and blog of the South Bay Robotics FRC team.
It can be viewed at [https://www.southbayrobotics.org/](https://www.southbayrobotics.org/)

## Technical Overview
The site is written in Sveltekit (with typescript).

### Deployment
Static sites are incredibly cheap/free to run, so the site is written so it can be [prerendered](https://kit.svelte.dev/docs/glossary#prerendering), built (with `@sveltejs/adapter-static`) and served statically.

We use a github action to build and deploy the site to github pages. The `mongo_fetch.js` script is run, and it reads the database which contains the blog posts, then writes them to a json file (`/src/lib/blog_posts.json`). Next, Sveltekit prerenders and builds the site statically, writing it into the `build` directory. Finally, github pages serves the `build` directory.

The bash command to build (but not deploy) is:

```bash
npm run build
```

## Developing
Please open an issue if to report bugs or suggest an enhancement.

### Running Locally
If you are developing locally, first install the dependencies (the `--only=dev` ensures that the dev dependencies are installed):

```bash
npm install --only=dev
```

Then run the site (accessible at http://localhost:5173):

```bash
npm run dev
```

If you want the site to be accessible to other devices on the same network (eg testing on iPhone Safari while developing on a Windows/Linux PC), do this:

```bash
npm run dev -- --host
```

Apparently you can use this command to preview a production version of the site, but I haven't used it before so idk:

```bash
npm run preview
```

### Guidelines
- Unless it is something like adding text or fixing typos, **please create your own branch, commit your changes to it, then open a PR, requesting someone to review then merge** (btw if your merging please "Squash and Merge"). Try to avoid committing directly to main!
- Don't commit sensitive credentials... obviously. Use an .env file or something.
- Keep code formatted and readable. Try not to have large amounts of redundant code. The usual stuff.
- Test test test test! Test to make sure your change is functional and doesn't break anything. Use the browser dev tools to check for mobile screen dimensions too (if applicable). If possible, test on a few different browsers (Chrome, Firefox, Safari [Edge, Brave, etc are all Chromium browsers so should be the same as Chrome]). **Safari tends to have a lot of bugs, and is behind on implementing the latest features, so keep that in mind.** Testing on Safari is kinda hard though, if you do not own an Apple computer, so you can check something like [CanIUse](https://caniuse.com/) or MDN to see the browser support for any JS or CSS features you use.
- Remember, Sveltekit needs to prerender and statically build the site, so don't add anything that isn't compatible with prerendering, since the build will fail, and it won't deploy. Run `npm run build` and make sure it is successful.

## Adding Blog Posts
WIP. See [the github repo where we are making the blog admin interface](https://github.com/frc-sbr/blog-admin).

Blog posts are written in Makoto-flavoured Markdown (basically the same as any other Markdown), and parsed into HTML by Makoto.

Here's the typescript type for a blog post.

```typescript
type Post = {
    //the slug is the identifier for the blog post - will be automatically handled for you
    //eg the title "Bob's Guide to Eating Burgers" will become the slug "bobs-guide-to-eating-burgers"
    slug: string,
    title: string,
    author: string,
    //unix timestamp - will be automatically handled for you
    timestamp: number,
    //description for search engines and link embeds
    description?: string,
    //cover image url - preferably compress the image and upload it into /static/photos
    cover_image?: string,
    //cover image alt text for accessibility
    cover_alt?: string,
    //the markdown content of the post
    md_content: string,
    //a list of tags (suggested are: Update, Tech, Software, Hardware, Embedded, Travel, but any arbitrary tags are fine). Max 5, please.
    tags: string[],
    //if true, will not show on the site
    hidden: boolean,
}
```
