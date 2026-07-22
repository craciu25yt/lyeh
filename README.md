# Lyeh — Enchance your Genius experience

Lyeh (or Genie 🧞) is a project that aims to improve the overall user experience in [Genius](https://genius.com/).

> [!NOTE]
> Lyeh is already considered stable. Note: few Transcriber and Staff only menus unstyled. If you find any, please reach me out

## Preview 
https://github.com/user-attachments/assets/d2f83f8d-b87f-432d-a485-f62a472b6938




<br>

## Features
- Custom Genius UI, based on Glass and Dark Mode (further themes coming soon)
- YouTube Support and Synced Lyrics
- Customizable settings
- User contribution heatmap


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


## Hotkeys

Lyeh's hotkeys (by the moment)
| Key      | Action |
| -------- | -------- | 
| Control + I           | Places an italic tag (if text is selected, will be wrapped)     | 
| Control + B           | Places an bold tag (if text is selected, will be wrapped)       | 
| Control + D           | Duplicates the current line (if text is selected, the whole selection will be dupped)       | 
| Control + Shift + K   | Deletes the current line (if text is selected, the whole selection will be deleted)         | 


## How to build

Requirements: any js executor, npm & git

1. Clone the repo with `git clone https://github.com/craciu25yt/lyeh.git && cd lyeh`
2. Download the dependencies `pnpm ci`
3. Build the project `pnpm build` 
4. And just go to `./dist/` to see the build!

If you want to run the live server just run `pnpm dev`. An automatic popup will show to install to your preferred user script interpreter
