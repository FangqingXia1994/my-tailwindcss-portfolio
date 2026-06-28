# Fangqing Xia — Personal Portfolio

Personal portfolio website built with React and TailwindCSS.

🌐 **Live site:** [fangqingxia.com](https://fangqingxia.com)

---

## Tech Stack

- React 18
- TailwindCSS 3
- Framer Motion
- React Router v6
- GitHub Pages

---

## Local Setup

### 1. Install dependencies

```bash
yarn install
```

### 2. Start the CSS watcher (Terminal 1)

```bash
yarn watch:css
```

### 3. Start the dev server (Terminal 2)

```bash
yarn start
```

App runs at `http://localhost:3000`

---

## Build & Deploy to GitHub Pages

### Step 1 — Build

```bash
yarn run build
# or
npm run build
```

> **Why build before deploying?**
> The build step optimizes your code — it reduces bundle size, removes unused CSS, and strips out development-only React internals. Your site will load faster in production.

#### 🐛 OpenSSL Error

If you see this error:

```
opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ]
reason: 'unsupported'
code: 'ERR_OSSL_EVP_UNSUPPORTED'
```

Run this in your terminal before building:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

This is already baked into the `start` and `build` scripts in `package.json` via `--openssl-legacy-provider`, but if you're running commands manually you may need to set it.

---

### Step 2 — Preview locally

```bash
npm install -g serve
serve -s build
```

Opens at `http://localhost:3000` (or the port shown in terminal).

---

### Step 3 — Deploy

```bash
npm run deploy
# or
yarn run deploy
```

This runs `predeploy` (build) automatically, then pushes the `build/` folder to the `gh-pages` branch.

> **First deploy takes longer.** You can track deployment history at:
> `https://github.com/FangqingXia1994/tailwindcss-portfolio/deployments`

#### 🐛 `fatal: A branch named 'gh-pages' already exists`

Manually delete the cache folder:

```bash
rm -rf node_modules/.cache/gh-pages
```

> Do **not** delete `node_modules/gh-pages` — that would require reinstalling the package.

Then run deploy again.

---

### Step 4 — GitHub Settings

1. Go to your repo → **Settings → Pages**
2. Set source to **Deploy from `gh-pages` branch**
3. Set **Custom Domain** to `fangqingxia.com`

---

## Custom Domain DNS Setup

Add the following records in your domain registrar's DNS settings:

### A Records (Apex Domain)

| Type | Name | Value           |
|------|------|-----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

### AAAA Records (IPv6, if supported)

| Type | Name | Value                   |
|------|------|-------------------------|
| AAAA | @    | 2606:50c0:8000::153     |
| AAAA | @    | 2606:50c0:8001::153     |
| AAAA | @    | 2606:50c0:8002::153     |
| AAAA | @    | 2606:50c0:8003::153     |

### CNAME Record (WWW Subdomain)

| Type  | Name | Value                            |
|-------|------|----------------------------------|
| CNAME | www  | fangqingxia1994.github.io        |

Once DNS is configured, GitHub Pages will verify it automatically. You should see "DNS check successful" in the Pages settings.

---

## Subsequent Deploys

For every update after the first deploy:

```bash
npm run deploy
```

After a successful deploy, go to **Settings → Pages → Custom Domain** and re-enter `fangqingxia.com` if it was cleared.

> If you hit the OpenSSL error during deploy, run:
> ```bash
> export NODE_OPTIONS=--openssl-legacy-provider
> ```
> Then run deploy again.

---

## CNAME File

A `public/CNAME` file is included in this repo containing `fangqingxia.com`. This ensures the custom domain is preserved on every deploy and doesn't get wiped when `gh-pages` overwrites the branch.
