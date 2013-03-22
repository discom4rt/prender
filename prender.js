/**
 * Prender: Pre-render links as the mouse cursor approaches them.
 *
 * I'm not so hot on this dependency on jQuery, but it makes my life easier.
 *
 * @requires jQuery
 * @requires jQuery MouseMotion
 * @requires getElementsOnPath
 **/
(function( window, document, $, undefined ) {

  var Prender = function() {
    var LOADER_FRAME_ID = 'prender-loader',
      documentElement = document.documentElement,
      loaderFrame;

    /**
     * Start prerendering
     **/
    this.start = function() {
      setup();
    };

    /**
     * Stop prerendering.  Removes the loader frame and
     * unbinds the mousemove event from the document element.
     **/
    this.stop = function() {
      teardown();
    };

    /**
     * Set up the necessary resources to begin pre-rendering.  Creates
     * an iframe off the screen to deal with the loading and attaches
     * a mousemove event to the document element.
     **/
    function setup() {
      loaderFrame = document.createElement( 'iframe' );
      loaderFrame.setAttribute( 'id', LOADER_FRAME_ID );

      // position the frame off the screen
      loaderFrame.style.position = 'absolute';
      loaderFrame.style.left = '-9999px';

      document.body.appendChild( loaderFrame );

      // how do we unbind this without using mousemove?
      $( documentElement ).mousemotion( prerender );
    }

    /**
     * If the mouse cursor is headed toward a link, have the loader frame
     * start rendering that links destination.
     *
     * @param {Object} event The event that triggered the prerender.
     * @param {MouseMotion.Frame} frame An object containing information
     *  about the mouse's motion.
     **/
    function prerender( event, frame ) {
      var x1 = frame.x,
        y1 = frame.y,
        x2 = Math.ceil( x1 + Math.cos( frame.direction * 180/Math.PI ) ),
        y2 = Math.ceil( y1 + Math.sin( frame.direction * 180/Math.PI ) ),
        anchor = document.getFirstElementOnPath( x1, y1, x2, y2, 'a' ),
        previousUrl = loaderFrame.getAttribute( 'src' ),
        newUrl;

      if ( anchor ) {
        newUrl = anchor.getAttribute( 'href' );
      }

      if( newUrl && newUrl.length && previousUrl !== newUrl ) {
        loaderFrame.setAttribute( 'src', newUrl );
      }
    }

    /**
     * Free the resources that handle pre-rendering, removing the
     * loader frame and unbinding the mousemove event from the
     * document element.
     **/
    function teardown() {
      loaderFrame.parentNode.removeChild( loaderFrame );
      loaderFrame = undefined;

      $( documentElement ).unbind( 'mousemove' );
    }
  };

  window.Prender = new Prender();

})( window, document, jQuery );