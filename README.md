- [EXPO](#expo)
  - [Upgrade NodeJS](#upgrade-nodejs)
  - [Expo Commandsn](#expo-commands)
  - [Creating App Bundle](#creating-app-bundle)
- [React Native](#react-native)
- [Flutter](#flutter)

***
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

Install `npm install -g expo`

NPM app file creation `npx create-expo-app`

Package Installation Check `npx expo install --check` or `npm install --check`

To run your project, navigate to the directory and run one of the following npm commands. `npx expo start` or `npm start`.

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

Installing expo doctor `npm install -g expo-doctor`

Checking error with expo doctor `npx -y expo-doctor` or `expo doctor`

Installing EAS `npm install eas-cli`

Generating App Bundle
```bash
expo login
npx expo eas:init
expo eas build -p android # or # eas build -p android
```

#### Keystore Management (Apps signing)

Goto https://expo.dev/accounts/zishanadthandar/projects/dawahbanglah/credentials

Download zip. You can get `jks` file and credential details file inside it. Rename `key.jks` to `key.keystore`.


Download `encryption_public_key.pem from` and `pepk.jar` from google and create zip file using following command `java -jar pepk.jar --keystore=key.keystore --alias=********** --output=output.zip --include-cert --rsa-aes-encryption --encryption-key-path=encryption_public_key.pem`.

Now upload the zip file as sigining key. Now you can upload created app bundle.

## Note

1. Save both zip file (downloaded and created zip) in a safe place for future update.
2. To recreate old app, goto codes and type ~~`npx expo init -t expo-template-blank@sdk-42 --name "Your App Name" --slug old-project`~~ Just use same slug to create the app.
3. Logout `npx expo logout` or `expo logout`.

***

## React Native

Creat folder `npx react-native init MyProject`

Starting project `npx react-native run-android` or `npx react-native run-ios`
***

## Flutter

1. Download Flutter tar.xz file
2. Extract `tar xf flutter_linux_1.22.4-stable.tar.xz`
3. move `mv flutter /usr/bin/flutter`
4. Setting Path `export PATH="$PATH:/usr/bin/flutter/bin/" >> ~/.bashrc`





