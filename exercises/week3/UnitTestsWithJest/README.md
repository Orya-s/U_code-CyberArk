### Jest Cheat Sheet

run jest test:
npm test                        //to test all files
npm test "TEST_FILE_NAME"       //to test specific file

setup in project:
npm init
npm install --save-dev jest

Finally, change your package.json's script field to look like this:
"scripts": {
  "test": "jest"
}


dont forget to add .gitignore


Generally, we write our code in someFile.js,
and then write the tests for that code in someFile.test.js - these names must match,
or Jest won’t be able to run the tests.