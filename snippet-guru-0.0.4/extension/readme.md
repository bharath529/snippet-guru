# Snippet Guru

**Snippet Guru** is a VS Code extension designed to streamline the process of inserting and managing console logs and other useful snippets for JavaScript, TypeScript, React, React Native, and Gatsby developers.

![Snippet Guru Demo](https://github.com/bharath529/snippet-guru/raw/HEAD/images/demo.png)

## Features

- **Simple Console Log**: Quickly insert a simple console log.
- **Styled Console Log**: Insert a console log with custom styles.
- **Function Name Console Log**: Log messages including the function name.
- **Error and Warning Logs**: Easily log errors and warnings.
- **Group and Group Collapsed Logs**: Group multiple log messages.
- **Table Log**: Display objects in a tabular format.
- **Debugging Logs**: Insert debugging-specific log messages.
- **JSON Stringify Logs**: Log objects as JSON strings.
- **Component Props and State Logs**: Log React component props and state.
- **React Hooks Debug Logs**: Insert logs within useEffect and useState hooks.

### Example Snippets

#### Simple Console Log

```javascript
console.log('${RELATIVE_FILEPATH}:${TM_LINE_NUMBER}', object);
```

#### Styled Console Log
```javascript
console.log('%c${RELATIVE_FILEPATH}:${TM_LINE_NUMBER} ${1:object}', 'color: #007acc; font-weight: bold;', object);
```

#### Function Name Console Log
```javascript
console.log('%c${RELATIVE_FILEPATH}:${TM_LINE_NUMBER} ${TM_CURRENT_FUNCTION} ${1:object}', 'color: #007acc;', object);
```

#### Error Console Log
```javascript
console.error('${RELATIVE_FILEPATH}:${TM_LINE_NUMBER} ${1:error}', error);
```

#### Group Console Log
```javascript
console.group('GroupName');
console.log('${RELATIVE_FILEPATH}:${TM_LINE_NUMBER}', object);
console.groupEnd();
```

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

This extension does not have any specific requirements or dependencies.

## Extension Settings

This extension does not contribute any VS Code settings.

## Known Issues

No known issues at this time. Please report any issues on the [GitHub issues page](https://github.com/yourUsername/snippet-guru/issues).

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of Snippet Guru.

### 1.0.1

Fixed minor issues and improved snippets.

### 1.1.0

Added new logging snippets for React and updated existing ones.

