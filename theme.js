(function(){
  var theme;
  try{
    theme=localStorage.getItem('rd_theme');
    if(theme){
      try{
        var stored=JSON.parse(theme);
        if(typeof stored==='string')theme=stored;
      }catch(e){}
    }
  }catch(e){}
  if(theme!=='dark'&&theme!=='light')theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
  document.documentElement.setAttribute('data-theme',theme);
  var themeColor=document.querySelector('meta[name="theme-color"]');
  if(themeColor)themeColor.setAttribute('content',theme==='dark'?'#000000':'#f5f1e9');
})();
