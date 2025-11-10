
import streamlit as st
import streamlit.components.v1 as components

# Bước 1: Đọc nội dung file HTML
with open("VeBangBienThien.html", "r", encoding="utf-8") as f:
    html_body = f.read()

# Bước 2: Nếu cần thêm JavaScript, đọc từ file JS
with open("https://raw.githubusercontent.com/minhhieu90999099/bangbienthien/main/ScriptBBT.js", "r", encoding="utf-8") as f:
    js_code = f.read()

# Bước 3: Tạo mã HTML hoàn chỉnh
html_code = f"""
<!DOCTYPE html>
<html>
<head>
  <script>
  {js_code}
  </script>
</head>
<body>
  {html_body}
</body>
</html>
"""

# Bước 4: Hiển thị trong Streamlit
components.html(html_code, height=1200, width=3000)

