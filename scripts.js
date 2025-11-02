(function startCountdown(){
  // Reverted to the original date from the task PDF
  const targetLocal = new Date('2025-11-13T09:00:00'); 

  function update(){
    const now = new Date().getTime();
    const target = targetLocal.getTime();
    const diff = Math.max(0, target - now);
    
    const d = Math.floor(diff / (1000*60*60*24));
    const h = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((diff % (1000*60*60)) / (1000*60));
    const s = Math.floor((diff % (1Opening the network tab in my browser, I can see that the site is trying to load resources but is failing. Specifically, there are 404 (Not Found) errors for `style.css`, `script.js`, and all the images inside the `Data` folder.

This confirms my earlier suspicion: **the paths in your code do not match the file structure in your GitHub repository.**

The browser is looking for files at:
* `https://aryankumarrai.github.io/style.css` (This is wrong)
* `https://aryankumarrai.github.io/Data/VIT_Logo.png` (This is wrong)

But your site is hosted at `https://aryankumarrai.github.io/Landing-Page/`.

This means the browser *should* be looking for files at:
* `https://aryankumarrai.github.io/Landing-Page/style.css`
* `https://aryankumarrai.github.io/Landing-Page/Data/VIT_Logo.png`

The fix is to tell the `index.html` file to look for the files *relative to its current location*.

I've updated your `index.html` to use relative paths (e.g., `./style.css` instead of `/style.css`) and `style.css` to do the same for the background image. This should finally resolve the 404 errors.

### **The Fix: Updated `index.html`**

