---
type: lesson
title: Menyisipkan CSS ke dalam HTML
focus: /index.html
---

## Menggunakan CSS

Ada beberapa cara untuk menggunakan CSS pada halaman web:

1. **Internal CSS**: CSS ditulis langsung pada file HTML.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

2. **External CSS**: CSS ditulis pada file terpisah dari file HTML.

File HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
```

File CSS (`style.css`):

```css
h1 {
  color: blue;
}
```

3. **Inline CSS**: CSS ditulis langsung pada elemen HTML.

```html
<!DOCTYPE html>
<html>
<body>
  <h1 style="color: blue;">Hello, World!</h1>
</body>
</html>
```

## Tantangan

- Jadikan kode lebih rapi dengan menerapkan External CSS
- Pindahkan style css kode di samping ke dalam folder `assets/css/style.css`
- Load css dalam HTML tersebut