window.fbAsyncInit = function() {
    FB.init({
    appId            : '2322379567877703',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.3'
    });

    FB.ui({
        method: 'share',
        href: 'https://www.youtube.com/watch?v=P94hxfJEw-o'
    }, function(response){});
};


      