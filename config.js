// ============================================================
//  ROCKBOARD CONFIG — The Banshee Labyrinth (BL)
//  Duplicate of rockboardBR adapted for Banshee Labyrinth
// ============================================================

const VENUE_CONFIG = {

  // ── VENUE IDENTITY ──────────────────────────────────────
  venueName:    "THE BANSHEE LABYRINTH",
  venueSub:     "▶ ROCKBOARD · VOTE FOR YOUR TRACK",
  accent:       "#6600cc",          // Banshee deep purple
  accentAlt:    "#ff00ff",          // Neon magenta highlight
  accentGlow:   "#8800ff",          // Purple glow
  logo:         "assets/banshee-logo.png",  // ← PLACEHOLDER: add Banshee logo PNG

  // ── LAST.FM (Now Playing display) ────────────────────────
  // PLACEHOLDER: Create/provide Last.fm account for Banshee
  lastfm_user:  "BANSHEE_LASTFM_USER",       // ← TO FILL: e.g. "bansheelabyrinthrb"
  lastfm_key:   "78658e952901ff5d096dc83873d22049",  // same key works

  // ── YOUTUBE (Music video background) ─────────────────────
  // PLACEHOLDER: Create a new YouTube API key restricted to rockboardbl domain
  youtube_key:  "BANSHEE_YOUTUBE_API_KEY",   // ← TO FILL: new key from console.cloud.google.com

  // ── SPOTIFY (Auto-queue via Cloudflare Worker) ───────────
  // PLACEHOLDER: Deploy new Cloudflare Worker "rockboard-bl"
  spotify_worker_url:    "https://rockboard-bl.eddrock79.workers.dev",  // ← TO FILL after deploy
  // PLACEHOLDER: Create Banshee Spotify playlist and grab ID from URL
  spotify_playlist_id:   "BANSHEE_SPOTIFY_PLAYLIST_ID",                 // ← TO FILL

  // ── VOTING RULES ─────────────────────────────────────────
  maxRequestsPerHour: 40,
  maxVotesPerHour:   100,
  maxLeaderboard:     10,

  // ── T-SHIRT COMPETITION ──────────────────────────────────
  tshirtMode:   true,
  tshirtText:   "MOST UNIQUE VOTES WINS A T-SHIRT",

  // ── STAFF ────────────────────────────────────────────────
  staffPin:     "CHANGE_ME",  // ← TO FILL: set your staff PIN (NOT 1234)

  // ── FIREBASE ─────────────────────────────────────────────
  // Uses same Firebase project as BR but with bl_ collection prefix
  firebase: {
    apiKey:            "AIzaSyCBV3mususv2A_ss0vEiUDxA6PBGCOLCgc",
    authDomain:        "rockboard-2b240.firebaseapp.com",
    projectId:         "rockboard-2b240",
    storageBucket:     "rockboard-2b240.firebasestorage.app",
    messagingSenderId: "875047215481",
    appId:             "1:875047215481:web:89616e2e219aa6396d0fa8",
  },

  // ── NIGHT RESET ──────────────────────────────────────────
  nightResetTime: "03:00",

  // ── DISPLAY ──────────────────────────────────────────────
  // Banshee board is PORTRAIT on a 32" monitor (2560x1440 rotated = 1440x2560)
  // board.html is optimised for portrait orientation
  portraitMode: true,

};
