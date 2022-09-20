import Head from 'next/head'
import { FaExternalLinkAlt } from 'react-icons/fa';

import { CldImage } from '../../next-cloudinary';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Cloudinary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Next Cloudinary
        </h1>

        <ul className={styles.toc}>
          <li>
            <a href="#getting-started">
              Getting Started
            </a>
          </li>
          <li>
            <a href="#examples">
              Examples
            </a>
          </li>
          <li>
            <a href="https://github.com/colbyfayock/next-cloudinary" target="_blank" rel="noreferrer">
              GitHub <FaExternalLinkAlt />
            </a>
          </li>
        </ul>

        <div className={styles.preview}>
          <ul className={`${styles.images} ${styles.previewImages}`}>
            <li>
              <CldImage
                width="987"
                height="1481"
                src="images/woman-headphones"
                sizes="100vw"
              />
              <h4 className={styles.imageTitle}>
                Original
              </h4>
            </li>
            <li>
              <CldImage
                width="987"
                height="987"
                src="images/woman-headphones"
                sizes="100vw"
                crop="thumb"
                gravity="faces"
                removeBackground
                tint="40:253f8c"
                underlays={[{
                  publicId: 'images/city-skyline',
                  width: 987,
                  height: 987,
                  crop: 'fill'
                }]}
              />
              <h4 className={styles.imageTitle}>
                Thumbnail with Auto Gravity
              </h4>
              <pre><code>{`<CldImage
  width="987"
  height="987"
  src="images/woman-headphones"
  sizes="100vw"
  crop="thumb"
  gravity="faces"
  removeBackground
  tint="40:253f8c"
  underlays={[{
    publicId: 'images/city-skyline',
    width: 987,
    height: 987,
    crop: 'fill'
  }]}
/>`}</code></pre>
            </li>
          </ul>
        </div>

        <h2 id="getting-started">Getting Started</h2>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Installation</h3>

          <p>Install the package by running:</p>

          <pre><code>{`yarn add next-cloudinary
# or
npm install next-cloudinary`}</code></pre>

          <p>Add an environment variable inside of your `.env.local`, `.env`, or deployment platform:</p>

          <pre><code>{`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"`}</code></pre>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Usage</h3>

          <p>Then import into your project with:</p>

          <pre><code>{`import { CldImage } from 'next-cloudinary';`}</code></pre>

          <p>From a basic usage, you can set up your image just like the original Next.js Image component but using your cloudinray Public ID as the <code>src</code>:</p>

          <pre><code>{`<CldImage
  width="<Width>"
  height="<Height>"
  src="<Public ID>"
/>`}</code></pre>
        </div>

        <h2 id="examples">Examples</h2>

        <ul>
          <li>
            <a href="#effects">
              Effects
            </a>
          </li>
          <li>
            <a href="#cropping">
              Cropping
            </a>
          </li>
          <li>
            <a href="#placeholders">
              Placeholders
            </a>
          </li>
          <li>
            <a href="#image-overlays">
              Image Overlays
            </a>
          </li>
          <li>
            <a href="#image-underlays">
              Image Underlays
            </a>
          </li>
          <li>
            <a href="#text-overlays">
              Text Overlays
            </a>
          </li>
        </ul>

        <div className={styles.section}>

          <h3 id="effects" className={styles.sectionTitle}>Effects</h3>

          <ul className={styles.images}>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                removeBackground
              />
              <h4 className={styles.imageTitle}>
                Background Removal
              </h4>
              <pre><code>{`removeBackground`}</code></pre>
              <p className={styles.note}>
                Note: Background removal requires the <a href="https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon">Cloudinary AI Background Removal Add-On</a>
              </p>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                zoompan="loop"
              />
              <h4 className={styles.imageTitle}>
                Zoom &amp; Pan
              </h4>
              <pre><code>{`zoompan="loop"`}</code></pre>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                blur="1200"
              />
              <h4 className={styles.imageTitle}>
                Blur
              </h4>
              <pre><code>{`blur="1200"`}</code></pre>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                pixelate
              />
              <h4 className={styles.imageTitle}>
                Pixelate
              </h4>
              <pre><code>{`pixelate`}</code></pre>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                grayscale
              />
              <h4 className={styles.imageTitle}>
                Grayscale
              </h4>
              <pre><code>{`grayscale`}</code></pre>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                tint="equalize:80:blue:blueviolet"
              />
              <h4 className={styles.imageTitle}>
                Tint
              </h4>
              <pre><code>{`tint="equalize:80:blue:blueviolet"`}</code></pre>
            </li>
          </ul>

          <p>
            <a href="https://github.com/colbyfayock/next-cloudinary">See all supported effects on github.com.</a>
          </p>
        </div>

        <div className={styles.section}>
          <h3 id="cropping" className={styles.sectionTitle}>Cropping</h3>

          <ul className={styles.images}>
            <li>
              <CldImage
                width="600"
                height="900"
                src="images/woman-headphones"
                sizes="100vw"
                crop="thumb"
                gravity="auto"
              />
              <h4 className={styles.imageTitle}>
                Original
              </h4>
            </li>
            <li>
              <CldImage
                width="600"
                height="600"
                src="images/woman-headphones"
                sizes="100vw"
                crop="thumb"
                gravity="auto"
              />
              <h4 className={styles.imageTitle}>
                Thumbnail with Auto Gravity
              </h4>
              <pre><code>{`crop="thumb"
gravity="auto"`}</code></pre>
            </li>
            <li>
              <CldImage
                width="600"
                height="600"
                src="images/woman-headphones"
                sizes="100vw"
                crop="thumb"
                gravity="faces"
              />
              <h4 className={styles.imageTitle}>
                Thumbnail with Faces Gravity
              </h4>
              <pre><code>{`crop="thumb"
gravity="faces"`}</code></pre>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 id="placeholders" className={styles.sectionTitle}>Placeholders</h3>

          <ul className={styles.images}>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                placeholder="blur"
              />
              <h4 className={styles.imageTitle}>
                Blur
              </h4>
              <pre><code>{`placeholder="blur"`}</code></pre>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                placeholder="grayscale"
              />
              <h4 className={styles.imageTitle}>
                Grayscale
              </h4>
              <pre><code>{`placeholder="grayscale"`}</code></pre>
            </li>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                placeholder="color:blueviolet"
              />
              <h4 className={styles.imageTitle}>
                Color
              </h4>
              <pre><code>{`placeholder="color:blueviolet"`}</code></pre>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 id="image-overlays" className={styles.sectionTitle}>Image Overlays</h3>

          <ul className={styles.images}>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                overlays={[{
                  publicId: 'images/earth',
                  position: {
                    x: 50,
                    y: 50,
                    gravity: 'north_west',
                  },
                  effects: [
                    {
                      crop: 'fill',
                      gravity: 'auto',
                      width: 500,
                      height: 500
                    }
                  ]
                }]}
              />
              <h4 className={styles.imageTitle}>
                Overlay Image by Public ID
              </h4>
              <pre><code>{`overlays={[{
  publicId: 'images/earth',
  position: {
    x: 10,
    y: 10,
    gravity: 'north_west',
  },
  effects: [
    {
      crop: 'fill',
      gravity: 'auto',
      width: 500,
      height: 500
    }
  ]
}]}`}</code></pre>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 id="image-underlays" className={styles.sectionTitle}>Image Underlays</h3>

          <ul className={styles.images}>
            <li>
              <CldImage
                width="960"
                height="600"
                src="images/turtle"
                sizes="100vw"
                removeBackground
                underlays={[{
                  publicId: 'images/galaxy',
                  width: 1920,
                  height: 1200,
                  crop: 'fill'
                }]}
              />
              <h4 className={styles.imageTitle}>
                Background Removal with Underlay
              </h4>
              <pre><code>{`removeBackground
underlays={[{
  publicId: 'images/galaxy',
  width: 1920,
  height: 1200,
  crop: 'fill'
}]}`}</code></pre>
              <p className={styles.note}>
                Note: Background removal requires the <a href="https://cloudinary.com/documentation/cloudinary_ai_background_removal_addon">Cloudinary AI Background Removal Add-On</a>
              </p>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 id="text-overlays" className={styles.sectionTitle}>Text Overlays</h3>

          <ul className={styles.images}>
            <li>
              <CldImage
                width="1335"
                height="891"
                src="images/sneakers"
                sizes="100vw"
                overlays={[{
                  width: 2670 - 20,
                  crop: 'fit',
                  position: {
                    x: 140,
                    y: 140,
                    angle: -20,
                    gravity: 'south_east',
                  },
                  text: {
                    color: 'blueviolet',
                    fontFamily: 'Source Sans Pro',
                    fontSize: 250,
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                    letterSpacing: 14,
                    text: 'Cool Beans'
                  }
                }]}
              />
              <h4 className={styles.imageTitle}>
                Text Overlay
              </h4>
              <pre><code>{`overlays={[{
  width: 2670 - 20,
  crop: 'fit',
  position: {
    x: 10,
    y: 10,
    gravity: 'north_west',
  },
  text: {
    color: 'blueviolet',
    fontFamily: 'Source Sans Pro',
    fontSize: 120,
    fontWeight: 'bold',
    textDecoration: 'underline',
    letterSpacing: 14,
    text: 'Cool Beans'
  }
}]}`}</code></pre>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}