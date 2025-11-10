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
function() {
    const N = document.createElement("link").relList;
    if (N && N.supports && N.supports("modulepreload"))
        return;
    for (const G of document.querySelectorAll('link[rel="modulepreload"]'))
        h(G);
    new MutationObserver(G => {
        for (const Z of G)
            if (Z.type === "childList")
                for (const ll of Z.addedNodes)
                    ll.tagName === "LINK" && ll.rel === "modulepreload" && h(ll)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function M(G) {
        const Z = {};
        return G.integrity && (Z.integrity = G.integrity),
        G.referrerPolicy && (Z.referrerPolicy = G.referrerPolicy),
        G.crossOrigin === "use-credentials" ? Z.credentials = "include" : G.crossOrigin === "anonymous" ? Z.credentials = "omit" : Z.credentials = "same-origin",
        Z
    }
    function h(G) {
        if (G.ep)
            return;
        G.ep = !0;
        const Z = M(G);
        fetch(G.href, Z)
    }
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





