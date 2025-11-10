
import streamlit as st
import streamlit.components.v1 as components
import requests 
# Bước 1: Đọc nội dung file HTML
with open("VeBangBienThien.html", "r", encoding="utf-8") as f:
    html_body = f.read()
# Đọc file JS từ GitHub bằng requests
js_url = "https://raw.githubusercontent.com/minhhieu90999999/bangbienthien/main/scriptBBT.js"
js_code = requests.get(js_url).text


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





