# isWIFI
mobile wifi detect : video auto play etc
와이파이 연결인지 확인하여 영상 자동재생등에 활용가능합니다.

## function
```js
isWIFI();
```

## return
- -1: undefined or can't find
- 0: cellular (mobile data)
- 1: saveData=true (cellular or wifi or PC)	saveData is true (browser setting)
- 2: saveData=false (cellular or wifi or PC)
- 3: wifi

## use
if you use video auto play
mode | option
---: | ---:
stirct | 3 (wifi only)
general | 3,2

## 한국어 문서 (ko-kr)
https://hi098123.tistory.com/322
