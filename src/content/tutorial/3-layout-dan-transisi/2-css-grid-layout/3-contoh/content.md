---
type: lesson
title: Contoh layout dengan Grid dan Flexbox
focus: /index.html
---

## Contoh layout dengan Grid dan Flexbox

Penggunaan layout Grid dan Flexbox tidak serta merta membatasimu untuk membuat layout hanya menggunakan salah satu dari keduanya. Kamu bisa menggabungkan keduanya untuk membuat layout yang lebih kompleks.

### Contoh layout

Berikut adalah contoh layout yang dibuat dengan menggunakan Grid dan Flexbox.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tutorial Grid Layout</title>

    <style>
      .grid-container {
        display: grid;
        width: 100%;
        height: 250px;
        grid-template-areas:
          "header header header"
          "sidebar main main"
          "footer footer .";
        grid-template-rows: 50px 150px 30px;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 10px;
        padding: 10px;
      }

      .header {
        grid-area: header;
        background-color: #f1c40f;
      }

      .sidebar {
        grid-area: sidebar;
        background-color: #3498db;
        display: flex;
        flex-direction: column;
      }

      .main {
        grid-area: main;
        background-color: #2ecc71;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .footer {
        grid-area: footer;
        background-color: #e74c3c;
      }
    </style>
  </head>
  <body>
    <h1>Contoh Grid + Flexbox</h1>

    <div class="grid-container">
      <div class="header">header</div>
      <div class="sidebar">
        <div>sidebar item 1</div>
        <div>sidebar item 2</div>
        <div>sidebar item 3</div>
      </div>
      <div class="main">
        <div>main item 1</div>
        <div>main item 2</div>
        <div>main item 3</div>
        <div>main item 4</div>
      </div>
      <div class="footer">footer</div>
    </div>
  </body>
</html>
```

#### Penjelasan

- `.grid-container` adalah container yang menggunakan Grid Layout.
- `.header`, `.sidebar`, `.main`, dan `.footer` adalah item-item yang akan ditempatkan di dalam grid.
- `.sidebar` dan `.main` menggunakan Flexbox untuk mengatur item-item di dalamnya.

#### Hasil

![Contoh layout dengan Grid dan Flexbox](./contoh-layoud-grid-flexbox.png)

## Tantangan

1. Ubah file `index.html`, tambahkan produk baru di dalam `.gallery` menjadi total 6 produk dengan masing-masing bernama sesuai urutan.
2. Ubah file `style.css` dengan menambahkan pada `.gallery` menjadi grid dengan 3 kolom dengan lebar masing-masing 1fr dan gap 20px.
3. Ubah file `style.css` dengan menambahkan pada `.product-card` menjadi flexbox dengan direction column dan seluruh isinya berada di tengah.
