Handlebars.registerHelper('ifIsBelow3',function(value){
  if (value < 3)
  {
    return true;
  }else
  {
    return false;
  }
});


Handlebars.registerHelper('ifIsZero', function(value, options) {
  if(value === 0) {
    return options.fn(this);
  }
  return options.inverse(this);
});