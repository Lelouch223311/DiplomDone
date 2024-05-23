Краткий гайд  ≦ Что да как ≧

Client:

npm run dev = development run

npm run build = compiled files

Файлы конфигурации: vite.config.js || .env/prod


Strapi: (по идеи стоят мои данные)

npm run develop = development run => localhost:1337/admin

login: lelouch@mail.ru
password: LelouchZero1

Файл конфигурации: server/config/server.js


Создать новые карточки в Strapi:
Русский  Язык(в случае сброса):
Снизу слево в углу ник Lelouch Zero и картинка LZ,жмакаешь туда > профиль > Язык Интерфейса = Русский

                                                                    ^
                                                                там же есть и тема => чёрная

Заходишь в админ-панель > справо будет кнопка Редактор Контента > при нажатии на неё,правее от неё появятся Colletion types(Типы Колекций) > Product > Право в углу будет кнопка   "Создать новую запись" > указываешь данные и т.д > сохранить (черновик) > Опубликовать (деплой) ==> Карточка готова !

Карточки настраиваются в Client/components/ProductCard.vue || views/cards.vue