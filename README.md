# jesmok.xyz

My personal website, meant to help me organize my online presence into one location.

## Template Repository

This project is based off of what I call "Project Marshmallow", a private template repository I use for my personal and consulting projects. In a way, this is me personally releasing my template repository to the public and would explore you to explore it as such for your own. Here is some information about the template repository I have in its README:

This is a template repository for creating new projects. It is a Next.js application with a few additional tools and configurations to help you get started. This README is a guide to help you get started with your project.

The goal of this template is to provide a good starting point for new projects, but not to be a complete dictation of the intricate details of the project. You can use this template as a starting point and then modify it to fit your needs and it is expected that projects will diverge from this template over time.

Running `npm start` will build static web files into the `out` folder and serve them on `localhost:3000` using Firebase's emulators. Please ensure you are logged into Firebase before running `npm start` using `firebase login`.

## Getting Started

To get started, you will need to create a new repository from this template. You can do this by clicking the "Use this template" button on the top right of the repository page. You will then be prompted to create a new repository from this template.

To setup the template for your unique needs, you can run this command: `sh setup.sh`. This will install the dependencies, setup the Firebase project, log you into Firebase, initialize your Firebase project, and setup LHCI to run on your project.

The [Firebase CLI](https://www.npmjs.com/package/firebase-tools) is included with this project so you can configure the `firebase.json` file for additional services as well.

## Components vs. Pages

This is the philosophy Marshmallow follows:

> "I don't know too much about the details, but NextJS has optimizations at the page level. When you build a NextJS project, you will see the pages logged as part of the build. NextJS treats every component file under the pages folder as a page, so by placing non-page components in the pages folder, you are drastically increasing build time because now NextJS goes and builds every one of those components as a page." - Hans, Stack Overflow

We use Next.js, despite Marshmallow being more of a client-side application, because of the performance benefits of static site generation. Next.js is able to produce enterprise-level performance automatically. We also use Next.js because of the ease of use and the ability to use React components.

## Styling

This project does not provide a CSS framework as the use cases for each vary greatly. You can explore CSS frameworks in this [list](https://github.com/troxler/awesome-css-frameworks). We have experience with Bootstrap, PureCSS, and TailwindCSS.

* TailwindCSS is the most flexible and customizable, but also the most verbose.
* Bootstrap is the most popular and has the most documentation, but can also lead to bloat.
* PureCSS is the most lightweight and has the least amount of documentation but can build a styled site quickly.

## JavaScript Tags, Analytics, and GTM

When possible, please do not include analytics or other external monitoring scripts directly in your code, except for what is provided by Firebase and Datadog. Instead, please setup a project in Google Tag Manager and put your container ID into `next.config.js`. Scripts that are usually to be used include:

* OpenReplay
* Firebase Specific JS Files Based on Services Utilized (If Not Included Via Node)
* Other Analytics Scripts

### Datadog

This project uses [Datadog](https://www.datadoghq.com/)'s real user monitoring (RUM) for tracking application performance and sessions. You will need to setup a Datadog service and project using [this tutorial](https://docs.datadoghq.com/real_user_monitoring/browser/#setup). The details generated for the new application will need to be added to the `next.config.js` file and replace the default Marshmallow values.

## Testing and Quality

> "Focus on the user and all else will follow." -Google

This project uses a few tools to help ensure the quality of the application. Some run on the CI/CD pipeline and others are run locally both using the CLI and git hooks with Husky.

### Testing Framework

This will be implemented using Jest and Puppeteer.

### Alex

This project uses [Alex](https://alexjs.com/) as an assistant to detect potentially non-inclusive language. It runs as a pre-commit hook using Husky on compiled HTML files but you can also run it locally using the Alex CLI.

### CI/CD

This template uses GitHub actions for CI/CD actions. This repository is configured to allow static-only deployments to Google Firebase. You can configure the CI/CD pipeline to run additional tests and deploy to other environments as well.

### Security Scanning

This repository uses [Snyk](https://app.snyk.io/) for security screening of applications. You can login to the portal to add your application repoistor(y/ies) into the screening tool. You can also run the Snyk CLI locally to test your application. Please see the [Snyk CLI documentation](https://support.snyk.io/hc/en-us/articles/360003812538-Test-your-projects-with-the-Snyk-CLI) for more information.

## Deployment

This  repository is automatically deployed to [this Firebase Hosting site](https://jesmok.xyz). The setup script will configure using the Firebase CLI the hosting environment for your application.
