# Lyeh — Enchance your Genius experience

Lyeh (or Genie 🧞) is a project that aims to improve the overall user experience in [Genius](https://genius.com/).

> [!NOTE]
> This project is currently WiP and in a very early stage. Expect bugs and issues

## Preview 
https://github.com/user-attachments/assets/c93ba9b7-adee-4753-8725-516c803908a7

<br>

## Features
- Custom Genius UI, based on Glass and Dark Mode (further themes coming soon)
- Spotify Support and Synced Lyrics <sup>1</sup>
- Customizable settings
- User contribution heatmap

<sup>1 Spotify Premium is required</sup> 

Note: Suggestions are welcome! You can open an [issue](https://github.com/craciu25yt/lyeh/issues) or contact me through Discord `craciu25yt` (you can also tag me in the official Genius Discord)

<br>

## How to install?
To run Lyeh you need TamperMonkey, ViolentMonkey, or any fork of it.
Then you simply click [here](https://craciu25yt.github.io/lyeh/genie.user.js) to add it!


> [!WARNING]
> If you have any issues (such as auto-updater with the old url), please clear the executor's cache. For example in ViolentMonkey is:
> Extension settings -> Settings Vacuum Database
>

<br>

## How to build

Requirements: any js executor, npm & git

1. Clone the repo with `git clone https://github.com/craciu25yt/lyeh.git && cd lyeh`
2. Download the dependencies `npm ci`
3. Build the project `npm run build` 
4. And just go to `./dist/` to see the build!

If you want to run the live server just run `npm run dev`. An automatic popup will show to install to your preferred user script interpreter
