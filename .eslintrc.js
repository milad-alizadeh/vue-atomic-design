// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/essential', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'semi-style': [2, 'last'],
    'comma-dangle': [2, 'never'],
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    'prefer-const': 0,
    'import/no-mutable-exports': 0,
    'max-len': 0,
    'no-shadow': 0,
    'arrow-body-style': 0,
    'global-require': 0,
    'no-unused-expressions': 0,
    'no-confusing-arrow': 0,
    'no-unused-vars': [2, { 'ignoreRestSiblings': true }],
    'no-constant-condition': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [2, {
      'components': ['Link'],
      'specialLink': ['hrefLeft', 'hrefRight', 'to'],
      'aspects': ['noHref', 'invalidHref', 'preferButton']
    }],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
