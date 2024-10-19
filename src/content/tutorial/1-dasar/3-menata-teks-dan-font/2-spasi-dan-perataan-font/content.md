---
type: lesson
title: Struktur Dasar CSS
focus: /index.html
---

## Sintaks dasar CSS: selector, property, dan value

CSS terdiri dari tiga bagian utama, yaitu selector, property, dan value. Berikut adalah penjelasan singkat tentang ketiga bagian tersebut:

1. **Selector**: Selector adalah bagian yang digunakan untuk memilih elemen HTML yang akan diubah tampilannya. Selector dapat berupa nama elemen, class, id, atau pseudo-class.

```css "h1"
h1 {
  color: blue;
}
```

Pada contoh di atas, `h1` adalah selector yang digunakan untuk memilih elemen `h1` pada halaman web.

2. **Property**: Property adalah bagian yang digunakan untuk menentukan tampilan elemen yang dipilih. Property dapat berupa warna, ukuran, tata letak, dan sebagainya.

```css "color"
h1 {
  color: blue;
}
```

Pada contoh di atas, `color` adalah property yang digunakan untuk mengubah warna teks pada elemen `h1` menjadi biru.

3. **Value**: Value adalah bagian yang

```css "blue;"
h1 {
  color: blue;
}
```

Pada contoh di atas, `blue` adalah value dari property `color` yang digunakan untuk mengubah warna teks pada elemen `h1` menjadi biru.

## Aturan penulisan CSS

Ada beberapa aturan penulisan CSS yang perlu diperhatikan, yaitu:

1. **Case Sensitivity**: CSS bersifat case sensitive, artinya penulisan huruf besar dan kecil akan berpengaruh pada hasil akhir. Sebaiknya gunakan penulisan huruf kecil untuk memudahkan pembacaan.

2. **Whitespace**: Whitespace (spasi, tab, dan baris baru) tidak berpengaruh pada hasil akhir CSS. Namun, sebaiknya gunakan whitespace untuk memudahkan pembacaan.

3. **Urutan** : CSS mengeksekusi aturan dari atas ke bawah. Jika terdapat aturan yang sama, aturan yang ditulis terakhir yang akan dieksekusi.

## Komentar dalam CSS

Komentar digunakan untuk memberikan penjelasan pada kode CSS. Komentar tidak akan dieksekusi oleh browser dan hanya berfungsi sebagai catatan untuk pengembang.

```css
/* Ini adalah komentar dalam CSS */

h1 {
  color: blue; /* Ini adalah komentar pada property color */
}
```


## Tantangan

Tambahkan komentar pada kode CSS di atas untuk memberikan penjelasan tentang kode tersebut.