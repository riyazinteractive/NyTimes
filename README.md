# NyTimes

Author: Riyaz

Developed NyTimes most popular news sample app. 

TO Run this application below are the steps to be followed:

Pre-requisities: 
react-native-cli should be installed on your system. If not please follow React-Native-Cli Quick start instructions from below.


https://facebook.github.io/react-native/docs/getting-started.html

Steps: 

1) Clone project or download from the url 
https://github.com/riyazinteractive/NyTimes.git

2) Run npm install or yarn using command line from project directory
    
    

    npm install 
    
    or
    
    
    yarn 

3) After successful node modules are downloaded run below command to link react-native-vector-icons package only
    
    
    react-native link react-native-vector-icons

4) Go to ios folder and perform pod installation

    
    cd ios


    pod install


5) Run below command to start the package server from project directory
    
    
    react-native start 

ANDROID 
6a) To run application on android from project directory
    
    
    react-native run-android
iOS 
6b) To run application on iOS from project directory (Applicable only for Mac users)
    
    
    react-native run-ios

Note*: For Mac users, if above command error out due to permission issue. Please use prefix sudo before each command.

Alertnate way, to application on iOS 
open project directory, 
go to ios folder, 
open 'NYTimes.xcworkspace' file in XCode application 
Build (Cmd+B) and Run (Cmd+R)

*Important*
Please ensure android sdk path is added in PATH or local.properties of android sdk path.