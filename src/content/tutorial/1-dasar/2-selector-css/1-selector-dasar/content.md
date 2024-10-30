---
type: lesson
title: Selector Dasar CSS
focus: /index.html
---

# Selector Dasar CSS

CSS (Cascading Style Sheets) menyediakan berbagai cara untuk memilih elemen-elemen HTML yang ingin diberi gaya. Selector CSS adalah aturan yang digunakan untuk menentukan elemen mana yang akan menerima aturan gaya. Di bawah ini adalah beberapa selector dasar dalam CSS.

## 1. Selector Tipe

**Selector tipe** digunakan untuk memilih elemen HTML berdasarkan nama tag. Setiap elemen HTML yang sesuai dengan nama tag yang ditentukan akan menerima gaya yang diterapkan. Selector ini efektif untuk memberikan gaya kepada seluruh elemen dengan jenis tag tertentu, seperti semua `<p>`, `<div>`, atau `<h1>`.

Contoh kasus penggunaan:
- Mengubah warna teks seluruh paragraf.
- Menentukan ukuran font untuk semua elemen heading (misalnya `<h1>` hingga `<h6>`).
- Mengatur margin dan padding untuk elemen `<div>`.


**Sintaks**
```css
tag_name {
    property: value;
}
```

**Studi Kasus**
Misalnya, kita ingin mengubah warna teks semua elemen `<p>` menjadi biru dan mengubah ukuran huruf `<h1>` menjadi 32px.

```html
/* index.html */
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Type Selector</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Ini Judul Utama</h1>
    <p>Ini adalah paragraf pertama.</p>
    <p>Ini adalah paragraf kedua.</p>
</body>
</html>
```

```css
/* style.css */
p {
    color: blue;
}

h1 {
    font-size: 32px;
}
```


## 2. Selector Class dan ID

### a. Selector Class

**Selector class** digunakan untuk memilih elemen-elemen yang memiliki atribut `class`. Class biasanya digunakan ketika kita ingin memberi gaya yang sama pada beberapa elemen berbeda. Satu elemen dapat memiliki lebih dari satu class, dan class dapat digunakan pada banyak elemen.

**Sintaks**
```css
.class_name {
    property: value;
}
```

Contoh kasus penggunaan:
- Menerapkan gaya yang sama untuk sekelompok elemen, misalnya semua tombol dengan gaya yang serupa.
- Menyusun layout halaman dengan elemen-elemen yang memiliki class tertentu.

**Studi Kasus**

Misalnya, kita ingin mengubah warna teks elemen yang memiliki class highlight menjadi hijau

```html
/* index.html */
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selector Class</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 class="highlight">Judul dengan Kelas Highlight</h1>
    <p class="highlight">Paragraf dengan Kelas Highlight</p>
    <p>Paragraf biasa tanpa class.</p>
</body>
</html>
```

```css
/* style.css */
.highlight {
    color: green;
}
```


### b. Selector ID

**Selector ID** digunakan untuk memilih elemen berdasarkan atribut `id`. Atribut `id` harus unik dalam satu dokumen HTML, yang berarti hanya satu elemen yang dapat memiliki satu `id` tertentu. Selector ID sangat berguna ketika Anda ingin memberikan gaya yang spesifik hanya pada satu elemen.

**Sintaks**
```css
#id_name {
    property: value;
}
```

Contoh kasus penggunaan:
- Memberi gaya khusus pada elemen yang memiliki peran unik di halaman, seperti header utama atau footer.
- Menerapkan gaya khusus pada elemen form tertentu yang memiliki `id` unik.

**Studi Kasus**

Misalnya, kita ingin mengubah background elemen dengan id="main-title" menjadi abu-abu.

```html
/* index.html */
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Selector ID</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 id="main-title">Judul Utama</h1>
    <p>Paragraf biasa tanpa id.</p>
</body>
</html>
```

```css
/* style.css */
#main-title {
    background-color: lightgray;
}
```


## 3. Selector Universal (`*`)

**Selector universal (`*`)** digunakan untuk memilih semua elemen yang ada di halaman. Ini sangat berguna untuk menerapkan gaya dasar atau reset di seluruh elemen pada halaman web. Selector ini sering digunakan untuk mengatur margin, padding, dan border pada semua elemen sebelum memberikan gaya yang lebih spesifik.

**Sintaks**
```css
* {
    property: value;
}
```

Contoh kasus penggunaan:
- Mengatur margin dan padding semua elemen menjadi nol untuk membuat gaya yang konsisten di seluruh halaman.
- Menyelaraskan semua elemen sebelum menerapkan gaya yang lebih detail pada elemen-elemen spesifik.

**Studi Kasus**

Misalnya, kita ingin memberikan margin dan padding nol untuk semua elemen di halaman.

```html
/* index.html */
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Universal Selector</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Judul Utama</h1>
    <p>Paragraf pertama.</p>
    <p>Paragraf kedua.</p>
</body>
</html>
```

```css
/* style.css */
* {
    margin: 0;
    padding: 0;
}
```


## Tantangan

1. Buatlah halaman HTML dengan struktur sebagai berikut:
    - Judul utama id="title" dengan teks "Selamat Datang di Website Kami".
    - Paragraf pertama class=".description" dengan teks "Website ini berisi informasi tentang produk kami".
    - Paragraf kedua class=".description" dengan teks "Kami menyediakan berbagai produk berkualitas".
    - Paragraf ketiga id="cta" dengan teks "Kunjungi toko kami untuk melihat produk kami".

2. Buatlah file CSS eksternal dengan nama `style.css` dan terapkan gaya sebagai berikut:

    - #title berwarna biru dan berukuran 32px.
    - .title berwarna merah dan berukuran 18px.
    - .description berwarna hijau dan berukuran 18px.
    - #cta berwarna kuning dan berukuran 18px.
