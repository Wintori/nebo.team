# SWApi

Проект выполнен в качестве тестового задания специально для команды <strong>nebo.team</strong>

## Функционал
  Доступные роуты:
  - /
  - /character/${id}
  - /404

  На главной странице работает поиск по всем персонажам. Ниже можно увидеть список всех персонажей, если Вы не применили поиск, или же список персонажей, который прошёл отбор по поиску.
  </br>
  Вы можете кликнуть по любому персонажу и перейти в его профиль
  </br>
  </br>
  Также при наведении на персонажа в списке, справа появится надписть `Viewed`, если вы уже просматривали профиль данного персонажа.
  </br>
  </br>
  В профиле персонажа отображена вся информация о нём.

## Стек
React, TypeScript, Tailwind, Lottie (для анимаций), WebPack (сборщик)

### Доступные скрипты
<b>!Внимание!</b> Перед запуском необходимо установить зависимости. Для этого введите команду
 `npm i`. В директории проекта вы можете запустить следующие команды:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run predeploy`
#### `npm run deploy`
