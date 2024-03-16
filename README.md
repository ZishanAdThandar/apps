- [EXPO](#expo)
  - [Upgrade NodeJS](#upgrade-nodejs)
  - [Expo Commandsn](#expo-commands)
  - [Creating App Bundle](#creating-app-bundle)

## EXPO

### Upgrade NodeJS
Check nodeJS version and upgrade to latest. 

Command to install
```bash
apt purge nodejs -y
rm /usr/bin/npm /usr/bin/nodejs /usr/local/bin/npm /usr/local/bin/nodejs
apt autoremove
apt autoclean
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
rm -r /etc/apt/sources.list.d/nodesource.list
apt update -y
```

Source: https://github.com/nodesource/distributions https://github.com/npm/cli

### Expo Commands

Install `npm install expo`

NPM app file creation `npx create-expo-app`

To run your project, navigate to the directory and run one of the following npm commands.
```bash
npx expo start
```

## Creating App Bundle

Edit app.json, add `package` name and `versionCode` to the `android`  

```json
    "android": {
      "package": "Dawah.bn.ZishanAdThandar",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/favicon.png",
        "backgroundColor": "#ffffff"
      }
```

Installing EAS `npm install eas-cli`

Generating App Bundle
```bash
expo login
npx expo eas:init
expo eas build -p android
```

Fetching Keystore
```bash

```

