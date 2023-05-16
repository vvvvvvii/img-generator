# 長輩圖生成器

[DEMO](https://vvvvvvii.github.io/img-generator/)

## 功能：

### 首頁

- 隨滑鼠移動隨機變色的按鈕

### 第一步

- 搜尋後吐出相關圖片供選擇
- 若使用中文搜尋，自動翻譯為英文送出，以增加搜尋準確度
- 選擇圖片後才可進到下一頁

### 第二步

- 可新增或刪除文字
- 可開關編輯文字的 Modal
- 文字可加上顏色與特定樣式
- 文字方塊可被拖拉
- 文字方塊放大縮小時，文字跟著變大縮小

### 結果頁

- 完成的圖片可用 JPEG 或 PNG 格式下載
- 可回到首頁再次生成新圖片

## 技術：

### 串接 API

- [Unsplash](https://unsplash.com/developers)：搜尋圖片功能
- [MyMemory](https://mymemory.translated.net/)：搜尋文字中翻英，加強 Unsplash 的準確度

### hooks

- useRef ：定位 DOM
- useCallback ：紀錄函式，讓 useEffect dependencies 正確依賴

### 第三方套件 / 框架

- [axios](https://www.npmjs.com/package/react-draggable)：抓取 API
- [Bootstrap@5.2.3](https://blog.getbootstrap.com/2022/11/22/bootstrap-5-2-3/)：CSS 框架
- [downloadjs](https://www.npmjs.com/package/downloadjs)：搭配 html-to-image 下載 PNG
- [html-to-image](https://www.npmjs.com/package/html-to-image)：下載圖片
- [React-Draggable](https://www.npmjs.com/package/react-draggable)：拖曳方塊
- [React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component)：圖片延遲顯示效果
