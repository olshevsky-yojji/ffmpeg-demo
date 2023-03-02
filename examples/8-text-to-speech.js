const gtts = require('gtts');
const { resolve } = require('path');

const text = `Hello there`;
const output = resolve(__dirname, '../outputs/gtts.mp3')

// USED ONLY FOR DEMO HOW ADD AUDIO TO VIDEO
const speech = new gtts(text, 'en-us', true);
speech.save(output, () => console.log("Done!"));
