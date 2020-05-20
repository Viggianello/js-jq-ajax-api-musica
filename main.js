// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").
$(document).ready(function() {
	//Code
});

// // inserisco tramite la libreria handlebars i quadratini
// var quadratinigriglia = $('#entry-template').html();
// var template_function = Handlebars.compile(quadratinigriglia);
// for (var i = 0; i < 36; i++) {
//     var html_finale = template_function();
//     $('.griglia').append(html_finale);
// }
//
// // Associo ad ogni click del quadratino
// $(document).on('click','.quadratino',  function() {
//     // recupero il quadrato corrente
//     var quadratocorrente = $(this);
//     // richiamo ajax per recuperare un numero random tra 1 e 9
//     // questo è una funzione
//     $.ajax({
//         // qui parte l'oggetto
//         'url': 'https://flynn.boolean.careers/exercises/api/random/int',
//         // risponde con un numero random da 1 a 9
//         'method': 'GET',
//         'success': function(numero) {
//             // console.log(numero);
//             var numerorandom = numero.response;
//             numcolor(numerorandom, quadratocorrente)
//         }
//     }// fine oggetto
//     );
// }// chiusura funzione del click
// );// chiusura click
//
// // creo una funzione per associare il numero random hai colori
// function numcolor(numero, quad) {
//     // Se il numero (restituito dall'api) è <= 5,
//     if (numero<= 5) {
//         quad.removeClass('verde');
//         // il quadrato su cui l'utente ha cliccato diventa giallo
//         quad.addClass('giallo');
//     }
//     // allora il numero (restituito dall'api) è > 5
//     else {
//         quad.addClass('verde');
//         // var oky =$('.quadratino'){
//         //     classe:verde
//         // }
//     }
//     quad.append(numero);
// }
