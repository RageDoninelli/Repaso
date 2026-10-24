const UNITS=[
 {title:'Bei tempi!',topic:'Passato prossimo, imperfetto e connettivi',rules:[['Imperfetto','Se usa para hábitos, descripciones y acciones en desarrollo en el pasado.','Da piccola andavo spesso al mare.'],['Passato prossimo','Presenta un acontecimiento terminado.','Ieri ho comprato un libro.'],['Mentre / quando','Mentre suele introducir una acción en desarrollo; cuando puede situar un acontecimiento.','Mentre studiavo, è arrivata Anna.']]},
 {title:'E tu che cosa faresti?',topic:'Condizionale semplice e consigli',rules:[['Condizionale semplice','Expresa deseos, consejos y peticiones corteses.','Al tuo posto parlerei con lei.'],['Formas irregulares','Algunos verbos cambian la raíz: essere → sarei; avere → avrei; fare → farei.','Vorrei un caffè, per favore.']]},
 {title:'Mamma mia che prezzi!',topic:'Condizionale composto e pronomi',rules:[['Condizionale composto','Condicional de essere o avere + participio pasado; expresa, entre otras cosas, deseos o posibilidades no realizados.','Avrei comprato la giacca, ma era troppo cara.'],['Pronombres combinados','Dos pronombres átonos pueden combinarse: me lo, te la, glielo, ce ne.','Mi dai il libro? Sì, te lo do.']]},
 {title:'Chissà come sarà?',topic:'Futuro semplice e previsioni',rules:[['Futuro semplice','Se usa para hechos futuros y predicciones.','Domani partirò presto.'],['Futuro irregolare','Algunos verbos tienen raíz irregular: essere → sar-, avere → avr-, andare → andr-.','L’anno prossimo saremo in Italia.']]},
 {title:'Se...',topic:'Periodo ipotetico e futuro composto',rules:[['Periodo ipotetico reale','Se + presente, presente o futuro para condiciones posibles.','Se ho tempo, ti chiamo.'],['Futuro composto','Futuro de essere/avere + participio; expresa una acción anterior a otra futura.','Quando avrò finito, uscirò.'],['Pronomi relativi','Che une oraciones; cui suele aparecer después de una preposición.','Il libro di cui parlo è interessante.']]},
 {title:"Che c’è di meglio?",topic:'Comparativi, superlativi e passato remoto',rules:[['Comparativo','Più/meno ... di o che, según los términos comparados.','Luca è più alto di Marco.'],['Superlativo','Il più / la più indica el relativo; -issimo expresa un grado muy alto.','Questa città è bellissima.'],['Passato remoto','Tiempo narrativo frecuente en textos históricos y literarios.','Dante nacque nel 1265.']]},
 {title:'Tutto in regola?',topic:'Imperativo informale e ci',rules:[['Imperativo informale','Para dar instrucciones directas: parla, prendi, dormi; algunos verbos son irregulares.','Apri la finestra, per favore.'],['Imperativo con pronombres','En el imperativo afirmativo informal, el pronombre suele unirse al verbo.','Dimmi la verità.'],['Ci','Puede sustituir complementos introducidos por a y referirse a lugares.','Vai a Roma? Sì, ci vado.']]},
 {title:'Che cosa ne pensi?',topic:'Congiuntivo presente',rules:[['Congiuntivo presente','Aparece frecuentemente después de expresiones de opinión, duda, deseo y temor.','Penso che Maria abbia ragione.'],['Formas irregulares','Essere → sia; avere → abbia; fare → faccia; andare → vada.','Spero che tu stia bene.']]},
 {title:'Stili di vita',topic:'Congiuntivo e imperativo formale',rules:[['Desideri e necessità','Es frecuente el subjuntivo después de è importante che, voglio che, spero che.','È necessario che voi siate puntuali.'],['Imperativo formale','Para Lei se usan formas del congiuntivo presente.','Signora, entri pure.'],['Sapere / potere','Sapere expresa conocimiento o habilidad aprendida; potere, posibilidad o permiso.','So nuotare, ma oggi non posso.']]},
 {title:'Prima che sia troppo tardi!',topic:'Congiuntivo passato e connettivi',rules:[['Congiuntivo passato','Congiuntivo presente de essere/avere + participio pasado.','Credo che siano già arrivati.'],['Prima che / prima di','Prima che introduce una oración con subjuntivo; prima di va con infinitivo.','Ti chiamo prima che tu parta.'],['Espressioni impersonali','È possibile che / è importante che suelen llevar congiuntivo.','È possibile che abbiano dimenticato.']]}
];
const Q=[];
function add(u,stem,options,answer,explain,tag='Pratica'){Q.push({u,stem,options,answer,explain,tag});}
// All questions are newly authored; book used for thematic alignment, not reproduced.
add(0,'Da bambina, Lucia ___ ogni estate dai nonni.',['andava','è andata','andrà'],0,'Andava: hábito repetido en el pasado → imperfetto.');
add(0,'Ieri Marco ___ un nuovo computer.',['comprava','ha comprato','comprerà'],1,'Ieri + acción terminada: ha comprato.');
add(0,'Mentre io ___, il telefono ha squillato.',['leggevo','ho letto','leggerò'],0,'Leggevo: acción en desarrollo interrumpida por otra.');
add(0,'Quando eravamo piccoli, ___ in campagna.',['abbiamo abitato','abitavamo','abiteremo'],1,'Descripción de una situación pasada: abitavamo.');
add(0,'Siccome era tardi, ___ un taxi.',['prendevamo sempre','abbiamo preso','prenderemo'],1,'Acción puntual terminada: abbiamo preso.');
add(0,'«Hai comprato delle mele?» «Sì, ___ ho comprate tre.»',['ne','ci','lo'],0,'Ne sustituye una cantidad de algo; comprate concuerda con mele.');
add(0,'___ pioveva, siamo rimasti a casa.',['Perciò','Siccome','Dopo'],1,'Siccome introduce la causa.');
add(0,'Avevo fame, ___ ho preparato un panino.',['perciò','siccome','mentre'],0,'Perciò introduce la consecuencia.');
add(0,'Luca ___ quando è arrivata sua madre.',['dormiva','ha dormito','dormirà'],0,'Dormiva expresa una acción en curso.');
add(0,'Sabato scorso noi ___ al cinema.',['andavamo','siamo andati','andremo'],1,'Sabato scorso y evento concreto: siamo andati.');
add(1,'Al tuo posto, io ___ di più.',['studierò','studierei','studiavo'],1,'Consejo hipotético: condizionale semplice.');
add(1,'«___ un bicchiere d’acqua, per favore.»',['Vorrei','Volevo','Vorrò'],0,'Vorrei es una petición cortés.');
add(1,'Se fossi in te, ___ con il medico.',['parlerei','parlerò','parlavo'],0,'Parlerei expresa un consejo hipotético.');
add(1,'Noi ___ volentieri in Italia.',['viaggeremmo','viaggiamo','viaggiavamo'],0,'Viaggeremmo es condizionale para noi.');
add(1,'«Che cosa ___ tu al mio posto?»',['faresti','farai','facevi'],0,'Faresti es el condicional de fare para tu.');
add(1,'Per fare questa torta ___ tre uova.',['ci vogliono','ci vuole','bisogna di'],0,'Ci vogliono concuerda con tre uova (plural).');
add(1,'Per arrivare in tempo, ___ partire presto.',['bisogna','ci vogliono','serve di'],0,'Bisogna + infinitivo expresa necesidad general.');
add(1,'«Quanti libri hai?» «___ ho cinque.»',['Ne','Li','Ci'],0,'Ne sustituye una cantidad de libros.');
add(1,'Io ___ molto felice di aiutarti.',['sarei','sarò','sono stato'],0,'Sarei: condicional de essere para io.');
add(1,'Loro ___ una casa più grande.',['vorrebbero','vogliono ieri','vorranno ieri'],0,'Vorrebbero expresa deseo cortés o hipotético.');
add(2,'Avrei comprato le scarpe, ma ___ troppo care.',['erano','saranno','siano'],0,'Erano explica por qué no se realizó la compra.');
add(2,'Io ___ voluto visitare Roma, ma non avevo tempo.',['avrei','sarei','avrò'],0,'Avrei voluto es condizionale composto de volere.');
add(2,'Lei ___ partita prima, ma il treno era in ritardo.',['avrebbe','sarebbe','avrà'],1,'Partire utiliza essere: sarebbe partita.');
add(2,'«Mi presti la penna?» «Sì, ___ presto.»',['te la','te lo','glielo'],0,'Penna es femenino singular: te la presto.');
add(2,'«Hai dato il libro a Marco?» «Sì, ___ ho dato.»',['glielo','gliela','me ne'],0,'Gli + lo → glielo, por libro masculino singular.');
add(2,'___ bel vestito!',['Che','Quelli','Belli'],0,'Che bel vestito es una exclamación natural.');
add(2,'___ zaino è molto costoso.',['Quello','Quel','Quei'],0,'Ante z + consonante: quello zaino.');
add(2,'Per preparare la cena ___ due pomodori.',['servono','serve','basta'],0,'Servono concuerda con dos tomates.');
add(2,'Io ___ mangiato volentieri, ma ero già sazio.',['avrei','sarei','avrò'],0,'Mangiare utiliza avere: avrei mangiato.');
add(2,'«Porti i documenti a noi?» «Sì, ___ porto.»',['ve li','ce li','ce lo'],1,'A noi + i documenti → ce li porto.');
add(3,'Domani noi ___ presto.',['partiremo','partivamo','siamo partiti'],0,'Partiremo es futuro semplice para noi.');
add(3,'Tra un anno io ___ in Italia.',['sarò','ero','sia'],0,'Sarò es futuro de essere.');
add(3,'Secondo le previsioni, domani ___ freddo.',['farà','faceva','faccia'],0,'Farà es futuro de fare.');
add(3,'Loro ___ una risposta domani.',['avranno','avevano','abbiano'],0,'Avranno es futuro de avere.');
add(3,'«Che cosa ___ dopo la laurea?»',['farai','facevi','facessi'],0,'Farai es futuro de fare para tu.');
add(3,'L’anno prossimo Maria ___ a Milano.',['vivrà','viveva','vivesse'],0,'Vivrà indica una situación futura.');
add(3,'In Italia ___ molto bene.',['si mangia','si mangiano bene','si mangiare'],0,'Si mangia es construcción impersonal.');
add(3,'Tra poco voi ___ la verità.',['saprete','sapevate','sappiate'],0,'Saprete es futuro de sapere para voi.');
add(3,'Se tutto va bene, ___ a trovarti.',['verrò','venivo','venga'],0,'Verrò es futuro de venire.');
add(3,'Forse Luca non risponde perché ___ occupato.',['sarà','sarebbe stato','fosse'],0,'Sar à (sarà) puede expresar una suposición sobre el presente.');
add(4,'Se domani piove, ___ a casa.',['resteremo','resteremmo ieri','restassimo'],0,'Condición real: se + presente y futuro.');
add(4,'Se ho tempo, ti ___.',['chiamo','chiamassi','chiamerei stato'],0,'Se + presente puede combinarse con presente.');
add(4,'Quando ___ finito, uscirò.',['avrò','avrei','abbia'],0,'Avrò finito: futuro composto para una acción anterior a otra futura.');
add(4,'Appena loro ___ arrivati, cominceremo.',['saranno','sarebbero','siano'],0,'Saranno arrivati es futuro composto con essere.');
add(4,'Il ragazzo ___ lavora qui è mio cugino.',['che','cui','di cui'],0,'Che funciona como sujeto de la oración relativa.');
add(4,'La persona ___ parlo è gentile.',['di cui','che','a che'],0,'Parlare di qualcuno → di cui.');
add(4,'Se studi con costanza, ___ progressi.',['farai','faresti ieri','facessi'],0,'Condición posible y consecuencia futura.');
add(4,'Quando ___ a casa, ti telefonerò.',['arriverò','arrivassi','arriverei'],0,'Cuando se refiere a un futuro, puede usarse futuro semplice.');
add(4,'«Vai spesso in biblioteca?» «Sì, ___ vado.»',['ci','ne','lo'],0,'Ci sustituye in biblioteca como lugar.');
add(4,'Questo è il libro ___ ti ho parlato.',['di cui','che di','a che'],0,'Parlare di → di cui.');
add(5,'Anna è ___ alta di sua sorella.',['più','molto','tanta'],0,'Comparativo de superioridad: più ... di.');
add(5,'Questo esercizio è meno difficile ___ quello.',['di','che','come di'],0,'Comparación de dos elementos: meno ... di.');
add(5,'La pizza è ___ buona quanto la pasta.',['tanto','più di','meno che'],0,'Tanto ... quanto expresa igualdad.');
add(5,'Questo è ___ film più interessante della settimana.',['il','lo','un'],0,'Superlativo relativo: il più interessante.');
add(5,'La lezione è stata ___.',['interessantissima','più interessantissima','molto più interessantissima'],0,'-issima forma el superlativo absoluto.');
add(5,'Preferisco leggere ___ guardare la televisione.',['piuttosto che','di','più di che'],0,'Piuttosto che expresa preferencia entre acciones.');
add(5,'Dante ___ nel 1265.',['nacque','nasceva sempre','nascerà'],0,'Nacque es passato remoto de nascere.');
add(5,'Il museo è ___ grande del teatro.',['meno','tanto di','molto che'],0,'Meno ... di expresa inferioridad.');
add(5,'Roma è una delle città ___ visitate d’Italia.',['più','molto','tante'],0,'Una delle ... più visitate expresa superlativo relativo.');
add(5,'Questo zaino è più pratico ___ elegante.',['che','di','del'],0,'Al comparar dos cualidades del mismo objeto suele usarse che.');
add(6,'Marco, ___ la finestra, per favore.',['apri','apra','apre'],0,'Imperativo informal de aprire para tu: apri.');
add(6,'Ragazzi, ___ attenzione!',['fate','fanno','facciate'],0,'Imperativo para voi de fare: fate.');
add(6,'Lucia, non ___ così veloce!',['correre','corri','corra'],0,'Imperativo negativo de tu: non + infinitivo.');
add(6,'«Dimmi la verità!» significa:',['Di’ la verità a me.','Dici la verità a lui.','Diamo la verità.'],0,'Dimmi = di’ + mi, imperativo con pronombre.');
add(6,'«Vai al supermercato?» «Sì, ___ vado.»',['ci','ne','lo'],0,'Ci puede sustituir un complemento de lugar.');
add(6,'Paolo, ___ pazienza!',['abbi','hai','abbia'],0,'Abbi es imperativo informal de avere.');
add(6,'Per favore, ___ il libro a tua sorella.',['dai','dia','dà'],0,'Dai es imperativo de dare para tu.');
add(6,'«Prendi questi documenti e ___ al direttore.»',['portali','portagli','portane'],0,'Portali = porta + li, referido a documenti.');
add(6,'Non ___ il telefono durante la lezione!',['usare','usi','usando'],0,'Imperativo negativo informal: non usare.');
add(6,'«Pensi spesso a quel problema?» «Sì, ___ penso.»',['ci','ne','lo'],0,'Pensare a qualcosa → pensarci.');
add(7,'Penso che Marco ___ ragione.',['abbia','ha','avrà'],0,'Penso che expresa opinión y suele llevar congiuntivo.');
add(7,'Spero che tu ___ bene.',['stia','stai','starai'],0,'Spero che + congiuntivo presente: stia.');
add(7,'Credo che loro ___ occupati.',['siano','sono','saranno'],0,'Siano es congiuntivo presente de essere.');
add(7,'È possibile che Giulia ___ più tardi.',['venga','viene','verrà'],0,'È possibile che + congiuntivo: venga.');
add(7,'Temo che lui non ___ la risposta.',['sappia','sa','saprà'],0,'Temo che + congiuntivo presente: sappia.');
add(7,'Voglio che voi ___ attenzione.',['facciate','fate','farete'],0,'Facciate es congiuntivo presente de fare para voi.');
add(7,'Non penso che questa soluzione ___ facile.',['sia','è','sarà'],0,'Non penso che expresa opinión subjetiva: sia.');
add(7,'Spero che Maria ___ venire.',['possa','può','potrà'],0,'Possa es congiuntivo presente de potere.');
add(7,'È meglio che noi ___ subito.',['partiamo','partiremo','partivamo'],0,'Partiamo puede ser indicativo o congiuntivo; aquí funciona como congiuntivo.');
add(7,'Credo che tu ___ ragione.',['abbia','hai','avrai'],0,'Congiuntivo presente de avere para tu: abbia.');
add(8,'È importante che voi ___ puntuali.',['siate','siete','sarete'],0,'Siate es congiuntivo presente de essere.');
add(8,'Desidero che lei ___ felice.',['sia','è','sarà'],0,'Desidero che introduce deseo y subjuntivo.');
add(8,'Signora, ___ pure!',['entri','entra','entrate'],0,'Imperativo formal de entrare para Lei: entri.');
add(8,'Signore, ___ qui, per favore.',['aspetti','aspetta','aspettate'],0,'Imperativo formal: aspetti.');
add(8,'«Sai nuotare?» «Sì, ___ nuotare.»',['so','posso di','conosco'],0,'Sapere + infinitivo expresa una habilidad aprendida.');
add(8,'Oggi non ___ uscire: devo lavorare.',['posso','so','conosco'],0,'Potere indica posibilidad o permiso.');
add(8,'Spero che i miei amici ___ presto.',['arrivino','arrivano','arriveranno'],0,'Arrivino es congiuntivo presente para loro.');
add(8,'Una ___ di persone significa circa quindici persone.',['quindicina','decina','ventina'],0,'Una quindicina equivale aproximadamente a quince.');
add(8,'«Non è facile, ma ___!»',['ce la farò','ci farò la','lo farò ce'],0,'Farcela significa conseguir algo o salir adelante.');
add(8,'È necessario che tu ___ la verità.',['dica','dici','dirai'],0,'Dica es congiuntivo presente de dire.');
add(9,'Credo che Anna ___ già partita.',['sia','è','sarà'],0,'Sia partita es congiuntivo passato con essere.');
add(9,'Penso che loro ___ capito tutto.',['abbiano','hanno','avranno'],0,'Abbiano capito es congiuntivo passato.');
add(9,'Ti chiamerò prima che tu ___.',['parta','parti','partirai'],0,'Prima che introduce congiuntivo: parta.');
add(9,'Prima di ___, chiudi le finestre.',['uscire','esca','esci'],0,'Prima di + infinitivo: uscire.');
add(9,'È possibile che noi ___ un errore.',['abbiamo fatto','facciamo','faremo'],0,'Abbiamo fatto también es congiuntivo passato para noi en este contexto.');
add(9,'Mi dispiace che voi non ___ potuto venire.',['abbiate','avete','avrete'],0,'Abbiate potuto es congiuntivo passato para voi.');
add(9,'È importante che tutti ___ il problema.',['capiscano','capiscono','capiranno'],0,'Capiscano es congiuntivo presente para loro.');
add(9,'Non credo che Marco ___ già letto il messaggio.',['abbia','ha','avrà'],0,'Abbia letto es congiuntivo passato.');
add(9,'___ che hai detto è interessante.',['Quello','Cui','Prima'],0,'Quello che introduce una oración relativa.');
add(9,'Sono contenta che tu ___ superato l’esame.',['abbia','hai','avrai'],0,'Abbia superato es congiuntivo passato.');
// Conjugation drills with verified forms and 3 choices; add breadth and repetition.
const DRILLS=[
 {u:1,verb:'essere',tense:'condizionale semplice',forms:['sarei','saresti','sarebbe','saremmo','sareste','sarebbero'],wrong:['sarò','ero']},
 {u:1,verb:'avere',tense:'condizionale semplice',forms:['avrei','avresti','avrebbe','avremmo','avreste','avrebbero'],wrong:['avrò','avevo']},
 {u:1,verb:'fare',tense:'condizionale semplice',forms:['farei','faresti','farebbe','faremmo','fareste','farebbero'],wrong:['farò','facevo']},
 {u:1,verb:'andare',tense:'condizionale semplice',forms:['andrei','andresti','andrebbe','andremmo','andreste','andrebbero'],wrong:['andrò','andavo']},
 {u:3,verb:'essere',tense:'futuro semplice',forms:['sarò','sarai','sarà','saremo','sarete','saranno'],wrong:['sarei','ero']},
 {u:3,verb:'avere',tense:'futuro semplice',forms:['avrò','avrai','avrà','avremo','avrete','avranno'],wrong:['avrei','avevo']},
 {u:3,verb:'andare',tense:'futuro semplice',forms:['andrò','andrai','andrà','andremo','andrete','andranno'],wrong:['andrei','andavo']},
 {u:3,verb:'fare',tense:'futuro semplice',forms:['farò','farai','farà','faremo','farete','faranno'],wrong:['farei','facevo']},
 {u:7,verb:'essere',tense:'congiuntivo presente',forms:['sia','sia','sia','siamo','siate','siano'],wrong:['sono','sarò']},
 {u:7,verb:'avere',tense:'congiuntivo presente',forms:['abbia','abbia','abbia','abbiamo','abbiate','abbiano'],wrong:['ho','avrò']},
 {u:7,verb:'fare',tense:'congiuntivo presente',forms:['faccia','faccia','faccia','facciamo','facciate','facciano'],wrong:['faccio','farò']},
 {u:7,verb:'andare',tense:'congiuntivo presente',forms:['vada','vada','vada','andiamo','andiate','vadano'],wrong:['vado','andrò']},
 {u:8,verb:'potere',tense:'congiuntivo presente',forms:['possa','possa','possa','possiamo','possiate','possano'],wrong:['posso','potrò']},
 {u:8,verb:'dovere',tense:'congiuntivo presente',forms:['debba','debba','debba','dobbiamo','dobbiate','debbano'],wrong:['devo','dovrò']},
 {u:8,verb:'sapere',tense:'congiuntivo presente',forms:['sappia','sappia','sappia','sappiamo','sappiate','sappiano'],wrong:['so','saprò']}
];
const persons=['io','tu','lui/lei','noi','voi','loro'];
DRILLS.forEach(d=>d.forms.forEach((form,i)=>{
 const distractors=[d.forms[(i+1)%6],d.wrong[i%2]];
 const opts=[form,...distractors.filter(x=>x!==form)].slice(0,3);
 while(opts.length<3)opts.push(d.wrong[(i+1)%2]);
 const rot=i%3; const shuffled=opts.slice(rot).concat(opts.slice(0,rot));
 add(d.u,`Completa la coniugazione: ${persons[i]} — ${d.verb} (${d.tense})`,shuffled,shuffled.indexOf(form),`${persons[i]} ${form}: forma del ${d.tense} del verbo ${d.verb}.`,'Coniugazioni');
}));
