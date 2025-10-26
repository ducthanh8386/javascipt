function upDate(previewPic) {
  // Bước 1: Kiểm tra xem sự kiện có hoạt động không
  console.log("Di chuột qua ảnh:", previewPic.alt);

  // Bước 2: Cập nhật hình nền của phần tử có id="image"
  const display = document.getElementById('image');
  display.style.backgroundImage = `url('${previewPic.src}')`;

  // Bước 3: Cập nhật văn bản (alt text)
  display.textContent = previewPic.alt;
}

function unDo() {
  // Bước 1: Cập nhật lại hình nền về rỗng
  const display = document.getElementById('image');
  display.style.backgroundImage = "url('')";
  
  // Bước 2: Trả lại văn bản ban đầu
  display.textContent = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}
// Bước 3: Kiểm tra xem sự kiện có hoạt động không
console.log("Script đã được tải và sẵn sàng.");
console.log("Kiểm tra sự kiện bằng cách di chuột qua các hình ảnh.");
