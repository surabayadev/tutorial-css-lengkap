---
type: lesson
title: Modifikasi Font
focus: /index.html
---

## Modifikasi Jenis Font menggunakan font-family property

CSS memberikan kita kemampuan untuk mengubah jenis font yang ditampilkan pada laman web, dengan memodifikasi salah satu property yaitu `font-family`. CSS memberikan kita 2 pilihan dalam memodifikasi property font-family, berikut penjelasannya:

## 1. Menggunakan Web-Safe Font

Apa itu web-safe font?? Web-safe font adalah jenis-jenis font yang dianggap sudah secara otomatis terpasang di mayoritas perangkat pengguna, dimana pengguna tidak perlu lagi mengunduh sebuah font secara eksternal.

Sebagai contoh, jika Anda memberikan value `system-ui` pada property `font-family` seperti contoh dibawah ini:

```html
  <style>
    h1 {
      font-family: system-ui;
    }
  </style>
```

Secara otomatis, CSS akan memilih font Segoe pada sistem operasi Windows, San Francisco pada sistem operasi macOS, dan Roboto untuk sistem operasi Android.

Selain `system-ui`, Anda bisa memberikan value-value yang lain seperti `serif`, `sans-serif`, `monospace`, `cursive`, dan `fantasy`.

## 2. Menggunakan Custom Font dari Google Fonts

Jika Anda masih merasa belum puas dengan pilihan font bawaan CSS, Anda bisa mengkustom jenis font dengan mengimportnya melalui Google Fonts. Yang pertama kita coba mengimport Font bernama Crimson Pro:

```html
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  </head>
```

Selanjutnya, untuk menggunakan font yang baru kita import. Cukup dengan menuliskan kode seperti contoh dibawah ini:

```html
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
  </head>

  <style>
    h1 {
      font-family: "Crimson Pro", sans-serif;
    }
  </style>
```

Seperti yang dapat dilihat pada contoh diatas, penambahan `..., sans-serif;` ditujukan untuk memberikan CSS font alternatif seandainya font Crimson Pro tidak terbaca atau gagal dikenali.

## Modifikasi Ukuran Font menggunakan font-size property

CSS memberikan banyak opsi dalam memodifikasi ukuran font, beberapa diantaranya Anda dapat menggunakan unit-unit absolut seperti `cm, mm, in, px, pt, pc` atau unit-unit relatif seperti `em, rem, vw, vh, %`. Berikut adalah memodifikasi ukuran font dengan menggunakan unit absolut:

```html
  <style>
    body {
      font-size: 16px;
    }
  </style>
```

Selain menggunakan unit-unit yang sudah disebutkan diatas, Anda dapat memberikan value yang lebih global seperti:

| Value | Keterangan |
|----------|----------|
| `medium` | Mengubah ukuran font menjadi medium. Ini adalah nilai default |
| `xx-small` | Mengubah ukuran font menjadi sangat-sangat kecil. |
| `x-small` | Mengubah ukuran font menjadi sangat kecil. |
| `small` | Mengubah ukuran font menjadi kecil. |
| `large` | Mengubah ukuran font menjadi besar. |
| `x-large` | Mengubah ukuran font menjadi sangat besar. |
| `xx-large` | Mengubah ukuran font menjadi sangat-sangat besar. |
| `smaller` | Mengubah ukuran font menjadi lebih kecil dari ukuran font yang ditentukan pada parent element. |
| `larger` | Mengubah ukuran font menjadi lebih besar dari ukuran font yang ditentukan pada parent element. |
| `initial` | Memberikan value default. Dimana value default adalah `medium`. |
| `inherit` | Memberikan value yang sama seperti yang ditentukan pada parent element. |


## Tantangan

Ubah tampilan `h1` agar menjadi font `Cursive` dan memiliki ukuran sebesar `32px`. Sedangkan `p` menjadi font `sans-serif` dan memiliki ukuran sebesar `14px`!