# sprity-scss

> A scss style processor for [sprity](https://npmjs.org/package/sprity)

## Requirements

- [sprity](https://npmjs.org/package/sprity) version >= 1.0

## Install

Install with [npm](https://npmjs.org/package/sprity-scss)

```
npm install sprity sprity-scss --save
```

If you want to use `sprity-scss` with the command line interface of `sprity` install it globally.

```
npm install sprity sprity-scss -g
```

## Options

* **style-type:** Eighter scss or sass. Defaults to scss.

## Usage

On commandline:

```sh
sprity out/ src/*.png -s style.scss -p sass --style-type scss
```

In JavaScript:

```js
var sprite = require('sprity');
sprite.create({
  ...
  style: 'style.scss',
  processor: 'sass'
  'style-type': 'scss'
  ...
}, function () {
  console.log('done');
});
```

#### [scss](http://sass-lang.com/) usage example

```scss
@import 'sprite'; // the generated style file (sprite.scss)

// camera icon (camera.png in src directory)
.icon-camera {
  @include sprite($camera);
}

// cart icon (cart.png in src directory)
.icon-cart {
  @include sprite($cart);
}
```

#### [sass](http://sass-lang.com/) usage example

```sass
@import 'sprite' // the generated style file (sprite.sass)

// camera icon (camera.png in src directory)
.icon-camera
  +sprite($camera)

// cart icon (cart.png in src directory)
.icon-cart
  +sprite($cart)
```

## More

See [sprity](https://npmjs.org/package/sprity) documentation

---
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sprity/sprity?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
