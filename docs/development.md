# Development

This project is managed as a monorepo using Yarn's workspaces.

## Packages

## `arcade-back`

Back-end API for the front-end. Once ROM files and associated assets (e.g.
images and video) have been prepared using a particular convention, the back-end
provides a way for the front-end to query and run ROMs.

**Stack:**

- Koa
- Node.js
- TypeScript

## `arcade-front`

Front-end UI for the app. Runs as a browser-based app but integrates with both
customized keyboard and gamepad controls (gamepad controls being used in the
production cabinet).

**Stack:**

- SCSS
- TypeScript
- Vue

## :information_source: Other

> :egg: Names pending

- **morg**:
  - Utility for naming ROM files and associated assets
  - Outputs a set of ROM files based on filters:
    - Beta status
    - Hack status
    - Region
    - Version (e.g. earliest, latest)
