// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi, e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").
$(document).ready(function() {
	//Chiamata ajax
    $.ajax({
        // qui parte l'oggetto dei dischi dieci musicali
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(disco) {
        var infodisco = disco.response;
            // stampo le informazioni per ogni disco
            console.log(infodisco);

            stampahtml(infodisco);
            selectgeneri(infodisco);
        }
    }// fine oggetto
    );

    function stampahtml(infodischi) {
        var schedadisco = $('#entry-template').html();
        var template_function = Handlebars.compile(schedadisco);

        for (var i = 0; i < infodischi.length; i++) {
            var info= infodischi[i];
            var disco = {
                'poster': info.poster,
                'title' : info.title,
                'author': info.author,
                'year': info.year,
                'genre': info.genre,
                'classe': info.genre,
            }
            var html_finale = template_function(disco);
            $('.cds-container.container').append(html_finale);
        }
}
 function selectgeneri(infodischi) {
     // var generedisco = prompt('quale genere vuoi tra Rock, Pop, Jazz o Metal? ');
     // nascondo tutte le schede
     // $('.cd').addClass('invisible');
     // mostro solo quelle che l'utente ha richiesto
     // $('.cd.' + generedisco).removeClass('invisible');
     // console.log(generedisco);
     // for (var i = 0; i < infodischi.length; i++) {
     //     var info= infodischi[i];
     //     // console.log(info.genre);
         // if (info.genre == generedisco) {
         //     // info.addClass('invisible');
         //     // console.log('stessogenere');qua dentro entra
         //     info.classe= invisible;
         //    // info.genre ='invisible';
         //    // console.log(info.genre);
         //    var html_finale = template_function(disco);
         //    $('.cds-container.container').append(html_finale);
         // }
         // // console.log(info.genre);
     // }
 }

 // controllo l'input a sx a ogni tasto digitato (tranne canc e back-space se usassi keypress)
 $('.left .input-container').keyup(function(event){
     // recupero il testo dell utente e tiro via gli spazi inutili e lo rendo tutto minuscolo per un confronto ,indipendentemente dal fatto che sia maiuscolo e minuscolo, delle sole lettere
     var testo_utente = $('.left .input-container input').val().trim().toLowerCase();
     // stampo ciò che leggo
     // console.log('testo utente:' + testo_utente);
     // controllo che l'utente non ha digitato nulla(ha riempito l'input)
     if (testo_utente != '') {
         // all interno di liste-chat prendo ogni h1
         $('.cds-container .cd').each(function() {
         // recupero il testo di questo h1 e lo rendo tutto minuscolo
         var testo_genere = $(this).find('.genre').text().trim().toLowerCase();
         // stampo il testo di ogni h1
         console.log('testo h1:' + testo_genere);
         // verifico se è uguale a quello inserito
         if (testo_genere.includes(testo_utente)) {
             // allora mostro solo lui(h1)
             $(this).show();
             // stampo il testo inserito dall'utente se  è contenuto id uno dei testi presenti negli h1
             console.log('la digitazione inserita è inclusa nel nome sopra:' + testo_utente);

         }
         else {
             // allora nascondo il resto delle .riga
             $(this).hide();
         }
         })// chiudo l'each
     }// chiudo l'if controllo input diverso da stringa vuota
     else {// allora l'input è vuoto e rimostro tutte le .riga
         $('.cd').show();
     }
     // }   // chiudo l'if del 13
 });// chiudo il keyup


});
// quello che viene dal url
// {"success":true,"response":[{"poster":"https:\/\/www.onstageweb.com\/wp-content\/uploads\/2018\/09\/bon-jovi-new-jersey.jpg","title":"New Jersey","author":"Bon Jovi","genre":"Rock","year":"1988"},{"poster":"https:\/\/images.pyramidshop.com\/images\/_popup\/ACPPR48056.jpg","title":"Live at Wembley 86","author":"Queen","genre":"Pop","year":"1992"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/41JD3CW65HL.jpg","title":"Ten's Summoner's Tales","author":"Sting","genre":"Pop","year":"1993"},{"poster":"https:\/\/cdn2.jazztimes.com\/2018\/05\/SteveGadd-800x723.jpg","title":"Steve Gadd Band","author":"Steve Gadd Band","genre":"Jazz","year":"2018"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/810nSIQOLiL._SY355_.jpg","title":"Brave new World","author":"Iron Maiden","genre":"Metal","year":"2000"},{"poster":"https:\/\/upload.wikimedia.org\/wikipedia\/en\/9\/97\/Eric_Clapton_OMCOMR.jpg","title":"One more car, one more raider","author":"Eric Clapton","genre":"Rock","year":"2002"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/51rggtPgmRL.jpg","title":"Made in Japan","author":"Deep Purple","genre":"Rock","year":"1972"},{"poster":"https:\/\/images-na.ssl-images-amazon.com\/images\/I\/81r3FVfNG3L._SY355_.jpg","title":"And Justice for All","author":"Metallica","genre":"Metal","year":"1988"},{"poster":"https:\/\/img.discogs.com\/KOBsqQwKiNKH-q927oHMyVdDzSo=\/fit-in\/596x596\/filters:strip_icc():format(jpeg):mode_rgb():quality(90)\/discogs-images\/R-6406665-1418464475-6120.jpeg.jpg","title":"Hard Wired","author":"Dave Weckl","genre":"Jazz","year":"1994"},{"poster":"https:\/\/m.media-amazon.com\/images\/I\/71K9CbNZPsL._SS500_.jpg","title":"Bad","author":"Michael Jacjson","genre":"Pop","year":"1987"}]}
