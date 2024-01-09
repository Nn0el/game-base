Jag har skapat ett side scrolling shooter spel i Javascript. Vi bestämmde oss för side scroller ganska snabbt och sedan valde vi att det skulle bli en shooter. Tillsammans med Esteteleverna så bestämmde vi vilka slags karaktärer och vilken bakgrund som skulle finnas i spelet. Sedan så skapade jag en individuell planering där jag satte upp mål. Dessa mål var saker som jag behövde klara av för att skapa mitt spel och vissa av målen var mest för att göra spelet av högre kvalite eller roligare att spela. 

Sedan så började jag programmera efter vad mina mål kräver. Jag började med att skapa själva spelar delen och hur den ska kunna styras. Så för att kunna styra spelaren så skrev jag två listeners, en på uppåt piltangenten och en på nedåt piltangenten. Om man trycker på en av dessa knappar så flyttas karaktären längst sin y axis och vilket håll den rör sig åt motsvarar vilken piltangent man trycker. När jag var klar med player så skapade jag projectile vilket är skotten som player ska skjuta iväg. Så projectile är gula kvadrater som skrivs ut vid player och som sedan ska kunna "döda" enemy karaktärer. Projectiles har dock en till sak som dem gör vilket är att projectiles slutar existera där spelet slutar. Jag skapade även en userinterface som kunde visa hur länge spelet varit igång. Sedan skapade jag tre olika slags enemy karaktärer som skapas på andra sidan av spelet och vars dom skapas vertikalt är slumpat. När en enemy blir träffad av en projectile så försvinner båda och hur jag gjorde detta är med markedForDeletion. Sedan så bytte jag ut hur player och de tre olika enemy karaktärerna såg ut med sprites. Så jag skrev alltså ut bilder där det förut bara var kvadrater. När player och enemy hade sprites så lade jag till animation. Denna animation skapas genom att skirva ut olika bilder väldigt snabbt. 

Att skriva ut och kunna styra player gick väldigt smidigt för mig på grund av att jag redan visste hur listeners funkade sen innan . Projectiles var lite nytt för mig men jag lyckades förstå hur det funkade relativt snabbt för jag kände igen lite grann sen innan. Userinterface lät som att det kanske skulle vara svårt men när jag bröt ner delarna som krävdes för att få det hela att funka så fattade jag ett det egentligen var relativt enkelt. Att bara skriva ut en enemy var enkelt men att få dem att röra sig som jag ville och att få dom att skapas på rätt ställe var lite svårare. Grafiken var det svåraste steget för mig på grund av att jag hade svårt att förstå sambandet kring all kod man skulle skriva. När jag fattade att det man egentligen gör med grafiken är att skriva ut bilder om och om igen så blev hela processen mycket simplare och jag lyckades få in fyra olika sprits, en till player och tre till enemy. 

Efter denna uppgift så har min kunskap kring Javascript blivit mycket större och jag har lärt mig saker som Sprites, timers och en utökad förståelse kring funktioner. Jag har även lärt mig hur viktigt det är med kommunikation när man arbetar i grupp och särskilt om de man jobbar med inte är personer man träffar väldigt ofta. Min förstålse av spel är nu större och vissa saker inom spel känns mycket simplare än vad de gjorde innan. 

Jag anser att denna uppgift är väldigt bra för att kunna utvecklas inom både Javascript och programmering generellt. Man får lära sig mer om de olika steg som krävs för att skapa ett spel men även om objekt orienterad programmering och man får lära sig allt detta på ett praktiskt sätt vilket jag verkligen uppskattar. Dock tror jag att instruktionerna till varje steg skulle kunna vara tydligare och mer utförliga så att man verkligen förstår varje steg. 


{
    "team": "Kosmiska blöttdjur",
    "creators": Noel ,
    "title": "Monster shooting",
    "description": "Skjut alla läskiga monster, Rör dig med upp och ner piltangenterna och skjut med a  ",
    "image": "",
    "url": "https://nn0el.github.io/game-base/",
    "git": "https://github.com/Nn0el/game-base"
},


