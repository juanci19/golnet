# RELÁMPAGO LEAGUE 2025 – GOLNET13

## Overview
A simple and elegant football league website for RELÁMPAGO LEAGUE 2025 – GOLNET13. Built with pure HTML, CSS, and JavaScript (no frameworks) to display league standings, statistics, and fixtures.

## Project Structure
```
├── index.html          # Main HTML structure
├── style.css           # Styling with black/purple theme
├── script.js           # JavaScript animations and interactions
└── attached_assets/    # Stock images folder
    └── stock_images/
        └── football_soccer_play_26ca3a3d.jpg  # Background image
```

## Features
- **Header**: Welcome message and league title with glowing purple effects
- **League Standings Table**: Complete standings with team logos (40x40px circular), matches played, wins, draws, losses, goals for/against, goal difference, and points
- **Statistics Tables**: 
  - Top Scorers (Pichichi)
  - Yellow Cards tracking
  - Red Cards tracking
- **Fixtures Section**: Round 1 matches with times displayed as interactive cards
- **Social Footer**: Instagram and YouTube links with hover effects
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Animations**: Fade-in effects, hover animations, and smooth transitions

## Design
- **Color Scheme**: Black background with purple (#8b00ff) accents and white text
- **Background**: Football player action image with gradient overlay
- **Typography**: Clean, modern fonts with text shadows for depth
- **Interactive Elements**: Hover effects on tables, cards, and social links

## Teams
1. AC MILAN
2. ALCALDE DIAZ
3. ATLETICUMEN
4. DEPOR. SMARIA
5. FC BELLA VISTA
6. FENIX FC
7. NIUPI FC
8. SAN VICENTE FC
9. SAN MIGUELITO
10. WESTCOAST FC

## Round 1 Fixtures - Saturday, November 8
1. San Miguelito vs West Coast - 5:00 PM
2. Bella Vista vs Atleticumen - 5:45 PM
3. AC Milan vs San Vicente - 6:30 PM
4. Alcalde Díaz vs Samaria - 7:15 PM
5. Niupi vs Fénix FC - 8:00 PM

## Technical Details
- Pure vanilla JavaScript for animations
- CSS Grid and Flexbox for responsive layouts
- Smooth scroll animations using Intersection Observer API
- No external dependencies or frameworks
- Mobile-first responsive design

## Customization
To add team logos, replace the empty `src=""` in team logo images with actual logo URLs:
```html
<img src="your-logo-url.png" class="team-logo" alt="TEAM NAME">
```

To update standings, modify the table data in index.html or add JavaScript functionality to make it dynamic.

## Playoff Sections

### Quarter Finals (Cuartos de Final)
Four playoff matches with purple borders:
- QF1: 1st Place vs 8th Place
- QF2: 4th Place vs 5th Place
- QF3: 2nd Place vs 7th Place
- QF4: 3rd Place vs 6th Place

### Best Third Place (Mejor Tercero)
Information card explaining that the best third-placed team advances to semifinals.

### Semi Finals
Two semi-final matches:
- SF1: Winner QF1 vs Winner QF4
- SF2: Winner QF2 vs Winner QF3

### Final Match
Championship match card with gold accents and floating trophy animation:
- Winner SF1 vs Winner SF2

## Animations & Effects
- Fade-in animations on scroll
- Hover effects with purple glow on all cards
- Pulse animation on click for playoff cards
- Floating trophy icon on final card
- Rotating gold gradient background on final card
- Sequential card animations with staggered timing

## Recent Changes
- **Oct 31, 2025**: Added playoff sections (Quarter Finals, Best Third, Semi Finals, Final) with animations
- **Oct 31, 2025**: Initial website creation with all sections and styling
