# Prender
Pre-render links as the mouse cursor approaches them.

[Check it out on JSFiddle](http://jsfiddle.net/discomfort/HVPdC/)

## Dependencies
 * [jQuery](http://jquery.com/)
 * [jQuery MouseMotion](https://github.com/discom4rt/jquery-mousemotion)
 * [getElementsOnPath](https://github.com/discom4rt/getElementsOnPath)

## Example

	$(function() {
		Prender.start();
		// get that cursor bumpin
	});

## Caveats
 * The X-Frame-Options header stops some sites from being loaded in iframes to prevent certain attacks.  Unfortunately, this cripples Prender's functionality pretty thoroughly. Why do things have to be so secure!?
 * The MouseMotion library that Prender depends on is a little rough and may not pick up the direction of your mouse accurately.