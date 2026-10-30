// =====================================================================
//  config.js: EVERYTHING that is specific to this surprise lives here.
//  Edit text, photo paths, theme colors and switches. Do NOT edit
//  script.js or style.css for normal changes.
//
//  Rules for editing:
//   - Keep every key and every text value inside "double quotes".
//   - No comma after the last item in a list or block.
//   - A line that starts with // is a comment and is safe to add or delete.
//   - To switch a screen off, set its flag under "modules" to false.
// =====================================================================
window.SITE_CONFIG = {

  "schemaVersion": 1,
  "slug": "our-special-surprise",
  "occasion": "birthday",
  "package": "premium",
  "pageTitle": "A Little Surprise for You, Aneesa",

  // Who it is for and who it is from. "nickname" (if set) is used on the envelope.
  "recipient": { "name": "Aneesa Saad", "nickname": "Aneesa", "age": 17 },
  "sender": { "name": "Saad Sadi" },

  // PRIVACY (new, optional). true = the opening envelope screen does NOT show the
  // recipient's name; it shows "pageTitle" instead. The name first appears on the
  // letter, after the passcode. Set to false to show welcome.headline as written.
  // Note: this only hides the name from the screen. Anyone who views the page
  // source can still read it, because everything runs in the visitor's browser.
  "privacy": { "hideNameUntilUnlock": true },

  // THEME: midnight, burgundy, plum, rose-gold and champagne. Change a hex color to restyle.
  "theme": {
    "preset": "midnight-rose-gold",
    "resolved": {
      "preset": "midnight-rose-gold",
      "colors": {
        "bg": "#12060b",
        "surface": "#231019",
        "text": "#f6e9dc",
        "muted": "#cdb0a6",
        "accent": "#e3b08f",
        "accent2": "#8c2a45",
        "line": "#4b2533",
        "onAccent": "#2a0f18"
      },
      "fonts": {
        "heading": "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif",
        "body": "'Segoe UI', system-ui, -apple-system, Roboto, sans-serif",
        "script": "'Segoe Script', 'Brush Script MT', cursive"
      },
      // decor is now drawn by the ambient background (dust, stars, petals, a few hearts).
      "decor": "petals",
      // motion: "gentle", "playful" or "minimal"
      "motion": "gentle",
      "confetti": ["#e3b08f", "#f6e3bf", "#c44662", "#fff1d0"]
    }
  },

  // SCREEN ORDER is fixed: welcome, passcode, letter, cake, gallery, timeline, countdown, final.
  // Set a flag to false to remove that screen.
  "modules": {
    "welcome": true,
    "passcode": true,
    "letter": true,
    "cake": true,
    "gallery": true,
    "timeline": false,
    "countdown": false,
    "final": true
  },

  "welcome": {
    "headline": "Happy Birthday, Abira Aiman",
    "subline": "",
    "buttonLabel": "Open"
  },

  // PLAYFUL gate only. The answer is readable by anyone who views the page source.
  // Never put private information behind it. Set "passcode" to false under modules to skip it.
  "passcode": {
    "heading": "A little secret first\u2026",
    "prompt": "Who volunteered to tolerate all your moods forever? \uD83E\uDD23\u2764\uFE0F",
    "placeholder": "Tell me your guess, Madam\u2026",
    "buttonLabel": "Let's find out \u2661",
    "successMessage": "Hehe\u2026 you might know me better than anyone, but there's still one little thing I haven't told you yet. \u2764\uFE0F",
    "emptyMessage": "Take a guess, sweetheart\u2026 any guess will do.",
    "wrongMessage": "Hehe\u2026 not quite, try again, Madam.",
    "continueLabel": "Continue",
    // true = the answer must contain one of the words in "answers". false = any answer works.
    "requireAnswer": true,
    "hint": "",
    "answers": ["saad", "sadi"],
    "caseSensitive": false
  },

  "letter": {
    "title": "My Dear Aneesa, ❤️",
    "paragraphs": [
      "In just a little time, you've become someone who makes my ordinary days feel a little more special.",
      "There are things I feel that I don't always know how to explain, and maybe there are things about your heart that I'm still learning to understand. But one thing I know is that I'm genuinely happy to have you in my life.",
      "I don't know what the future holds for us, but I'd love to discover it with you, one little moment at a time. No pressure, no perfect promises—just honesty, care, and the chance to make something beautiful together."
    ],
    "signoff": "With love,",
    "signature": "Saad Sadi ❤️"
  },

  // CAKE: candles from 1 to 12.
  "cake": {
    "candles": 12,
    "wishPrompt": "Blow out the candles",
    "blowLabel": "",
    "cutLabel": "Cut the cake",
    "afterCutMessage": ""
  },

  // GALLERY: put image files in the photos folder, then list them here.
  // "file" is the path from index.html. "caption" appears under the photo.
  // Optional "alt" describes the picture for screen readers.
  
  "gallery": {
    "title": "Our little museum",
    "photos": [
      { "file": "photos/photo1.jpg", "caption": "" },
      { "file": "photos/photo2.jpg", "caption": "" },
      { "file": "photos/photo3.jpg", "caption": "" },
      { "file": "photos/photo4.jpg", "caption": "" } 
    ]  
  },
  // FINAL MESSAGE. Optional "revealLabel" and "revealText" add a button that shows an
  // extra message. They are not set here, so there is no extra button; add them
  // yourself only with your own words. Leaving "revealText" out is fully supported.
    "final": {
    "headline": "A Little Something From My Heart, Aneesa \u2764\uFE0F",
    "paragraphs": [
      "I don't know exactly where this little journey will take us, but I'm glad it brought me to you.",
      "These past few months have given me someone new to care about, someone I want to understand better, and someone I'd like to keep discovering, one day at a time.",
      "Whatever comes next, I'm happy our story began. \u2764\uFE0F"
    ]
  },

  // AUDIO (new, optional). Leave "file" empty for no sound. If you add your own
  // royalty-free or personally owned audio file (for example "audio/song.mp3"), a visible
  // sound button appears. Nothing ever plays until the visitor presses it.
  "audio": { "file": "audio/song.mp3.mpeg", "onLabel": "Music on", "offLabel": "Music off" }
};
