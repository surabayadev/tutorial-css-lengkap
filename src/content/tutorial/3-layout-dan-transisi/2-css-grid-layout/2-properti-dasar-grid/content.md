---
type: lesson
title: Properti Dasar Grid
focus: /index.html
---

## Properti Display Grid

`display: grid` adalah properti dasar untuk mengaktifkan Grid layout pada sebuah container.

###### Contoh:

```css
.container {
  display: grid;
}
```

## Properti Grid Template Columns

`grid-template-columns` adalah properti untuk menentukan lebar kolom pada grid.

###### Contoh:

```css
.container {
  display: grid;
  /* Menggunakan nilai pixel */
  grid-template-columns: 100px 200px 100px;

  /* Menggunakan fractions (fr) */
  grid-template-columns: 1fr 2fr 1fr;

  /* Menggunakan repeat() */
  grid-template-columns: repeat(3, 1fr);

  /* Kombinasi berbagai unit */
  grid-template-columns: 100px auto 1fr;
}
```

## Properti Grid Template Rows

`grid-template-rows` adalah properti untuk menentukan tinggi baris pada grid. Properti ini memiliki nilai yang sama dengan `grid-template-columns`.

###### Contoh:

```css
.container {
  display: grid;
  grid-template-rows: 100px 200px;

  /* Menggunakan auto */
  grid-template-rows: auto auto auto;

  /* Menggunakan minmax() */
  grid-template-rows: minmax(100px, auto);
}
```

## Properti Grid Gap

`gap` adalah properti untuk menentukan jarak antar grid item.

###### Contoh:

```css
.container {
  display: grid;
  /* Row gap dan column gap terpisah */
  row-gap: 10px;
  column-gap: 20px;

  /* Shorthand untuk row dan column gap */
  gap: 10px 20px;

  /* Nilai yang sama untuk row dan column */
  gap: 15px;
}
```

## Grid Area dan Template Areas

`grid-area` adalah properti untuk menentukan nama area dari grid item. Bersama dengan `grid-template-areas` yang merupakan properti untuk menentukan layout grid dengan nama area, kita bisa membuat layout grid yang kompleks dan mudah dibaca.

###### Contoh:

```css
.header {
  grid-area: header;
  background-color: #f1c40f;
}
.sidebar {
  grid-area: sidebar;
  background-color: #3498db;
}
.main {
  grid-area: main;
  background-color: #2ecc71;
}
.footer {
  grid-area: footer;
  background-color: #e74c3c;
}

.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer ."; /* titik (.) menandakan area kosong */
}
```

## Tantangan

Set tampilan layout grid dengan menggunakan properti-properti yang telah dipelajari. Berikut adalah spesifikasi layout yang harus dibuat:

2. Tentukan `grid-template-columns` dengan tiga kolom, di mana kolom pertama dan ketiga memiliki lebar 1fr, dan kolom kedua memiliki lebar 2fr.
3. Tentukan `grid-template-rows` dengan tiga baris, di mana baris pertama memiliki tinggi 50px, baris kedua 150px, dan baris ketiga 30px.
4. Tentukan `gap` antar grid item sebesar 10px.
5. Buat div component dengan class `header`, `sidebar`, `main`, dan `footer` dan berisi teks sesuai dengan nama classnya. Sesuaikan layout grid yang ada di `grid-template-areas` pada file `style.css`.

```
"header header header"
"sidebar main main"
"footer footer ."
```

Selamat mencoba!
