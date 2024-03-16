- [EXPO](#expo)
  - [Upgrade NodeJS](#upgrade-nodejs)
  - [Expo App Creation](#expo-app-creation)
  - [App Testing](#app-testing)

## EXPO

### Upgrade NodeJS
Check nodeJS version and upgrade to latest. 

Command to install
```bash
apt purge nodejs -y
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash - &&\
sudo apt-get install -y nodejs
```
Cleaning trace
```bash
rm -r /etc/apt/sources.list.d/nodesource.list &&\
rm -r /etc/apt/keyrings/nodesource.gpg
```

Troubleshoot NPM segmentation fault:
```bash
rm /usr/bin/npm /usr/bin/nodejs /usr/local/bin/npm /usr/local/bin/nodejs
apt autoremove
apt autoclean
reinstall nodejs
```

Source: https://github.com/nodesource/distributions https://github.com/npm/cli

### Expo App Creation

NPM app file creation `npx expo init APP_NAME`


### App Testing

To run your project, navigate to the directory and run one of the following npm commands.
```bash
- cd dawah
- npx npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npx npm run android
- npx npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npx npm run web
```
