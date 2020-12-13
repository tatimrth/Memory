
function majAffichage(noCarte){
    switch(etatsCartes[noCarte]){
        case 0:
                imgCartes[noCarte].src="cartespng/backside.png";
                break;
        case 1:
                imgCartes[noCarte].src="cartespng/"+motifsCartes[noCarte]+".png";
                break;
        case -1:
                imgCartes[noCarte].style.visibility="hidden";
                break;
    }
}


function rejouer(){
        alert("Bravo! vous avez terminé la partie");
        location.reload();
}


function initialiseJeu(){
        for(var position=motifsCartes.length-1; position>=1; position--){
                var hasard=Math.floor(Math.random()*(position+1));
                var sauve=motifsCartes[position];
                motifsCartes[position]=motifsCartes[hasard];
                motifsCartes[hasard]=sauve;
        }
}

function controleJeu(noCarte){
        if(cartesRetournees.length<2){
                if(etatsCartes[noCarte]==0){
                        etatsCartes[noCarte]=1;
                        cartesRetournees.push(noCarte);
                        majAffichage(noCarte);
                }
                if(cartesRetournees.length==2){
                        var nouveauEtat=0;
                        if(motifsCartes[cartesRetournees[0]].charAt(0)==motifsCartes[cartesRetournees[1]].charAt(0) || 
                            motifsCartes[cartesRetournees[0]].charAt(1)==motifsCartes[cartesRetournees[1]].charAt(1)){
                                nouveauEtat=1;
                                nbPairesTrouvees++;
                        }

                        etatsCartes[cartesRetournees[0]]=nouveauEtat;
                        etatsCartes[cartesRetournees[1]]=nouveauEtat;
                        setTimeout(function(){
                                majAffichage(cartesRetournees[0]);
                                majAffichage(cartesRetournees[1]);
                                cartesRetournees=[];
                                if(nbPairesTrouvees==10){
                                        rejouer();
                                }
                        },750);
                }
        }
}