# Videoplayer Mirror — Web‑Extension

> Переворачивает элементы `.videoplayer_media` по горизонтали (mirror).
>
> <kbd>⧉</kbd> Кликните по иконке — и видео отразится; повторный клик вернёт всё обратно.

---

## 📂 Структура проекта
```
videoplayer‑mirror/
├─ safari-proj/              # Версии для браузера Safari
├─ background.js   # service worker
├─ manifest.json   # manifest v3
└─ icons/
│   ├─ icon16.png
│   ├─ icon48.png
│   └─ icon128.png
└─ README.md
```

---

## 🚀 Установка

### Chrome / Edge / Opera / Яндекс.Браузер
1. Откройте `chrome://extensions` (или `edge://extensions`).
2. Включите **Developer mode**.
3. **Load unpacked** → выберите директорию `video_mirror`.
4. Закрепите иконку (📌) при желании.

### Safari 17 + (macOS Sonoma)
<details>
<summary>Разработчику (быстрый старт)</summary>

1. `xcrun safari-web-extension-converter . --macos-only`  
   → откроется Xcode‑проект.
2. Xcode → **Product ▶︎ Run** (⌘ R).
3. Safari спросит «Trust — Install». Включите расширение: Settings ▶︎ Extensions.

</details>

---

## 🖱️ Как пользоваться
1. Перейдите на страницу, где видеоплеер имеет класс `.videoplayer_media` (например vk.com).
2. Нажмите иконку **Videoplayer Mirror**.
3. Элемент отобразится зеркально.
4. Нажмите ещё раз — эффект исчезнет.




