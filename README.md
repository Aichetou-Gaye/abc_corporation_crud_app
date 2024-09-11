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

### Pré-requis

Pour la prise en main correcte de l'application, il est nécessaire d'avoir installé les éléments suivants :

- [Node js](https://nodejs.com/)
- [MySQL](https://www.mysql.com/)

## Installation 

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

```bash
git clone https://github.com/Aichetou-Gaye/abc_corporation_nodejs.git
```

2. **Accédez au dossier du projet :**

```bash
cd abc_corporation_nodejs
```

3. **Installez les dépendances :**

```bash
npm install
```

## Règles de gestion

- Un produit peut etre fournie à un ou plusieurs details;
- Un client peut faire plusieurs commandes;
- Une commande n'est fait que par client;
- Un detail commande est concerné par une commande;
- Une commande doit avoir un ou plusieurs details.
- Un payment n'est concerné que par une commande

## Utilisation

### Connexion

- Connexion en administrateur : "mysql -u root -p";
- Ou en hôte: "mysql -h localhost -u nom_utilisateur -p".

### Insertion de données

Dans le fichier "script.sql", toutes les commandes pour la création de la base de données, son utilisation et la création des tables y sont souscrites.

### Démarrage de l'application

- Initialiser un dossier avec:
```bash
npm init
```

- Installer  Mysql:

```bash
npm install mysql2
```

- Mettre à jour dans **package.json**:

```bash
"main" : "./src/app.js"
```

- Dans **./config/database.js**:

Mettre vos identifiants de la base de donnée, pour une connexion de l'application et de votre base de données;

- Pour lancer l'application dans console, entrez dans le repertoire **src** et tapez:

```bash
node app.js
```

## Documentation des fonctions 

### Customers

- **getCustomers()** : Permets de lister touts les clients;

- **addCustomer(name : string, address : string, email : string, phone : string)** : 
Permets d'ajouter un nouveau client;

- **editCustomer(id: int, name: string, address: string, email: string, phone: string)** : 
Permets de modifier les données d'un client;

- **dropCustomer(id : int)** : 
Permets de supprimer un client;

### Products

- **getProducts()** : Permets de lister tous les produits;

- **addProduct(name: string, description: string, price: string, stock: string, category: string, barcode: string, status: string)** : 
Permets d'ajouter un nouveau produit;

- **editProduct(id : int, name: string, description: string, price: string, stock: string, category: string, barcode: string, status: string)** : 
Permets de modifier les données d'un produit;

- **dropProduct(id : int)** : 
Permets de supprimer un produit;

### Orders

- **getOrders()** : Permets de lister toutes les commandes;

- **getOrder()** : Permets de lister une commande et ses details

- **addOrder(commande: object, tableauDetails: array[object])** : 
Permets d'ajouter une nouvelle commande et ses details;

- **editOrder(id: int, title : string, type : string, survey_id : int)** : 
Permets de modifier les données d'une commande et ses details;

- **dropOrder(id:int)** : 
Permets de supprimer une commande et ses details;

### Payments

- **getPayments()** : Permets de lister tous les paiements;

- **addPayment(id: int, order_id : int, date : string, amount : string, payment_method : string)** : 
Permets d'ajouter un nouveau paiement;

- **editPayment(id: int, order_id : int, date : string, amount : string, payment_method : string)** : 
Permets de modifier les données d'un paiement;

- **dropPayment(id: int)** : 
Permets de supprimer une paiement;


## Depannage 

En cas d'incapicité à utiliser l'application. Veuillez contacter l'auteur pour obtenir de l'aide.

## Licence 

Ce système est à utiliser, toute commercialisation est formellement interdite.

## Auteur 

[Aichetou GAYE](https://github.com/Aichetou-Gaye)


