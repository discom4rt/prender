# Prender
Pre-render links as the mouse cursor approaches them.  The idea is to retrieve and cache at least some of the resources for the target page before the navigation event.  The concept of prefetching exists in the HTML 5 spec and Chrome supports the ```rel="prerender"``` attribute on anchor tags, which instructs the browser to render the target page in an invisible tab which is then swapped in upon navigation. In this case, a hidden iframe acts as the invisible tab, but there is no swapping functionality.

[Check it out on JSFiddle](http://jsfiddle.net/discomfort/HVPdC/)

## Dependencies
 * [jQuery](http://jquery.com/)
 * [jQuery MouseMotion](https://github.com/mhgbrown/jquery-mousemotion)
 * [getElementsOnPath](https://github.com/mhgbrown/getElementsOnPath)

## Example

	$(function() {
		Prender.start();
		// get that cursor bumpin
	});

## Caveats
 * The X-Frame-Options header stops some sites from being loaded in iframes toz prevent certain attacks.  Unfortunately, this cripples Prender's functionality pretty thoroughly. Why do things have to be so secure!?
 * The MouseMotion library that Prender depends on is a little rough and may not pick up the direction of your mouse accurately.

## Future Considerations
 * Implement swapping for same domain frames
 * Increase responsiveness of loading
 * Use more than one frame to render some of the links that fall on the cursor path