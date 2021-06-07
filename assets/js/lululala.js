var jawab_1 = ['2988101'];
var jawab_2 = ['109798954','-455462009']
var jawab_3 = ['3500203'];
var jawab_4 = ['-891218456','-473559108'];
var jawab_5 = ['100890845'];
var jawab_6 = ['1687912367'];
var jawab_7 = ['-891202001','-1807097424'];
var jawab_8 = ['-52706282'];

$("#jawab").click(function(){
    var nilai = 0;
    // console.log($("#no_1").val());
    in_1 = stringToHash( $("#no_1").val().toLowerCase());
    in_2 = stringToHash( $("#no_2").val().toLowerCase());
    in_3 = stringToHash( $("#no_3").val().toLowerCase());
    in_4 = stringToHash( $("#no_4").val().toLowerCase());
    in_5 = stringToHash( $("#no_5").val().toLowerCase());
    in_6 = stringToHash( $("#no_6").val().toLowerCase());
    in_7 = stringToHash( $("#no_7").val().toLowerCase());
    in_8 = stringToHash( $("#no_8").val().toLowerCase());
    
    if (jawab_1.includes(in_1)) {
        nilai +=1;
    }
    if (jawab_2.includes(in_2)) {
        nilai +=1;
    }
    if (jawab_3.includes(in_3)) {
        nilai +=1;
    }
    if (jawab_4.includes(in_4)) {
        nilai +=1;
    }
    if (jawab_5.includes(in_5)) {
        nilai +=1;
    }
    if (jawab_6.includes(in_6)) {
        nilai +=1;
    }
    if (jawab_7.includes(in_7)) {
        nilai +=1;
    }
    if (jawab_8.includes(in_8)) {
        nilai +=1;
    }
    $('h2').text(nilai+'/8');
    
})
function stringToHash(string) {
                  
    var hash = 0;
      
    if (string.length == 0) return hash;
      
    for (i = 0; i < string.length; i++) {
        char = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
      
    return ''+hash;
}