---
title: 'When to Use Static Generation v.s. Server-side Rendering'
date: '2020-01-02'
---

# eng

We recommend using **Static Generation** (with and without data)
whenever possible because your page can be built once and served by CDN,
which makes it much faster than having a server render the page on every
request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a
user's request?" If the answer is yes, then you should choose Static
Generation.

On the other hand, Static Generation is **not** a good idea if you
cannot pre-render a page ahead of a user's request. Maybe your page
shows frequently updated data, and the page content changes on every
request.

In that case, you can use **Server-Side Rendering**. It will be slower,
but the pre-rendered page will always be up-to-date. Or you can skip
pre-rendering and use client-side JavaScript to populate data.

# rus

Мы рекомендуем использовать **статическую генерацию** (с данными и без
них), когда это возможно, потому что ваша страница может быть создана
один раз и обслуживаться _CDN_, что делает ее намного быстрее, чем
сервер, отображающий страницу при каждом запросе.

Вы можете использовать статическую генерацию для многих типов страниц, в
том числе:

- Маркетинговые страницы
- Сообщения в блоге
- Списки продуктов электронной коммерции
- Справка и документация

Вы должны спросить себя: «Могу ли я выполнить предварительный рендеринг
этой страницы **перед** запросом пользователя?» Если ответ да, то вам
следует выбрать _Static Generation_.

С другой стороны, статическая генерация **не** является хорошей идеей,
если вы не можете выполнить предварительную визуализацию страницы перед
запросом пользователя. Возможно ваша страница показывает часто
обновляемые данные, а содержимое страницы меняется при каждом запросе.

В этом случае вы можете использовать **рендеринг на стороне сервера**.
Это будет медленнее, но предварительно обработанная страница всегда
будет актуальной. Или вы можете пропустить предварительный рендеринг и
использовать клиентский _JavaScript_ для заполнения данных.
