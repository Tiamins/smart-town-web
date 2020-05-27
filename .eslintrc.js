// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: false,
        node: true,
        es6: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        'space-before-blocks': 0,
        'space-before-function-paren': 0,
        'comma-dangle': 0,
        'eol-last': 0,
        'semi': 0,
        'quotes': 0,
        'no-trailing-spaces': 0,
        'indent': 0,
        'no-unused-vars': 0,
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'brace-style': 0,
        'eqeqeq': 0,
        'no-irregular-whitespace': 0,
    },
    globals: {
        App: true,
        Page: true,
        wx: true,
        swan: true,
        tt: true,
        my: true,
        getApp: true,
        getPage: true,
        requirePlugin: true,
        mpvue: true,
        mpvuePlatform: true
    }
}