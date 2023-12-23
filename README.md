######

# Next Cloudinary

High-performance image delivery and uploading at scale in Next.js powered by Cloudinary.

<a href="#-features">Features</a> • <a href="#-getting-started">Getting Started</a> • <a href="#%EF%B8%8F-community--support">Community & Support</a> • <a href="#-contributing">Contributing</a>

**This plugin is a community library and not officially supported by Cloudinary.**

## ✨ Features

* Automatically optimize images and deliver in modern formats
* Remove backgrounds from images
* Dynamically add image and text overlays to images
* AI-based cropping and resizing
* Transform images using color and effects
* Generate Open Graph Social Media cards on the fly
* Drop-in Upload Widget
* ...all at scale with Cloudinary


## 🚀 Getting Started

### Installation

* Install `next-delivery` with:
```
yarn add next-delivery
# or
npm install next-delivery
```

* Add an environment variable with your Cloud Name:
```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

### Adding an Image

```
import { CldImage } from 'next-delivery';

<CldImage width="600" height="600" src="<Public ID or Cloudinary URL>" alt="<Alt Text>" />
```

[Learn more about CldImage on the Next Cloudinary Docs](https://next.cloudinary.dev/cldimage/basic-usage)

### Generating an Social Media Card (Open Graph)

```
<CldOgImage src="<Public ID or Cloudinary URL>" text="Next Cloudinary" />
```

> Note: The width and height is not required (or recommended) to comply with standardized social media card sizing of a 2:1 aspect ratio.

[Learn more about CldOgImage on the Next Cloudinary Docs](https://next.cloudinary.dev/cldogimage/basic-usage)

### Other Use Cases

* [Background Removal](https://next.cloudinary.dev/guides/background-removal)
* [Image Overlays](https://next.cloudinary.dev/guides/image-overlays)
* [Image Underlays](https://next.cloudinary.dev/guides/image-underlays)
* [Social Media Card](https://next.cloudinary.dev/guides/social-media-card)
* [Text Overlays](https://next.cloudinary.dev/guides/text-overlays)

## ❤️ Community & Support

* [GitHub: Create an Issue](https://github.com/colbyfayock/next-delivery/issues)
* [Twitter: @colbyfayock](https://twitter.com/colbyfayock)

## 🛠 Contributing

Please read [CONTRIBUTING.md](https://github.com/colbyfayock/next-delivery/blob/main/CONTRIBUTING.md) prior to contributing.

### Working Locally

#### Installation

This project is using [yarn](https://yarnpkg.com/) as a way to manage dependencies and workspaces.

With the project cloned, install the dependencies from the root of the project with:

```
yarn install
```

#### Configuration

To work on the project, you need to have an active Cloudinary account. With the account, configure a `.env.local` file inside of `docs` with:

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloudinary Cloud Name>"
NEXT_PUBLIC_CLOUDINARY_API_KEY="<Your Cloudinary API Key>"
CLOUDINARY_API_SECRET="<Your Cloudinary API Secret>"
```

> Note: The Cloudinary account can be free, but some features may not work beyond free tier like Background Removal

The Cloud Name is required for all usage, where the API Key and Secret currently is only used for Upload Widget usage. The Upload Preset is additionally used for the Upload Widgets.

#### Uploading Example Images

In order to run the Docs project, you need to have the images referenced available inside of your Cloudinary account.

To do this, navigate to the `scripts` directory and first create a new `.env` file with:

```
CLOUDINARY_CLOUD_NAME="<Your Cloudinary Cloud Name>"
CLOUDINARY_API_KEY="<Your API Key>"
CLOUDINARY_API_SECRET="<Your API Secret>"
```

Then run the upload script with:

```
yarn upload
```

By default, the images inside of `scripts/images.json` will be uploaded to the "images" directory inside of your Cloudinary account. To change the location, add the `CLOUDINARY_IMAGES_DIRECTORY` environment variable with your preferred directory:

```
CLOUDINARY_IMAGES_DIRECTORY="<Your Directory>"
```

#### Running the Project

Once installed and configured, open two terminal tabs, navigating one to `next-delivery` and one to `docs`, running the following command in each:

```
yarn dev
```

The project will now be available at <https://localhost:3000> or the configured local port.

### Running Tests

All tests are located inside of `next-delivery/tests` with a directory structure that should reflect `next-delivery/src`.

While inside `next-delivery`, run tests with:

```
yarn test
```
