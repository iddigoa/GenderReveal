# Gender Reveal Digital Invitation - GitHub Publishing Guide

## 📋 Overview
This guide will help you publish your beautiful gender reveal invitation website to GitHub and make it live on GitHub Pages for free.

## 🚀 Quick Start

### Step 1: Create a GitHub Account
If you don't have one already:
1. Visit [github.com](https://github.com)
2. Click "Sign up" and create your account
3. Verify your email address

### Step 2: Create a New Repository
1. Click the "+" button in the top right corner
2. Select "New repository"
3. Name your repository (e.g., `gender-reveal-invitation`)
4. Make sure it's set to "Public"
5. Check "Add a README file"
6. Click "Create repository"

### Step 3: Upload Your Website Files
You have two options:

#### Option A: Using GitHub's Web Interface (Easier)
1. Click "uploading an existing file" or "Add file" > "Upload files"
2. Drag and drop these files from your computer:
   - `index.html`
   - `style.css` 
   - `app.js`
3. Add a commit message like "Add gender reveal invitation website"
4. Click "Commit changes"

#### Option B: Using Git Command Line
```bash
# Clone your repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME

# Add your files to the folder
# Copy index.html, style.css, and app.js to this folder

# Add and commit the files
git add .
git commit -m "Add gender reveal invitation website"
git push origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### Step 5: Access Your Live Website
- Your website will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`
- It may take a few minutes to go live
- GitHub will show you the URL in the Pages settings

## 🎨 Customizing Your Invitation

### Personalizing the Content
Edit the `index.html` file to update:

#### Parent Names
```html
<div class="announcement__names">Your Names Here</div>
```

#### Event Details
```html
<div class="details__info">
    <div class="detail__item">
        <h4>Date</h4>
        <p>Your Date Here</p>
    </div>
    <div class="detail__item">
        <h4>Time</h4>
        <p>Your Time Here</p>
    </div>
    <div class="detail__item">
        <h4>Location</h4>
        <p>Your Venue Name<br>Your Address Here</p>
    </div>
</div>
```

#### Countdown Timer
Update the date in `app.js`:
```javascript
const eventDate = new Date('July 15, 2025 14:00:00').getTime();
```
Change to your event date and time.

### Adding Your Photos
1. Create an `images` folder in your repository
2. Upload your photos
3. Update the image sources in `index.html`:
```html
<img src="images/your-photo.jpg" alt="Description">
```

### Color Customization
Edit the CSS variables in `style.css`:
```css
:root {
  --color-primary: #your-color-here;
  --color-secondary: #your-color-here;
  /* etc. */
}
```

## 📱 Features Included

### ✅ Responsive Design
- Looks perfect on desktop, tablet, and mobile
- Optimized for all screen sizes

### ✅ Interactive Elements
- Countdown timer until your event
- RSVP form with boy/girl prediction
- Smooth scrolling animations
- Hover effects and transitions

### ✅ Professional Styling
- Elegant typography with Google Fonts
- Soft pastel color palette
- Wedding invitation inspired layout
- Modern CSS animations

### ✅ Easy to Customize
- Well-organized code structure
- Clear comments for easy editing
- Sample content included
- Flexible design system

## 🛠 Technical Details

### File Structure
```
gender-reveal-invitation/
├── index.html          # Main webpage
├── style.css           # All styling and colors
├── app.js             # Interactive functionality
└── README.md          # This guide
```

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all devices

### Performance
- Lightweight and fast loading
- Optimized CSS and JavaScript
- Google Fonts for typography
- Clean, semantic HTML

## 🎯 Tips for Success

### 1. Test Your Website
- Always preview your changes locally or on GitHub Pages
- Test on different devices and browsers
- Check that all links and forms work properly

### 2. Share Your Invitation
- Send the GitHub Pages URL to your guests
- Post on social media
- Include in email invitations

### 3. Keep It Updated
- Update RSVP responses if needed
- Add photos as your pregnancy progresses
- Keep countdown timer accurate

### 4. Backup Your Work
- GitHub automatically backs up your code
- Download a copy of your files as backup
- Consider creating different versions for different occasions

## 🚨 Troubleshooting

### Website Not Loading?
- Check that GitHub Pages is enabled in repository Settings
- Ensure `index.html` is in the root folder
- Wait a few minutes for changes to deploy

### Styling Issues?
- Verify `style.css` is in the same folder as `index.html`
- Check browser developer tools for error messages
- Clear browser cache and refresh

### JavaScript Not Working?
- Ensure `app.js` is linked correctly in `index.html`
- Check browser console for JavaScript errors
- Verify countdown date format is correct

## 📞 Support

If you need help:
1. Check GitHub's official Pages documentation
2. Review the troubleshooting section above
3. Ask friends or family with coding experience
4. Search for solutions on Stack Overflow

## 🎉 Congratulations!

You now have a beautiful, professional gender reveal invitation website that's:
- ✅ Free to host on GitHub Pages
- ✅ Easy to share with friends and family
- ✅ Mobile-friendly and responsive
- ✅ Fully customizable to your style
- ✅ Professional quality design

Enjoy your gender reveal celebration! 💕👶

---

*This website template was designed with love for expecting parents who want to share their joy in a beautiful, modern way.*
