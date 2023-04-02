# HACKweb3
ESSENTIALS
- address-smart-contract = KT1QmxPiDY1rYyfQUE249P4NDeHHWhTbGjT8, vous pouvez acceder à ce contract sur bettercalldev
- Le contrat est initialisé avec un nombre total de jetons (totalSupply) qui seront attribués à l'adresse du propriétaire.

- pour lancer les projects du frontend :
télécharger grâce à la commande npm i 
se placer grâce a la commande bash cd ./"nom_du_fichier_frontend" dans le fichier du frontend, ppuis nous utilisons la commande "npm run dev" , 
il faut  avoir react router et autres dependances installées 

certaines pages ont leurs fichiers associée  dans le meme dossier 
la configuration css est basique.
L'experience utilisateur  nécessite l'installation de @beacon/wallet
Intégration du contrat dans le composant Projets
Pour interagir avec le contrat depuis le composant Projets, il faut importer les fonctions connectWallet, getActiveAccount et disconnectWallet. Ensuite, il faut utiliser la méthode mint du contrat pour émettre des jetons à l'adresse du destinataire lors de la soumission du formulaire.

La fonction handleSubmit doit être modifiée pour intégrer l'appel au contrat :
