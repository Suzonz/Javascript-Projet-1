const prompt = require("prompt-sync")()

let story = ""
let retry = ""
let end = ""
let endCount = []
let choice = ""

while (true) {

    let begining = prompt("Il fait vraiment beau aujourd'hui, vous décidez d'aller vous balader ")
    story = prompt("En sortant, vous allez : ")

    choice = prompt("(1) En bas de la rue / (2) Jusqu'à votre voiture / ... ")
    if (choice == 1) {
        story = prompt("Vous arrivez à un croisement. Une vieille femme tente de traverser ")

        choice = prompt("(1) Vous l'aidez / (2) Vous regardez ailleurs / (3) Vous hésitez... ")
        while (choice != 1 || choice != 2 || choice != 3) {
            if (story == "stop") {
                break
            }
            else {
                if (choice == 1) {
                    story = prompt("Vous vous approchez pour aider la vieille femme. Elle est charmante, elle vous offre même un bonbon  ")

                    choice = prompt("(1) Vous décidez de manger le bonbon / (2) Vous le mettez dans votre poche  ")
                    while (choice != 1 || choice != 2) {
                        if (story == "stop") {
                            break
                        }
                        else {
                            if (choice == 1) {
                                story = prompt("Beurk ! Ce bonbon n'était pas destiné aux humains, c'est une friandise pour chat ! ")
                                story = prompt("Vous êtes dégouté et vous tournez pour crachez. Votre salive finit sur votre bras ")
                                story = prompt("Vous vous tournez vers la vieille dame, mais elle a disparue ")
                                story = prompt("Vous vous sentez sale. Vous decidez de rentrer chez vous pour vous laver ")
                                story = prompt("Votre visage vous gratte ")
                                story = prompt("Lorsque vous arrivez enfin dans votre salle de bain ")
                                story = prompt("Votre bras vous démange ")

                                choice = prompt("(1) Vous essuyez vaguement votre bras et vous rincez la bouche avant de finir votre journée devant la console. / (2) Vous décidez de prendre une douche et de vous lavez les dents  ")
                                while (choice != 1 || choice != 2) {
                                    if (story == "stop") {
                                        break
                                    }
                                    else {
                                        if (choice == 2) {
                                            story = prompt("En vous approchant du miroir, vous découvrez que des poils vous ont poussé sur le visage ! ")
                                            story = prompt("Vous êtes horrifié ! Vous vérifiez le reste de votre corps ")
                                            story = prompt("Vous découvrez d'autres poils sur votre bras ")
                                            story = prompt("Votre corps a commencé à se transformer ")
                                            story = prompt("Vous entendez un miaulement derrière vous ")
                                            story = prompt("Vous sursautez et vous retournez ")
                                            story = prompt("Vous êtes face à un chat ")

                                            choice = prompt("(1) Vous le fixez du regard / (2) Vous lui donnez un coup de pied  ")
                                            while (choice != 1 || choice != 2) {
                                                if (story == "stop") {
                                                    break
                                                }
                                                else {
                                                    if (choice == 2) {
                                                        story = prompt("Vous envoyez un coup au chat ")
                                                        story = prompt("Il l'évite et s'enfuit par la fenêtre ")
                                                        story = prompt("A la place qu'il occuapit se trouve un prospectus: Mme Irma - Chat-mane ")
                                                        story = prompt("Sur l'affiche, vous reconnaissez la vieille femme que vous avez aidé plus tôt ")

                                                        choice = prompt("(1) Vous jetez le papier et vous cacher dans votre lit / (2) Vous décidez d'aller vous cette Chat-mane  ")
                                                        while (choice != 1 || choice != 2) {
                                                            if (story == "stop") {
                                                                break
                                                            }
                                                            else {
                                                                if (choice == 2) {
                                                                    story = prompt("Vous regardez le papier ")
                                                                    story = prompt("Il n'y a pas de numéro de téléphone, mais une adresse ")
                                                                    story = prompt("Vous tapez l'adresse dans votre téléphone, c'est assez loin ")
                                                                    story = prompt("Vous enfilez un sweatshirt, prenez vos clés de voiture et baissez la capuche bien bas sur votre visage ")
                                                                    story = prompt("Vous quittez votre domicile et vous rendez à votre voiture ")
                                                                    story = prompt("Vous vous installez et ouvrez votre GPS. Vous avez 50 minutes de route ")
                                                                    story = prompt("Au bout d'une demi-heure, le GPS vous fait prendre une petite route en terre ")
                                                                    story = prompt("La route vous emmène dans une forêt ")
                                                                    story = prompt("La forêt est épaisse. Plus vous avancez, moins la lumière du jour est visible ")
                                                                    story = prompt("D'un seul coup, vous ne voyez plus rien ")

                                                                    choice = prompt("(1) Vous décidez d'allumer les phares de votre voiture / (2) Vous restez dans le noir  ")
                                                                    while (choice != 1 || choice != 2) {
                                                                        if (story == "stop") {
                                                                            break
                                                                        }
                                                                        else {
                                                                            if (choice == 1) {
                                                                                story = prompt("Vous allumez les feux de croisement ")
                                                                                story = prompt("La route se dévoile sous vos yeux ")
                                                                                story = prompt("Vous continuez votre trajet ")
                                                                                story = prompt("Lorsque vous arrivez à l'adresse du prospectus, vous découvrez un immense château ")

                                                                                choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                                                                                while (choice != 1 || choice != 2) {
                                                                                    if (story == "stop") {
                                                                                        break
                                                                                    }
                                                                                    else {
                                                                                        if (choice == 1) {
                                                                                            story = prompt("Un garde ouvre une petite trappe sur la porte ")
                                                                                            story = prompt("A travers la trappe, vous pouvez voir des yeux luisants ")
                                                                                            story = prompt("Le garde vous fixe du regard ")
                                                                                            story = prompt("(1) Vous tentez d'expliquer la raison de votre présence / (2) Vous le fixez du regard en retour  ")
                                                                                            story = prompt("Le garde vous fixe du regard ")
                                                                                            story = prompt("... ")
                                                                                            story = prompt("Le garde vous fixe toujours du regard ")
                                                                                            story = prompt("De la bave coule le long de son visage poilu ")
                                                                                            story = prompt("Le garde semble avoir faim ")
                                                                                            story = prompt("Donner le bonbon ?  ")

                                                                                            choice = prompt("(1) Oui / (2) Non  ")
                                                                                            while (choice != 1 || choice != 2) {
                                                                                                if (story == "stop") {
                                                                                                    break
                                                                                                }
                                                                                                else {

                                                                                                    if (choice == 1) {
                                                                                                        story = prompt("Vous avez déjà mangé le bonbon ! ")
                                                                                                        story = prompt("Le garde continue de vous fixer ")
                                                                                                        story = prompt("Vous suppliez le garde de vous laisser entrer ")
                                                                                                        story = prompt("Le garde vous fixe du regard ")
                                                                                                        story = prompt("Alors que de la sueur coule le long de votre visage, vous entendez un ricannement ")
                                                                                                        story = prompt("Une voix ordonne au garde de vous laisser passer ")
                                                                                                        story = prompt("Vous entrez dans le château ")
                                                                                                        story = prompt("Il est plongé dans le noir ")
                                                                                                        story = prompt("Vous apercevez une lueur au loin, vous décidez de vous approcher ")
                                                                                                        story = prompt("En entrant dans la pièce, vous distinguez une femme assise sur une pile de coussin ")
                                                                                                        story = prompt("C'est la vielle femme que vous avez aidée plus tôt ! ")
                                                                                                        story = prompt("Elle est installée devant une table avec une chaise vide ")
                                                                                                        story = prompt("Elle vous invite à vous asseoir ")
                                                                                                        story = prompt("Vous obéissez, tremblant ")
                                                                                                        story = prompt("Elle vous demande la raison de votre visite ")
                                                                                                        story = prompt("Après votre explication, elle vous fixe du regard en ricannant ")
                                                                                                        story = prompt("Vous êtes terrifié ")
                                                                                                        story = prompt("'Devant les autres vous avez bonne apparence, mais en privé...' ")
                                                                                                        story = prompt("'Reçois ta punition pour avoir attaqué mon chat !' ")
                                                                                                        story = prompt("Après ses paroles, votre vision devient noire ")
                                                                                                        story = prompt("Vous ressentez une douleur immense ")
                                                                                                        story = prompt("Vos os craquent, votre peau tire ")
                                                                                                        story = prompt("Vous êtes en sueur ")
                                                                                                        story = prompt("Lorsque la douleur s'arrête enfin, vous levez la tête ")
                                                                                                        story = prompt("La vieille femme se tient devant vous, immense ! ")
                                                                                                        story = prompt("Terrifié, vous hurlez ! Mais seul un petit miaulement s'échappe de votre bouche ")
                                                                                                        story = prompt("Vous admirer avec horreur vos mains qui sont devenues des petites pattes adorables ")
                                                                                                        story = prompt("Vous vous êtes transformé en chat ")
                                                                                                        story = prompt("La vieille femme vous prend dans ses bras ")
                                                                                                        story = prompt("'Ne t'inquiètes pas, je m'occuperais bien de toi !' ")
                                                                                                        story = prompt("Vous passez le reste de votre vie à manger des croquettes chez la vielle dame avec ses nombreux chats ")
                                                                                                        story = prompt(" ")
                                                                                                        story = prompt("Ending : Femme à chat ")
                                                                                                        story = "stop"
                                                                                                        end = " Femme à chat"
                                                                                                        break
                                                                                                    } else if (choice == 2) {
                                                                                                        story = prompt("Vous tentez de retrouver votre voiture pour y trouver à manger ")
                                                                                                        story = prompt("A peine avez-vous fait deux pas que vous buter sur une racine ")
                                                                                                        story = prompt("Vous perdez l'équilibre et tombez le long d'un ravin ")
                                                                                                        story = prompt("La dernière chose que vous voyez est l'obscurité' ")
                                                                                                        story = prompt(" ")
                                                                                                        story = prompt("Ending : Chute ")
                                                                                                        story = "stop"
                                                                                                        end = " Chute"

                                                                                                        break
                                                                                                    } else {
                                                                                                        choice = prompt("(1) Oui / (2) Non  ")
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        } else if (choice == 2) {
                                                                                            story = prompt("Vous ne savez rien sur ce château, allez frapper serait probablement impoli ")
                                                                                            story = prompt("Vous décidez d'observer les alentours ")
                                                                                            story = prompt("Il fait noir ")
                                                                                            story = prompt("Vous persistez, mais sans les chats pour vous guider, vous ne voyez rien ")
                                                                                            story = prompt("Sans le savoir, vous commencez à vous éloigner du château ")
                                                                                            story = prompt("Le temps passe ")
                                                                                            story = prompt("Vous cherchez à rentrer chez vous ")
                                                                                            story = prompt("Vous errez dans la forêt ")
                                                                                            story = prompt("Il fait noir ")
                                                                                            story = prompt("Vous vous perdez dans la forêt en tentant de rentrer chez vous ")
                                                                                            story = prompt(" ")
                                                                                            story = prompt("Ending : Perdu ")
                                                                                            story = "stop"
                                                                                            end = " Perdu"
                                                                                            break
                                                                                        } else {
                                                                                            choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else if (choice == 2) {
                                                                                story = prompt("Vous restez dans le noir ")
                                                                                story = prompt("Il fait noir ")
                                                                                story = prompt("... ")
                                                                                story = prompt("Pourquoi être dans le noir est-il si apaisant ? ")
                                                                                story = prompt("... ")
                                                                                story = prompt("... ")
                                                                                story = prompt("Vous vous endormez ")
                                                                                story = prompt("Lorsque vous vous réveillez, il fait toujours noir ")
                                                                                story = prompt("Vous ne sentez plus votre siège ")
                                                                                story = prompt("Vous ne sentez plus votre voiture ")
                                                                                story = prompt("Vous ne sentez plus votre corps ")
                                                                                story = prompt("Vous ne sentez plus rien ")
                                                                                story = prompt("Il fait noir ")
                                                                                story = prompt(" ")
                                                                                story = prompt("Ending : Noir ")
                                                                                story = "stop"
                                                                                end = " Noir"
                                                                                break
                                                                            } else {
                                                                                choice = prompt("(1) Vous décidez d'allumer les phares de votre voiture / (2) Vous restez dans le noir  ")
                                                                            }
                                                                        }
                                                                    }
                                                                } else if (choice == 1) {
                                                                    story = prompt("Vous êtes terrifié à l'idée de sortir ")
                                                                    story = prompt("Vous préférez vous réfugier dans votre lit en espérant que tout n'est qu'un cauchemar ")
                                                                    story = prompt("Pendant la nuit, votre corps entier vous démange ")
                                                                    story = prompt("Vous avez chaud, vous vous sentez malade ")
                                                                    story = prompt("Vous ouvrez la fênetre pour sentir la brise sur votre peau ")
                                                                    story = prompt("Vous passez la nuit en plein délire ")
                                                                    story = prompt("Lorsque vous vous réveiller, votre corps est changé ")
                                                                    story = prompt("Vous ne retrouvez plus vos main, mais d'adorable petites pattes poilues ")
                                                                    story = prompt("Vous hurlez, mais seul un petit miaulement surgit ")
                                                                    story = prompt("Vous sortez par la fenêtre pour demander de l'aide ")
                                                                    story = prompt("Un passant vous récupère et vous emmène chez un vétérinaire ")
                                                                    story = prompt("Vous vivez un véritable cauchemar.. ")
                                                                    story = prompt("Finalement, le passant vous adopte ")
                                                                    story = prompt("Vous êtes forcé à manger des croquettes pour le reste de votre vie ")
                                                                    story = prompt(" ")
                                                                    story = prompt("Ending : Vie de chat ")
                                                                    story = "stop"
                                                                    end = " Vie de chat"
                                                                    break
                                                                } else {
                                                                    choice = prompt("(1) Vous jetez le papier et vous cacher dans votre lit / (2) Vous décidez d'aller vous cette Chat-mane  ")
                                                                }
                                                            }
                                                        }
                                                    } else if (choice == 1) {
                                                        story = prompt("Vous restez immobile ")
                                                        story = prompt(" Vous décidez de faire un duel de regard avec le chat ! ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous fixez le chat ")
                                                        story = prompt("Vous êtes vraiment déterminé ")
                                                        story = prompt("Le chat finit par tourner la tête pour faire sa toilettes ")
                                                        story = prompt("Vous rappelant votre propre état, vous décidez de vous doucher ")
                                                        story = prompt("Lorsque vous êtes propre, vous vous rendez compte que le chat à disparu ")
                                                        story = prompt("A sa place se trouve un prospectus: Mme Irma - Chat-mane ")
                                                        story = prompt("Sur l'affiche, vous reconnaissez la vieille femme que vous avez aidé plus tôt ")

                                                        choice = prompt("(1) Vous jetez le papier et vous cacher dans votre lit / (2) Vous décidez d'aller vous cette Chat-mane  ")
                                                        while (choice != 1 || choice != 2) {
                                                            if (story == "stop") {
                                                                if (choice == 2) {
                                                                    story = prompt("Vous regardez le papier ")
                                                                    story = prompt("Il n'y a pas de numéro de téléphone, mais une adresse ")
                                                                    story = prompt("Vous tapez l'adresse dans votre téléphone, c'est assez loin ")
                                                                    story = prompt("Vous enfilez un sweatshirt, prenez vos clés de voiture et baissez la capuche bien bas sur votre visage ")
                                                                    story = prompt("Vous quittez votre domicile et vous rendez à votre voiture ")
                                                                    story = prompt("Vous vous installez et ouvrez votre GPS. Vous avez 50 minutes de route ")
                                                                    story = prompt("Au bout d'une demi-heure, le GPS vous fait prendre une petite route en terre ")
                                                                    story = prompt("La route vous emmène dans une forêt ")
                                                                    story = prompt("La forêt est épaisse. Plus vous avancez, moins la lumière du jour est visible ")
                                                                    story = prompt("D'un seul coup, vous ne voyez plus rien.  ")

                                                                    choice = prompt("(1) Vous décidez d'allumer les phares de votre voiture / (2) Vous restez dans le noir  ")
                                                                    while (choice != 1 || choice != 2) {
                                                                        if (story == "stop") {
                                                                            if (choice == 1) {
                                                                                story = prompt("Vous allumez les feux de croisement ")
                                                                                story = prompt("La route se dévoile sous vos yeux ")
                                                                                story = prompt("Vous continuez votre trajet ")
                                                                                story = prompt("Lorsque vous arrivez à l'adresse du prospectus, vous découvrez un immense château ")

                                                                                choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                                                                                while (choice != 1 || choice != 2) {
                                                                                    if (story == "stop") {
                                                                                        if (choice == 1) {
                                                                                            story = prompt("Un garde ouvre une petite trappe sur la porte ")
                                                                                            story = prompt("A travers la trappe, vous pouvez voir des yeux luisants ")
                                                                                            story = prompt("Le garde vous fixe du regard ")
                                                                                            story = prompt("(1) Vous tentez d'expliquer la raison de votre présence / (2) Vous le fixez du regard en retour  ")
                                                                                            story = prompt("Le garde vous fixe du regard ")
                                                                                            story = prompt("... ")
                                                                                            story = prompt("Le garde vous fixe toujours du regard ")
                                                                                            story = prompt("De la bave coule le long de son visage poilu ")
                                                                                            story = prompt("Le garde semble avoir faim ")
                                                                                            story = prompt("Donner le bonbon ?  ")

                                                                                            choice = prompt("(1) Oui / (2) Non  ")
                                                                                            while (choice != 1 || choice != 2) {
                                                                                                if (story == "stop") {
                                                                                                    if (choice == 1) {
                                                                                                        story = prompt("Vous avez déjà mangé le bonbon ! ")
                                                                                                        story = prompt("Le garde continue de vous fixer ")
                                                                                                        story = prompt("Vous suppliez le garde de vous laisser entrer ")
                                                                                                        story = prompt("Le garde vous fixe du regard ")
                                                                                                        story = prompt("Alors que de la sueur coule le long de votre visage, vous entendez un ricannement ")
                                                                                                        story = prompt("Une voix ordonne au garde de vous laisser passer ")
                                                                                                        story = prompt("Vous entrez dans le château ")
                                                                                                        story = prompt("Il est plongé dans le noir ")
                                                                                                        story = prompt("Vous apercevez une lueur au loin, vous décidez de vous approcher ")
                                                                                                        story = prompt("En entrant dans la pièce, vous distinguez une femme assise sur une pile de coussin ")
                                                                                                        story = prompt("C'est la vielle femme que vous avez aidée plus tôt ! ")
                                                                                                        story = prompt("Elle est installée devant une table avec une chaise vide ")
                                                                                                        story = prompt("Elle vous invite à vous asseoir ")
                                                                                                        story = prompt("Vous obéissez, tremblant ")
                                                                                                        story = prompt("Elle vous demande la raison de votre visite ")
                                                                                                        story = prompt("Après votre explication, elle vous fixe du regard en ricannant ")
                                                                                                        story = prompt("Vous êtes terrifié ")
                                                                                                        story = prompt("Puisque vous êtes une bonne personne, elle accepte de vous aider ")
                                                                                                        story = prompt("Elle vous donne un verre et vous ordonne de tout boire ")
                                                                                                        story = prompt("Vous êtes pétrifié, mais vous obéissez ")
                                                                                                        story = prompt("Vous ressentez une sensation étrange sur votre peau, puis vous perdez connaissance ")
                                                                                                        story = prompt("Vous vous reveillez dans votre voiture, près du parc ")
                                                                                                        story = prompt("Vous n'avez aucun souvenir de ce que vous faisiez ")
                                                                                                        story = prompt("Cependant, il fait vraiment beau aujourd'hui ")
                                                                                                        story = prompt("C'est un temps idéale pour se balader ")
                                                                                                        story = prompt(" ")
                                                                                                        story = prompt("Ending : Blissful oblivion ")
                                                                                                        story = "stop"
                                                                                                        end = " Blissful oblivion"
                                                                                                        break
                                                                                                    } else if (choice == 2) {
                                                                                                        story = prompt("Vous tentez de retrouver votre voiture pour y trouver à manger ")
                                                                                                        story = prompt("A peine avez-vous fait deux pas que vous buter sur une racine ")
                                                                                                        story = prompt("Vous perdez l'équilibre et tombez le long d'un ravin ")
                                                                                                        story = prompt("La dernière chose que vous voyez est l'obscurité' ")
                                                                                                        story = prompt(" ")
                                                                                                        story = prompt("Ending : Chute ")
                                                                                                        story = "stop"
                                                                                                        end = " Chute"
                                                                                                        break
                                                                                                    } else {
                                                                                                        choice = prompt("(1) Oui / (2) Non  ")
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        } else if (choice == 2) {
                                                                                            story = prompt("Vous ne savez rien sur ce château, allez frapper serait probablement impoli ")
                                                                                            story = prompt("Vous décidez d'observer les alentours ")
                                                                                            story = prompt("Il fait noir ")
                                                                                            story = prompt("Vous persistez, mais sans les chats pour vous guider, vous ne voyez rien ")
                                                                                            story = prompt("Sans le savoir, vous commencez à vous éloigner du château ")
                                                                                            story = prompt("Le temps passe ")
                                                                                            story = prompt("Vous cherchez à rentrer chez vous ")
                                                                                            story = prompt("Vous errez dans la forêt ")
                                                                                            story = prompt("Il fait noir ")
                                                                                            story = prompt("Vous vous perdez dans la forêt en tentant de rentrer chez vous ")
                                                                                            story = prompt(" ")
                                                                                            story = prompt("Ending : Perdu ")
                                                                                            story = "stop"
                                                                                            end = " Perdu"
                                                                                            break
                                                                                        } else {
                                                                                            choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                                                                                        }
                                                                                    }
                                                                                }
                                                                            } else if (choice == 2) {
                                                                                story = prompt("Vous restez dans le noir ")
                                                                                story = prompt("Il fait noir ")
                                                                                story = prompt("... ")
                                                                                story = prompt("Pourquoi être dans le noir est-il si apaisant ? ")
                                                                                story = prompt("... ")
                                                                                story = prompt("... ")
                                                                                story = prompt("Vous vous endormez ")
                                                                                story = prompt("Lorsque vous vous réveillez, il fait toujours noir ")
                                                                                story = prompt("Vous ne sentez plus votre siège ")
                                                                                story = prompt("Vous ne sentez plus votre voiture ")
                                                                                story = prompt("Vous ne sentez plus votre corps ")
                                                                                story = prompt("Vous ne sentez plus rien ")
                                                                                story = prompt("Il fait noir ")
                                                                                story = prompt(" ")
                                                                                story = prompt("Ending : Noir ")
                                                                                story = "stop"
                                                                                end = " Noir"
                                                                                break
                                                                            } else {
                                                                                choice = prompt("(1) Vous décidez d'allumer les phares de votre voiture / (2) Vous restez dans le noir  ")

                                                                            }
                                                                        }
                                                                    }
                                                                } else if (choice == 1) {
                                                                    story = prompt("Vous êtes terrifié à l'idée de sortir ")
                                                                    story = prompt("Vous préférez vous réfugier dans votre lit en espérant que tout n'est qu'un cauchemar ")
                                                                    story = prompt("Pendant la nuit, votre corps entier vous démange ")
                                                                    story = prompt("Vous avez chaud, vous vous sentez malade ")
                                                                    story = prompt("Vous ouvrez la fênetre pour sentir la brise sur votre peau ")
                                                                    story = prompt("Vous passez la nuit en plein délire ")
                                                                    story = prompt("Lorsque vous vous réveiller, votre corps est changé ")
                                                                    story = prompt("Vous ne retrouvez plus vos main, mais d'adorable petites pattes poilues ")
                                                                    story = prompt("Vous hurlez, mais seul un petit miaulement surgit ")
                                                                    story = prompt("Vous sortez par la fenêtre pour demander de l'aide ")
                                                                    story = prompt("Un passant vous récupère et vous emmène chez un vétérinaire ")
                                                                    story = prompt("Vous vivez un véritable cauchemar.. ")
                                                                    story = prompt("Finalement, le passant vous adopte ")
                                                                    story = prompt("Vous êtes forcé à manger des croquettes pour le reste de votre vie ")
                                                                    story = prompt(" ")
                                                                    story = prompt("Ending : Vie de chat ")
                                                                    story = "stop"
                                                                    end = " Vie de chat"
                                                                    break
                                                                } else {
                                                                    choice = prompt("(1) Vous jetez le papier et vous cacher dans votre lit / (2) Vous décidez d'aller vous cette Chat-mane  ")
                                                                }
                                                            }
                                                        }
                                                    } else {
                                                        choice = prompt("(1) Vous le fixez du regard / (2) Vous lui donnez un coup de pied  ")
                                                    }
                                                }
                                            }
                                        } else if (choice == 1) {
                                            story = prompt("Vous décidez de ne pas vous laver ")
                                            story = prompt("Ce n'est pas très hygiénique.. ")
                                            story = prompt("Vous vous couchez tard.  ")
                                            story = prompt("Pendant la nuit, votre corps entier vous démange ")
                                            story = prompt("Vous avez chaud, vous vous sentez malade ")
                                            story = prompt("Vous ouvrez la fênetre pour sentir la brise sur votre peau ")
                                            story = prompt("Vous passez la nuit en plein délire ")
                                            story = prompt("Lorsque vous vous réveiller, votre corps est changé ")
                                            story = prompt("Vous ne retrouvez plus vos main, mais d'adorable petites pattes poilues ")
                                            story = prompt("Vous hurlez, mais seul un petit miaulement surgit ")
                                            story = prompt("Vous sortez par la fenêtre pour demander de l'aide ")
                                            story = prompt("Un passant vous récupère et vous emmène chez un vétérinaire ")
                                            story = prompt("Vous vivez un véritable cauchemar.. ")
                                            story = prompt("Finalement, le passant vous adopte ")
                                            story = prompt("Vous êtes forcé à manger des croquettes pour le reste de votre vie ")
                                            story = prompt("Devenant un chat, vous apprenez à faire votre toilette et à devenir plus propre ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Vie de chat ")
                                            story = "stop"
                                            end = " Vie de chat"
                                            break
                                        } else {
                                            choice = prompt("(1) Vous essuyez vaguement votre bras et vous rincez la bouche avant de finir votre journée devant la console. / (2) Vous décidez de prendre une douche et de vous lavez les dents  ")
                                        }
                                    }
                                }
                            } else if (choice == 2) {
                                story = prompt("Vous mettez le bonbon dans votre poche ")
                                story = prompt("Vous décidez de vous rende au parc ")
                                story = prompt("Vous profitez du calme environnant ")
                                story = prompt("Alors que vous avancez, vous sentez une présence ")
                                story = prompt("Vous vous retournez, mais ne voyez personne ")
                                story = prompt("Vous continuez votre balade ")
                                story = prompt("Des bruits se font entendre autour de vous ")
                                story = prompt("Vous avez l'impression d'être suivi ")
                                story = prompt("Vous pressez le pas ")
                                story = prompt("Petit à petit, vous vous enfoncez dans la forêt ")
                                story = prompt("Il commence à faire noir ")
                                story = prompt("Dans la pénombre, vous apercervez des yeux luisants ")
                                story = prompt("Ils sont nombreux.. ")

                                choice = prompt("(1) Courir / (2) Confronter les yeux  ")
                                while (choice != 1 || choice != 2) {
                                    if (story == "stop") {
                                        break
                                    }
                                    else {
                                        if (choice == 2) {
                                            story = prompt("Vous vous retournez subitement ! ")
                                            story = prompt("De l'ombre sortent des chats, ils ont l'air innofensif ")
                                            story = prompt("Rassuré, vous soufflez un bon coup ")
                                            story = prompt("Ils viennent se frotter à vos jambes ")
                                            story = prompt("Ils s'éloignent vers la forêt.  ")
                                            story = prompt("Avant de disparaitre dans l'obscurité, ils se retournent vers vous en miaulant ")
                                            story = prompt("Ils vous demandent de les suivre ")

                                            choice = prompt("(1) Vous suivez les chats / (2) Vous sortez de la forêt  ")
                                            while (choice != 1 || choice != 2) {
                                                if (story == "stop") {
                                                    break
                                                }
                                                else {
                                                    if (choice == 1) {
                                                        story = prompt("Vous vous enfoncez plus profondément dans la forêt ")
                                                        story = prompt("En suivant les chats, vous découvrez un immense château ")

                                                        choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                                                        while (choice != 1 || choice != 2) {
                                                            if (story == "stop") {
                                                                break
                                                            }
                                                            else {
                                                                if (choice == 1) {
                                                                    story = prompt("Un garde ouvre une petite trappe sur la porte ")
                                                                    story = prompt("A travers la trappe, vous pouvez voir des yeux luisants ")
                                                                    story = prompt("Le garde vous fixe du regard ")
                                                                    story = prompt("(1) Vous tentez d'expliquer la raison de votre présence / (2) Vous le fixez du regard en retour  ")
                                                                    story = prompt("Le garde vous fixe du regard ")
                                                                    story = prompt("... ")
                                                                    story = prompt("Le garde vous fixe toujours du regard ")
                                                                    story = prompt("De la bave coule le long de son visage poilu ")
                                                                    story = prompt("Le garde semble avoir faim ")
                                                                    story = prompt("Donner le bonbon ?  ")

                                                                    choice = prompt("(1) Oui / (2) Non  ")
                                                                    while (choice != 1 || choice != 2) {
                                                                        if (story == "stop") {
                                                                            break
                                                                        }
                                                                        else {
                                                                            if (choice == 1) {
                                                                                story = prompt("Vous donnez le bonbon au garde ")
                                                                                story = prompt("Il vous ouvre la porte ")
                                                                                story = prompt("Vous entrez dans le château ")
                                                                                story = prompt("Il est plongé dans le noir ")
                                                                                story = prompt("Vous apercevez une lueur au loin, vous décidez de vous approcher ")
                                                                                story = prompt("Vous entrez dans une pièce ")
                                                                                story = prompt("A l'intérieur, une vieille femme assise sur une pile de coussin ")
                                                                                story = prompt("Vous reconnaissez la vieille femme qui vous a donné le bonbon ")
                                                                                story = prompt("Elle est installée devant une table avec une chaise vide ")
                                                                                story = prompt("Elle vous invite à vous asseoir ")
                                                                                story = prompt("Vous obéissez, perplexe ")
                                                                                story = prompt("La vieille dame se présente en tant que shaman ")
                                                                                story = prompt("Elle félicite votre bienveillance et votre courage ")
                                                                                story = prompt("Elle décide de vous récompenser ")
                                                                                story = prompt("Vous attendez ")
                                                                                story = prompt("Rien ne se passe ")
                                                                                story = prompt("Vous êtes toujours perplexe, mais ne tenez pas à passer plus de temps en compagnie de cette shaman ")
                                                                                story = prompt("Vous quittez le château ")
                                                                                story = prompt("Les chats semblent vous attendre à la porte ")
                                                                                story = prompt("Lorsque vous approchez, ils se lèvent et repartent dans la forêt ")
                                                                                story = prompt("Instinctivement, vous les suivez ")
                                                                                story = prompt("Vous arrivez dans le parc ")
                                                                                story = prompt("Vous êtes ébloui par la lumière du soleil ")
                                                                                story = prompt("Les chats ont disparu ")
                                                                                story = prompt("Vous rentrez chez vous ")
                                                                                story = prompt("Vous êtes épuisé ")
                                                                                story = prompt("Vous décidez de vous coucher tôt ")
                                                                                story = prompt("Vous vous réveillez dans un océan de douceur ")
                                                                                story = prompt("Un chat est enroulé près de votre visage et ronronne ")
                                                                                story = prompt("Il accepte vos caresses ")
                                                                                story = prompt("Des larmes de joie coulent le long de votre visage ")
                                                                                story = prompt(" ")
                                                                                story = prompt("Ending : Bonheur ultime ")
                                                                                story = "stop"
                                                                                end = " Bonheur ultime"
                                                                                break
                                                                            } else if (choice == 2) {
                                                                                story = prompt("Vous décidez de partir ")
                                                                                story = prompt("Vous ne voyez rien ")
                                                                                story = prompt("Vous errez dans la forêt à la recherche de la sortie ")
                                                                                story = prompt("Il fait noir ")
                                                                                story = prompt("Vous vous perdez dans la forêt en tentant de rentrer chez vous ")
                                                                                story = prompt(" ")
                                                                                story = prompt("Ending : Perdu ")
                                                                                story = "stop"
                                                                                end = " Perdu"
                                                                                break
                                                                            } else {
                                                                                choice = prompt("(1) Oui / (2) Non  ")
                                                                            }
                                                                        }
                                                                    }
                                                                } else if (choice == 2) {
                                                                    story = prompt("Vous ne savez rien sur ce château, allez frapper serait probablement impoli ")
                                                                    story = prompt("Vous décidez d'observer les alentours ")
                                                                    story = prompt("Il fait noir ")
                                                                    story = prompt("Vous persistez, mais sans les chats pour vous guider, vous ne voyez rien ")
                                                                    story = prompt("Sans le savoir, vous commencez à vous éloigner du château ")
                                                                    story = prompt("Le temps passe ")
                                                                    story = prompt("Vous cherchez à rentrer chez vous ")
                                                                    story = prompt("Vous errez dans la forêt ")
                                                                    story = prompt("Il fait noir ")
                                                                    story = prompt("Vous vous perdez dans la forêt en tentant de rentrer chez vous ")
                                                                    story = prompt(" ")
                                                                    story = prompt("Ending : Perdu ")
                                                                    story = "stop"
                                                                    end = " Perdu"
                                                                    break
                                                                } else {
                                                                    choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                                                                }
                                                            }
                                                        }
                                                    } else if (choice == 2) {
                                                        story = prompt("Vous secouez la tête ")
                                                        story = prompt("Des chats qui vous demandent de les suivre ? ")
                                                        story = prompt("Vous avez surement halluciné ")
                                                        story = prompt("Vous continuez votre balade quelques temps avant de vous diriger vers un restaurant ")
                                                        story = prompt("Vous commandez un hamburger avec des frittes ")
                                                        story = prompt("En rentrant, vous ouvrez le frigo.  ")
                                                        story = prompt("Vous apercevez une bière ")
                                                        story = prompt("C'est la dernière ")
                                                        story = prompt("Vous vous la servez ")
                                                        story = prompt("Elle est bien fraiche ! ")
                                                        story = prompt("Vous mangez devant votre ordinateur ")
                                                        story = prompt("Votre équipe e-sport préférée gagne le tournoi ! ")
                                                        story = prompt("vous vous levez brusquement pour célébrer et poussez un hurlement de joie ")
                                                        story = prompt("En vous levant, vous bousculez la table. Votre bière se renverse sur votre clavier ")
                                                        story = prompt("Votre ordinateur crépite avant de s'éteindre ")
                                                        story = prompt("Votre ordinateur n'est plus, votre bière est vide ")
                                                        story = prompt("C'était la dernière ")
                                                        story = prompt("Vous passez de joie intense à désespoir total ")
                                                        story = prompt("Vous passez la nuit dans votre lit à pleurer ")
                                                        story = prompt(" ")
                                                        story = prompt("Ending : Destruction ")
                                                        story = "stop"
                                                        end = " Destruction"
                                                        break
                                                    } else {
                                                        choice = prompt("(1) Vous suivez les chats / (2) Vous sortez de la forêt  ")
                                                    }
                                                }
                                            }
                                        } else if (choice == 1) {
                                            story = prompt("Vous êtes effrayé et instinctivement, votre corps décide de fuir ! ")
                                            story = prompt("Vous vous enfoncez dans la forêt ")
                                            story = prompt("Il fait de plus en plus noir ")
                                            story = prompt("Vous ne voyez plus rien ")
                                            story = prompt("D'un seul coup, vous butez sur une racine et perdez l'équilibre ")
                                            story = prompt("Vous tombez dans un ravin ")
                                            story = prompt("Vous perdez connaissance ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Chute ")
                                            story = "stop"
                                            end = " Chute"
                                            break
                                        } else {
                                            choice = prompt("(1) Courir / (2) Confronter les yeux  ")
                                        }
                                    }
                                }
                            } else {
                                choice = prompt("(1) Vous décidez de manger le bonbon / (2) Vous le mettez dans votre poche  ")
                            }
                        }
                    }
                } else if (choice == 2) {
                    story = prompt("Vous ignorez la vieille dame ")
                    story = prompt("Vous traverser la route ")
                    story = prompt("Du coin de l'oeil, vous voyez un homme aider la vieille dame à traverser ")
                    story = prompt("Elle croise votre regard et vous fait un clin d'oeil avant de remercier l'homme ")
                    story = prompt("Vous vous éloignez rapidement, mal à l'aise ")
                    story = prompt("Vous décidez d'aller au supermarché' ")
                    story = prompt("Alors que vous faites vos courses, vous remarquez une mère avec son fils ")
                    story = prompt("Le garçon a l'air très agité ")
                    story = prompt("La mère essaie d'atteindre un article en hauteur ")

                    choice = prompt("(1) Vous l'aidez / (2) Vous continuez vos achats  ")
                    while (choice != 1 || choice != 2) {
                        if (story == "stop") {
                            break
                        }
                        else {
                            if (choice == 1) {
                                story = prompt("Vous prenez l'article en question et le tendez à la femme ")
                                story = prompt("Elle vous remercie chaleureusement avant de s'éloigner ")
                                story = prompt("Vous avez finalement réussi à aider quelqu'un aujourd'hui ! ")
                                story = prompt("Vous êtes fier de vous-même ")
                                story = prompt("Vous finissez votre journée à marcher au soleil, un air suffisant sur le visage ")
                                story = prompt(" ")
                                story = prompt("Ending : Une b.a. par jour ")
                                story = "stop"
                                end = " Une b.a. par jour"
                                break
                            } else if (choice == 2) {
                                story = prompt("De nouveau, vous hésitez à rendre sevice ")
                                story = prompt("Mais après tout, si cette femme a besoin d'aide elle peut appeler un employé ")
                                story = prompt("Vous continuez de faire vos achat ")
                                story = prompt("D'un seul coup, l'enfant passe devant vous en courant ")
                                story = prompt("Surpris, vous lâcher la bouteille en verre que vous aviez dans la main ")
                                story = prompt("Elle explose par terre et son contenu se retrouve étalé sur vos vêtements ")
                                story = prompt("L'enfant et sa mère ont disparus ")
                                story = prompt("Vous rentrez chez vous et passez l'après-midi à essayez d'enlever les tâches de votre tenue ")
                                story = prompt(" ")
                                story = prompt("Ending : Lessive ")
                                story = "stop"
                                end = " Lessive"
                                break
                            } else {
                                choice = prompt("(1) Vous l'aidez / (2) Vous continuez vos achats  ")

                            }
                        }
                    }
                } else if (choice == 3) {
                    story = prompt("Vous hésitez ")
                    story = prompt("Le temps de prendre une décision, un homme a aidé la vieille dame ")
                    story = prompt("Vous continuez votre chemin ")
                    story = prompt("Vous décidez de vous arrêter au bar à jeux ")
                    story = prompt("Là, vous croisez de bons amis à vous ")
                    story = prompt("Vous décidez de passer l'après-midi à jouer à un jeu de stratégie ensemble ")
                    story = prompt("Il est 15h, vous commandez :  ")

                    choice = prompt("(1) Une bière pression, il n'y a pas d'heure pour une bière bien fraiche ! / (2) Un jus de fruit, votre rival est présent et vous voulez toutes les chances de gagner  ")
                    while (choice != 1 || choice != 2) {
                        if (story == "stop") {
                            break
                        }
                        else {
                            if (choice == 1) {
                                story = prompt("Vous décidez d'offrir un verre à vos amis ")
                                story = prompt("Vous leur commandez :  ")

                                choice = prompt("(1) Comme vous, une bière / (2) Un jus de fruit, certains n'ont pas envie d'alcool  ")
                                while (choice != 1 || choice != 2) {
                                    if (story == "stop") {
                                        break
                                    }
                                    else {
                                        if (choice == 1) {
                                            story = prompt("Vous passez l'après-midi à jouer ")
                                            story = prompt("Comme vous avez payé votre tournée, les autres le font aussi ")
                                            story = prompt("Finalement, vous êtes tous trop alcoolisé pour vous rappeler des règles ")
                                            story = prompt("Vous demander votre rival en duel pour vous départager ")
                                            story = prompt("Vous choisissez lui mettez un +2, il vous répond famille ")
                                            story = prompt("Une fois de plus, vous perdez face à votre rival ")
                                            story = prompt("Vous finissez la soirée à pleurer sur la table avant de vous faire virer par le patron ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Défaite ")
                                            story = "stop"
                                            end = " Défaite"
                                            break
                                        } else if (choice == 2) {
                                            story = prompt("Finalement, vous serez le seul à boire une bière ")
                                            story = prompt("Vos amis ne sont pas très festifs ")
                                            story = prompt("Vous commandez une autre bière ")
                                            story = prompt("Puis une autre ")
                                            story = prompt("Puis une autre ")
                                            story = prompt("... ")
                                            story = prompt("Fianlement, vos amis décident de partir ")
                                            story = prompt("Ils refusent d'accepter votre victoire ")
                                            story = prompt("Vous seul vous rapellerez du jour où vous avez détruit leurs unités avec un +4 ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Victoire contestée ")
                                            story = "stop"
                                            end = " Victoire contestée"
                                            break
                                        } else {
                                            choice = prompt("(1) Comme vous, une bière / (2) Un jus de fruit, certains n'ont pas envie d'alcool  ")
                                        }
                                    }
                                }
                            } else if (choice == 2) {
                                story = prompt("Il est encore tôt, vous commandez du jus ")
                                story = prompt("Vous proposez à vos amis de leur offrir un verre ")
                                story = prompt("Vous leur commandé :  ")

                                choice = prompt("(1) Un jus, comme vous / (2) Une bière, après tout il n'y a pas d'heure pour une bière bien fraiche  ")
                                while (choice != 1 || choice != 2) {
                                    if (story == "stop") {
                                        break
                                    }
                                    else {
                                        if (choice == 1) {
                                            story = prompt("L'après-midi avance ")
                                            story = prompt("Vous vous retrouvez en face à face avec votre rival ")
                                            story = prompt("La partie continue jusque dans la soirée ")
                                            story = prompt("Finalement, le bar ferme avant que l'un d'entre vous ait réussi à battre l'autre ")
                                            story = prompt("Votre rival mérite bien son titre ")
                                            story = prompt("Vous vous serrez solennellement la main ")
                                            story = prompt("Vous sentez une décharge d'adrénaline ")
                                            story = prompt("Vous proposez à votre rival d'aller manger un bout ")
                                            story = prompt("La conversation est passionnante ")
                                            story = prompt("Vous passez une soirée fantastique avec votre rival ")
                                            story = prompt("Vous vous promettez de refaire ça le week-end prochain ")
                                            story = prompt("... ")
                                            story = prompt("En rentrant, vous êtes heureux ")
                                            story = prompt("Vous avez passé une journée fantastique ")
                                            story = prompt("Cette nuit, vous rêvez de votre rival.. ")
                                            story = prompt("( ▰ ˘ ◡ ˘ ▰ ) ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Match nul... ♥ ")
                                            story = "stop"
                                            end = " Match nul... ♥"
                                            break
                                        } else if (choice == 2) {
                                            story = prompt("Vous commandez des bières pour vos amis ")
                                            story = prompt("Il n'y a qu'une seule chose qui compte : ")
                                            story = prompt("La victoire ! ")
                                            story = prompt("Vous êtes extrêmement généreux aujourd'hui et offrez plusieurs tournées à vos amis ")
                                            story = prompt("Et finalement ! Vous posez votre dernier pions et détruisez les camps de vos amis ! ")
                                            story = prompt("Personne ne survivra, pas même femmes et enfants ! ")
                                            story = prompt("Votre rire retentit dans le bar et les autres clients frissonnent ")
                                            story = prompt("Vous levez les bras au ciel, un pied sur votre chaise, l'autre sur le plateau ")
                                            story = prompt("Vos ennemis vaincus sont affalés sur la table ")
                                            story = prompt("La victoire est votre et vous vous proclamez roi ! ")
                                            story = prompt("Vous profitez de votre victoire debout sur la table, jusqu'à ce que le patron du bar vous demande de descendre ")
                                            story = prompt("Vous descendez de la table les joues légèrement rouges, mais vous avez quand même gagné ! ")
                                            story = prompt("Vous saluez vos amis endormis, avant de rentrer chez vous, victorieux ")
                                            story = prompt("Ce soir, vous dormirez bien ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Victoire totale ")
                                            story = "stop"
                                            end = " Victoire totale"
                                            break
                                        } else {
                                            choice = prompt("(1) Un jus, comme vous / (2) Une bière, après tout il n'y a pas d'heure pour une bière bien fraiche  ")
                                        }
                                    }
                                }
                            } else {
                                choice = prompt("(1) Une bière pression, il n'y a pas d'heure pour une bière bien fraiche ! / (2) Un jus de fruit, votre rival est présent et vous voulez toutes les chances de gagner  ")
                            }
                        }
                    }
                } else {
                    choice = prompt("(1) Vous l'aidez / (2) Vous regardez ailleurs / (3) Vous hésitez... ")

                }
            }
        }
    } else if (choice == 2) {
        story = prompt("Vous arrivez à votre voiture, ")
        story = prompt("Vous trouvez un prospectus sur le pare-brise ")
        story = prompt("Dessus l'image d'une vieille femme avec 'Mme Irma Chat-mane, spécialiste chat-kra' ")
        story = prompt("Vous êtes intrigué ")
        story = prompt("Vous décidez d'aller voir cette Cha-mane ")
        story = prompt("Le lieux en question semble être derrière le parc ")
        story = prompt("Vous prenez votre voiture et vous rendez à l'adresse indiquée ")
        story = prompt("Le GPS vous fait prendre une petite route en terre ")
        story = prompt("Cette route vous emmène dans une forêt ")
        story = prompt("La forêt est épaisse. Plus vous avancez, moins la lumière du jour est visible ")
        story = prompt("D'un seul coup, vous ne voyez plus rien.  ")


        choice = prompt("(1) Vous décidez d'allumer les phares de votre voiture / (2) Vous restez dans le noir  ")
        while (choice != 1 || choice != 2) {
            if (story == "stop") {
                break
            }
            else {
                if (choice == 1) {
                    story = prompt("Vous allumez les feux de croisement ")
                    story = prompt("La route se dévoile sous vos yeux ")
                    story = prompt("Vous continuez votre trajet ")
                    story = prompt("Lorsque vous arrivez à l'adresse du prospectus, vous découvrez un immense château ")

                    choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                    while (choice != 1 || choice != 2) {
                        if (story == "stop") {
                            break
                        }
                        else {
                            if (choice == 1) {
                                story = prompt("Un garde ouvre une petite trappe sur la porte ")
                                story = prompt("A travers la trappe, vous pouvez voir des yeux luisants ")
                                story = prompt("Le garde vous fixe du regard ")
                                story = prompt("(1) Vous tentez d'expliquer la raison de votre présence / (2) Vous le fixez du regard en retour  ")
                                story = prompt("Le garde vous fixe du regard ")
                                story = prompt("... ")
                                story = prompt("Le garde vous fixe toujours du regard ")
                                story = prompt("De la bave coule le long de son visage poilu ")
                                story = prompt("Le garde semble avoir faim ")
                                story = prompt("Vous n'avez rien à lui proposer ")

                                choice = prompt("(1) Retourner à la voiture pour fouiller / (2) Supplier le garde  ")
                                while (choice != 1 || choice != 2) {
                                    if (story == "stop") {
                                        break
                                    }
                                    else {
                                        if (choice == 2) {
                                            story = prompt("Vous suppliez le garde de vous laisser entrer ")
                                            story = prompt("Le garde vous fixe du regard ")
                                            story = prompt("Alors que de la sueur coule le long de votre visage, vous entendez un ricannement ")
                                            story = prompt("Une voix ordonne au garde de vous laisser passer ")
                                            story = prompt("Vous entrez dans le château ")
                                            story = prompt("Il est plongé dans le noir ")
                                            story = prompt("Vous apercevez une lueur au loin, vous décidez de vous approcher ")
                                            story = prompt("En entrant dans la pièce, vous distinguez une vieille femme assise sur une pile de coussin ")
                                            story = prompt("Elle est installée devant une table avec une chaise vide ")
                                            story = prompt("Elle vous invite à vous asseoir ")
                                            story = prompt("Vous obéissez, perplexe ")
                                            story = prompt("Elle vous demande la raison de votre présence ")
                                            story = prompt("Vous lui expliquez le prospectus trouv'sur votre voiture ")
                                            story = prompt("Elle marmonne.. ")
                                            story = prompt("D'un seul coup, elle se lève et pose l'index sur votre front ")
                                            story = prompt("'Reviens lorsque tu en auras vraiment besoin.' ")
                                            story = prompt("Vous percevez une grande lumière blanche innonde la pièce ! ")
                                            story = prompt("... ")
                                            story = prompt("Vous êtes chez vous ")


                                        } else if (choice == 1) {
                                            story = prompt("Inutile de rester ici, il n'a pas l'intention de vous ouvrir ")
                                            story = prompt("Vous tentez de retrouver votre voiture pour y trouver à manger ")
                                            story = prompt("A peine avez-vous fait deux pas que vous buter sur une racine ")
                                            story = prompt("Vous perdez l'équilibre et tombez le long d'un ravin ")
                                            story = prompt("La dernière chose que vous voyez est l'obscurité' ")
                                            story = prompt(" ")
                                            story = prompt("Ending : Chute ")
                                            story = "stop"
                                            end = " Chute"
                                            break
                                        } else {
                                            choice = prompt("(1) Retourner à la voiture pour fouiller / (2) Supplier le garde  ")
                                        }
                                    }
                                }
                            } else if (choice == 2) {
                                story = prompt("Vous ne savez rien sur ce château, allez frapper serait probablement impoli ")
                                story = prompt("Vous décidez d'observer les alentours ")
                                story = prompt("Il fait noir ")
                                story = prompt("Vous persistez, mais sans les chats pour vous guider, vous ne voyez rien ")
                                story = prompt("Sans le savoir, vous commencez à vous éloigner du château ")
                                story = prompt("Le temps passe ")
                                story = prompt("Vous cherchez à rentrer chez vous ")
                                story = prompt("Vous errez dans la forêt ")
                                story = prompt("Il fait noir ")
                                story = prompt("Vous vous perdez dans la forêt en tentant de rentrer chez vous ")
                                story = prompt(" ")
                                story = prompt("Ending : Perdu ")
                                story = "stop"
                                end = " Perdu"
                                break
                            } else {
                                choice = prompt("(1) Vous allez frapper à la porte / (2) Vous faite le tour pour observer  ")
                            }
                        }
                    }
                } else if (choice == 2) {
                    story = prompt("Vous vous sentez perdu ")
                    story = prompt("Ne sachant trop quoi faire, vous décidez de tout arrêter ")
                    story = prompt("Vous restez dans le noir ")
                    story = prompt("Il fait noir ")
                    story = prompt("... ")
                    story = prompt("Pourquoi l'obscurité est-elle si apaisante ? ")
                    story = prompt("... ")
                    story = prompt("... ")
                    story = prompt("Vous vous endormez ")
                    story = prompt("Lorsque vous vous réveillez, il fait toujours noir ")
                    story = prompt("Vous ne sentez plus votre siège ")
                    story = prompt("Vous ne sentez plus votre voiture ")
                    story = prompt("Vous ne sentez plus votre corps ")
                    story = prompt("Vous ne sentez plus rien ")
                    story = prompt("Il fait noir ")
                    story = prompt(" ")
                    story = prompt("Ending : Noir ")
                    story = "stop"
                    end = " Noir"
                    break
                } else {
                    choice = prompt("(1) Vous décidez d'allumer les phares de votre voiture / (2) Vous restez dans le noir  ")
                }
            }
        }
    } else {
        story = prompt("Vous n'arrivez pas à prendre une décision ")
        story = prompt("Un chat vous regarde, vous sentez qu'il juge votre intelligence ")
        story = prompt("Honteux, vous décidez de rentrer ")
        story = prompt("Vous êtes chez vous ")
        story = prompt("Le regard du chat vous rappelle les rires moqueurs de vos camarades de classes quand vous aviez 5ans ")
        story = prompt("Le soleil est brillant ")
        story = prompt("Vous fermez les rideaux et vous roulez en boule sous la couette pour pleurer ")
        story = prompt(" ")
        story = prompt("Ending : Honte ")
        end = " Honte"
    }


    if (endCount.includes(end) == false) {
        endCount.push(end)
    }
    story = prompt(" ")

    switch (endCount.length) {
        case 15:
            story = prompt("Félicitations, vous avez trouvé toutes les fins ! ")
                ;
        default:
            story = prompt("Vous avez trouvé " + endCount.length + " fin sur 15")
            console.log("Fins trouvées : " + endCount);

            ;
    }
    story = prompt(" ")
    let retry = prompt("Tapez (1) si vous souhaitez réessayer : ")
    if (retry == "1") {
        story = prompt(" ")
        true
    } else {
        break
    }
}