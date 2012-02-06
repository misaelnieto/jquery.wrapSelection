/**
*  Demostration examples of jquery.wrapSelection
*
* These examples were written by Noe Nieto <nnieto@noenieto.com> The
* wrapSelection jQuery Plugin was written by Stephe Smith and Jeremy
* Peterson
*/

$(document).ready(function(){
    $('#test_area').mouseup(function(){
		$(this).wrapSelection().addClass('highlighted');
    });
});

