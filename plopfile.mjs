/* eslint import/no-anonymous-default-export: [2, {"allowAnonymousFunction": true}] */
export default function (plop) {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "What is this component's name?",
      },
      {
        type: 'input',
        name: 'element',
        message: 'HTML element (div is default)',
        default: 'div',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './src/components/{{toUpperKebabCase name}}/{{toLowerKebabCase name}}.component.tsx',
        templateFile: 'src/templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: './src/components/{{toUpperKebabCase name}}/{{toLowerKebabCase name}}.styles.scss',
        templateFile: 'src/templates/styles.scss.hbs',
      },
    ],
  })

  plop.setHelper('toUpperKebabCase', (str) => {
    if (str) {
      return str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join('-')
    }
  })

  plop.setHelper('toLowerKebabCase', (str) => {
    if (str) {
      return str
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toLowerCase())
        .join('-')
    }
  })

  plop.setHelper('toTitleCase', (str) => {
    if (str) {
      return str.replace(/w\S+/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }
  })
}
