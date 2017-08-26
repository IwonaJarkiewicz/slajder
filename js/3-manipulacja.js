'use strict'

$(function () {

    //pobieranie tekstu
    var tekstParagrafuPierwszego = $('#paragraf').text();
    console.log(tekstParagrafuPierwszego);

    //dodawanie tekstu
    $('.paragraf').text(tekstParagrafuPierwszego);

    //dodawanie html
    $('.paragrafnext').html('To jest <strong>paragraf</strong> z dodanym <br> HTML');

    //dodanie treści na końcu selektora
    $('.paragrafnext').append('treść na końcu selektora');

    //dodanie treści za selektorem
    $('.paragrafnext').after('treść za selektorem');

    //usuwanie lelemntu i jego zawartości
    $('strong').remove();

    //usuwanie tylko elementu
    $('.paragraf').empty('');

    //dodawanie klasy
    $('h1').addClass('blue');

    //dodawanie atrybutu
    $(h1).attr('imie', 'Marcin');
});
