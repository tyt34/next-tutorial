import React from 'react'
import '../styles/globals.css'

/**
 * компонент React верхнего уровня, который упаковывает все страницы
 * вашего приложения. Вы можете использовать этот компонент для
 * сохранения состояния при переходе между страницами или для
 * добавления глобальных стилей
 * @param {*} param0
 * @returns
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
