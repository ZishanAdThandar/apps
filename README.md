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

Package Installation Check `npx expo install --check`

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

#### Keystore Management (Apps signing)

Goto https://expo.dev/accounts/zishanadthandar/projects/dawahbanglah/credentials

Download zip. You can get `jks` file and credential details file inside it. Rename `key.jks` to `key.keystore`.

Download `encryption_public_key.pem from` from google and create zip file using following command `java -jar pepk.jar --keystore=key.keystore --alias=********** --output=output.zip --include-cert --rsa-aes-encryption --encryption-key-path=encryption_public_key.pem`.

Now upload the zip file as sigining key. Now you can upload created app bundle.

Note: Save both zip file (downloaded and created zip) in a safe place for future update.

