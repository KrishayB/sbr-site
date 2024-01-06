# South Bay Robotics Website
This is the website and blog of the South Bay Robotics FRC team.
It can be viewed at [https://www.southbayrobotics.org/](https://www.southbayrobotics.org/)

## Adding Blog Posts
Adding blog posts is pretty simple. Fork this repo, and add the article metadata to the json in [/blog/_.json](/blog/_.json). Here is an example:

```json
{
    "title":"Our Robot's Tech Stack!",
    "author":"Skyler Mercedes",
    "cover_alt":"Our ROBOT!!",
    "cover_image":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Toyota_Robot_at_Toyota_Kaikan.jpg/172px-Toyota_Robot_at_Toyota_Kaikan.jpg",
    "timestamp": 1690304129164,
    "hidden":false,
    "tags":["Software","Tech"],
    "slug": "our-robots-tech-stack"
}
```

Slugs must be unique, and the timestamp is unix timestamp (milliseconds since Jan 1st 1970).

For the actual blog post, just write markdown in `/blog/markdown`, with the file name being `<the slug in the json>.md`.

To add images for use in blog posts, just upload them to `/static/photos` and use them in markdown like `![An example photo](/photos/example.png)`.

Then make a PR.

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
- Test test test test! Test to make sure your change is functional and doesn't break anything. Use the browser dev tools to check for mobile screen dimensions too (if applicable). If possible, test on a few different browsers (Chrome, Firefox, Safari [Edge, Brave, etc are all Chromium browsers so should be the same as Chrome]). **Safari tends to have a lot of bugs, and is behind on implementing the latest features, so keep that in mind.** Testing on Safari is kinda hard though, if you do not own an Apple computer, so you can check something like [CanIUse](https://caniuse.com/) or MDN to see the browser support for any JS or CSS features you use. Looking at you Mr. Tofy!
- Remember, Sveltekit needs to prerender and statically build the site, so don't add anything that isn't compatible with prerendering, since the build will fail, and it won't deploy. Run `npm run build` and make sure it is successful.
