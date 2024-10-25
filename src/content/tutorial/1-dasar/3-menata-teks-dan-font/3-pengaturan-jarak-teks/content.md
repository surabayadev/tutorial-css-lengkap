---
type: lesson
title: Mengatur Jarak Teks
focus: /index.html
---

## Memodifikasi Tampilan Teks

Selain mengubah jenis font dan ketebalan terhadap teks yang ditampilkan, CSS memberikan kita kemampuan untuk mengatur tinggi baris dan jarak antar karakter, atau dalam istilah CSS adalah `line-height` dan `letter-spacing`. Berikut penjelasannya.

## Memodifikasi Tinggi Baris dengan property line-height

Value yang bisa kita berikan kepada `line-height` hampir serupa dengan property `font-size` yang sudah dibahas sebelumnya, kita bisa menggunakan unit absolut seperti `px`, `pt`, `cm`, dan lain-lain. Atau menggunakan value global seperti `normal`, `initial`, atau `inherit`. Selain itu, kita juga bisa memberikan value seperti contoh dibawah ini:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      font-size: 16px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <p>Tinggi baris teks ini adalah 24px</p>
</body>
</html>
```

Dengan memberikan value seperti contoh diatas, angka tanpa diikuti satuan, maka CSS secara otomatis akan menentukan `line-height` dengan mengkalikan value `font-size` dikalikan dengan value dari `line-height` yang dipilih. Dimana teks diatas memiliki value `font-size` 16px dikali dengan 1.5 adalah 24px.

## Memodifikasi Jarak Antar Karakter dengan property letter-spacing

Sama dengan property `line-height` diatas, kita bisa memberikan value ke property `letter-spacing` menggunakan unit-unit absolut, relatif, atau menggunakan unit global bawaan CSS. Namun, letter-spacing mendukung value negatif. Lihat contoh dibawah ini.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    p {
      letter-spacing: -2px;
    }
  </style>
</head>
<body>
  <p>Jarak antar karakter berhimpit</p>
</body>
</html>
```

Memberikan value negatif ke property `letter-spacing` memberikan kesan teks yang lebih compact, selama tidak terlalu agresif.

## Tantangan

- Modifikasi line-height semua elemen dalam dokumen `index.html` sebesar 1.5
- Untuk tag `<p>` dan `<a>` berikan value untuk property letter-spacing sebesar -1px