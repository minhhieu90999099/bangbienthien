import streamlit as st
import streamlit.components.v1 as components
components.html("""

<!DOCTYPE html>
<html>
<head>
  <script>
    window.onload = function() {
      console.log("JS đang chạy trong Streamlit iframe");

      // Gọi các hàm bạn cần ở đây
      xuLyDuLieu();
      veBangBienThien();
    };

    function xuLyDuLieu() {
      console.log("Xử lý dữ liệu...");
    }

    function veBangBienThien() {
      document.body.innerHTML += "<p>Bảng biến thiên đã vẽ!</p>";
    }
  </script>
</head>
<body>
  <h2>Kiểm tra JavaScript trong Streamlit</h2>
</body>
</html>

""", height=1000, width=3000)




