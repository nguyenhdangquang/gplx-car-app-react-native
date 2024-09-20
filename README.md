# GPLX

## Installation
### Basic
#### Install Node JS. 
Recommended: Version >= 6
#### Install React Native cli: 

```sh
npm install -g react-native-cli
```

#### Clone sourcecode:

```sh
git clone [git-url]
```

#### Install node modules:

```sh
npm install
```

#### Link modules:

```sh
npm run link
```
  
### For IOS:

#### Install podfile:

```sh
cd ios && pod install && cd ..
```

## Build

### Android:
- Run

```sh
npm run android
```

- If you have problem during building, run this:

```sh
cd android && ./gradlew clean && cd ..
```

then Rebuild it

### IOS:

- Run:

```sh
react-native run-ios
```




