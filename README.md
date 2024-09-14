# ABC Order Management

## Version 2.0

## Date publication 2024-09-11

## Auteur : Aichetou Ahmed GAYE

## Description

ABC Corporation, spécialisée dans l'importation et l'exportation de produits, a fait a fait à nouveau appel à moi après que j'ai modélisée avec succès leur fichier Excel en une base de données relationnelle.

Dans cette nouvelle phase, je dois intégrée la gestion des paiements des commandes. En tant que développeur full stack, ma mission consiste à concevoir une application Node.js **abc_order_management** en mode console permettant d'effectuer des opérations CRUD sur l'ensemble des tables de la base de données, y compris la gestion des paiements;



### Pré-requis

Pour la prise en main correcte de l'application, il est nécessaire d'avoir installé les éléments suivants :

- [Node js](https://nodejs.com/)
- [MySQL](https://www.mysql.com/)

## Installation 

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

```bash
git clone https://github.com/Aichetou-Gaye/abc_order_management.git
```

2. **Accédez au dossier du projet :**

```bash
cd abc_order_management
```

3. **Installez les dépendances :**

```bash
npm install
```

## Utilisation

### Connexion

- Connexion en administrateur : "mysql -u root -p";
- Ou en hôte: "mysql -h localhost -u nom_utilisateur -p".

### Insertion de données

Dans le fichier "/assets/script.sql", toutes les commandes pour la création de la base de données, son utilisation et la création des tables y sont souscrites.

### Démarrage de l'application

- Dans le fichier **/config/db.js**:

Remplacer vos identifiants dans la partie suivante, pour connecter l'application à votre base de données :

```bash
user: "user_name",
password: "password",
database: "database_name"
```

- Pour lancer l'application dans console, tapez :

```bash
node ./src/app.js
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

- **getOrder(id:int)** : Permets de lister une commande et ses details

- **addOrder(order: object, orderDetails: array[object])** : 
Permets d'ajouter une nouvelle commande et ses details;

- **editOrder(order: object, orderDetails: array[object])** : 
Permets de modifier les données d'une commande et ses details;

- **dropOrder(id:int)** : 
Permets de supprimer une commande et ses details;

### Payments

- **getPayments()** : Permets de lister tous les paiements;

- **addPayment( )** : 
Permets d'ajouter un nouveau paiement;

- **editPayment( )** : 
Permets de modifier les données d'un paiement;

- **dropPayment(id: int)** : 
Permets de supprimer une paiement;


## Depannage 

En cas d'incapicité à utiliser l'application. Veuillez contacter l'auteur pour obtenir de l'aide.

## Licence 

Cet application est à utiliser, toute commercialisation est formellement interdite.

## Auteur 

[Aichetou GAYE](https://github.com/Aichetou-Gaye)


