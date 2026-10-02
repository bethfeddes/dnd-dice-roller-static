# D&D Dice Roller
 
**Author:** Bethany Feddes
 
A web application for rolling a d20 for D&D or other tabletop RPGs. The page is a static website hosted on Azure, and every roll comes from a separate Node.js server through a RESTful API. The page does not generate any random numbers itself.
 
- **Live site:** [Web Dice Roller](https://salmon-mud-0aaca3410.6.azurestaticapps.net/)
- **Server repository:** [Here](https://github.com/bethfeddes/dnd-dice-roller-node-bgf)
## Features
 
- Rolls a d20, with the number provided by the server's `/api/roll` API
- Wakes up the server when the page loads by asynchronously calling its `/api/ping` API, so the first roll is fast even if the server was idle
- Demonstrates a CORS failure: the **Test CORS Failure** button calls the server's `/api/no-cors` route, which sends no CORS header, so the browser blocks the response
- Press Enter to roll (if a button is focused, Enter activates that button instead)
## How to Run
 
This is a static website (HTML, CSS, and JavaScript only), so there is no compile or build step. The dice rolls require the Dice Roller API server to be running.
 
**Live version:** open the [hosted site](https://salmon-mud-0aaca3410.6.azurestaticapps.net/). It calls the server hosted on Azure App Service.
 
**Locally:**
 
1. Clone this repository and open the folder in VS Code.
2. Open `index.html` with the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, so the page is served at `http://localhost:5500`.
3. Click **Roll Dice** or press Enter.
The page must be served from `http://localhost:5500` (not opened by double-clicking the file, and not at `127.0.0.1`). The server only accepts requests from the origins listed in its CORS settings, and a page opened directly from the file system has no valid origin, so every request would fail.
 
By default, `API_URL` in `script.js` points to the server hosted on Azure. To use a server running locally instead, change it to `http://localhost:3000` and follow the run instructions in the server repository.
 
## Files
 
- `index.html`: page structure and content, including the CORS test section
- `style.css`: styling and layout
- `script.js`: server wake-up call, roll requests, CORS failure test, and Enter key handling
- `.github/workflows/`: GitHub Actions workflow created by Azure Static Web Apps to deploy the site
## Credits
 
- [Bro Code's dice roller tutorial](https://www.youtube.com/watch?v=PXilNmL9U80): referenced for assistance during development of the original static dice roller.
- [Claude AI](https://claude.ai) (Anthropic): used as a learning tool and to assist with development, including fixing bugs in the `fetch` calls and CORS failure demonstration, explanations of client/server architecture and CORS, and writing this README. All AI-assisted code was reviewed and tested by the author. Details are noted at the top of each source file.
