var tabNumeros = [772121212, 773131313, 774141414, 775151515, 776161616];
var tabComptes = [20000, 5000, 50000, 12000, 10000];
var tabCodes = [0123, 2345, 4567, 6789, 8901];
var soldeCompte = 10000;
var frais = 500;
document.addEventListener("click", number());
function number(){
    ajoutNum = prompt ("Saisissez votre numéro de téléphone?"," ");
    menu();
    }

function menu() { 
    var lettre = prompt("------MENU SENMONEY------\nTaper le numéro du service choisi\n1: Solde de mon compte\n2: Transfert d'argent\n3: Paiement de facture\n4: Options\n", " ");
    if (lettre == 1) {
        ajoutCode();
    } 
    if (lettre == 2)
    {
        transfertArgent();
    } 
    if (lettre == 4)
    {
        Options();
    } 
    
  };
function transfertArgent() {
    transfert = prompt ("1:Transfert vers un autre numéro\n2:Autres"," ");
    if (transfert == 1){
        num = prompt("Entrez le numéro de téléphone qui doit recevoir le transfert d'argent :", " ");
        //if (num == (tabNumeros[i-1])){
        montant = prompt ("Veuillez entrer le montant que vous souhaitez transférer(en FCFA)"," ");
        if (montant == (soldeCompte - frais)){
            prompt ("Saisissez votre code de sécurité?"," ");
            afficherSolde();
        } 
        //}
    }
}
function ajoutCode(){
    code = prompt ("Saisissez votre code de sécurité?"," ");
    afficherSolde();   
    };
function afficherSolde(){
    var val = confirm("le solde de votre compte est de 10000\nVoulez-vous retourner au menu?");
    if( val == true ) {
        menu();
        } 
    else 
        {
             document.write ("L'utilisateur veut annuler le programme!");
      }
  };
  function Options(){
      phrase = prompt("Veuillez choisir :\n1:Solde de mes comptes\n2:Cinq dernières transactions\n3:Modification du code secret\n4:Consultation Statut", " ");
        if (phrase == 1){
            prompt("Pour recevoir le solde de votre\ncompte Sen Money par SMS,\nveuillez entrer votre code secret:", " ");
        }
        if (phrase == 2){
            prompt("Pour recevoir vos 5 dernières\ntransactions Sen Money par\nSMS, veuillez entrer votre code secret.", " ");
        }
        if (phrase == 3) {
            prompt("Vous allez modifier votre code\nsecret Sen Money, veuillez\nentrer votre code secret actuel", " ");
        }
        if (phrase == 4) {
            prompt("Votre statut Sen Money ne\npermet pas de faire des opérations\nde plus de 200 000F.Pour\nl'augmenter à 2 000 000, rendez-\nvous en point SM ou Kiosque SM\navec votre pièce d'identité.", " ");
        }
    }

    

