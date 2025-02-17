# 🕰️ Digital Clock with Dynamic Backgrounds

---

## 📌 Description
This clock updates every second and dynamically changes the **background image and text color** depending on the time:  
🌅 **Morning (6 AM - 9 AM)** – Bright and refreshing morning background  
☀️ **Afternoon (9 AM - 6 PM)** – Clear daytime background  
🌆 **Evening (6 PM - 10 PM)** – Warm sunset colors  
🌙 **Night (10 PM - 6 AM)** – Dark theme for nighttime  

Users can also manually override the background using buttons, and reset it back to the **current time-based theme**.  

---

## ✨ Features
🔹 **Real-Time Clock** – Updates every second dynamically  
🔹 **Time-Based Background Change** – Automatically switches backgrounds  
🔹 **Interactive Manual Controls** – Change background with buttons  
🔹 **Smooth UI Design** – Centered, minimalist clock with a semi-transparent effect  
🔹 **Dynamic Text Color** – Adjusts text color for visibility  
🔹 **Lightweight & Responsive** – Works on all modern devices  

---

## 🛠️ Technical Details
### 🔹 **Clock Functionality (`index.js`)**
- Uses `setInterval(updateClock, 1000);` to update time every second  
- Formats time properly using `.padStart(2, '0')`  

### 🔹 **Background Image Switcher**
- Automatically changes background based on `getHours()`
- Manually switches background via button clicks with `addEventListener()`

### 🔹 **CSS Styling (`style.css`)**
- `backdrop-filter: blur(3px);` adds a subtle background blur  
- Uses **flexbox** for perfect centering of the clock  

### 🔹 **HTML Structure (`index.html`)**
- Minimalist design with **clock display** and **interactive buttons**  
- Buttons use small images to represent each time of day  

---

## 🚀 How to Run
### 🔹 Open the `index.html` file in your browser:
```sh
open index.html
```

---

## 🎮 Controls
🎯 **Wait for Automatic Background Change** – Happens based on real-time clock  
🎯 **Click a Button** – Manually switch backgrounds:  
   - 🌅 Morning  
   - ☀️ Afternoon  
   - 🌆 Evening  
   - 🌙 Night  
🎯 **Reset Button** – Restores the background based on the current time  

---


---

## 📌 License
This project is open-source. Feel free to use and modify it as needed.
