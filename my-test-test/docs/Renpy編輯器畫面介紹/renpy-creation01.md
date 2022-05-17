---
sidebar_position: 3
---

# 製作出第一個故事

首先這是你在創建一個專案後會在原生的 sctipt.rpy 裡 看到的

```

# 您可以在此編寫遊戲的腳本。

# image命令可用於定義一個圖像。
# eg. image eileen happy = "eileen_happy.png"

# define命令可定義遊戲中出現的角色名稱與對應文本顏色。
define e = Character('Eileen')


# 遊戲從這裡開始。
label start:

    e "您已經創建了一個新的 Ren'Py 遊戲。"

    e "當您添加一段故事, 圖片和音樂, 您就可以將它發佈給全世界！"

    return
```

上面這一段你可以完全刪除它

全部刪除後就讓我們開始建立新的一段劇情吧!

## Label 語句

- 在新的一段劇情開始前你可以給屬於在一起的劇情打上標建 (像是 Tags 那樣的東西)
- Label 可以多次使用
- Label start 是一定要出現的! 如果沒有 / Renpy 找不到你的 label start 的話就無法正常運行拉
- 在每個 Label XX (名字) 後面需要加上 ":"
- 不管 label start 是在專案的哪裡 在任何時候遊戲都會從 這裡開始窩!
- 每個 label 都必須是**獨一無二**的

所以讓我們先打上 Label start 吧

```
label start:
```

## 建立第一段對話

在 Renpy 裡面要顯示對話是非常簡單的 只要打出 "" 就可以了

- 在 "這裡面" 顯示的字都是玩家看得到的字窩

所以現在就讓我們加入第一段對話吧!

```
 "你好啊~ 很高興認識你!"
```

### 建立角色 / 定義角色

像剛剛上面的寫法是不會顯示出角色的名字的 但當我們想要對話框裡出現角色名字時 我們就要在 "" 前面加上 角色名字的代號
像是這樣

- NingNing "你好啊~ 很高興認識你!"

但是這時還沒有辦法正常顯示 因為 Renpy 還不知道 "NingNing" 這個代號
所以我們要先定義角色

用來定義角色的語句是 "define"
定義角色的語句大概長這樣

- define NingNing Character('我')

- 在 define 後面的 的英文 (打中文也是可以的) 就是角色的代號
- Character("") 在 "" 裡面的字就是玩家會看到的角色名字
- 所以這個角色 NingNing = 我 每次打出 NingNing 時玩家看到在說話的就是我

現在就讓我們來定義 2 個角色吧!

```
define a Character("路人A")
define b Character("路人B")
```

這樣我們就有 2 個角色拉 ٩(ˊᗜˋ )و

## 角色對話

既然我們知道怎麼顯示劇情 也有角色了的話 就讓我們建立的這 2 個角色對話一下吧~

```
a "你好你好~ 今天天氣真好呐~"
b "恩恩沒錯! 好想出去玩呢!"
```

## 插入圖片

沒有圖片總會感覺少了甚麼吧~ 所以讓我們加入一些圖片吧
首先，先把要使用的圖片放到 "**images**" 的資料夾裡

我的話通常會在 images 資料夾在新增一些子資料夾  
像這樣:
![image alt](https://wningningw.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff7d49ea1-6940-4e15-9b35-c20991573a8f%2FUntitled.png?table=block&id=8218edcf-95f4-4d5b-b03e-059150ca3c2c&spaceId=a18de6f9-6c26-4b46-8b4c-2584bf86ed47&width=2000&userId=&cache=v2)

你也可以在像是背景裡面在更細分為可能

- 主角房間
- 學校
- 公園
  ...ect.

或是在角色裡面更細分為:

- 角色 1
- 角色 2
- 角色 3
  之類的 然後每個資料夾就只放關於某個角色的圖片

### 定義圖片

這其實不是一定必要的但我還是會先定義圖片
(有的時候我會有幾張名字一樣的圖片，為了確保 Renpy 用的是正確的圖片我會各個定義)

**定義圖片的語法:**
image 圖片代號 = "圖片路徑"
範例:

- image park = "images/bg/park.jpg"

既然知道了如何定義圖片的話就讓我們來定義一些之後需要用到的圖片吧!

```
image park = "images/bg/park.jpg"
image cha = "images/characters/a.png"
image chb = "images/characters/b.png"
```

## 加入立繪

既然我們定義完了圖片，那現在就讓我們定義好的圖片 (立繪)進場吧!

```
show cha
```

預覽影片:
[![Watch the video](https://i9.ytimg.com/vi/44O-6SOBwkw/mqdefault.jpg?sqp=COTFjZQG&rs=AOn4CLC0pJNQk0CAevlEbW0Jv0TqCMGxig)](https://youtu.be/44O-6SOBwkw)

就像你現在看到的 2 張圖片重疊在了一起 而我們要做的下一件事就是指定圖片的位置

### 指定立繪位置

你可以指定立繪出現在左邊, 右邊, 中間 或是自己定義其他位置

所以如果我希望一張出現在左邊然後另一張在右邊的話我可以使用
這個代碼:

```
    show cha at left
    show chb at right
```

預覽影片:
[![Watch the video](https://i9.ytimg.com/vi_webp/bdsL_ChFb7A/mqdefault.webp?sqp=CJzdjZQG&rs=AOn4CLCXf5P_usVLtexHTYlF2wJgCOO1IQ)](https://youtu.be/bdsL_ChFb7A)

像這樣子 圖片就沒有重疊在一起拉

## 加入背景

因為剛剛定義了 image park 所以現在就使用 Park 來當作我們的背景吧!

加入圖片通常會使用 "scene"  
所以代碼會長這樣

```
scene park
```

![image alt](/img/park01.png)

## 讓一個人物退場

如果要讓單一角色退場的話可以使用 hide

- hide xx(立繪的代號)

範例:

```
hide cha
```

這樣第一張立繪就會消失拉

## 讓全部人物退場

要讓所有立繪都消失的話可以直接使用剛剛提過的 scene

範例:

```
scene park
```

這樣所有最基本的功能就都有拉!

如果對哪裡還有疑問 / 需要更多教學的話可以參考看看我以前寫的文章

- [一起寫視覺小說吧 【上】](https://wningningw.blogspot.com/2021/09/renpy-10.html)
- [一起寫視覺小說吧 【下】](https://wningningw.blogspot.com/2021/09/renpy-11.html)
- [給新手的快速熟悉手冊](https://wningningw.blogspot.com/2021/09/renpy-01-02.html)
- [Ren'Py 教學【第一篇 #01】/ 基本教學](https://wningningw.blogspot.com/2021/08/renpy-2.html)
