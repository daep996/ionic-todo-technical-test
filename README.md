# ionic-todo-technical-

## Prerequisites

- Node.js and npm
- Ionic CLI: `npm install -g @ionic/cli`
- Android Studio (for Android builds)
- Xcode (for iOS builds, Mac only)

## INITIALIZE
```bash
ionic start --cordova
```

## Installation
```bash
npm install
ionic cordova prepare
```

### RUN IN LOCAL
```bash
ionic serve
```

### BUILD
```bash
ionic build
```

### PLATFORM SETUP

```bash
ionic cordova platform add android
ionic cordova platform add ios

ionic cordova build android
ionic cordova build ios

ionic cordova run android
ionic cordova run 

ionic cordova build android --prod --release
ionic cordova build ios --prod --release
```
