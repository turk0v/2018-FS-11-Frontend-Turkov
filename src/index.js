const getReadableSize = function(size){
    let i = Math.floor(Math.log(size) / Math.log(1024));
    let final_string = ( size / Math.pow(1024, i) ).toFixed(2) + ' ' + ['байт', 'Кбайт', 'Мбайт', 'Гбайт', 'Тбайт'][i];
    return(final_string);
};
