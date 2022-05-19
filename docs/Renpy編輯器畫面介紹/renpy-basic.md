---
sidebar_position: 1
---

# Renpy 編輯器基本畫面介紹

![image alt](/img/numbers-renpy01.png)

- 在 Project 下面的是你所有的 Renpy 專案
- 要讓專案出現記得到把你的 Renpy 專案放到正確的資料夾下窩!
- 如果你確認過專案在 Renpy 的資料夾下卻沒有出現在 Project 列表裡的話 可以點一下重新整理

## 1. "創建專案" 
- 可以用來創建專案! 更多資訊可以查看頁面 [創建新的 Renpy 專案](https://mb62vd.sse.codesandbox.io/docs/Renpy%E7%B7%A8%E8%BC%AF%E5%99%A8%E7%95%AB%E9%9D%A2%E4%BB%8B%E7%B4%B9/create-a-new-renpy-project)

## 2. "開啟目錄" 
- 點擊開啟目錄下的任何按鈕後會再檔案總管中開啟那個資料夾

## 3. "編輯檔案" 
- 點擊下面任何一個按鈕後會在代碼編輯器 (像是 Atom) 中打開那個檔案 (點了 Open project 的話會打該整個專案)

## 4. "啟動專案" 
- 用來預覽專案

## 5. 啟動專案下面那一排

- "更新" - 用來檢查 Renpy 的更新 可以選擇要不要更新到最新的版本 / 開發版本
  ![image alt](/img/renpy-setting-ba.png)
- "設定" - 會進入到啟動器偏好
  - 可以在這裡選擇 Renpy 的語言 - 這也會影響到新建專案時專案的語言
  - 可以在這裡改變默認的編輯器
  - 可以在這裡選擇使用暗/亮的主題
    ![image alt](/img/renpy-dark-version.png)
- "離開" - 點擊的話會 Renpy 直接關起來

## 6. 左下角那排

- "文件" 點擊的話會進入到[官方的 Documentation](file:///D:/dw%20mai/renpy-7.4.4-sdk/doc/index.html)
- "Ren'Py 網站" - 點擊的話會進入到[官網](https://www.renpy.org/)
- "Ren'Py 遊戲列表" - 點擊的話會進入到[使用 Ren'Py 做的遊戲列表](https://games.renpy.org/)
- "關於" - 顯示 Renpy 的版本 / License

## 7. 左排的"Actions" 
- "**腳本導航**"
![image alt](/img/action_navi.png)
  - "檔案":
    - 可以用來尋找文件
    - 打開文件
    - 建立文件
  - "標籤":
    - 在標籤下面會列出所有的 label (還有每個label所在的檔案)
    - 可以透過點擊迅速的跳到所選的 label 
  - "定義":
    - 可以找到所有定義過的東西
    - 黑色的字體是不可選的 = 是下面列出的物件所在的文件
    - 藍色的文字都是可選的，選擇後可以迅速跳到它在的那一行
    - 所有 define 開頭的句子都會被列在這裡
  - "轉換":
    - 列出所有的 transform
  - "螢幕":
    - 列出所有的 screen
  - "可呼叫":
    - 列出所有可呼叫的句子
  - "代辦事項":
    - 如果你的文件裡面有 #todo 的話它後面的東西就會被列出來
    - 範例: 
    ```
    #todo 建立新角色
    ```
    顯示出來的樣子
    ![image alt](https://wningningw.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1d1477ba-5342-4d09-9049-ef10a66e247d%2FUntitled.png?table=block&id=afc175da-a602-4be3-9497-658990afa241&spaceId=a18de6f9-6c26-4b46-8b4c-2584bf86ed47&width=2000&userId=&cache=v2)
  
- "**檢查腳本 (Lint)**"
  - 可以利用 "檢查腳本" 來修正錯誤的地方
  - 按下去之後會出現類似這樣的東西:
  ```
  Ren'Py 7.4.11.2266 lint report, generated at: Wed May 18 11:31:34 2022
  Statistics:
  The game contains 5 dialogue blocks, containing 35 words and 201 characters,
  for an average of 7.0 words and 40 characters per block.
  The game contains 0 menus, 3 images, and 23 screens.
  ```

  - 第一行會顯示目前使用版本, 運行的時間
  - 之後會顯示你的數據
    - 你的遊戲有多少對話, 這些對話是由多少個字和字母組成的, 並且會顯示平均的字和字母在每個對話格中
  - 之後還會顯示你的遊戲包含了多少選項, 圖片和畫面

- "**Change/ Update GUI**"
  - 可以使用它來改變/更新遊戲UI顏色

- "**刪除持久性資料**" 
  - 甚麼事持久性資料可以看[這裡](https://www.renpy.cn/doc-tw/persistent.html)

- "**強制重新編譯**":
  - Renpy 會自動把你的 rpy 檔案轉成 rpyc 檔案當你運行遊戲時但是你也可以手動利用這個功能把你的 rpy 檔案轉成 rpyc 檔案
  - rpy 檔案 = 人可以看得懂的檔案
  - rpyc 檔案 = 給電腦看(人看不懂)的檔案

## 8. 右排的 "Actions" 
- "**建立釋出版**"
  - 可以使用這個案件建立你的遊戲
  - 目前可以匯出到 Windows / Mac / Linux

- "**Android**"
  - 可以釋出手機板的遊戲 (Android)
  - 也可以用它來模擬遊戲 (手機, 平板和電視的介面)

- "**Android**"
  - 跟 Android 是一樣的東西只是換成 IOS 的作業系統

- "**Web**"
  - 釋出網頁版的遊戲
- "**產生翻譯檔**"
  ![image-alt](https://wningningw.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc26c52bc-a3eb-4b36-8d28-5a3b52c2025a%2FUntitled.png?table=block&id=1323fbdf-854e-4a25-beab-a3c9b04f0e4d&spaceId=a18de6f9-6c26-4b46-8b4c-2584bf86ed47&width=2000&userId=&cache=v2)
  - 首先你要先打上你要把你的遊戲翻譯成甚麼語言
  - 打完語言後你可以看一下右邊第二排最後一段的字 - 通常是 game/tl/(你剛剛打的名字)
    - 那是你的翻譯檔的路徑
  - 翻譯檔大概會長這樣
![image-alt](https://wningningw.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7aceb5e0-ceb5-4d85-a670-2e8de4c71aaf%2FUntitled.png?table=block&id=9c97043f-5b63-47b2-ac8b-27addd5460cf&spaceId=a18de6f9-6c26-4b46-8b4c-2584bf86ed47&width=1550&userId=&cache=v2)
  - 這是在勾選 "產生空字串翻譯" 後的產生的翻譯檔

  - 如果沒有勾選 "產生空字串翻譯" 的話產生的翻譯檔就會長這樣:
  ![image-alt](https://wningningw.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4bcab822-4cd4-4356-85e2-c58f039c3edf%2FUntitled.png?table=block&id=ac7661bb-224f-487c-a7f1-f5c407f18b3e&spaceId=a18de6f9-6c26-4b46-8b4c-2584bf86ed47&width=1490&userId=&cache=v2)

  - 關於如何添加語言選項在你的 Renpy 遊戲裡可以參考這個[文章](https://www.renpy.cn/doc-tw/translating_renpy.html)
  或是這個[文章](https://www.renpy.org/doc/html/translation.html#) (這是英文的)

- "**提取對話**"
  - 用來提取遊戲裡的對話的

