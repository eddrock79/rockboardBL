# rockboardBL — The Banshee Labyrinth

Rockboard song-request and voting system for **The Banshee Labyrinth**, Edinburgh.

Adapted from rockboardBR (The Black Rose). Portrait-optimised for 32" monitor.

## Quick links (once deployed)
- Display board: `https://rockboardbl.hauntedpubs.co.uk/board.html?v=YOUR_BOARD_TOKEN`
- Customer request page: `https://rockboardbl.hauntedpubs.co.uk/`
- Staff panel: `https://rockboardbl.hauntedpubs.co.uk/staff.html`

## What's different from BR
- Purple/magenta Banshee Labyrinth colour scheme
- Portrait layout on board.html (optimised for 32" rotated monitor)
- Firebase collection prefix: `bl_` (separate from `br_` collections)
- Cloudflare Worker: `rockboard-bl`
- Domain: `rockboardbl.hauntedpubs.co.uk`
- AI ticker quotes reference The Banshee Labyrinth / Edinburgh dungeon atmosphere
- Gothic display font (UnifrakturMaguntia) for venue name

## PLACEHOLDERS TO FILL (see TODO.md)
- [ ] Banshee logo PNG → `assets/banshee-logo.png`
- [ ] Spotify credentials (Banshee account)
- [ ] Last.fm username (Banshee account)
- [ ] YouTube API key (BL-restricted)
- [ ] Board access token (replace `BL_BOARD_TOKEN_PLACEHOLDER`)
- [ ] Staff PIN
- [ ] Cloudflare Worker deployed
- [ ] CNAME DNS record in Cloudflare
