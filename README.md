# tiny-errors
Simple error class for your REST server
# Installation
`$ npm install --save tiny-errors`
# Usage
# Properties
- [code](#code)
- [message](#message)
## code
```javascript
code: number
```
This code will be used as HTTP Status (200, 404, 403, 500...)
## message
```javascript
message: string
```
This message will be use to send to client
# Methods
- [constructor](#constructor)
- [parse](#parse)
## constructor
```javascript
constructor(code: number, message: string) {...}

// Example
let error = new TinyErrors(400, 'Username "tinyRush" is duplicated')
```
## parse
```javascript
public static parse(error): AppError {...}

// Example
// This method usually use to parse mongoose error to error with appropriate code (HTTP Status)
let error = TinyErrors.parse(mongooseValidationError);
```
# License
[MIT](https://github.com/tinyRush/tiny-errors/blob/master/LICENSE)