---
title: 'Two Forms of Pre-rendering'
date: '2020-01-01'
---

# eng

Next.js has two forms of pre-rendering: **Static Generation** and
**Server-side Rendering**. The difference is in **when** it generates
the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the
  HTML at **build time**. The pre-rendered HTML is then _reused_ on each
  request.
- **Server-side Rendering** is the pre-rendering method that generates
  the HTML on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use
for each page. You can create a "hybrid" Next.js app by using Static
Generation for most pages and using Server-side Rendering for others.

# rus

В Next.js есть две формы предварительного рендеринга: **статическая**
**генерация** и **Рендеринг на стороне сервера**. Разница в том,
**когда** он генерирует HTML для страницы.

- **Статическая генерация** — это метод предварительного рендеринга,
  который генерирует HTML во время **сборки**. Затем предварительно
  визуализированный HTML _повторно используется_ на каждом запрос.
- **Рендеринг на стороне сервера** — это метод предварительного
  рендеринга, который генерирует HTML для **каждого запроса**.

Важно отметить, что _Next.js_ позволяет вам **выбирать**, какую форму
предварительного рендеринга использовать. для каждой страницы. Вы можете
создать «гибридное» приложение _Next.js_, используя _Static_ Генерация
для большинства страниц и использование рендеринга на стороне сервера
для других.
