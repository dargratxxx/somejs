
const body = document.body
const header = document.createElement('header')

const header_top = document.createElement('div')
header_top.classList.add('header_top')

const logo_img = document.createElement('img')
logo_img.src = './img/somelogo.png'

const h1 = document.createElement('h1')
h1.textContent = 'SLOGAN SLOGAN SLOGAN'

const nav = document.createElement('nav')

const ul = document.createElement('ul')
ul.classList.add('menu_without_burger')

const arr = ['Главная', 'О приложении', 'О проекте', 'Скачать', 'Контакты']
for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.classList.add("menu_item1")
    a.textContent = arr[i]
    li.append(a)
    ul.append(li)
}

const main = document.createElement('main')



const question_block = document.createElement('div')
question_block.classList.add('question_block')


for (let i = 0; i < 3; i++) {
    const question = document.createElement('div')
    question.classList.add('question')
    const img = document.createElement('img')
    img.src = "./img/picturefigma.png"
    const p = document.createElement('p')
    p.textContent = 'Часто ли Вы опаздываете на работу (учёбу)?'
    question.append(img, p)
    question_block.append(question)
}

const main_app = document.createElement('div')
main_app.classList.add('main_app')
const h2 = document.createElement('h2')
h2.textContent = 'О приложении'
const pc = document.createElement('div')
pc.classList.add('pc')
const img1 = document.createElement('img')
img1.classList.add('img1')
img1.src = './img/back.png'
const button = document.createElement('img')
img1.classList.add('button5')
button.src = './img/playbutton.png'


const pics = document.createElement('div')
pics.classList.add('pics')
for (let i = 0; i < 5; i++) {
    const img = document.createElement('img')
    img.src = './img/question.png'
    pics.append(img)
}

const project = document.createElement('div')
project.classList.add('project')
const h3 = document.createElement('h3')
h3.textContent = 'О проекте'
const p = document.createElement('p')
p.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6 недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'


const code = document.createElement('div')
code.classList.add('code')
const h4 = document.createElement('h4')
h4.textContent = 'Скачать'
const codepics = document.createElement('div')
codepics.classList.add('codepics')
const codepic1 = document.createElement('img')
const codepic2 = document.createElement('img')
codepic1.classList.add('codepic1')
codepic2.classList.add('codepic2')
codepic1.src = './img/android.png'
codepic2.src = './img/icon.png'
const curs = document.createElement('p')
curs.classList.add('curs')
curs.textContent = 'Курс для начинающих предпринимателей, направленный на качественный результат за 6недель. Опытные бизнесмены, инвесторы и профессионалы в своем деле помогают участникам на всех этапах развития их бизнеса: от разработки идеи до ее реализации.'

const footer = document.createElement('footer')
const footer_some = document.createElement('div')
footer_some.classList.add('footer_some')
const h5 = document.createElement('h5')
h5.textContent = 'SOME '
const footer_line = document.createElement('div')
footer_line.classList.add('footer_line')

const footer_column1 = document.createElement('div')
footer_column1.classList.add('footer_column1')
const onep = document.createElement('img')
onep.classList.add('onep')
onep.src = './img/vk.png'
const onet = document.createElement('p')
onet.classList.add('onet')
onet.textContent = 'Контакты'
const onet2 = document.createElement('p')
onet2.classList.add('onet2')
onet2.textContent = 'Tel.: +996 (312) 915000 + Еxt. Fax: +996 (312) 915 028'

const footer_column2 = document.createElement('div')
footer_column1.classList.add('footer_column2')
const twop = document.createElement('img')
twop.classList.add('twop')
twop.src = './img/instagram1.png'
const twot = document.createElement('p')
twot.classList.add('twot')
twot.textContent = 'Адреса'
const twot2 = document.createElement('p')
twot2.classList.add('twot2')
twot2.textContent = 'American University of Central Asia 7/6 Aaly Tokombaev Street Bishkek, Kyrgyz Republic 720060'

const footer_column3 = document.createElement('div')
footer_column3.classList.add('footer_column3')
const threep = document.createElement('img')
threep.classList.add('threep')
threep.src = './img/facebook.png'
const threet = document.createElement('p')
threet.classList.add('threet')
threet.textContent = 'Помощь'
const threet2 = document.createElement('p')
threet2.classList.add('threet2')
threet2.textContent = 'Помощь Помощь Помощь'











footer_column3.append(threep, threet, threet2)
footer_column2.append(twop, twot, twot2)
footer_column1.append(onep, onet, onet2)
footer_line.append(footer_column1, footer_column2, footer_column3)
footer_some.append(h5, footer_line)
footer.append(footer_some)
codepics.append(codepic1, codepic2,)
code.append(h4, codepics)
project.append(h3, p)
pc.append(img1, button)
main_app.append(h2, pc)
main.append(question_block, main_app, pics, project, code, curs)
nav.append(ul)
header_top.append(logo_img, h1)
header.append(header_top, nav)
body.append(header, main, footer)

