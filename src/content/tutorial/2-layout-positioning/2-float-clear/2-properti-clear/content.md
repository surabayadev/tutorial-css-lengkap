---
type: lesson
title: Properti Clear
focus: /index.html
---

## Pengenalan

Saat menggunakan `float` pada elemen, elemen-elemen lain di sekitarnya mungkin terpengaruh oleh perilaku `float`. Misalnya, jika sebuah gambar menggunakan `float: left`, elemen berikutnya mungkin justru mengisi ruang di sebelah kanannya, bukan di bawahnya. Di sinilah properti `clear` membantu: `clear` memungkinkan kita menghentikan efek `float` agar elemen berikutnya bisa muncul dengan benar di bawah elemen yang mengapung.

## Fungsi dan Penggunaan Clear

Properti `clear` digunakan untuk mengatur elemen agar tidak terpengaruh oleh elemen-elemen yang mengapung (float) di sekitarnya. Berikut adalah nilai-nilai utama `clear`:

- `clear: left`: Menghentikan efek float di sisi kiri.
- `clear: right`: Menghentikan efek float di sisi kanan.
- `clear: both`: Menghentikan efek float di kedua sisi.

## Kenapa Clear Penting?

Tanpa `clear`, layout bisa terlihat berantakan. Elemen-elemen bisa saling tumpang tindih, atau elemen berikutnya malah "naik" dan tidak berada di posisi yang diinginkan.

## Contoh Penggunaan Clear

Berikut ini adalah contoh kode di mana terdapat dua kolom yang mengapung (kiri dan kanan) dan satu elemen di bawahnya. Dengan menggunakan `clear: both`, elemen tersebut dapat berada di bawah kedua kolom.

```html
//index.html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Penggunaan Clear</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="left">Kolom Kiri (float: left)</div>
    <div class="right">Kolom Kanan (float: right)</div>
    <div class="clear-both">Ini akan berada di bawah kedua kolom dengan `clear: both`</div>
</body>
</html>
```

```css
//styles.css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.left {
    float: left;
    width: 45%;
    background-color: lightblue;
    padding: 10px;
    margin-right: 5%;
}

.right {
    float: right;
    width: 45%;
    background-color: lightcoral;
    padding: 10px;
}

.clear-both {
    clear: both;
    background-color: lightgreen;
    padding: 10px;
    margin-top: 10px;
}
```

Pada contoh di atas, `clear: both` memastikan elemen terakhir berada di bawah kedua kolom yang mengapung.

## Teknik Clearfix

Saat menggunakan elemen `float`, sering kali elemen induk (parent) tidak menyesuaikan tinggi secara otomatis sesuai dengan elemen `float` di dalamnya. Hal ini membuat elemen induk terlihat seolah-olah tidak mencakup elemen-elemen di dalamnya. Untuk mengatasi masalah ini, kita bisa menggunakan teknik `clearfix`, yang membantu elemen induk menyesuaikan tinggi dengan elemen `float` di dalamnya.

```css
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

Dengan menambahkan clearfix pada elemen induk, kita memastikan elemen induk mencakup semua elemen di dalamnya yang mengapung, tanpa mengganggu letak elemen lainnya.

## Tantangan

Terapkan teknik clearfix pada sebuah kontainer dengan elemen-elemen yang mengapung di dalamnya. Dalam tantangan ini, buatlah dua elemen di dalam kontainer yang masing-masing memiliki `float: left` dan `float: right`. Setelah itu, tambahkan kelas `clearfix` pada kontainer.

**Langkah-langkah:**

- Buat kontainer dengan kelas `clearfix`.
- Di dalam kontainer, buat dua elemen yang mengapung menggunakan `float: left` dan `float: right`.
- Perhatikan bagaimana `clearfix` membuat kontainer mencakup kedua elemen yang mengapung dengan benar.
