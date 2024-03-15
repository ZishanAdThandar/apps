- [EXPO](#expo)
  - [Upgrade NodeJS](#upgrade-nodejs)
  - [Install NPM](#install-npm)
  - [Install EXPO](#install-expo)
  - [Expo App Creation](#expo-app-creation)
  - [App Testing](#app-testing)

## EXPO

### Upgrade NodeJS
Check nodeJS version and upgrade to latest. 

Command to install
```bash
apt purge nodejs
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - 
sudo apt-get install -y nodejs
```
Source: https://github.com/nodesource/distributions
### Install NPM

Check NPM version `npm -v`

Command to Install `curl -qL https://www.npmjs.com/install.sh | sh`

Source: https://github.com/npm/cli

### Install EXPO

Install expo `sudo npm install -g expo-cli`

### Expo App Creation

NPM app file creation `expo init APP_NAME`


### App Testing

To run your project, navigate to the directory and run one of the following npm commands.
```bash
- cd dawah
- npm start # you can open iOS, Android, or web from here, or run them directly with the commands below.
- npm run android
- npm run ios # requires an iOS device or macOS for access to an iOS simulator
- npm run web
```
