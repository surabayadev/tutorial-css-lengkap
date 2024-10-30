---
type: lesson
title: Penerapan Float dan Clear
focus: /index.html
---

## Membuat Layout Kolom dengan Float

Salah satu penggunaan utama `float` adalah untuk membuat tata letak kolom. Dengan `float`, kita bisa mengatur beberapa elemen untuk mengisi ruang di samping satu sama lain. Misalnya, kita bisa membuat layout tiga kolom dengan cara mengatur setiap elemen `div` agar mengapung ke kiri dan memberi lebar yang sesuai.

## Contoh Penggunaan Float untuk Kolom

Kode di bawah ini membuat tiga kolom yang mengapung ke kiri dan memiliki lebar 30% dari kontainer.

```html
//index.html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Layout Float</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="column" style="background-color: #f0f0f0;">Kolom 1</div>
    <div class="column" style="background-color: #d0d0d0;">Kolom 2</div>
    <div class="column" style="background-color: #b0b0b0;">Kolom 3</div>
    <div class="clear"></div>
</body>
</html>
```

```css
//styles.css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.column {
    float: left;
    width: 30%;
    padding: 20px;
    margin-right: 3%;
    text-align: center;
}

.clear {
    clear: both;
}
```

Hasilnya adalah tiga kolom yang berjejer di sebelah kiri satu sama lain. Kamu bisa mengubah lebar dan warna latar belakang setiap kolom untuk melihat bagaimana pengaturan ini memengaruhi tata letak halaman.

## Masalah Umum Float

Saat kita menggunakan `float`, ada satu masalah umum yang sering terjadi, yaitu elemen induk (kontainer) tidak "mencakup" atau mengikuti elemen-elemen yang diatur dengan `float`. Hal ini bisa membuat kontainer terlihat seperti hilang atau tidak sesuai dengan elemen-elemen di dalamnya.

## Contoh Solusi Dengan Overflow

Ada dua cara utama untuk mengatasi masalah ini:

1. Menggunakan teknik `clearfix`
2. Menambahkan properti `overflow: auto` pada elemen induk

Dengan menggunakan `overflow: auto`, kontainer akan menyesuaikan tinggi sesuai elemen float di dalamnya.

### Contoh Solusi dengan Overflow

Menambahkan `overflow: auto;` pada elemen induk akan memastikan bahwa elemen tersebut menghitung tinggi anak-anaknya yang menggunakan float.

```css
.parent {
  overflow: auto;
}
```

Menambahkan `overflow: auto;` pada elemen induk memastikan bahwa elemen tersebut akan menyesuaikan tinggi dengan elemen-elemen yang diatur dengan `float` di dalamnya.

## Tantangan

Pada tantangan ini, kamu akan membuat layout dua kolom yang terdiri dari kolom teks dan kolom gambar. Pastikan kedua kolom ini berada dalam satu kontainer dengan `overflow: auto` untuk menyesuaikan tinggi.
