# material-managment

SAP material management app using mongo-db react-redux and express-js

## pre-requisit

- install git, node, yarn

## steps to use this app

1. clone this project from git repo `git@github.com:iAbhishek91/material-managment.git`
2. install the dependencies: `yarn`
3. start the back-end application: `yarn server`
4. navigate to client folder: `cd client`
5. install the packages: `yarn`
6. start the ui server: `yarn start`

## technical specs

### nodemon

- it watches for development changes.
- it updates the dev server whenerver there is a change.

### proxy settings

- proxy settings is done on client app
- client will know by defalut where to fetch data from without using URL in the app.
- in proxy settings should also be done in webpack. Refer: client `webpack.config.js`
