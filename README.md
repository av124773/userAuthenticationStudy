# 登入機制練習
本專案以學習為目的，手刻一個簡易的登入機制，驗證手法採用 cookie-base authentication。本專案使用 express 搭配 MongoDB 建立。專案運行時，可以使用預設的帳密進行登入測試，登入成功後會顯示歡迎用戶的畫面，之後不論是重新整理頁面或重新輸入網址仍會維持歡迎畫面，直到使用者登出。

## 產品功能
### 專案功能
- 使用者可以在登入畫面的 `cookie:` 看到目前的 cookie 狀態
- 使用者可以使用預設帳密進行測試
- 登入成功後，主頁會顯示歡迎畫面，重新整理或重新輸入網址後仍然可以維持歡迎頁面
- 登入成功後，歡迎畫面會顯示使用者帳號登記的名字
- 登入成功後，歡迎畫面的 `cookie:` 會顯示伺服器給瀏覽器設定的 `name` 和 `value`
- 使用者可以在登入成功後，按下 `Logout` 登出帳號並清除 cookie

## 使用工具
1. Node.js v12.22.12
2. Express v4.16.4
3. Express-Handlebars v3.0.0
4. Bootstrap v5.1.3
5. Visual Studio Code
6. Robo 3T v1.4
7. Mongoose v5.9.7
8. dotenv v16.0.3
9. MongoDB Atlas

## 安裝流程
1. 開啟終端機(Terminal)，使用指令 `cd` 移動到想安裝檔案的位置
```
cd <想安裝檔案的路徑>
```
2. 執行 `git clone` 指令，下載檔案
```
git clone https://github.com/av124773/userAuthenticationStudy.git
```
3. 下載完成後，移動至專案資料夾內，使用 `npm install` 安裝需要的套件
```
cd restaurantListUseMongoDB

npm install
```
4. 開啟 Robo 3T(或其他 MongoDB 操作工具)，新增資料庫 
5. 在專案目錄裡新增 `.env` 檔，使用 VScode 或記事本開啟並輸入資料庫連結例如：
```
// MONGODB_URI 是專案中使用的連結變數
// mongodb+srv://... 是資料庫連結
MONGODB_URI=mongodb+srv://<帳號>:<密碼>@cluster0.n3idk03.mongodb.net/<資料庫名稱>?retryWrites=true&w=majority
```
6. 輸入以下指令，將預設帳密上傳至資料庫中
```
npm run seed
```
6. 最後輸入指令執行專案
```
npm run start
```
7. 專案啟動後，打開瀏覽器輸入網址[http://localhost:3001](http://localhost:3001)

## 測試用帳密
```
firstName: 'Tony',
email: 'tony@stark.com',
password: 'iamironman'

firstName: 'Steve',
email: 'captain@hotmail.com',
password: 'icandothisallday'

firstName: 'Peter',
email: 'peter@parker.com',
password: 'enajyram'

firstName: 'Natasha',
email: 'natasha@gamil.com',
password: '*parol#@$!'

firstName: 'Nick',
email: 'nick@shield.com',
password: 'password'
```
