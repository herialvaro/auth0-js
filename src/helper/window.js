import objectHelper from './object';

function redirect(url) {
  debugger
  console.log('Hola return redirect. url: ', url);
  cordova.InAppBrowser.open(url, '_blank');
  //getWindow().location = url;
}

function getDocument() {
  return getWindow().document;
}

function getWindow() {
  return window;
}

function getOrigin() {
  var location = getWindow().location;
  var origin = location.origin;

  if (!origin) {
    origin = objectHelper.getOriginFromUrl(location.href);
  }

  return origin;
}

export default {
  redirect: redirect,
  getDocument: getDocument,
  getWindow: getWindow,
  getOrigin: getOrigin
};
