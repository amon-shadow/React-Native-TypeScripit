# React-Native-Typescript

Boilerplate to start-kit for any React Native Project.

<img width="1604"  src="https://github.com/amon-shadow/React-Native-TypeScripit/blob/updatedoc/appImage/banner.png?raw=true">

integrated following library.
```
react-redux
redux-thunk
reduxsauce
axios
react-native-exception-handler
react-native-restart
moment
react-navigation
react-native-reanimated
react-native-gesture-handler
react-native-screens@^1.0.0-alpha.23
react-navigation
react-navigation-stack
react-native-loading-spinner-overlay
react-native-elements
react-native-code-push
react-native-vector-icons
```

## Installation
Clone repo and do necessary changes.


```bash
yarn install
cd ios && pod install
```

## App Name

Let's start with App Name. This is the name that's visible in the user's screen. To change this name, you have to change it in strings.xml.

Full Path
```bash
android/app/src/main/res/values/strings.xml
```

the entry is
```bash
<string name="app_name">My Android App</string>
```

## Code Push

Change code push keys in ios and android folder

### Android
```bash
android/app/build.gradle
```
<img width="1604"  src="https://github.com/amon-shadow/React-Native-TypeScripit/blob/updatedoc/appImage/android-codepush.png?raw=true">

### iOS
```bash
project build setting user define key CODEPUSH_KEY ;
```
<img width="1604"  src="https://github.com/amon-shadow/React-Native-TypeScripit/blob/updatedoc/appImage/ios-codepush.png?raw=true">

## Package name

This is shown in the Play Store and the details in About App of your Android device. This should say something like com.myapp or com.company.appname or something similar.

To change this, you have to edit four files.

```
yarn global add react-native-rename (https://www.npmjs.com/package/react-native-rename )

react-native-rename "My Org App" -b com.org.app

cd ios &&pod install && cd ..

cd android && ./gradlew clean && cd ..

Register new app in code push and get Codepush update key and replace in build.gradle file in android folder

Change app name in string.xml in android and info-list

Change Display name in app.json

Add App icon in resource mipmap folder image in android android and iOS resources in AppIcon file

Change Api url in AppConstant.ts file (ProdBase,  DebugBase)

```
## Roadmap

- :white_check_mark: Create Boilerplate Project
- :white_check_mark: Add Codepush
- Add Flavors in Android (Dev, Staging and Production)
- Add Flavors in iOS (Dev, Staging and Production)


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License
[MIT]
