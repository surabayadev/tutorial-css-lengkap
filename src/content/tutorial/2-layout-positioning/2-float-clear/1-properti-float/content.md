---
type: lesson
title: Properti Float
focus: /index.html
---

## Pengenalan

Properti `float` adalah salah satu fitur dasar CSS yang digunakan untuk membuat elemen "mengapung" di satu sisi kontainer, baik ke kiri atau ke kanan. Cara ini berguna dalam pembuatan tata letak halaman sederhana dan memungkinkan elemen lain dapat tetap berada di sekitarnya.

:::info
Layouting CSS dapat menggunakan cara lebih modern seperti **Flexbox** dan **Grid**. Namun, memahami `float` tetap penting, karena masih sering dibutuhkan dalam berbagai kondisi.
:::

## Fungsi dan Penggunaan Float

- `float: left`
Elemen akan mengapung ke sisi kiri dari elemen induknya, dan elemen lainnya akan menyesuaikan di sebelah kanan.

- `float: right`
Elemen akan mengapung ke sisi kanan dari elemen induknya, dan elemen lainnya akan menyesuaikan di sebelah kiri.

- `float: none`
Menghapus efek `float`, sehingga elemen akan muncul dalam urutan normal.

Float sering digunakan untuk membuat layout kolom, misalnya dua atau tiga kolom di halaman web. Meskipun CSS modern sudah menawarkan metode layout yang lebih canggih seperti Flexbox atau Grid, memahami `float` tetap penting karena banyak layout lama yang masih menggunakannya.

## Contoh Penggunaan Float

- Menambahkan gambar yang mengapung di sebelah kiri dengan teks di sebelah kanan.

:::info
Hal ini berguna saat kita ingin membuat tampilan di mana gambar dan teks terlihat rapi di sebelahnya.
:::

```html
//index.html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Penggunaan Float</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Contoh Penggunaan Float</h1>
    <img src="https://avatars.githubusercontent.com/u/8623215" alt="Gambar di kiri" class="image-left">
    <p class="text">
        Ini adalah contoh teks yang mengalir di sebelah gambar. Dengan properti `float`, gambar mengapung di sebelah kiri,
        dan teks ini menyesuaikan di sebelah kanannya. Properti `float` sering digunakan untuk tata letak sederhana
        di mana gambar atau elemen lain ditempatkan di samping teks agar halaman terlihat lebih terstruktur dan menarik.
    </p>
    <p class="text">
        Kamu bisa menambahkan lebih banyak teks untuk melihat bagaimana teks ini terus mengalir di sebelah kanan gambar.
        Float sangat membantu saat mengatur elemen seperti gambar atau ikon agar berada di satu sisi dan konten di sisi lainnya.
    </p>
</body>
</html>
```

```css
//styles.css
body {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.image-left {
    float: left;
    margin-right: 15px;
    width: 200px;
}

.text {
    font-size: 1rem;
    line-height: 1.6;
}
```

Pada contoh di atas, kita menambahkan  `float: left` pada gambar agar gambar berada di sisi kiri, dan teks otomatis menyesuaikan di sebelah kanan. Dengan menambahkan `margin-right`, kita bisa memberi jarak antara gambar dan teks agar tampil lebih rapi.

## Tantangan

Ubah posisi gambar dari kiri ke kanan dengan memodifikasi kelas pada elemen gambar serta menggunakan properti `float`
