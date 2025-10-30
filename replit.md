# GOLNET13 - Relampago League Tournament Website

## Overview
Professional football tournament website for "Relampago League - The Last Years" featuring 10 elite teams competing in a structured tournament format.

## Project Details
- **Created**: October 30, 2025
- **Type**: Static website (HTML/CSS/JavaScript only)
- **No backend, no database, no admin panel**
- **All updates are made directly in the JavaScript code within index.html**

## Tournament Structure
- **Round Robin Phase**: 3 rounds with all 10 teams
- **Knockout Phase**: Top 8 teams advance to quarterfinals
- **Bracket Format**: 1st vs 8th, 4th vs 5th, 2nd vs 7th, 3rd vs 6th

## Points System
- Win = 3 points
- Draw → Penalty Shootout: Winner = 2 points, Loser = 1 point
- Loss = 0 points

## Teams (10 Total)
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

## Round 1 Matches
1. San Miguelito vs West Coast - 5:00 PM
2. Bella Vista vs Atleticumen - 5:45 PM
3. AC Milan vs San Vicente - 6:30 PM
4. Alcalde Díaz vs Samaria - 7:15 PM
5. Niupi vs Fénix FC - 8:00 PM

## Features Implemented
✅ Welcome message for captains and players
✅ Main standings table with W/D/L/GF/GA/GD/Pts
✅ Yellow cards tracking table
✅ Red cards tracking table
✅ Top scorers (Pichichi) table
✅ Round 1 match schedule with times
✅ Visual knockout bracket (quarterfinals)
✅ Professional sports design (black/blue/purple/white theme)
✅ Fully responsive layout (mobile & desktop)
✅ Elegant hover effects and animations

## Design
- Color scheme: Black, Blue, Purple, White with gradients
- Modern, elite sports styling
- Fully responsive for mobile and desktop
- Smooth transitions and hover effects

## How to Update Data
All tournament data is managed in the JavaScript section at the bottom of `index.html`:

1. **Teams**: Update the `teams` array with wins, draws, losses, goals, and points
   - Example: `{ name: 'AC MILAN', wins: 2, draws: 1, losses: 0, goalsFor: 6, goalsAgainst: 2, points: 7 }`

2. **Matches**: Modify the `round1Matches` array
   - Example: `{ number: 1, team1: 'SAN MIGUELITO', team2: 'WESTCOAST FC', time: '5:00 PM' }`

3. **Yellow Cards**: Add to the `yellowCards` array
   - Example: `{ player: 'John Doe', team: 'AC MILAN', cards: 2 }`

4. **Red Cards**: Add to the `redCards` array
   - Example: `{ player: 'Jane Smith', team: 'FENIX FC', cards: 1 }`

5. **Top Scorers**: Add to the `scorers` array
   - Example: `{ player: 'Mike Johnson', team: 'SAN MIGUELITO', goals: 5 }`

All tables will automatically update when the page loads. The data is sorted automatically (highest first).

## Technology Stack
- Pure HTML5
- CSS3 with gradients and animations
- Vanilla JavaScript (no frameworks)
- Python HTTP server for local serving

## Deployment
The site is served using Python's built-in HTTP server on port 5000.
