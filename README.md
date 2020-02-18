# My Pandas

Application de démo React JS.

Cette application est constituée d'une liste de pandas, d'un écran de détail et d'un formulaire de création.

Elle est hébergée sur un monorepo géré par Lerna.

Elle permet de démontrer :

- L'utilisation d'un monorepo Lerna
- Les bases d'un projet React
- L'utilisation de Typescript dans un projet React
- La gestion de l'état avec Redux, en utilisant le composant HOC connect ou les hooks.
- La simplification de l'utilisation de Redux avec Redux Toolkit
- La persistence de l'état avec Redux Persist
- La gestion des effets de bord avec Redux Saga
- La gestion des formulaires avec Redux Form et avec Formik
- La gestion de la navigation avec React Router DOM
- L'utilisation de Storybook pour mettre au point des composants
- L'écriture de tests unitaires

Ce projet a été démarré avec [Create React App](https://github.com/facebook/create-react-app).

Principaux outils et librairies :

- [React JS](https://reactjs.org/)
- [Lerna](https://lerna.js.org/) - Outil de gestion de monorepo
- [Typescript](https://www.typescriptlang.org/) - Librairie de typage
- [React Scripts](https://www.npmjs.com/package/react-scripts) - Ensemble de scripts NPM pour les opérations sur le projet
- [Redux](https://redux.js.org/) - Gestion de l'état de l'application
- [Redux Toolkit](https://redux-toolkit.js.org/) - Utilitaires pour faciliter la manipulation de Redux
- [Immer](https://immerjs.github.io/immer/) - Librairie pour faciliter l'application de l'immutabilité (implicitement utilisé par Redux Toolkit)
- [Redux Saga](https://github.com/redux-saga/redux-saga) - Gestion des effets de bord
- [Redux Form](https://redux-form.com/) - Gestion des formulaires
- [Formik](https://jaredpalmer.com/formik) - Gestion des formulaires (librairie alternative)
- [Redux Persist](https://github.com/rt2zz/redux-persist) - Persistence de l'état de l'application
- [React Router DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - Gestion du routage dans l'application
- [Reactstrap](https://material-ui.com/) - Implémentation React de la librairie de composants Bootstrap
- [React-i18next](https://react.i18next.com/) - Implémentation React de la librairie d'internationalisation i18next
- [Axios](https://github.com/axios/axios) - Client HTTP
- [Storybook](https://storybook.js.org/) - Outil de mise au point des composants

Pour les versions des différents outils et librairies consulter les fichiers `package.json` des différents packages.

## Packages du monorepo

Le monorepo Lerna est composé de deux packages :

- `web` : une application web générée avec [Create React App](https://github.com/facebook/create-react-app)
- `core` : un projet regroupant les reducers Redux, les sagas, les services, etc... C'est une dépendance du package `web`

## Comment installer l'application

- Node JS et NPM doivent être installés sur la machine de développement.

- Cloner le repository.

- Installer Lerna :

  ```
  npm install -g lerna
  ```

- Initialiser le monorepo Lerna :

  ```
  npm run clean
  npm run bootstrap
  ```

## Comment démarrer le serveur de mock

Le projet contient un serveur de mock très simple s'appuyant sur la librairie [`json-server`](https://github.com/typicode/json-server). Ce serveur fournit une liste de pandas et gère les opérations de recherche, de création, de mise à jour et de suppression.

Pour démarrer ce serveur de mock :

```
npm run json-server
```

## Comment démarrer l'application

Pour exécuter l'application en mode développement :

```
npm start
```

L'application est alors accessible sur l'adresse `http://localhost:3000`.

## Commment "builder" l'application

Pour faire un build de l'application :

```
npm run build
```

Cette commande utilise la commande `lerna` pour appeler la commande `npm build` pour chaque package du monorepo.

## Comment lancer Storybook

Storybook permet de tester et mettre au point les composants visuels hors de l'application.

Pour lancer Storybook :

```
npm run storybook
```

Cette commande lance Storybook depuis le package `web` en recherchant les stories définies dans des fichiers portant l'extension `.stories.tsx`.

## Comment lancer les tests unitaires

Pour lancer les tests unitaires :

```
npm run test
```

Cette commande lance les tests unitaires en désactivant le mode `watch`.

Le mode watch permet de n'exécuter les tests unitaires que pour les fichiers modifiés. L'utilisateur dispose également de raccourcis pour relancer l'ensemble des tests, filtrer les tests à exécuter, etc...

Pour lancer les tests unitaires en activant le mode `watch`, se placer dans le package concerné et exécuter la commande suivante :

```
npm run test:watch
```

> Attention : le mode watch de Jest ne fonctionne pas correctement si on le lance depuis Git Bash sous Windows. Pour utiliser le mode watch sous Windows il faut lancer les tests depuis l'invite de commandes standard de Windows.

## Contrôle des vulnérabilités des dépendances

La commande `npm audit` permet de contrôler les dépendances de l'application et fournit un rapport listant les vulnérabilités des librairies référencées par le projet. L'outil s'appuie sur la base gérée par l'organisme OWASP pour identifier les dépendances problématiques.

Pour chaque package lancer la commande :

```
npm audit
```

Pour mettre à jour automatiquement les dépendances, se positionner dans le package concerné et lancer la commande :

```
npm audit fix
```
