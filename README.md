## React + Vite
This is a simple React project using Vite.
## install
```bash
npm install
```
## run
```bash
npm run dev
```

## build
```bash
npm run build

## preview
```bash
npm run preview
```

## 安装 Tailwind CSS 及其依赖
### 在项目根目录运行以下命令：
```bash
npm install -D tailwindcss postcss autoprefixer
```
### 创建 Tailwind CSS 配置文件：
```bash
npx tailwindcss init -p
```
### 在 src 目录下创建一个 CSS 文件，例如 tailwind.css：
```bash
touch src/tailwind.css
```
### 在 tailwind.css 文件中添加以下内容：
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```         
### 在项目根目录运行以下命令，则会自动为你创建一个新的 CSS 文件：
```bash
npx tailwindcss build -i ./src/tailwind.css -o ./dist/output.css --watch
```
### 在 index.html 文件中添加以下内容：
```html
<link href="/dist/output.css" rel="stylesheet">
```
### 在 App.jsx 文件中添加以下内容：
```jsx
import './tailwind.css';
``` 
npm install -D @tailwindcss/postcss