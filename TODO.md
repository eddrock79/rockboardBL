# rockboardBL — TODO LIST
# Everything you need to complete before going live

## 🔴 MUST DO BEFORE LAUNCH

### 1. Banshee logo
- [ ] Add `assets/banshee-logo.png` to the repo
  (Used in: board.html activation screen, header logo, index.html top bar)
  - Should be high-res PNG with transparency
  - Recommend: white/light version for dark background

### 2. Staff PIN
- [ ] Open `config.js` and change `staffPin: "CHANGE_ME"` to your actual PIN
  - Do NOT use 1234
  - Same PIN used on staff.html and board.html reset

### 3. Board access token
- [ ] Generate a random string (e.g. visit https://www.uuidgenerator.net/)
- [ ] In `board.html`, line 7: replace `BL_BOARD_TOKEN_PLACEHOLDER` with your token
- [ ] Your board URL will be: `https://rockboardbl.hauntedpubs.co.uk/board.html?v=YOUR_TOKEN`
- [ ] Staff will need this URL bookmarked on the display PC

### 4. Spotify account (Banshee)
You need a separate Spotify account for The Banshee Labyrinth:
- [ ] Create new Spotify account (or use existing Banshee one)
  → email suggestion: rockboardBL@hauntedpubs.co.uk
- [ ] Spotify Premium required for the queue/now-playing features
- [ ] Go to https://developer.spotify.com/dashboard
- [ ] Create a new app called "RockboardBL"
- [ ] Set redirect URI: `https://rockboardbl.hauntedpubs.co.uk/callback.html`
  AND: `https://eddrock79.github.io/rockboardBL/callback.html`
- [ ] Note down: CLIENT_ID and CLIENT_SECRET
- [ ] Create a new playlist on the Banshee Spotify account (the queue list)
  - Grab playlist ID from the URL: spotify.com/playlist/XXXXXXXX
  - [ ] Update `config.js` → `spotify_playlist_id: "XXXXXXXX"`
- [ ] Generate OAuth refresh token (same process as you did for BR):
  Authorise via: `https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=https://rockboardbl.hauntedpubs.co.uk/callback.html&scope=user-read-playback-state+user-modify-playback-state+playlist-modify-public+playlist-modify-private`

### 5. Cloudflare Worker — deploy "rockboard-bl"
- [ ] Go to https://dash.cloudflare.com → Workers & Pages
- [ ] Create new Worker named `rockboard-bl`
- [ ] Paste content of `cloudflare-worker.js`
- [ ] Set environment variables (Settings → Variables):
  - `SPOTIFY_CLIENT_ID`     → Banshee Spotify app client ID
  - `SPOTIFY_CLIENT_SECRET` → Banshee Spotify app client secret
  - `SPOTIFY_REFRESH_TOKEN` → Generated OAuth refresh token (above)
  - `SPOTIFY_PLAYLIST_ID`   → Banshee queue playlist ID
  - `ANTHROPIC_API_KEY`     → Same key you already use (copy from rockboard-br worker)
- [ ] Test: visit `https://rockboard-bl.eddrock79.workers.dev/ping` — should return `{"ok":true,...}`
- [ ] Update `config.js` → `spotify_worker_url: "https://rockboard-bl.eddrock79.workers.dev"`

### 6. Last.fm account (for Now Playing display)
- [ ] Create a Last.fm account for The Banshee (e.g. `bansheelabyrinthrb`)
- [ ] Connect it to whatever music source Banshee uses
  OR: if they use the same Spotify, Last.fm will scrobble from there
- [ ] Update `config.js` → `lastfm_user: "YOUR_LASTFM_USER"`
  (the API key `78658e952901ff5d096dc83873d22049` works for any account)

### 7. YouTube API key
- [ ] Go to https://console.cloud.google.com
- [ ] Create a new project or use existing
- [ ] Enable: YouTube Data API v3
- [ ] Create an API key → restrict it to HTTP referrers:
  - `rockboardbl.hauntedpubs.co.uk/*`
  - `eddrock79.github.io/rockboardBL/*`
- [ ] Update `config.js` → `youtube_key: "YOUR_KEY_HERE"`

### 8. Create GitHub repo: rockboardBL
- [ ] Go to https://github.com/eddrock79
- [ ] Create new repository: `rockboardBL` (public, for GitHub Pages)
- [ ] Upload all files from this folder
- [ ] Enable GitHub Pages: Settings → Pages → Branch: main, folder: / (root)
- [ ] Note the GitHub Pages URL: `https://eddrock79.github.io/rockboardBL/`

### 9. Cloudflare DNS + custom domain
- [ ] Go to Cloudflare dashboard → your hauntedpubs.co.uk zone
- [ ] Add CNAME record:
  Name: `rockboardbl`
  Target: `eddrock79.github.io`
  Proxy: ✅ (orange cloud)
- [ ] In GitHub repo Settings → Pages → Custom domain:
  Enter `rockboardbl.hauntedpubs.co.uk`
- [ ] CNAME file already contains: `rockboardbl.hauntedpubs.co.uk` ✅
- [ ] Wait ~5 min for SSL cert to provision

### 10. Firebase Firestore — add BL indexes
The BL uses `bl_tracks`, `bl_played`, `bl_settings`, `bl_alltime` collections.
On first use, Firestore may prompt you to create an index. If so:
- [ ] Follow the link in the browser console error
  (usually: orderBy uniqueVoters DESC on bl_tracks)
- [ ] Firebase security rules — consider tightening (same as BR)

---

## 🟡 NICE TO HAVE (not blocking launch)

- [ ] Change the fallback background image in board.html (line ~100)
  Currently: Unsplash dark concert photo
  Better: An actual Banshee Labyrinth interior shot or atmospheric dungeon image
  `background-image: url('assets/banshee-bg.jpg');`
  Add `assets/banshee-bg.jpg` to repo (recommend 1440x2560 for portrait)

- [ ] Set tighter Firebase security rules (prevent public writes)
  Same process you followed for BR

- [ ] Add rate limiting to rockboard-bl worker (3 requests/IP/hour)
  Copy the rate limiting code from rockboard-br if you added it

- [ ] Test with 50+ simultaneous users before a busy night

- [ ] Consider adding a second instance (rockboardBL2) for different rooms
  Duplicate the whole repo, update collection prefix to `bl2_*`

---

## ✅ ALREADY DONE
- [x] All files cloned from rockboardBR and updated for Banshee
- [x] Purple/magenta colour scheme applied throughout
- [x] Firebase collection names changed to `bl_*` (separate from `br_*`)
- [x] board.html rebuilt for portrait layout (32" monitor, rotated)
- [x] Cloudflare worker updated for `rockboard-bl`
- [x] AI ticker quotes reference Banshee Labyrinth / Edinburgh atmosphere
- [x] Gothic display font for venue name
- [x] CNAME set to `rockboardbl.hauntedpubs.co.uk`
- [x] manifest.json updated with Banshee purple theme
- [x] All file cross-references updated (bl_ prefixes, worker URLs, etc.)

