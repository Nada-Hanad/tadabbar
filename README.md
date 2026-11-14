# Tadabbar (prototype)

An early React Native prototype of a gamified Quran reading app, from January 2024: a splash screen, a home dashboard with reading statistics, the list of chapters (surahs), daily challenges and a leaderboard, organised under a bottom tab bar.

## Structure

```
pages/
  splashScreen.jsx        animated start screen
  navigator.jsx           bottom tabs (React Navigation)
  homeStack/
    home.jsx              dashboard cards and stat items
    chapters.jsx          surah list
    challenges.jsx        daily challenges
    leaderBoard.jsx       ranking
components/               tab bar, dashboard cards, stat items
styles/                   shared text styles
```

Built with React Native 0.73, React Navigation (native stack and bottom tabs) and `react-native-svg` for the illustrations.

## Running it

```bash
npm install
npx react-native run-android   # or run-ios
```

This is a two-day prototype: the screens and navigation are in place, and data is still static.
