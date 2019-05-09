//Variable moteur: 
//{ arriere/droit, avant/droite, arriere/gauche, avant/gauche }
int motor_avant[]    = {13, 5, 7, 2};
int motor_arriere[]  = {12, 4, 8, 3};
int motor_control[]  = {11,10, 9, 6};

//Variable port serie
int donneeRecu = -1;
int drapeau  = 0; //1=CMDAvance ; 2=CMDRecule ; 3=CMDDroit ; 4=CMDGauche

//Variable pour arreter les moteurs quand aucune donnee est recu apres x temps
double timer = 0;


void setup()
{
  //Initialisation general des 4 servos moteurs
   for (int i=0; i <4; i++){
    pinMode(motor_avant[i],OUTPUT);
    pinMode(motor_arriere[i],OUTPUT);
    pinMode(motor_control[i],OUTPUT); 
   }

  //Initialisation du port serie
  Serial.begin(9600);

  //les moteurs sont en arret initialement
  Stop();
}

//Programme principal
void loop()
{

  while (Serial.available() > 0) {
      // read the incoming byte:
      donneeRecu = Serial.read();
      timer =0;
      
      switch (donneeRecu){
        case 'u':
          if (drapeau != 1){
            Avance();
            drapeau = 1;
          }
          break;
        case 'd':
          if (drapeau != 2){
            Recule();
            drapeau = 2;
          }
          break;
        case 'r':
          if (drapeau != 3){
            Droite();
            drapeau = 3;
          }
          break;
        case 'l':
          if (drapeau != 4){
            Gauche();
            drapeau = 4;
          }
          break;
        case 'e':
          //le robot vient de toucher un mur
          if (drapeau !=5){
            //on recule
            Recule();
            //on ignore les autres commandes dans le port serie
            for(int i=0; i<3000; i++){
              if (Serial.available() > 0){
                Serial.read();
              }
            }
            drapeau = 5;
          }
          break;
            
      }
      
  }

  //horloge bidon qui arrete les moteurs apres quelques milliseconds (essaie erreur)
  timer++;
  if ((timer > 35000) && drapeau != 0){
    timer =0;
    drapeau = 0;
    Stop();
  }
}


//#################  FONCTIONS CONTROL MOTOR DEBUT  #######################################

void Recule(){
   //Moteurs { arriere/droit, avant/droit, arriere/gauche, avant/gauche } reculent
   for (int i=0; i <4; i++){
      digitalWrite(motor_avant[i],1);
      digitalWrite(motor_arriere[i],0);
      digitalWrite(motor_control[i],1);
   }
}

void Avance(){
   //Moteurs { arriere/droit, avant/droit, arriere/gauche, avant/gauche } avancent
   for (int i=0; i <4; i++){
      digitalWrite(motor_avant[i],0);
      digitalWrite(motor_arriere[i],1);
      digitalWrite(motor_control[i],1);
   }
}

void Droite(){
    //Moteurs { arriere/droit, avant/droit } reculent
     for (int i=2; i <4; i++){
      digitalWrite(motor_avant[i],1);
      digitalWrite(motor_arriere[i],0);
      digitalWrite(motor_control[i],1);
    }
    
     //Moteurs { arriere/gauche, avant/gauche } avancent
     for (int i=0; i <2; i++){
      digitalWrite(motor_avant[i],0);
      digitalWrite(motor_arriere[i],1);
      digitalWrite(motor_control[i],1);
   }
}

void Gauche(){
      //Moteurs { arriere/droit, avant/droit } avancent
     for (int i=2; i <4; i++){
      digitalWrite(motor_avant[i],0);
      digitalWrite(motor_arriere[i],1);
      digitalWrite(motor_control[i],1);
    }
    
     //Moteurs { arriere/gauche, avant/gauche } reculent
     for (int i=0; i <2; i++){
      digitalWrite(motor_avant[i],1);
      digitalWrite(motor_arriere[i],0);
      digitalWrite(motor_control[i],1);
   }
}

void Stop(){
     //Moteurs { arriere/droit, avant/droit, arriere/gauche, avant/gauche } arretent
   for (int i=0; i <4; i++){
      digitalWrite(motor_avant[i],0);
      digitalWrite(motor_arriere[i],0);
      digitalWrite(motor_control[i],0);
   }
}

//#################  FONCTIONS CONTROL MOTOR FIN  ##########################################

