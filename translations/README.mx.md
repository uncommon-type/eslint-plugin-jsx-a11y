<p align="center">
  <a href="https://travis-ci.com/github/jsx-eslint/eslint-plugin-jsx-a11y">
    <img src="https://travis-ci.com/jsx-eslint/eslint-plugin-jsx-a11y.svg?branch=master"
         alt="build status">
  </a>
  <a href="https://npmjs.org/package/eslint-plugin-jsx-a11y">
    <img src="https://img.shields.io/npm/v/eslint-plugin-jsx-a11y.svg"
         alt="npm version">
  </a>
  <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/eslint-plugin-jsx-a11y.svg"
         alt="license">
  </a>
  <a href='https://coveralls.io/github/evcohen/eslint-plugin-jsx-a11y?branch=master'>
    <img src='https://coveralls.io/repos/github/evcohen/eslint-plugin-jsx-a11y/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <a href='https://npmjs.org/package/eslint-plugin-jsx-a11y'>
    <img src='https://img.shields.io/npm/dt/eslint-plugin-jsx-a11y.svg'
    alt='Total npm downloads' />
  </a>
</p>

<a href='https://tidelift.com/subscription/pkg/npm-eslint-plugin-jsx-a11y?utm_source=npm-eslint-plugin-jsx-a11y&utm_medium=referral&utm_campaign=readme'>Obtenga soporte profesional para eslint-plugin-jsx-a11y en Tidelift</a>

# eslint-plugin-jsx-a11y

Comprobador AST estático para reglas de accesibilidad en elementos JSX.

## ¿Porque?

Ryan Florence desarrolló esta increíble herramienta de análisis de tiempo de ejecución llamada [react-a11y] (https://github.com/reactjs/react-a11y). Es super útil. Dado que probablemente ya esté utilizando linting en su proyecto, este plugin es gratuito y más cerca del proceso de development real. Si combina este plugin con un editor lint plugin, puede incorporar estándares de accesibilidad a su aplicación en tiempo real.

**Nota**: Este proyecto no * reemplaza * react-a11y, pero puede y debe usarse junto con él. Las herramientas de análisis estático no pueden determinar los valores de los variables que se colocan en props antes del tiempo de ejecución, así que el linting no fallará si ese valor no está definido y / o no pasa la regla de lint.



## Instalación

**Si está instalando este complemento a través de `eslint-config-airbnb`, por favor sigue [estas instrucciones](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#eslint-config-airbnb-1).**

Primero tendrá que instalar [ESLint](http://eslint.org): 

```sh
# npm
npm install eslint --save-dev

# yarn
yarn add eslint --dev
```

Siguiente, instale `eslint-plugin-jsx-a11y`:

```sh
# npm
npm install eslint-plugin-jsx-a11y --save-dev

# yarn
yarn add eslint-plugin-jsx-a11y --dev
```

**Nota:** Si instaló ESLint globalmente (usando `-g` en npm, o el prefijo `global` en yarn) tambien tendra que instalar `eslint-plugin-jsx-a11y` globalmente.



## Uso

Añade `jsx-a11y` a la sección de "plugins" de su `.eslintrc` archivo de configuración. Puede omitir el prefijo `eslint-plugin-` :

```json
{
  "plugins": [
    "jsx-a11y"
  ]
}
```


Luego configure las reglas que quiera usar bajo la sección "rules".

```json
{
  "rules": {
    "jsx-a11y/nombre-de-regla": 2
  }
}
```

También puede permitir todas las reglas recomendadas o estrictas de una vez.
Añade `plugin:jsx-a11y/recommended` o `plugin:jsx-a11y/strict` dentro "`extends`":

```json
{
  "extends": [
    "plugin:jsx-a11y/recommended"
  ]
}
```

## Reglas Soportadas

- [accessible-emoji](docs/rules/accessible-emoji.md): Enforce emojis are wrapped in `<span>` and provide screenreader access.
- [alt-text](docs/rules/alt-text.md): Enforce all elements that require alternative text have meaningful information to relay back to end user.
- [anchor-has-content](docs/rules/anchor-has-content.md): Enforce all anchors to contain accessible content.
- [anchor-is-valid](docs/rules/anchor-is-valid.md): Enforce all anchors are valid, navigable elements.
- [aria-activedescendant-has-tabindex](docs/rules/aria-activedescendant-has-tabindex.md): Enforce elements with aria-activedescendant are tabbable.
- [aria-props](docs/rules/aria-props.md): Enforce all `aria-*` props are valid.
- [aria-proptypes](docs/rules/aria-proptypes.md): Enforce ARIA state and property values are valid.
- [aria-role](docs/rules/aria-role.md): Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
- [aria-unsupported-elements](docs/rules/aria-unsupported-elements.md): Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
- [autocomplete-valid](docs/rules/autocomplete-valid.md): Enforce that autocomplete attributes are used correctly.

### Diferencia entre modos 'recomendedo' y 'estricto' 

| Regla                                                        | Recomendedo         | Estricto |
| ------------------------------------------------------------ | ------------------- | -------- |
| [accessible-emoji](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/accessible-emoji.md) | error               | error    |
| [alt-text](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md) | error               | error    |
| [anchor-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md) | error               | error    |
| [anchor-is-valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md) | error               | error    |
| [aria-activedescendant-has-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-activedescendant-has-tabindex.md) | error               | error    |
| [aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md) | error               | error    |
| [aria-proptypes](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md) | error               | error    |
| [aria-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md) | error               | error    |
| [aria-unsupported-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md) | error               | error    |
| [autocomplete-valid](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/autocomplete-valid.md) | error               | error    |
| [click-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md) | error               | error    |
| [heading-has-content](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/heading-has-content.md) | error               | error    |
| [html-has-lang](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/html-has-lang.md) | error               | error    |
| [iframe-has-title](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/iframe-has-title.md) | error               | error    |
| [img-redundant-alt](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md) | error               | error    |
| [interactive-supports-focus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md) | error               | error    |
| [label-has-associated-control](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md) | error               | error    |
| [media-has-caption](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/media-has-caption.md) | error               | error    |
| [mouse-events-have-key-events](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md) | error               | error    |
| [no-access-key](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md) | error               | error    |
| [no-autofocus](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-autofocus.md) | error               | error    |
| [no-distracting-elements](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-distracting-elements.md) | error               | error    |
| [no-interactive-element-to-noninteractive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-interactive-element-to-noninteractive-role.md) | error, con opciones | error    |
| [no-noninteractive-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md) | error, con opciones | error    |
| [no-noninteractive-element-to-interactive-role](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-to-interactive-role.md) | error, con opciones | error    |
| [no-noninteractive-tabindex](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-tabindex.md) | error, con opciones | error    |
| [no-onchange](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md) | error               | error    |
| [no-redundant-roles](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-redundant-roles.md) | error               | error    |
| [no-static-element-interactions](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md) | error, con opciones | error    |
| [role-has-required-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md) | error               | error    |
| [role-supports-aria-props](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md) | error               | error    |
| [scope](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/scope.md) | error, con opciones | error    |
| [tabindex-no-positive](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md) | error               | error    |


Las siguiente reglas tienen otras opciones disponibles cuando en modo *recomendado*: