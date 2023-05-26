# 長輩圖生成器

[DEMO](https://vvvvvvii.github.io/img-generator/)

## 功能：

#### 首頁

- 按鈕 hover 時變顏色和大小，並播放音效

#### 第一步

- 搜尋後吐出相關圖片供選擇
- 若使用中文搜尋，自動翻譯為英文送出，以增加搜尋準確度
- 根據裝置大小顯示不同輪播效果
- 選擇圖片後才可進到下一頁

#### 第二步

- 可新增或刪除文字
- 可開關編輯文字的 Modal
- 文字可加上顏色與特定樣式
- 文字方塊可被拖拉
- 文字方塊放大縮小時，文字跟著變大縮小

#### 結果頁

- 完成的圖片可用 JPEG 或 PNG 格式下載
- 可回到首頁再次生成新圖片

## 技術：

#### 串接 API

- [Unsplash](https://unsplash.com/developers)：搜尋圖片功能
- [MyMemory](https://mymemory.translated.net/)：搜尋文字中翻英，加強 Unsplash 的準確度

#### hooks

- useRef ：定位 DOM
- useCallback ：紀錄函式，讓 useEffect dependencies 正確依賴

#### RWD

- MUI 的 useTheme & useMediaQuery 直接在 MUI 元件行內寫 RWD 判斷
- theme.breakpoints.up() 配合 MUI 元件 sx 設定 RWD style
- 不是 MUI 元件時，引入 Radium ，直接以 @media(min-width: px) 撰寫

#### 第三方套件 / 框架

- [axios](https://www.npmjs.com/package/axios)：抓取 API
- [downloadjs](https://www.npmjs.com/package/downloadjs)：搭配 html-to-image 下載 PNG
- [gh-pages](https://www.npmjs.com/package/gh-pages)：React 打包上傳 gh-pages 分支
- [html-to-image](https://www.npmjs.com/package/html-to-image)：下載圖片
- [MUI](https://mui.com/)：CSS 框架
- [Material Icons](https://mui.com/material-ui/material-icons/)：Icons
- [Radium](https://www.npmjs.com/package/radium)：在 inline-style 撰寫 hover / media queries
- [React-Draggable](https://www.npmjs.com/package/react-draggable)：拖曳方塊
- [Swiper](https://swiperjs.com/react)：圖片輪播效果

## 音效版權標示：

#### Funny Synth Voice Oohs Loop

- Artist: Alexander Blu
- 無變更原始版本
- [原始連結](https://orangefreesounds.com/funny-synth-voice-oohs-loop/)
- [Creative-Commons-Attribution-4.0-International-License] (https://creativecommons.org/licenses/by/4.0/deed.zh_TW)
