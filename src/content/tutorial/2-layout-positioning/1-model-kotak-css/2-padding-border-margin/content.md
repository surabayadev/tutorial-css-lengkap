---
type: lesson
title: Padding, Border, dan Margin
focus: /assets/css/style.css
---

## Padding, Border, dan Margin

Properti `padding`, `border`, dan `margin` adalah tiga properti CSS yang sangat penting dalam mengatur tampilan dan tata letak elemen HTML. Ketiga properti ini bekerja sama untuk menentukan ruang di dalam dan di sekitar konten elemen.

## Padding

**Definisi**: Ruang kosong di antara konten dan batas (border) suatu elemen.

**Fungsi**: Memberikan jarak antara konten dengan batas elemen, sehingga konten tidak terlalu menempel pada batas.

**Cara menggunakan**:

```css
padding: nilai; /* Semua sisi */
padding-top: nilai;
padding-right: nilai;
padding-bottom: nilai;
padding-left: nilai;
```

`Nilai`: Dapat berupa angka (dalam satuan px, em, rem, dll.) atau persentase.

## Border

**Definisi**: Garis yang mengelilingi konten dan padding suatu elemen.


**Fungsi**: Memberikan batas visual pada elemen, membedakan satu elemen dengan elemen lainnya.

**Cara menggunakan**:

```css
border: tebal jenis warna; /* Semua sisi */
border-top: tebal jenis warna;
border-right: tebal jenis warna;
border-bottom: tebal jenis warna;
border-left: tebal jenis warna;
```

`Tebal`: Dinyatakan dalam satuan seperti px (pixel), em, atau %.

`Jenis`: solid, dashed, dotted, double, dll.

`Warna`: Dinyatakan dalam nama warna, kode hex, RGB, atau HSL.

## Margin

**Definisi**: Ruang kosong di luar border suatu elemen.

**Fungsi**: Memberikan jarak antara elemen dengan elemen lainnya.

**Cara menggunakan**:

```css
margin: nilai; /* Semua sisi */
margin-top: nilai;
margin-right: nilai;
margin-bottom: nilai;
margin-left: nilai;
```

`Nilai`: Dapat berupa angka (dalam satuan px, em, rem, dll.) atau persentase.

## Contoh Penggunaan Padding, Border, dan Margin

```css
div {
  width: 200px;
  height: 150px;
  background-color: lightblue;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

Kode di atas akan menghasilkan sebuah div dengan:
- Lebar 200px dan tinggi 150px.
- Latar belakang berwarna biru muda.
- Padding 20px di semua sisi.
- Border hitam tebal 2px.
- Margin 10px di semua sisi.

## Tantangan
Tambahkan atribut css pada selector `.box` di dalam file `assets/css/style.css` agar:
- Memiliki border dengan ketentuan
  - berwarna merah (`red`)
  - tebal `4px`
  - jenis garis `dotted`




