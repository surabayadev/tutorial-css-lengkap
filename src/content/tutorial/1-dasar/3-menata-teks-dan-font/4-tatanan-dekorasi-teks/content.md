---
type: lesson
title: Modifikasi Tatanan dan Dekorasi Teks
focus: /index.html
---

## Tatanan dan Dekorasi Teks

Sering kita menemui tulisan-tulisan di media-media tulis atau digital yang ditulis rata tengah, atau tulisan yang diberikan garis bawah yang bertujuan untuk memberikan penekanan terhadap topik yang sedang dibahas. Semua modifikasi tersebut juga dapat dilakukan dengan menggunakan CSS, berikut adalah beberapa contoh modifikasi tatanan dan dekorasi teks.

## Property text-align untuk mengatur rata penulisan

Dalam CSS, apabila kita ingin mengatur rata penulisan untuk teks yang kita tulis, kita bisa modifikasi value dari property `text-align`. Dibawah ini adalah value yang bisa digunakan untuk mengatur rata penulisan.

| Value | Keterangan |
|----------|----------|
| `left` | Meratakan penulisan ke kiri. |
| `right` | Meratakan penulisan ke kanan. |
| `center` | Meratakan penulisan ke tengah. |
| `justify` | Menyamaratakan penulisan ke kiri dan kanan. |
| `initial` | Memberikan value default. Dimana value default adalah `left`. |
| `inherit` | Memberikan value yang sama seperti yang ditentukan pada parent element. |

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      text-align: center;
    }

    p {
      text-align: initial;
    }
  </style>
</head>
<body>
  <h1>Selamat Datang di Web Tutorial</h1>
  <p>Disini anda akan belajar tentang dasar-dasar pemrograman baik pemrograman berbasis web, mobile, atau desktop app. Silahkan tekan tombol dibawah ini untuk lanjut belajar.</p>
</body>
</html>
```

Dengan memberikan value `center` ke selector `<h1>` CSS akan meratakan penulisan judul ke tengah, sedangkan karena value yang diberikan ke selector `<p>` adalah `initial` maka, CSS meratakan penulisan ke kiri.

## Property text-decoration untuk memberikan garis bawah

Properti `text-decoration` pada CSS tidak hanya memungkinkan kita untuk menambahkan garis bawah, tetapi juga garis di atas teks atau garis coretan. Selain itu, Anda bisa mengatur warna dan ketebalan garis sesuai keinginan, bahkan CSS menyediakan opsi untuk garis putus-putus dan variasi lainnya. Berikut adalah cara menggunakan properti `text-decoration`.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Anda bisa menuliskannya dalam satu property text-decoration */
    b {
      text-decoration: overline solid 5px orange;
    }

    /* Atau Anda pisahkan seperti contoh dibawah ini */
    .underline {
      color: darkorange;
      text-decoration-line: underline;
      text-decoration-style: dotted;
      text-decoration-thickness: 3px;
      text-decoration-color: darkorange;
    }
  </style>
</head>
<body>
  <h1>Apakah <b>HTML</b> sebuah <i class="underline">bahasa pemrograman</i>?</h1>
</body>
</html>
```

Kedua cara penulisan yang dicontohkan diatas sama-sama benar, tergantung preferensi Anda masing-masing.

## Property text-transform untuk memformat penulisan kapital

Selain 2 property diatas, terdapat property lain yang penting anda ketahui, yaitu `text-transform`. Apa saja value yang bisa diberikan ke text-transform?

| Value | Keterangan |
|----------|----------|
| `none` | Tidak ada modifikasi yang diaplikasikan. |
| `capitalize` | Mengubah semua huruf pertama setiap kata menjadi Kapital. |
| `uppercase` | Mengubah semua huruf menjadi Kapital. |
| `lowercase` | Mengubah semua huruf menjadi normal. |
| `initial` | Memberikan value default. Dimana value default adalah `none`. |
| `inherit` | Memberikan value yang sama seperti yang ditentukan pada parent element. |

Untuk contoh pengaplikasian `text-transform` lihat kode dibawah ini.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Anda bisa menuliskannya dalam satu property text-decoration */
    h1 {
      text-transform: uppercase;
    }
  </style>
</head>
<body>
  <h1>Tata cara dan Dokumen-dokumen yang dibutuhkan untuk memperpanjang SIM melalui Samsat Corner</h1>
</body>
</html>
```

Dengan mengaplikasikan value `uppercase` ke property `text-transform`, `<h1>` akan selalu tampil dengan tulisan kapital.

## Tantangan

Ubah tampilan card disamping agar menjadi :
- Nama Hotel selalu ditulis dalam Kapital
- Rating selalu berada di kanan card
- Berikan garis coretan untuk id "normalPrice"