tailwind.config = {
    theme: {
      extend: {
        // color start
        colors: {
          headerColor:'#FFD7C8',
          headertext:'#29313D',
          bannerA:'#FF5538',
          bannerH1:'#29313D',
          bannerbox:'#ebe8e8',
          servicebg:'#FBF3F0CC',
          whybox:'#FDF9F8',
          project:'#FDF9F8',
          projectA:'#FFDDD7',
        },
        // color end
        // container start
        maxWidth: {
            'headerContainer': '1408px',
          },
        // container end
        // fonts family
        fontFamily: {
            'openS':['Open Sans', 'sans-serif'],
            'Nunito':['Nunito', 'sans-serif'],
            'Poppins':['Poppins', 'sans-serif'],
          },
        // fonts family
        // backround start
        backgroundImage: {
            'banner_bg':"url('images/banner_bg.png')",
            'work_bg':"url('images/work_bg.png')",
            'contuck_bg':"url('images/contuckbg.png')",
            
          }
        // backround start
      }
    }
  }
 