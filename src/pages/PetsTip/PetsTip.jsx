// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './PetsTip.css';

export function PetsTip() {
  return ( 
    <div className='PetsTip__container'>
      <div className='PetsTip__image_wrapper'>
        <img  className='PetsTip__image' src='/images/pets-tip/new_cat1.jpg'></img>
        <div className='PetsTip__icons_wrapper'>
          {/* <FontAwesomeIcon className='PetsTip__icon' icon={faHeart} /> */}
          <svg className='PetsTip__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
          <svg className='PetsTip__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M373.1 24.97C401.2-3.147 446.8-3.147 474.9 24.97L487 37.09C515.1 65.21 515.1 110.8 487 138.9L289.8 336.2C281.1 344.8 270.4 351.1 258.6 354.5L158.6 383.1C150.2 385.5 141.2 383.1 135 376.1C128.9 370.8 126.5 361.8 128.9 353.4L157.5 253.4C160.9 241.6 167.2 230.9 175.8 222.2L373.1 24.97zM440.1 58.91C431.6 49.54 416.4 49.54 407 58.91L377.9 88L424 134.1L453.1 104.1C462.5 95.6 462.5 80.4 453.1 71.03L440.1 58.91zM203.7 266.6L186.9 325.1L245.4 308.3C249.4 307.2 252.9 305.1 255.8 302.2L390.1 168L344 121.9L209.8 256.2C206.9 259.1 204.8 262.6 203.7 266.6zM200 64C213.3 64 224 74.75 224 88C224 101.3 213.3 112 200 112H88C65.91 112 48 129.9 48 152V424C48 446.1 65.91 464 88 464h260C382.1 464 400 446.1 400 424V312C400 298.7 410.7 288 424 288C437.3 288 448 298.7 448 312V424C448 472.6 408.6 512 360 512H88C39.4 512 0 472.6 0 424V152C0 103.4 39.4 64 88 64H200z"/></svg>
          <svg className='PetsTip__svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M272 304h-96C78.8 304 0 382.8 0 480c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32C448 382.8 369.2 304 272 304zM48.99 464C56.89 400.9 110.8 352 176 352h96c65.16 0 119.1 48.95 127 112H48.99zM224 256c70.69 0 128-57.31 128-128c0-70.69-57.31-128-128-128S96 57.31 96 128C96 198.7 153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80S144 172.1 144 128C144 83.89 179.9 48 224 48z"/></svg>
        </div>
      </div>
      <div className='PetsTip__content_wrapper'>
        <h1>Как отучить кошку драть мебель и обои</h1>
        <p>Царапание мебели – вовсе не прихоть и не желание кота насолить хозяину. Это – одна из физиологических потребностей кошек, генетически заложенная нужда. Эта потребность руководит не только домашними «мурзиками», но и дикими представителями семейства кошачьих. Только царапают они не диваны, а деревья.</p>
        <p>Почему кошачьи питают страсть к мягкой мебели?</p>
        <br/>
        <p>Прежде чем разобраться, как отучить кошку драть мебель, нужно обосновать для себя подобное поведение питомца. Животное неравнодушно к мягкой мебели и обоям, поскольку:</p>
        <ul>
          <li>Следует инстинктам. Когти – главная защита кошачьих в дикой природе. Для охоты и выживания им необходимо отточить навыки выпускания когтей. Сейчас Барсик уже не добывает себе пищу самостоятельно, но тысячи лет эволюции забыть непросто.</li>
          <li>Точит когти. Люди пилят ногти пилочкой, собаки подтачивают когти во время бега по твердой поверхности, а кошке, чтобы привести коготки в порядок, необходимо как можно глубже вонзить их в твердую поверхность и с усилием по ней провести. На обивке остаются отмершие чешуйки когтей, а на их месте формируются новые.</li>
          <li>Потягивается. Вы наверняка замечали, как мурлыка элегантно прогибает спинку и растягивается. В этом время он любит перебирать лапками, портя обивку.</li>
          <li>Снимает напряжение. Иногда кошка убивает обивку дивана особо тщательно. Она вымещает таким образом агрессию, когда сердита или расстроена.</li>
          <li>Метит территорию. У кошачьих у основания лап размещены ароматизирующие подушечки. Во время царапания питомец отмечает предмет своим индивидуальным запахом.</li>
        </ul>
        <br/>
        <p>Когда мы определились, что пушистику жизненно важно точить когти, следует рассмотреть, как отучить кошку драть мебель и обои.</p>
        <h2>Когтеточки</h2>
        <p>Существует немало способов, как отучить кошку драть обои и мебель. Популярнейший из них – когтеточка – специальный предмет для чесания когтей. Они бывают горизонтальными и вертикальными, напольными и настенными, в виде дощечек и столбиков. Объединяет их мягкая поверхность – ее обшивают плотной тканью или обматывают толстой веревкой.</p>
        <p>Проще всего приучить к когтеточке котенка. Поставьте ее на видном месте, поднесите кроху и проведите несколько раз лапками по ее поверхности. Каждый раз, когда мурлыка будет использовать предмет по назначению, хвалите его, давайте лакомство.</p>
        <p>Чтобы не думать, как отучить кошку драть обои, ставьте когтеточку в проходном месте: возле спального ложа, в игровой зоне, рядом с диваном. В большую квартиру следует приобрести несколько когтеточек.</p>
        <h2>Спреи</h2>
        <p>Специальные распылители, которые при нанесении на поверхность источают неприятные для кошек запахи. Но они быстро выветриваются – их необходимо наносить каждые 2-3 часа.</p>
        <h2>Подстригание ногтей</h2>
        <p>Универсальный способ для всех пород, если вы не знаете, как отучить кота драть мебель. Каждые 2 недели необходимо остригать 1/3 когтя специальными ножницами (маникюрные не подойдут). Делать это следует под определенным углом и на определенную длину.</p>
        <h2>Антицарапки</h2>
        <p>Это специальные колпачки на коготочки, изготовленные из винила. При помощи клея они крепятся на когти кота, позволяя ему реализовывать себя и при этом не портить интерьер. Как отучить кошку драть мебель? Расслабленному мурлыке при помощи клея нужно поочередно надеть все антицарапки. Каждые 10-14 дней колпачки будут спадать, и их необходимо подклеивать. Поначалу животное постарается избавиться от «маникюра», но вскоре привыкнет. На рынке представлены антицарапки разного размера в зависимости от длины когтей питомца (S, M, L). Желательно приобрести сразу несколько размеров.</p>
        <h2>Удаление когтей</h2>
        <p>Не зная, как отучить кота драть диван, некоторые владельцы решаются на негуманные меры. Онихэктомия – радикальная хирургическая процедура по удалению когтей у кошачьих. Животное перестает царапать мебель, но становится инвалидом. Нарушается координация движений и осанка, питомец больше не сможет грациозно прыгать и будет срываться вниз.</p>
        <h2>Важные моменты</h2>
        <p>Приобретая когтеточку, капните на нее несколько капель валерьянки или пустырника (они привлекают котов). Когтеточка должна:</p>
        <ul>
          <li>соответствовать росту любимца;</li>
          <li>быть надежно закрепленной и выдерживать давление со стороны животного;</li>
          <li>быть средней степени жесткости и шероховатости.</li>
        </ul>
        <br/>
        <p>Выбрав спрей, следите, чтобы он не вызвал у мурлыки аллергию. Подстригание когтей лучше поначалу доверить ветеринару. Если остричь коготь слишком сильно, можно повредить близкорасположенные сосуды, занести инфекцию, или как минимум доставить питомцу болезненные ощущения.</p>
        <br/>
        <p>Не зная, как отучить кошку мебель царапать, не забывайте использовать традиционные методы:</p>
        <ul>
          <li>резко и громко проговаривайте «нет» или «нельзя»;</li>
          <li>слегка брызнете в питомца водой из пульверизатора (это не повредит, но животному будет неприятно);</li>
          <li>используйте запахи. Кошачьи не любят запах цитрусовых, лука и уксуса. Разбавьте масло цитрусовых водой, и разбрызгайте жидкость на поврежденные места.</li>
        </ul>
      </div>
    </div>
   );
}