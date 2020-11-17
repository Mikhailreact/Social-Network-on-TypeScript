import React from 'react';
import s from'./Header.module.css'

export const Header = () => {
     return (
    <header className={s.header}>
        <img className={s.logoIcon} src={'https://e7.pngegg.com/pngimages/494/255/png-clipart-logo-graphics-design-design-orange-logo.png'} alt={'Картинка'}/>
        <h1 className={s.titleHeader}>Просто Заголовок</h1>
    </header>
     )
}





