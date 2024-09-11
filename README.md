# Application CRUD pour ABC Corporation

## Version 2.0

## Date publication 2024-09-11

## Auteur : Aichetou Ahmed GAYE

## Description

ABC Corporation, spécialisée dans l'importation et l'exportation de produits, a fait un grand pas en délaissant la gestion par Excel au profit d'une base de données relationnelle. Lors de la première phase du projet, j'ai modélisé avec succès leur fichier Excel (version 1) en une base de données relationnelle.

Dans cette nouvelle phase, ABC Corporation souhaite aller plus loin en intégrant la gestion des paiements des commandes. En tant que développeur full stack, ma mission consiste à :

- Mettre à jour les modèles précédemment développés pour inclure la gestion des paiements.
- Adapter le schéma de la base de données afin de gérer les paiements et les relations avec les commandes.
- Concevoir une application Node.js en mode console permettant d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur l'ensemble des tables de la base de données, y compris la gestion des paiements.
- Intégrer une gestion rigoureuse des exceptions pour assurer la fiabilité des opérations (gestion des erreurs de saisie, connexions à la base de données, etc.)

## Installation

- Téléchager le code source depuis (repository github) [https://github.com/Aichetou-Gaye/abc_corporation_nodejs.git]
- Suivre le manuel dans README, la section "Utilisation";

## Utilisation

### Connexion

- Connexion en administrateur : "mysql -u root -p";
- Ou en hôte: "mysql -h localhost -u nom_utilisateur -p".

### Insertion de données

Dans le fichier "script.sql", toutes les commandes pour la création de la base de données, son utilisation et la création des tables y sont souscrites.

### Pré-requis

Pour la prise en main correcte de l'application, il est nécessaire d'avoir installé les éléments suivants :

- [Node js](https://nodejs.com/)
- [MySQL](https://www.mysql.com/)

### Démarrage de l'application

- Initialiser un dossier avec:
```bash
npm init
```

- Mettre à jour dans **package.json**:
```bash
"main" : "./src/app.js"
```

- Dans **./config/database.js**:
Mettre vos identifiants de la base de donnée, pour une connexion de l'application et de votre base de données;


## Fonctionnalités principales

- Ajout, modification et suppression de clients;
- Ajout, modification et suppression des produits;
- Ajout, modification et suppression des commandes;
- Ajout, modification et suppression des details de commandes;

## Règles de gestion

- Un produit peut etre fournie à un ou plusieurs details;
- Un client peut faire plusieurs commandes;
- Une commande n'est fait que par client;
- Un detail commande est concerné par une commande;
- Une commande doit avoir un ou plusieurs details.
- Un payment n'est concerné que par une commande



## Depannage 

En cas d'incapicité à utiliser l'application. Veuillez contacter l'auteur pour obtenir de l'aide.

## Licence 

Ce système est à utiliser, toute commercialisation est formellement interdite.


