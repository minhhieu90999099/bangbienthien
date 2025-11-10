import streamlit as st
import streamlit.components.v1 as components
components.html("""
<html lang="vi"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#007BFF">

    <!-- SEO Meta Tags -->
    <title>MinhTool Vẽ Bảng Biến Thiên Online | Công Cụ Toán Học Tự Động, Chính Xác</title>
    <meta name="description" content="Tạo bảng biến thiên online cho mọi hàm số chỉ trong vài giây. Công cụ khảo sát hàm số tự động, tính đạo hàm, tìm cực trị và vẽ bảng biến thiên chi tiết, chính xác. Hỗ trợ LaTeX và xuất ảnh.">
    <meta name="keywords" content="vẽ bảng biến thiên, vẽ bảng biến thiên tự động, tool vẽ bảng biến thiên, công cụ vẽ bảng biến thiên, bảng biến thiên online, khảo sát hàm số, lập bảng biến thiên, may tinh bang bien thien, khao sat ham so online, ve bang bien thien lop 12, xét dấu đạo hàm, tìm cực trị">
    <meta name="author" content="Thái Hoàng Minh">
    <link rel="canonical" href="https://minhnganedu.com/bangbienthien/">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://minhnganedu.com/bangbienthien/">
    <meta property="og:title" content="MinhTool Vẽ Bảng Biến Thiên Online | Công Cụ Toán Học Tự Động, Chính Xác">
    <meta property="og:description" content="Tạo bảng biến thiên online cho mọi hàm số chỉ trong vài giây. Công cụ khảo sát hàm số tự động, tính đạo hàm, tìm cực trị và vẽ bảng biến thiên chi tiết, chính xác. Hỗ trợ LaTeX và xuất ảnh.">
    <meta property="og:image" content="https://minhnganedu.com/bangbienthien/og-image.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://minhnganedu.com/bangbienthien/">
    <meta property="twitter:title" content="MinhTool Vẽ Bảng Biến Thiên Online | Công Cụ Toán Học Tự Động, Chính Xác">
    <meta property="twitter:description" content="Tạo bảng biến thiên online cho mọi hàm số chỉ trong vài giây. Công cụ khảo sát hàm số tự động, tính đạo hàm, tìm cực trị và vẽ bảng biến thiên chi tiết, chính xác. Hỗ trợ LaTeX và xuất ảnh.">
    <meta property="twitter:image" content="https://minhnganedu.com/bangbienthien/og-image.png">
    
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: {
                DEFAULT: '#007BFF',
                dark: '#0056b3',
              },
            },
          },
        },
      }
    </script>


    <!-- JSON-LD Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "MinhTool Bảng Biến Thiên Online",
      "description": "Một ứng dụng web để tự động tạo và vẽ bảng biến thiên cho một hàm số toán học. Người dùng chỉ cần nhập hàm số và ứng dụng sẽ tính toán đạo hàm, các điểm cực trị, và vẽ bảng biến thiên chi tiết.",
      "url": "https://minhnganedu.com/bangbienthien/",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "VND"
      },
      "creator": {
        "@type": "Person",
        "name": "Thái Hoàng Minh"
      }
    }
    </script>
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Cách nhập hàm số đúng cách?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Để công cụ hiểu đúng hàm số của bạn, hãy tuân theo các quy tắc sau:\n- Sử dụng * cho phép nhân (ví dụ: 2*x thay vì 2x).\n- Sử dụng ^ cho phép lũy thừa (ví dụ: x^3 cho x mũ 3).\n- Sử dụng / cho phép chia. Viết phân thức trong dấu ngoặc (ví dụ: (x+1)/(x-2)).\n- Các hàm phổ biến: sqrt() (căn bậc hai), sin(), cos(), tan(), log() (logarit tự nhiên), exp() (e mũ).\n- Hằng số: pi (số Pi), e (số Euler)."
          }
        },
        {
          "@type": "Question",
          "name": "Bảng biến thiên là gì?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bảng biến thiên là một công cụ toán học dùng để tóm tắt kết quả của việc khảo sát hàm số. Nó cho biết các khoảng đồng biến (hàm số tăng), nghịch biến (hàm số giảm), các điểm cực trị (cực đại, cực tiểu) và giới hạn của hàm số tại các điểm đặc biệt và tại vô cực."
          }
        },
        {
          "@type": "Question",
          "name": "Công cụ này hoạt động như thế nào?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Khi bạn nhập một hàm số, công cụ sẽ thực hiện các bước sau một cách tự động:\n1. Tìm tập xác định: Xác định miền giá trị hợp lệ cho biến x.\n2. Tính đạo hàm: Tìm đạo hàm cấp một (f'(x)) của hàm số.\n3. Giải phương trình f'(x) = 0: Tìm các điểm tới hạn (nghiệm của đạo hàm).\n4. Xét dấu đạo hàm: Xác định dấu của f'(x) trên các khoảng được chia bởi các điểm tới hạn và điểm không xác định.\n5. Vẽ bảng: Tổng hợp tất cả thông tin trên vào một bảng biến thiên hoàn chỉnh, bao gồm chiều biến thiên của f(x) và các giá trị cực trị."
          }
        },
        {
          "@type": "Question",
          "name": "Làm sao vẽ bảng biến thiên trên một đoạn cho trước?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Để vẽ bảng biến thiên trên một khoảng xác định, bạn chỉ cần tích vào ô \"Vẽ trên một đoạn\". Các ô nhập liệu cho \"Điểm bắt đầu\" và \"Điểm kết thúc\" sẽ xuất hiện, cho phép bạn nhập khoảng mong muốn (ví dụ: từ -5 đến 5)."
          }
        },
        {
          "@type": "Question",
          "name": "Làm sao để thêm các ký tự tham số (m, k,...) vào bảng?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sau khi bảng biến thiên được tạo, bạn có thể chỉnh sửa trực tiếp các giá trị trong bảng. Chỉ cần nhấp vào ô bạn muốn thay đổi (ví dụ: một giá trị x hoặc f(x)) và nhập các ký tự bạn muốn, như 'm', 'f(m)', hoặc '2m+1'. Công cụ sẽ cập nhật bảng với giá trị mới của bạn."
          }
        },
        {
          "@type": "Question",
          "name": "Làm gì khi trang web mất nhiều thời gian để xử lý?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Do một số lỗi nhỏ hoặc sự cố tạm thời, quá trình xử lý có thể bị treo. Nếu bạn thấy trang web mất quá nhiều thời gian để phản hồi, hãy thử tải lại trang (nhấn F5 hoặc nút tải lại trên trình duyệt) và thực hiện lại thao tác. Việc này thường sẽ khắc phục được sự cố."
          }
        }
      ]
    }
    </script>
    <script type="importmap">
{
  "imports": {
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react/": "https://aistudiocdn.com/react@^19.2.0/",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    "react-dom": "https://aistudiocdn.com/react-dom@^19.2.0",
    "@vitejs/plugin-react": "https://aistudiocdn.com/@vitejs/plugin-react@^5.1.0",
    "vite": "https://aistudiocdn.com/vite@^7.2.2"
  }
}
</script>

  <script type="module" crossorigin="" src="https://bang-bien-thien.vercel.app/assets/index-Dtn_XVXr.js"></script>
<style>*, ::before, ::after{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ; {
  transform: none !important;
}
.--savior-overlay-z-index-top {
  z-index: 2147483643 !important;
}
.--savior-overlay-position-relative {
  position: relative;
}
.--savior-overlay-position-static {
  position: static !important;
}
.--savior-overlay-overflow-hidden {
  overflow: hidden !important;
}
.--savior-overlay-overflow-x-visible {
  overflow-x: visible !important;
}
.--savior-overlay-overflow-y-visible {
  overflow-y: visible !important;
}
.--savior-overlay-z-index-reset {
  z-index: auto !important;
}
.--savior-overlay-display-none {
  display: none !important;
}
.--savior-overlay-clearfix {
  clear: both;
}
.--savior-overlay-reset-filter {
  filter: none !important;
  backdrop-filter: none !important;
}
.--savior-tooltip-host {
  z-index: 9999;
  position: absolute;
  top: 0;
}
/*Override css styles for Twitch.tv*/
main.--savior-overlay-z-index-reset {
  z-index: auto !important;
}
.modal__backdrop.--savior-overlay-z-index-reset {
  position: static !important;
}
main.--savior-overlay-z-index-top {
  z-index: auto !important;
}
main.--savior-overlay-z-index-top .channel-root__player-container + div,
main.--savior-overlay-z-index-top .video-player-hosting-ui__container + div {
  opacity: 0.1;
}
/*Dirty hack for facebook big video page e.g: https://www.facebook.com/abc/videos/...*/
.--savior-backdrop {
  position: fixed !important;
  z-index: 2147483642 !important;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw !important;
  background-color: rgba(0,0,0,0.9);
}
.--savior-overlay-twitter-video-player {
  position: fixed;
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
}
.--savior-overlay-z-index-reset [class*="DivSideNavContainer"],
.--savior-overlay-z-index-reset [class*="DivHeaderContainer"],
.--savior-overlay-z-index-reset [class*="DivBottomContainer"],
.--savior-overlay-z-index-reset [class*="DivCategoryListWrapper"],
.--savior-overlay-z-index-reset [data-testid="sidebarColumn"],
.--savior-overlay-z-index-reset header[role="banner"],
.--savior-overlay-z-index-reset [data-testid="cellInnerDiv"]:not(.--savior-overlay-z-index-reset),
.--savior-overlay-z-index-reset [aria-label="Home timeline"]>div:first-child,
.--savior-overlay-z-index-reset [aria-label="Home timeline"]>div:nth-child(3) {
  z-index: -1 !important;
}
.--savior-overlay-z-index-reset [data-testid="cellInnerDiv"] .--savior-backdrop+div {
  z-index: 2147483643 !important;
}
.--savior-overlay-z-index-reset [data-testid="primaryColumn"]>[aria-label="Home timeline"] {
  z-index: 0 !important;
}
.--savior-overlay-z-index-reset#mtLayer,
.--savior-overlay-z-index-reset.media-layer {
  z-index: 3000 !important;
}
.--savior-overlay-position-relative [class*="SecBar_secBar_"],
.--savior-overlay-position-relative .woo-box-flex [class*="Frame_top_"] {
  z-index: 0 !important;
}
.--savior-overlay-position-relative .vue-recycle-scroller__item-view:not(.--savior-overlay-z-index-reset),
.--savior-overlay-position-relative .woo-panel-main[class*="BackTop_main_"],
.--savior-overlay-position-relative [class*="Main_side_"] {
  z-index: -1 !important;
}
/* Fix conflict css with zingmp3 */
.zm-video-modal.--savior-overlay-z-index-reset {
  position: absolute;
}
/* Dirty hack for xvideos99 */
#page #main.--savior-overlay-z-index-reset {
  z-index: auto !important;
}
/* Overlay for ok.ru */
#vp_w.--savior-overlay-z-index-reset.media-layer.media-layer__video {
  overflow-y: hidden;
  z-index: 2147483643 !important;
}
/* Fix missing controller for tv.naver.com */
.--savior-overlay-z-index-top.rmc_controller,
.--savior-overlay-z-index-top.rmc_setting_intro,
.--savior-overlay-z-index-top.rmc_highlight,
.--savior-overlay-z-index-top.rmc_control_settings {
  z-index: 2147483644 !important;
}
/* Dirty hack for douyi.com */
.swiper-wrapper.--savior-overlay-z-index-reset .swiper-slide:not(.swiper-slide-active),
.swiper-wrapper.--savior-overlay-transform-reset .swiper-slide:not(.swiper-slide-active) {
  display: none;
}
.videoWrap + div > div {
  pointer-events: unset;
}
/* Dirty hack for fpt.ai */
.mfp-wrap.--savior-overlay-z-index-top {
  position: relative;
}
.mfp-wrap.--savior-overlay-z-index-top .mfp-close {
  display: none;
}
.mfp-wrap.--savior-overlay-z-index-top .mfp-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
section.--savior-overlay-z-index-reset>main[role="main"].--savior-overlay-z-index-reset + nav {
  z-index: -1 !important;
}
section.--savior-overlay-z-index-reset>main[role="main"].--savior-overlay-z-index-reset section.--savior-overlay-z-index-reset div.--savior-overlay-z-index-reset ~ div {
  position: relative;
}
.watching-movie #video-player.--savior-overlay-z-index-top {
  z-index: 2147483644 !important;
}
div[class^="tiktok"].--savior-overlay-z-index-reset {
  z-index: 2147483644 !important;
}
.--savior-lightoff-fix section:not(:has([class*="--savior-overlay-"])),
.--savior-lightoff-fix section.section_video ~ section {
  z-index: -1;
  position: relative;
}
.--savior-lightoff-fix header,
.--savior-lightoff-fix footer,
.--savior-lightoff-fix .top-header,
.--savior-lightoff-fix .swiper-container,
.--savior-lightoff-fix #to_top,
.--savior-lightoff-fix #button-adblock {
  z-index: -1 !important;
}
@-moz-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style></head>
  <body class="bg-slate-50 text-slate-800">
    <div id="root"><div class="min-h-screen bg-gray-50 flex flex-col items-center p-4 sm:p-6 md:p-8"><div class="w-full max-w-6xl mx-auto"><header class="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-8 gap-4"><div><h1 class="text-3xl sm:text-4xl font-bold text-gray-800 tracking-tight"><span class="text-blue-600">Minh</span><span class="text-teal-500">Tool</span> Bảng biến thiên</h1><p class="text-md text-gray-600 mt-2">Khảo sát hàm số và tạo bảng biến thiên tự động, chính xác.</p></div><div class="flex flex-wrap justify-center items-center gap-3"><div class="relative"><button class="flex items-center gap-2 bg-white text-gray-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" width="18" height="12" class="w-6 h-auto"><rect fill="#da251d" width="600" height="400"></rect><path fill="#ff0" d="m300 92.2-55.3 169.5h178.1l-144.2-104.8 89.1 162.1z"></path></svg><span class="hidden sm:inline">Tiếng Việt</span><svg class="w-4 h-4 transition-transform " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button></div><a href="https://minhnganedu.com/ve-bang-bien-thien-nhanh-chong-va-tu-dong-voi-minhtool-bang-bien-thien/" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white text-blue-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg><span>Hướng dẫn sử dụng</span></a><a href="https://forms.gle/8xbzqKrohGKAzt7W9" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 bg-white text-green-700 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.35c-.343.032-.698-.057-.968-.21l-4.204-2.102a.75.75 0 010-1.328l4.204-2.102a.75.75 0 01.968-.21l3.72.35zM3.75 12h.008v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72.35c-.343.032-.698-.057-.968-.21l-4.204-2.102a.75.75 0 010-1.328l4.204-2.102a.75.75 0 01.968-.21l3.72.35z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 15.75h.008v.008H12V15.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg><span>Góp ý &amp; Cải thiện</span></a><button class="flex items-center gap-2 bg-white text-pink-600 font-semibold px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-200"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg><span>Ủng hộ tác giả</span></button></div></header><main class="bg-white p-6 rounded-xl shadow-lg border border-gray-200"><div class="flex flex-col sm:flex-row gap-4 items-center"><div class="relative flex-grow w-full"><span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-mono text-lg">f(x) =</span><input placeholder="Ví dụ: x^3 - 3*x hoặc sqrt(x-2)" class="w-full pl-20 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-lg" type="text" value="x^3 - 3*x + 2"></div><button class="w-full sm:w-auto bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed flex items-center justify-center gap-2">Vẽ bảng</button></div><div class="mt-4"><div class="flex items-center"><input id="customRange" class="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" type="checkbox"><label for="customRange" class="ml-2 block text-sm font-medium text-gray-700">Vẽ trên một đoạn</label></div></div><div class="mt-6 min-h-[300px] flex flex-col items-center justify-center"><div class="text-center text-gray-500 p-6"><h3 class="text-xl font-medium text-gray-600">Kết quả khảo sát và bảng biến thiên sẽ được hiển thị tại đây</h3><p class="mt-2">Nhập hàm số bạn cần khảo sát vào ô bên trên để bắt đầu.</p><div class="mt-4 text-xs text-gray-400"><p>Sử dụng `*` để nhân, `^` để lũy thừa, `/` để chia.</p><p class="mt-1">Hàm số phổ biến: `sqrt()`, `sin()`, `cos()`, `tan()`, `log()`, `exp()`.</p></div></div></div></main><section id="faq-section" class="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-8 text-gray-700 scroll-mt-20"><h2 class="text-2xl font-bold text-gray-800 mb-4">Hướng dẫn sử dụng và Các câu hỏi thường gặp (FAQ)</h2><nav aria-label="Mục lục FAQ" class="mb-6 bg-gray-50 p-4 rounded-lg border"><h3 class="font-semibold text-gray-700 mb-2">Nội dung</h3><ul class="list-disc list-inside space-y-1"><li><a href="#faq-1" class="text-blue-600 hover:underline">Cách nhập hàm số đúng cách?</a></li><li><a href="#faq-2" class="text-blue-600 hover:underline">Bảng biến thiên là gì?</a></li><li><a href="#faq-3" class="text-blue-600 hover:underline">Công cụ này hoạt động như thế nào?</a></li><li><a href="#faq-4" class="text-blue-600 hover:underline">Làm sao vẽ bảng biến thiên trên một đoạn cho trước?</a></li><li><a href="#faq-5" class="text-blue-600 hover:underline">Làm sao để thêm các ký tự tham số (m, k,...) vào bảng?</a></li><li><a href="#faq-6" class="text-blue-600 hover:underline">Làm gì khi trang web mất nhiều thời gian để xử lý?</a></li><li><a href="#faq-7" class="text-blue-600 hover:underline">Tại sao số hiện trên bảng biến thiên bản web bị làm tròn và làm sao có được kết quả chính xác?</a></li></ul></nav><div class="space-y-6"><article id="faq-1"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Cách nhập hàm số đúng cách?</h3><p>Để công cụ hiểu đúng hàm số của bạn, hãy tuân theo các quy tắc sau:</p><ul class="list-disc list-inside mt-2 space-y-1 pl-4"><li><span>Sử dụng <code>*</code> cho phép nhân (ví dụ: <code>2*x</code> thay vì <code>2x</code>).</span></li><li><span>Sử dụng <code>^</code> cho phép lũy thừa (ví dụ: <code>x^3</code> cho x mũ 3).</span></li><li><span>Sử dụng <code>/</code> cho phép chia. Viết phân thức trong dấu ngoặc (ví dụ: <code>(x+1)/(x-2)</code>).</span></li><li><span>Các hàm phổ biến: <code>sqrt()</code> (căn bậc hai), <code>sin()</code>, <code>cos()</code>, <code>tan()</code>, <code>log()</code> (logarit tự nhiên), <code>exp()</code> (e mũ).</span></li><li><span>Hằng số: <code>pi</code> (số Pi), <code>e</code> (số Euler).</span></li></ul></article><article id="faq-2"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Bảng biến thiên là gì?</h3><p>Bảng biến thiên là một công cụ toán học dùng để tóm tắt kết quả của việc khảo sát hàm số. Nó cho biết các khoảng đồng biến (hàm số tăng), nghịch biến (hàm số giảm), các điểm cực trị (cực đại, cực tiểu) và giới hạn của hàm số tại các điểm đặc biệt và tại vô cực.</p></article><article id="faq-3"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Công cụ này hoạt động như thế nào?</h3><p>Khi bạn nhập một hàm số, công cụ sẽ thực hiện các bước sau một cách tự động:</p><ol class="list-decimal list-inside mt-2 space-y-1 pl-4"><li><strong>Tìm tập xác định:</strong> Xác định miền giá trị hợp lệ cho biến x.</li><li><strong>Tính đạo hàm:</strong> Tìm đạo hàm cấp một (f'(x)) của hàm số.</li><li><strong>Giải phương trình f'(x) = 0:</strong> Tìm các điểm tới hạn (nghiệm của đạo hàm).</li><li><strong>Xét dấu đạo hàm:</strong> Xác định dấu của f'(x) trên các khoảng được chia bởi các điểm tới hạn và điểm không xác định.</li><li><strong>Vẽ bảng:</strong> Tổng hợp tất cả thông tin trên vào một bảng biến thiên hoàn chỉnh, bao gồm chiều biến thiên của f(x) và các giá trị cực trị.</li></ol></article><article id="faq-4"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Làm sao vẽ bảng biến thiên trên một đoạn cho trước?</h3><p>Để vẽ bảng biến thiên trên một khoảng xác định, bạn chỉ cần tích vào ô "Vẽ trên một đoạn". Các ô nhập liệu cho "Điểm bắt đầu" và "Điểm kết thúc" sẽ xuất hiện, cho phép bạn nhập khoảng mong muốn (ví dụ: từ -5 đến 5).</p></article><article id="faq-5"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Làm sao để thêm các ký tự tham số (m, k,...) vào bảng?</h3><p>Sau khi bảng biến thiên được tạo, bạn có thể chỉnh sửa trực tiếp các giá trị trong bảng. Chỉ cần nhấp vào ô bạn muốn thay đổi (ví dụ: một giá trị x hoặc f(x)) và nhập các ký tự bạn muốn, như 'm', 'f(m)', hoặc '2m+1'. Công cụ sẽ cập nhật bảng với giá trị mới của bạn.</p></article><article id="faq-6"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Làm gì khi trang web mất nhiều thời gian để xử lý?</h3><p>Do một số lỗi nhỏ hoặc sự cố tạm thời, quá trình xử lý có thể bị treo. Nếu bạn thấy trang web mất quá nhiều thời gian để phản hồi, hãy thử tải lại trang (nhấn F5 hoặc nút tải lại trên trình duyệt) và thực hiện lại thao tác. Việc này thường sẽ khắc phục được sự cố.</p></article><article id="faq-7"><h3 class="text-lg font-semibold mb-2 scroll-mt-20">Tại sao số hiện trên bảng biến thiên bản web bị làm tròn và làm sao có được kết quả chính xác?</h3><p>Giao diện web có những hạn chế trong việc hiển thị các công thức toán học phức tạp (như căn thức, phân số, hằng số `pi`, `e`,...), vì vậy các giá trị số sẽ được làm tròn để tiện cho việc hiển thị.</p><p class="mt-2">Để xem bảng biến thiên với kết quả chính xác tuyệt đối, bạn hãy sử dụng các tính năng <strong>'Xem Ảnh'</strong> hoặc <strong>'Mở trên Overleaf'</strong>. Các chức năng này sẽ tạo ra một phiên bản hình ảnh hoặc tài liệu LaTeX chất lượng cao, giữ nguyên mọi giá trị toán học chính xác (ví dụ: <code>sqrt(2)/2</code> thay vì <code>0.71</code>).</p></article></div></section><footer class="w-full text-center mt-12 pt-8 border-t border-gray-200"><div class="text-sm text-gray-500 space-y-1"><p>Phát triển bởi <a href="https://www.facebook.com/hoangminh.thai.39" target="_blank" rel="noopener noreferrer" class="font-medium text-blue-600 hover:underline">Thái Hoàng Minh</a></p><p class="text-xs text-gray-400">© Minh Ngan Edu 2025. All rights reserved.</p></div></footer></div><style>
        html {
          scroll-behavior: smooth;
        }
        @keyframes scaleUp {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.15s ease-out;
        }
        /* Keyboard Animations */
        @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
        }
        @keyframes slide-down {
            from { transform: translateY(0); }
            to { transform: translateY(100%); }
        }
        .animate-slide-up {
            animation: slide-up 0.3s ease-out forwards;
        }
        .animate-slide-down {
            animation: slide-down 0.3s ease-in forwards;
        }
      </style></div></div>

    <script>
      // Prevents users from easily accessing the source code or saving the page.
      (function() {
        // 1. Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault();
        }, false);

        // 2. Disable keyboard shortcuts for developer tools and saving
        document.addEventListener('keydown', function(e) {
          // Block F12
          if (e.code === 'F12') {
            e.preventDefault();
          }

          const isCtrlOrCmd = e.ctrlKey || e.metaKey;

          // Block Save Page (Ctrl+S / Cmd+S)
          if (isCtrlOrCmd && e.code === 'KeyS') {
            e.preventDefault();
          }

          // Block View Source (Ctrl+U / Cmd+U)
          if (isCtrlOrCmd && e.code === 'KeyU') {
            e.preventDefault();
          }

          // Block Developer Tools
          // Windows/Linux: Ctrl+Shift+I/J/C
          // Mac: Cmd+Option+I/J/C or Cmd+Shift+C
          const isDevToolsShortcut = 
            (e.ctrlKey && e.shiftKey && ['KeyI', 'KeyJ', 'KeyC'].includes(e.code)) || // Win/Linux
            (e.metaKey && e.altKey && ['KeyI', 'KeyJ', 'KeyC'].includes(e.code)) ||   // Mac Option
            (e.metaKey && e.shiftKey && e.code === 'KeyC');                            // Mac Shift
            
          if (isDevToolsShortcut) {
            e.preventDefault();
          }
        }, false);

        // 3. Simple anti-debugging technique
        function antiDebug() {
          try {
            (function() { return false; }())['constructor']('debugger')['call']();
          } catch (e) {}
        }

        // Run the anti-debug check periodically
        setInterval(antiDebug, 1000);
      })();
    </script>
  
</body><en2vi-host class="corom-element" version="3" style="all: initial; position: absolute; top: 0; left: 0; right: 0; height: 0; margin: 0; text-align: left; z-index: 10000000000; pointer-events: none; border: none; display: block"></en2vi-host><savior-host style="all: unset; position: absolute; top: 0; left: 0; z-index: 99999999999999; display: block !important; overflow: unset"></savior-host></html>

""", height=1000, width=3000)














