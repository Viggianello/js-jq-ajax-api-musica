// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").
$(document).ready(function() {
	//Chiamata ajax
    $.ajax({
        // qui parte l'oggetto dei dischi musicali
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(disco) {
            var infodisco = disco.response;
            // stampo le informazioni per ogni disco
            console.log(infodisco);
            // di ogni disco scindo le informazioni
        }
    }// fine oggetto
    );
});
// quello che viene dal url
// {"success":true,"response":[{"poster":"https:\/\/www.onstageweb.com\/wp-content\/uploads\/2018\/09\/bon-jovi-new-jersey.jpg","title":"New Jersey","author":"Bon Jovi","genre":"Rock","year":"1988"},{"poster":"https:\/\/images.pyramidshop.com\/images\/_popup\/ACPPR48056.jpg","title":"Live at Wembley 86","author":"Queen","genre":"Pop","year":"1992"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/41JD3CW65HL.jpg","title":"Ten's Summoner's Tales","author":"Sting","genre":"Pop","year":"1993"},{"poster":"https:\/\/cdn2.jazztimes.com\/2018\/05\/SteveGadd-800x723.jpg","title":"Steve Gadd Band","author":"Steve Gadd Band","genre":"Jazz","year":"2018"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/810nSIQOLiL._SY355_.jpg","title":"Brave new World","author":"Iron Maiden","genre":"Metal","year":"2000"},{"poster":"https:\/\/upload.wikimedia.org\/wikipedia\/en\/9\/97\/Eric_Clapton_OMCOMR.jpg","title":"One more car, one more raider","author":"Eric Clapton","genre":"Rock","year":"2002"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51rggtPgmRL.jpg","title":"Made in Japan","author":"Deep Purple","genre":"Rock","year":"1972"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/81r3FVfNG3L._SY355_.jpg","title":"And Justice for All","author":"Metallica","genre":"Metal","year":"1988"},{"poster":"https:\/\/img.discogs.com\/KOBsqQwKiNKH-q927oHMyVdDzSo=\/fit-in\/596x596\/filters:strip_icc():format(jpeg):mode_rgb():quality(90)\/discogs-images\/R-6406665-1418464475-6120.jpeg.jpg","title":"Hard Wired","author":"Dave Weckl","genre":"Jazz","year":"1994"},{"poster":"https:\/\/m.media-amazon.com\/images\/I\/71K9CbNZPsL._SS500_.jpg","title":"Bad","author":"Michael Jacjson","genre":"Pop","year":"1987"}]}



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
